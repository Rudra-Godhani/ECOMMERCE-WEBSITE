import React from "react";
import HeroFirst from "../../section/Home/HeroFirst";
import Banner from "../../section/Home/Banner";
import Featured from "../../section/Home/Featured";
import HeroSecond from "../../section/Home/HeroSecond";
import AdBanner from "../../section/Home/AdBanner";
import FeaturedPost from "../../section/Home/FeaturedPost";
import { Box, Button, Typography } from "@mui/material";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const Home: React.FC = () => {

    const { loading, products, error } = useSelector(
        (state: RootState) => state.product
    );

    if (!loading && error) {
        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "50vh",
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h5"
                    fontWeight="700"
                    color="error"
                    sx={{ mb: 2 }}
                >
                    Failed to load products. Please check your connection or try
                    again.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => window.location.reload()}
                >
                    Refresh
                </Button>
            </Box>
        );
    }

    if (!loading && !error && products?.length === 0) {
        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "50vh",
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h2"
                    fontWeight="700"
                    color="textSecondary"
                    sx={{ mb: 2 }}
                >
                    No products available at the moment.
                </Typography>
            </Box>
        );
    }

    return (
        <>
            <HeroFirst />
            <Banner />
            <Featured/>
            <HeroSecond />
            <AdBanner/>
            <FeaturedPost />
        </>
    );
};

export default Home;
