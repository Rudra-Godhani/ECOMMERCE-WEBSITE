import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Skeleton,
    Slider,
    Stack,
    Typography,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
    clearAllProductErrorsAndMessages,
    getFilteredProducts,
} from "../../store/Slices/productSlice";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import { getAllCategories } from "../../store/Slices/categorySlice";
import { getAllBrands } from "../../store/Slices/brandSlice";

interface FiltersProps {
    selectedSort: string;
    sortBy: Map<string, string>;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    searchText: string;
    setSearchText: (search: string) => void;
    selectedBrand: string[];
    setSelectedBrand: (brand: string[]) => void;
    minPrice: number;
    setMinPrice: (minPrice: number) => void;
    maxPrice: number;
    setMaxPrice: (maxPrice: number) => void;
    value: number[];
    setValue: (value: number[]) => void;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const Filters: React.FC<FiltersProps> = ({
    sortBy,
    selectedSort,
    selectedCategory,
    setSelectedCategory,
    searchText,
    selectedBrand,
    setSelectedBrand,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    value,
    setValue,
    currentPage,
    setCurrentPage,
}) => {
    const dispatch = useDispatch<AppDispatch>();

    const { filteredProducts, error, message } = useSelector(
        (state: RootState) => state.product
    );

    const { loading: categoryLoading, categories } = useSelector(
        (state: RootState) => state.category
    );
    const { loading: brandLoading, brands } = useSelector(
        (state: RootState) => state.brands
    );

    const [searchParams, setSearchParams] = useSearchParams();

    let categoriesData = categories;
    if (searchParams.get("q") && filteredProducts.length > 0) {
        let uniqueCategoryIds = new Set(
            filteredProducts.map((item) => item.category.id)
        );
        categoriesData = categories.filter((item) =>
            uniqueCategoryIds.has(item.id)
        );
    } else {
        categoriesData = categories;
    }

    let brandsData = brands;
    if (searchParams.get("q") && filteredProducts.length > 0) {
        let uniqueBrandIds = new Set(
            filteredProducts.map((item) => item.brand.id)
        );
        brandsData = brands.filter((brand) => uniqueBrandIds.has(brand.id));

        if (selectedCategory !== "") {
            brandsData = brandsData.filter((brand) =>
                brand.categories.some(
                    (category) => category.name === selectedCategory
                )
            );
        }
    } else if (selectedCategory !== "") {
        brandsData = brands.filter((brand) =>
            brand.categories.some(
                (category) => category.name === selectedCategory
            )
        );
    } else {
        brandsData = brands;
    }

    useEffect(() => {
        setValue([minPrice, maxPrice]);
        setCurrentPage(1);
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
        setSelectedBrand([]);
    }, [selectedCategory]);

    const filterData = {
        category: selectedCategory,
        brand: selectedBrand.join(","),
        minprice: minPrice,
        maxprice: maxPrice,
        sortby: sortBy.get(selectedSort) || "popularity_high_to_low",
        search: searchText,
        page: currentPage,
        limit: 9,
    };
    
    useEffect(() => {
        const queryParams = new URLSearchParams(searchParams);
        queryParams.set("minprice", filterData.minprice.toString());
        queryParams.set("maxprice", filterData.maxprice.toString());
        queryParams.set("sortby", filterData.sortby);
        if (filterData.category) {
            queryParams.set("category", filterData.category);
        } else {
            queryParams.delete("category");
        }
        if (filterData.brand) {
            queryParams.set("brand", filterData.brand);
        } else {
            queryParams.delete("brand");
        }
        if (filterData.search) {
            queryParams.set("q", filterData.search);
        }
        if (!searchText) {
            queryParams.delete("q");
        }
        const fetchProducts = () => {
            setSearchParams(queryParams);
            dispatch(getFilteredProducts(filterData));
        };

        const isPriceChange = [minPrice, maxPrice].some(
            (value) => value !== 0 && value !== 500000
        );

        if (isPriceChange) {
            const debouncedFetch = debounce(fetchProducts, 500);
            debouncedFetch();
            return () => debouncedFetch.cancel();
        } else {
            fetchProducts();
        }
    }, [
        dispatch,
        selectedCategory,
        selectedBrand,
        minPrice,
        maxPrice,
        selectedSort,
        currentPage,
    ]);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, selectedBrand]);

    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getAllBrands());
    }, [dispatch]);

    useEffect(() => {
        dispatch(clearAllProductErrorsAndMessages());
    }, [dispatch, error, message]);

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
                        {categoryLoading
                            ? [...Array(8)].map((_, index) => (
                                  <Skeleton
                                      key={index}
                                      variant="text"
                                      width={140}
                                      height={24}
                                  />
                              ))
                            : categoriesData.map((category) => (
                                  <Box
                                      key={category.id}
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
                                                  selectedCategory ===
                                                  category.name
                                                      ? "700"
                                                      : "400",
                                          }}
                                          onClick={() =>
                                              setSelectedCategory(category.name)
                                          }
                                      >
                                          {category.name}
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
                        max={500000}
                        disableSwap
                    />
                    <Stack direction="row" justifyContent="space-between">
                        <Typography
                            variant="body1"
                            fontWeight="500"
                            color="#000000"
                        >
                            ₹{value[0]}
                        </Typography>
                        <Typography
                            variant="body1"
                            fontWeight="500"
                            color="#000000"
                        >
                            ₹{value[1]}
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
                        {brandLoading ? (
                            [...Array(15)].map((_, index) => (
                                <Stack
                                    key={index}
                                    direction={"row"}
                                    alignItems={"center"}
                                    gap={2}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        width={20}
                                        height={20}
                                        sx={{ mb: "12px" }}
                                    />
                                    <Skeleton
                                        key={index}
                                        variant="text"
                                        width={120}
                                        height={24}
                                        sx={{ mb: "12px" }}
                                    />
                                </Stack>
                            ))
                        ) : (
                            <>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={selectedBrand.length === 0}
                                            onChange={handleAllBrandsChange}
                                        />
                                    }
                                    label={
                                        <Typography
                                            variant="h6"
                                            color="#000000"
                                        >
                                            All
                                        </Typography>
                                    }
                                />
                                {brandsData.map((brand) => (
                                    <FormControlLabel
                                        key={brand.id}
                                        control={
                                            <Checkbox
                                                checked={selectedBrand.includes(
                                                    brand.name
                                                )}
                                                onChange={() =>
                                                    handleBrandChange(
                                                        brand.name
                                                    )
                                                }
                                            />
                                        }
                                        label={
                                            <Typography
                                                variant="h6"
                                                color="#000000"
                                            >
                                                {brand.name}
                                            </Typography>
                                        }
                                    />
                                ))}
                            </>
                        )}
                    </FormGroup>
                </Stack>
            </Box>
        </Box>
    );
};

export default Filters;
