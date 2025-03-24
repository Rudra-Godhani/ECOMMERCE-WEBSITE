import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Slider,
    Stack,
    Typography,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import React, { useEffect, useState } from "react";
import { brands, categories } from "../../data/allProductsData";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { getFilteredProducts, getSearchedProducts } from "../../store/Slices/productSlice";
import { useLocation, useSearchParams } from "react-router-dom";
import { debounce } from "lodash";

interface FiltersProps {
    selectedSort: string;
    sortBy: Map<string, string>;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
    sortBy,
    selectedSort,
    selectedCategory,
    setSelectedCategory,
}) => {
    const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(5000);
    const [value, setValue] = useState<number[]>([minPrice, maxPrice]);
    const dispatch = useDispatch<AppDispatch>();

    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const { searchText } = location.state || {};

    console.log("searchText: ", searchText);
    searchParams.set("q", searchText);
    useEffect(() => {
        dispatch(getSearchedProducts(searchText));
    },[dispatch,searchText]);

    useEffect(() => {
        setValue([minPrice, maxPrice]);
    }, [minPrice, maxPrice]);

    const handleChange = (
        _: Event,
        newValue: number | number[],
        __: number
    ) => {
        if (Array.isArray(newValue)) {
            setValue(newValue);
            setMinPrice(newValue[0]);
            setMaxPrice(newValue[1]);
        }
    };

    const handleBrandChange = (brand: string) => {
        let updatedBrands;

        if (selectedBrand.includes(brand)) {
            updatedBrands = selectedBrand.filter((b) => b !== brand);
        } else {
            updatedBrands = [...selectedBrand, brand];
        }
        setSelectedBrand(updatedBrands);
    };

    const handleAllBrandsChange = () => {
        setSelectedBrand([]);
    };

    useEffect(() => {
        const filterData = {
            category: selectedCategory,
            brand: selectedBrand.join(","),
            minprice: minPrice,
            maxprice: maxPrice,
            sortby: sortBy.get(selectedSort) || "popularity_high_to_low",
        };
        const queryParams: { [key: string]: string } = {
            minprice: filterData.minprice.toString(),
            maxprice: filterData.maxprice.toString(),
            sortby: filterData.sortby,
        };
        if (filterData.category) {
            queryParams.category = filterData.category;
        }
        if (filterData.brand) {
            queryParams.brand = filterData.brand;
        }
        const fetchProducts = () => {
            setSearchParams(queryParams);
            dispatch(getFilteredProducts(filterData));
        };

        const isPriceChange = [minPrice, maxPrice].some(
            (value) => value !== 0 && value !== 5000
        );

        if (isPriceChange) {
            console.log(
                "------------------------- debounce called: -----------------------------"
            );
            const debouncedFetch = debounce(fetchProducts, 500);
            debouncedFetch();
            return () => debouncedFetch.cancel();
        } else {
            console.log(
                "-------------------------------- without debounce called: ----------------------------------"
            );
            fetchProducts();
        }
    }, [
        dispatch,
        selectedCategory,
        selectedBrand,
        minPrice,
        maxPrice,
        selectedSort,
    ]);

    return (
        <Box px="20px">
            <Typography
                variant="h3"
                fontWeight={"700"}
                color="#000000"
                pb="20px"
            >
                Filter by
            </Typography>
            <Box>
                <Stack>
                    <Stack pb="12px" direction={"row"} marginLeft={"-8px"}>
                        <KeyboardArrowLeftIcon />
                        <Box
                            sx={{ cursor: "pointer" }}
                            onClick={() => setSelectedCategory("")}
                        >
                            <Typography
                                variant="h6"
                                fontWeight="700"
                                color="#000000"
                            >
                                All Categories
                            </Typography>
                        </Box>
                    </Stack>
                    <Box display={"flex"} flexDirection={"column"} gap="12px">
                        {categories.map((category, index) => (
                            <Box
                                key={index}
                                sx={{
                                    cursor: "pointer",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    color="#000000"
                                    sx={{
                                        "&:hover": {
                                            fontWeight: "700",
                                        },
                                        fontWeight:
                                            selectedCategory === category
                                                ? "700"
                                                : "400",
                                    }}
                                    onClick={() =>
                                        setSelectedCategory(category)
                                    }
                                >
                                    {category}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Stack>
            </Box>
            <Box>
                <Stack>
                    <Typography
                        variant="h6"
                        fontWeight={"700"}
                        color="#000000"
                        pt={"30px"}
                        pb={"12px"}
                    >
                        Price
                    </Typography>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={5000}
                        disableSwap
                    />
                    <Stack direction="row" justifyContent="space-between">
                        <Typography
                            variant="body1"
                            fontWeight="500"
                            color="#000000"
                        >
                            ${value[0]}
                        </Typography>
                        <Typography
                            variant="body1"
                            fontWeight="500"
                            color="#000000"
                        >
                            ${value[1]}
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
            <Box>
                <Stack>
                    <Typography
                        variant="h6"
                        fontWeight={"700"}
                        color="#000000"
                        pt={"30px"}
                        pb={"12px"}
                    >
                        Brands
                    </Typography>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={selectedBrand.length === 0}
                                    onChange={handleAllBrandsChange}
                                />
                            }
                            label={
                                <Typography variant="h6" color="#000000">
                                    All
                                </Typography>
                            }
                        />
                        {brands.map((brand, index) => (
                            <FormControlLabel
                                key={index}
                                control={
                                    <Checkbox
                                        checked={selectedBrand.includes(brand)}
                                        onChange={() =>
                                            handleBrandChange(brand)
                                        }
                                    />
                                }
                                label={
                                    <Typography variant="h6" color="#000000">
                                        {brand}
                                    </Typography>
                                }
                            />
                        ))}
                    </FormGroup>
                </Stack>
            </Box>
        </Box>
    );
};

export default Filters;
