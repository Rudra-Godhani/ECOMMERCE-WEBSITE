import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

interface SearchBarProps {
    searchText: string;
    setSearchText: (search: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ searchText, setSearchText }) => {
    const handleClear = () => setSearchText("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(searchText);
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
                        mt: "10px",
                        backgroundColor: "#F9F9F9",
                        borderRadius: "8px",
                    }}
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton>
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
