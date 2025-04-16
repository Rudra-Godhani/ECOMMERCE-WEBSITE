import {
    Box,
    Button,
    Card,
    Drawer,
    List,
    Menu,
    MenuItem,
    Skeleton,
    Stack,
    Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useEffect, useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import Filters from "./Filters";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link, useSearchParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import SearchBar from "../../components/SearchBar";

interface FilteredProductsProps {
    selectedSort: string;
    setSelectedSort: (sortby: string) => void;
    sortOptions: string[];
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
    current_Page: number;
    setCurrentPage: (page: number) => void;
}
const FilteredProducts: React.FC<FilteredProductsProps> = ({
    selectedSort,
    setSelectedSort,
    sortOptions,
    sortBy,
    selectedCategory,
    setSelectedCategory,
    searchText,
    setSearchText,
    selectedBrand,
    setSelectedBrand,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    value,
    setValue,
    current_Page,
    setCurrentPage,
}) => {
    const {
        products,
        filteredProducts,
        isFiltered,
        filteredLoading,
        totalPages,
        currentPage,
    } = useSelector((state: RootState) => state.product);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [searchQuery] = useSearchParams();
    const topRef = React.useRef<HTMLDivElement>(null);

    const activeProducts = isFiltered ? filteredProducts : products;

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (option?: string) => {
        setAnchorEl(null);
        if (option) {
            setSelectedSort(option);
            handlePageChange(1);
        }
    };

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        if (topRef.current) {
            topRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (topRef.current) {
            topRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [currentPage]);

    return (
        <Box sx={{ px: "20px" }} ref={topRef}>
            <Stack
                sx={{ flexDirection: "row" }}
                justifyContent={"space-between"}
            >
                <Stack sx={{ display: { xs: "none", md: "block" } }}>
                    <Typography variant="h3" color="secondary">
                        {!selectedCategory
                            ? "All Categories"
                            : selectedCategory}
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
                                minWidth: "180px",
                            },
                        }}
                    >
                        {sortOptions.map((option) => (
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
                <Filters
                    selectedSort={selectedSort}
                    sortBy={sortBy}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    selectedBrand={selectedBrand}
                    setSelectedBrand={setSelectedBrand}
                    minPrice={minPrice}
                    setMinPrice={setMinPrice}
                    maxPrice={maxPrice}
                    setMaxPrice={setMaxPrice}
                    value={value}
                    setValue={setValue}
                    currentPage={current_Page}
                    setCurrentPage={setCurrentPage}
                />
            </Drawer>

            <SearchBar
                searchText={searchText}
                setSelectedSort={setSelectedSort}
                setSelectedCategory={setSelectedCategory}
                setSearchText={setSearchText}
                setSelectedBrand={setSelectedBrand}
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                setValue={setValue}
                currentPage={currentPage}
            />

            {searchQuery.get("q") && (
                <Stack direction={"row"} gap={"3px"}>
                    <Typography variant="h5" color="gray" sx={{ pt: "10px" }}>
                        Search Results for:
                    </Typography>
                    <Typography variant="h5" sx={{ pt: "10px" }}>
                        {searchQuery.get("q")}
                    </Typography>
                </Stack>
            )}

            <Box sx={{ pt: "40px", minHeight: "150vh" }}>
                {filteredLoading ? (
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
                        {Array.from(new Array(9)).map((_, index) => (
                            <Card
                                key={index}
                                sx={{
                                    width: "100%",
                                    margin: "0 auto",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                <Skeleton
                                    variant="rectangular"
                                    width="100%"
                                    height={250}
                                    animation="wave"
                                />
                                <Stack
                                    sx={{
                                        textAlign: "center",
                                        pt: "25px",
                                        pb: "35px",
                                        px: "10px",
                                    }}
                                    spacing={1.25}
                                >
                                    <Stack
                                        justifyContent={"center"}
                                        alignItems={"center"}
                                    >
                                        <Skeleton
                                            variant="text"
                                            width="60%"
                                            height={30}
                                        />
                                        <Skeleton
                                            variant="text"
                                            width="80%"
                                            height={20}
                                        />
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        spacing={0.75}
                                        justifyContent="center"
                                    >
                                        <Skeleton
                                            variant="text"
                                            width="60px"
                                            height={30}
                                        />
                                        <Skeleton
                                            variant="text"
                                            width="60px"
                                            height={30}
                                        />
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        spacing={0.75}
                                        justifyContent="center"
                                    >
                                        {Array.from(new Array(3)).map(
                                            (_, i) => (
                                                <Skeleton
                                                    key={i}
                                                    variant="circular"
                                                    width={25}
                                                    height={25}
                                                />
                                            )
                                        )}
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        spacing={0.75}
                                        justifyContent="center"
                                    >
                                        <Skeleton
                                            variant="circular"
                                            width={20}
                                            height={20}
                                        />
                                        <Skeleton
                                            variant="text"
                                            width="30px"
                                            height={20}
                                        />
                                    </Stack>
                                </Stack>
                            </Card>
                        ))}
                    </Box>
                ) : (
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
                        {isFiltered && activeProducts.length === 0 && (
                            <Box
                                sx={{
                                    textAlign: "center",
                                    pt: "40px",
                                    alignItems: "center",
                                }}
                            >
                                {searchQuery.get("q") ? (
                                    <Stack gap={2}>
                                        <Typography variant="h2">
                                            Sorry, no results found!
                                        </Typography>
                                        <Typography variant="h4" color="gray">
                                            Please check the spelling or try
                                            searching for something else
                                        </Typography>
                                    </Stack>
                                ) : (
                                    <Typography variant="h2">
                                        No Products Found with Given Filters.
                                    </Typography>
                                )}
                            </Box>
                        )}
                        {activeProducts.length > 0 &&
                            activeProducts.map((item) => (
                                <Link
                                    key={item.id}
                                    to={`/product/${item.id}/detail`}
                                >
                                    <Card
                                        sx={{
                                            width: "100%",
                                            margin: "0 auto",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                transform: "scale(1.02)",
                                                boxShadow:
                                                    "0px 8px 20px rgba(0,0,0,0.2)",
                                            },
                                        }}
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
                                                    height: "250px",
                                                }}
                                            />
                                        </Box>
                                        <Stack
                                            sx={{
                                                textAlign: "center",
                                                pt: "25px",
                                                pb: "35px",
                                                px: "10px",
                                            }}
                                            spacing={1.25}
                                        >
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
                                                    sx={{
                                                        textDecoration:
                                                            "line-through",
                                                    }}
                                                >
                                                    ₹{item.price.toFixed(2)}
                                                </Typography>
                                                <Typography
                                                    variant="h5"
                                                    color="darkGreen"
                                                    fontWeight={"700"}
                                                    fontSize={"16px"}
                                                >
                                                    ₹{item.retailPrice.toFixed(2)}
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
                                                {item.colors.map(
                                                    (color, index) => (
                                                        <Box
                                                            key={index}
                                                            width={"25px"}
                                                            height={"25px"}
                                                            sx={{
                                                                backgroundColor:
                                                                    color,
                                                                borderRadius:
                                                                    "50%",
                                                                border: "2px solid rgb(184, 180, 180)",
                                                            }}
                                                        ></Box>
                                                    )
                                                )}
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
                                                <Typography>
                                                    {item.rating}
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Card>
                                </Link>
                            ))}
                    </Box>
                )}
            </Box>

            {totalPages > 1 && (
                <List
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        pt: "30px",
                        gap: { xs: "2px", sm: "4px", md: "6px" },
                        flexWrap: "wrap",
                    }}
                >
                    <Button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        sx={{
                            color: "#23A6F0",
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
                        Prev
                    </Button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <Button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            sx={{
                                fontWeight:
                                    currentPage === index + 1
                                        ? "bold"
                                        : "normal",
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
                                fontSize: {
                                    xs: "10px",
                                    sm: "12px",
                                    md: "14px",
                                },
                                minWidth: "auto",
                            }}
                        >
                            {index + 1}
                        </Button>
                    ))}

                    <Button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        sx={{
                            color: "#23A6F0",
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
                        Next
                    </Button>
                </List>
            )}
        </Box>
    );
};

export default FilteredProducts;
