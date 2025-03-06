import {
    Box,
    Button,
    Drawer,
    List,
    Menu,
    MenuItem,
    Stack,
    Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useEffect, useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import Filters from "./Filters";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";
import { Product } from "../../Data";
import StarIcon from "@mui/icons-material/Star";

const ITEMS_PER_PAGE = 9;
const FilteredProducts: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedSort, setSelectedSort] = useState<string>("Popularity");

    const open = Boolean(anchorEl);
    const filteredProductsData = useSelector(
        (state: RootState) => state.filter.filteredProducts
    );
    const sortedProducts = [...filteredProductsData];
    const totalPages = Math.ceil(filteredProductsData.length / ITEMS_PER_PAGE);
    if (selectedSort === "Popularity") {
        sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === "Price: Low to High") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "Price: High to Low") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    const currentProducts = sortedProducts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const topRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (topRef.current) {
            topRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [currentPage]);

    const handleClose = (option?: string) => {
        setAnchorEl(null);
        if (option) {
            setSelectedSort(option);
        }
    };
    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    return (
        <Box sx={{ px: "20px" }} ref={topRef}>
            <Stack
                sx={{ flexDirection: "row" }}
                justifyContent={"space-between"}
            >
                <Stack sx={{ display: { xs: "none", md: "block" } }}>
                    <Typography variant="h3" color="secondary">
                        Mens's Clothing
                    </Typography>
                    <Typography variant="h6" color="gray">
                        Seo text will be here
                    </Typography>
                </Stack>
                <Stack
                    sx={{
                        flexDirection: "row",
                        width: { xs: "100%", md: "100%" },
                    }}
                    alignItems={"center"}
                    gap={"10px"}
                >
                    <Button
                        variant="outlined"
                        endIcon={<FilterListIcon />}
                        sx={{
                            backgroundColor: "#F9F9F9",
                            color: "#737373",
                            border: "1px solid #DDDDDD",
                            p: "11px 18px",
                            textTransform: "none",
                            display: { xs: "flex", md: "none" },
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "50%",
                        }}
                        onClick={toggleDrawer(true)}
                    >
                        Filter By
                    </Button>
                    <Button
                        id="demo-customized-button"
                        aria-controls={
                            open ? "demo-customized-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                            backgroundColor: "#F9F9F9",
                            color: "#737373",
                            border: "1px solid #DDDDDD",
                            p: "11px 18px",
                            textTransform: "none",
                            marginLeft: "auto",
                            width: "50%",
                            justifyContent: "space-between",
                        }}
                    >
                        Sort By
                    </Button>
                    <Menu
                        id="demo-customized-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={() => handleClose()}
                        MenuListProps={{
                            "aria-labelledby": "demo-customized-button",
                        }}
                        disableScrollLock
                        PaperProps={{
                            sx: {
                                width: anchorEl
                                    ? anchorEl.clientWidth * 0.5
                                    : "auto",
                                minWidth: "100px",
                            },
                        }}
                    >
                        {[
                            "Popularity",
                            "Price: Low to High",
                            "Price: High to Low",
                        ].map((option) => (
                            <MenuItem
                                key={option}
                                onClick={() => handleClose(option)}
                                disableRipple
                                sx={{
                                    width: "100%",
                                    backgroundColor:
                                        selectedSort === option
                                            ? "#f0f0f0"
                                            : "transparent",
                                    fontWeight:
                                        selectedSort === option
                                            ? "bold"
                                            : "normal",
                                }}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </Stack>
            </Stack>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: "80%",
                        maxWidth: "300px",
                        p: "20px",
                    },
                }}
            >
                <Filters />
            </Drawer>

            <Box sx={{ pt: "40px", minHeight: "150vh" }}>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(180px, 1fr))",
                        p: "0px 0px",
                        justifyContent: "center",
                        rowGap: "24px",
                        columnGap: "30px",
                    }}
                >
                    {currentProducts.length === 0 && (
                        <Box
                            sx={{
                                textAlign: "center",
                                pt: "40px",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="h2" sx={{}}>
                                No Products Found with Given Filters.
                            </Typography>
                        </Box>
                    )}
                    {currentProducts.length > 0 &&
                        currentProducts.map((item) => (
                            <Box
                                key={item.id}
                                sx={{ width: "100%", margin: "0 auto" }}
                            >
                                <Box
                                    sx={{
                                        p: "0px 0px ",
                                        width: "100%",
                                        height: "auto",
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        src={item.images[0]}
                                        alt={item.title}
                                        style={{
                                            objectFit: "cover",
                                            width: "100%",
                                            height: "300px",
                                        }}
                                    />
                                </Box>
                                <Stack
                                    sx={{
                                        textAlign: "center",
                                        pt: "25px",
                                        pb: "35px",
                                    }}
                                    spacing={1.25}
                                >
                                    <Link to={`/product/${item.id}/detail`}>
                                        <Typography
                                            variant="h5"
                                            color="secondary"
                                            fontWeight={"700"}
                                            fontSize={"16px"}
                                            textOverflow="ellipsis"
                                            whiteSpace="nowrap"
                                            overflow="hidden"
                                        >
                                            {item.title}
                                        </Typography>
                                    </Link>
                                    <Typography
                                        variant="h3"
                                        color="gray"
                                        fontWeight={"400"}
                                        fontSize={"14px"}
                                        textOverflow="ellipsis"
                                        whiteSpace="nowrap"
                                        overflow="hidden"
                                    >
                                        {item.descriptionSmall}
                                    </Typography>
                                    <Stack
                                        spacing={0.75}
                                        sx={{
                                            p: "5px 3px",
                                            textAlign: "center",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                        direction={"row"}
                                    >
                                        <Typography
                                            variant="h5"
                                            color="#BDBDBD"
                                            fontWeight={"700"}
                                            fontSize={"16px"}
                                        >
                                            ${item.price}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            color="darkGreen"
                                            fontWeight={"700"}
                                            fontSize={"16px"}
                                        >
                                            ${item.retailPrice}
                                        </Typography>
                                    </Stack>
                                    <Stack
                                        spacing={0.75}
                                        sx={{
                                            textAlign: "center",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                        direction={"row"}
                                    >
                                        {item.colors.map((color) => (
                                            <Box
                                                width={"16px"}
                                                height={"16px"}
                                                sx={{
                                                    backgroundColor: color,
                                                    borderRadius: "50%",
                                                }}
                                            ></Box>
                                        ))}
                                    </Stack>
                                    <Stack
                                        sx={{
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                        gap="5px"
                                        direction={"row"}
                                    >
                                        <StarIcon htmlColor="#FAAF00" />
                                        <Typography>{item.rating}</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        ))}
                </Box>
            </Box>

            <List
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    py: "20px",
                    gap: { xs: "2px", sm: "4px", md: "6px" },
                    flexWrap: "wrap",
                }}
            >
                {/* Previous Button */}
                <Button
                    onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    sx={{
                        color: "#23A6F0",
                        border: "1px solid #E9E9E9",
                        p: { xs: "5px 8px", sm: "8px 12px", md: "10px 15px" },
                        fontSize: { xs: "10px", sm: "12px", md: "14px" },
                        minWidth: "auto",
                    }}
                >
                    Prev
                </Button>

                {/* Page Numbers */}
                {new Array(totalPages).fill(0).map((_, index) => (
                    <Button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        sx={{
                            fontWeight:
                                currentPage === index + 1 ? "bold" : "normal",
                            color:
                                currentPage === index + 1
                                    ? "#FFFFFF"
                                    : "#23A6F0",
                            backgroundColor:
                                currentPage === index + 1
                                    ? "#23A6F0"
                                    : "#FFFFFF",
                            border: "1px solid #E9E9E9",
                            p: {
                                xs: "5px 8px",
                                sm: "8px 12px",
                                md: "10px 15px",
                            },
                            fontSize: { xs: "10px", sm: "12px", md: "14px" },
                            minWidth: "auto",
                        }}
                    >
                        {index + 1}
                    </Button>
                ))}

                {/* Next Button */}
                <Button
                    onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    sx={{
                        color: "#23A6F0",
                        border: "1px solid #E9E9E9",
                        p: { xs: "5px 8px", sm: "8px 12px", md: "10px 15px" },
                        fontSize: { xs: "10px", sm: "12px", md: "14px" },
                        minWidth: "auto",
                    }}
                >
                    Next
                </Button>
            </List>
        </Box>
    );
};

export default FilteredProducts;
