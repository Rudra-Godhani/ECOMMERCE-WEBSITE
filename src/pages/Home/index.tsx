import React from "react";
import HeroFirst from "../../section/Home/HeroFirst";
import Banner from "../../section/Home/Banner";
import Featured from "../../section/Home/Featured";
import HeroSecond from "../../section/Home/HeroSecond";
import AdBanner from "../../section/Home/AdBanner";
import FeaturedPost from "../../section/Home/FeaturedPost";
import { Box, Button, Stack, Typography } from "@mui/material";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { emptyBox, errorImage1 } from "../../assets";

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
                    height: {
                        xs: "90vh",
                        sm: "80vh",
                    },
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        direction: "row",
                        maxWidth: { xs: "250px", sm: "300px" },
                    }}
                >
                    <img
                        src={errorImage1}
                        alt="Error illustration"
                        style={{ marginBottom: "20px" }}
                    />
                </Box>
                <Typography variant="h3" fontWeight="700" sx={{ my: 2 }}>
                    Something went wrong. Please try again.
                </Typography>
                <Button
                    variant="contained"
                    sx={{ color: "white", backgroundColor: "#23A6F0" }}
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
                    height: {
                        xs: "90vh",
                        sm: "80vh",
                    },
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        direction: "row",
                        maxWidth: { xs: "300px", sm: "400px" },
                    }}
                >
                    <img
                        src={emptyBox}
                        alt="Error illustration"
                        style={{ marginBottom: "20px" }}
                    />
                </Box>
                <Stack>
                    <Typography variant="h3" fontWeight="700" sx={{ my: 2 }}>
                        No products available at the moment.
                    </Typography>
                    <Typography
                        variant="h4"
                        color="gray"
                        fontWeight="700"
                        sx={{ mb: 2 }}
                    >
                        Stay tuned for exciting new arrivals!
                    </Typography>
                </Stack>
            </Box>
        );
    }

    return (
        <>
            <HeroFirst />
            <Banner />
            <Featured />
            <HeroSecond />
            <AdBanner />
            <FeaturedPost />
        </>
    );
};

export default Home;
