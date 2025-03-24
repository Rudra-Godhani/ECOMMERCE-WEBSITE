import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import FilteredProducts from "./FilteredProducts";
import Filters from "./Filters";

interface ProductsProps {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}
const Products: React.FC<ProductsProps> = ({
    selectedCategory,
    setSelectedCategory,
}) => {
    const [selectedSort, setSelectedSort] = useState<string>(
        "Popularity: high to low"
    );

    const sortOptions = [
        "Popularity: high to low",
        "Popularity: low to high",
        "Price: High to Low",
        "Price: Low to High",
    ];

    const sortByMap = new Map([
        [sortOptions[0], "popularity_high_to_low"],
        [sortOptions[1], "popularity_low_to_high"],
        [sortOptions[2], "price_high_to_low"],
        [sortOptions[3], "price_low_to_high"],
    ]);

    console.log("products comp:");

    return (
        <Box sx={{ py: "48px" }} maxWidth={"1100px"} mx={"auto"}>
            <Grid container>
                <Grid
                    item
                    sx={{
                        flexBasis: "30%",
                        flexGrow: 0,
                        maxWidth: "30%",
                        display: { xs: "none", md: "block" },
                    }}
                >
                    <Filters selectedSort={selectedSort} sortBy={sortByMap} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                </Grid>
                <Grid
                    item
                    sx={{
                        flexBasis: { xs: "100%", md: "70%" },
                        flexGrow: 1,
                        maxWidth: { xs: "100%", md: "70%" },
                    }}
                >
                    <FilteredProducts
                        selectedSort={selectedSort}
                        setSelectedSort={setSelectedSort}
                        sortOptions={sortOptions}
                        sortBy={sortByMap}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Products;
