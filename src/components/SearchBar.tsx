import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { getFilteredProducts } from "../store/Slices/productSlice";

interface SearchBarProps {
    setSelectedSort: (sortby: string) => void;
    setSelectedCategory: (category: string) => void;
    searchText: string;
    setSearchText: (search: string) => void;
    setSelectedBrand: (brand: string[]) => void;
    minPrice: number;
    setMinPrice: (minPrice: number) => void;
    maxPrice: number;
    setMaxPrice: (maxPrice: number) => void;
    setValue: (value: number[]) => void;
    currentPage: number;
}
const SearchBar: React.FC<SearchBarProps> = ({
    setSelectedSort,
    setSelectedCategory,
    searchText,
    setSearchText,
    setSelectedBrand,
    setMinPrice,
    setMaxPrice,
}) => {
    const handleClear = () => setSearchText("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchText.trim()) return;
        console.log(searchText);
        setSelectedCategory("");
        setSelectedBrand([]);
        setMinPrice(0);
        setMaxPrice(5000);
        setSelectedSort("popularity_high_to_low");
        const filterData = {
            category: "",
            brand: [].join(","),
            minprice: 0,
            maxprice: 5000,
            sortby: "popularity_high_to_low",
            search: searchText,
            page: 1,
            limit: 9,
        };
        dispatch(getFilteredProducts(filterData));
    };
    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    placeholder="Search for Products, Brands and More"
                    name="searchText"
                    value={searchText}
                    onChange={handleChange}
                    sx={{
                        width: "100%",
                        mt: "20px",
                        backgroundColor: "#F9F9F9",
                        borderRadius: "8px",
                    }}
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton onClick={handleSubmit}>
                                    <SearchIcon htmlColor="#23A6F0" />
                                </IconButton>
                            </InputAdornment>
                        ),
                        endAdornment: searchText && (
                            <InputAdornment position="end">
                                <IconButton onClick={handleClear} size="small">
                                    <CloseIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                        style: {
                            fontSize: "17px",
                        },
                    }}
                />
            </form>
        </Box>
    );
};

export default SearchBar;
