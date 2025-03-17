import { Box, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
    isOpen: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ isOpen }) => {
    const [searchText, setSearchText] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("submitted searchText: ", searchText);
        setSearchText("");
    };

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
            }}
        >
            <Box
                maxWidth={"1050px"}
                mx={"auto"}
                sx={{
                    position: "absolute",
                    top: { xs: "10px", md: "10px" },
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100%",
                    maxWidth: "1200px",
                    zIndex: 1200,
                    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    maxHeight: isOpen ? "60px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 0.3s ease, opacity 0.3s ease",
                    borderRadius: "8px",
                    backgroundColor: "#ffffff",
                }}
            >
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        placeholder="Search for Products"
                        size="small"
                        name="searchText"
                        type="search"
                        value={searchText}
                        onChange={handleChange}
                        sx={{
                            bgcolor: "#f9f9f9",
                            "& .MuiOutlinedInput-root": {
                                pl: "10px",
                                py: "5px",
                                fontSize: "15px",
                                borderRadius: "8px",
                                px: "20px",
                                borderColor: "#4CAF50",
                                "&:hover fieldset": {
                                    borderColor: "#000000",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#23A6F0",
                                },
                            },
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon
                                        fontSize="medium"
                                        htmlColor="#23A6F0"
                                    />
                                </InputAdornment>
                            ),
                        }}
                        fullWidth
                    />
                </form>
            </Box>
        </Box>
    );
};

export default SearchBar;
