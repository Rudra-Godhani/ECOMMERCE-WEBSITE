import { Box, Checkbox, FormControlLabel, FormGroup, Slider, Stack, Typography } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import React, { useState } from 'react'
import { brands,categories } from '../../data/allProductsData';
import { useDispatch, useSelector } from 'react-redux';
import { filterAll, filterByBrands, filterByCategory, filterByPrice, resetFilter } from '../../store/Slices/FilterSlice';
import { RootState } from '../../store/store';

const Filters: React.FC = () => {
    const dispatch = useDispatch();
    const handleFilterByCategory = (category: string) => {
        console.log("category:", category);
        dispatch(filterByCategory({ category }));
    }

    const minPrice = useSelector((state: RootState) => state.filter.minPrice);
    const maxPrice = useSelector((state: RootState) => state.filter.maxPrice);
    const [value, setValue] = React.useState<number[]>([minPrice, maxPrice]);

    const handleChange = (_event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setValue(newValue);
            dispatch(filterByPrice({ minPrice: newValue[0], maxPrice: newValue[1] }));
        }
    };

    const selectedBrands = useSelector((state: RootState) => state.filter.selectedBrands);
    const selectedCategory = useSelector((state: RootState) => state.filter.selectedCategory);
    const [checkedBrands, setCheckedBrands] = useState<string[]>(selectedBrands);

    const isAllChecked = checkedBrands.length === 0; // If no brands selected, treat as "All"

    // 🔹 Handle "All Brands" checkbox click
    const handleAllChange = () => {
        setCheckedBrands([]);
        dispatch(filterAll()); // Show all products or all products within category
    };

    // 🔹 Handle individual brand checkbox click
    const handleBrandChange = (brand: string) => {
        let updatedBrands;

        if (checkedBrands.includes(brand)) {
            // If brand is already checked, remove it
            updatedBrands = checkedBrands.filter((b) => b !== brand);
        } else {
            // Otherwise, add the brand
            updatedBrands = [...checkedBrands, brand];
        }

        setCheckedBrands(updatedBrands);
        dispatch(filterByBrands({ brands: updatedBrands }));
    };


    return (
        <Box px="20px">
            <Typography variant='h3' fontWeight={"700"} color='#000000' pb="20px">Filter by</Typography>
            <Box>
                <Stack>
                    <Stack pb="12px" direction={"row"} marginLeft={"-8px"}>
                        <KeyboardArrowLeftIcon />
                        <Box onClick={() => { dispatch(resetFilter()) }} sx={{ cursor: "pointer" }}>
                            <Typography variant='h6' fontWeight="700" color='#000000'>All Categories</Typography>
                        </Box>
                    </Stack>
                    <Box display={"flex"} flexDirection={"column"} gap="12px">
                        {
                            categories.map((category, index) => (
                                <Box key={index} sx={{
                                    cursor: "pointer",
                                }}
                                >
                                    <Typography variant='h6' color='#000000' sx={{
                                        "&:hover": {
                                            fontWeight: "700"
                                        },
                                        fontWeight: selectedCategory === category ? "700" : "400"
                                    }} onClick={() => handleFilterByCategory(category)} >{category}</Typography>
                                </Box>
                            ))
                        }
                    </Box>
                </Stack>
            </Box>
            <Box>
                <Stack>
                    <Typography variant='h6' fontWeight={"700"} color='#000000' pt={"30px"} pb={"12px"}>Price</Typography>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        min={10}
                        max={5000}
                        disableSwap
                    />
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body1" fontWeight="500" color="#000000">
                            ${value[0]}
                        </Typography>
                        <Typography variant="body1" fontWeight="500" color="#000000">
                            ${value[1]}
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
            <Box>
                <Stack>
                    <Typography variant='h6' fontWeight={"700"} color='#000000' pt={"30px"} pb={"12px"}>Brands</Typography>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                checked={isAllChecked} onChange={handleAllChange}
                                />
                            }
                            label={<Typography variant="h6" color="#000000">All</Typography>}
                        />
                        {
                            brands.map((brand, index) => (
                                <FormControlLabel
                                    key={index}
                                    control={<Checkbox
                                        checked={checkedBrands.includes(brand)}
                                        onChange={() => handleBrandChange(brand)}
                                    />}
                                    label={<Typography variant='h6' color="#000000">
                                        {brand}
                                    </Typography>}
                                />
                            ))
                        }

                    </FormGroup>
                </Stack>
            </Box>
        </Box >
    )
}

export default Filters
