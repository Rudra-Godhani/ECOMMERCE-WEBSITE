import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { productsData } from "../../data/allProductsData";

const BestSellerProducts: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: "#FAFAFA" }}>
            <Stack
                maxWidth={"1050px"}
                mx={"auto"}
                pt="48px"
                sx={{
                    justifyContent: { xs: "center", sm: "start" },
                    alignItems: { xs: "center", sm: "start" },
                }}
            >
                <Typography
                    variant="h3"
                    color="secondary"
                    sx={{ fontSize: { xs: "22px", sm: "24px" } }}
                >
                    BESTSELLER PRODUCTS
                </Typography>
                <hr
                    color="#ECECEC"
                    style={{ marginTop: "24px", width: "100%", height: "2px" }}
                />
            </Stack>
            <Box maxWidth={"1050px"} mx="auto">
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(230px, 1fr))",
                        p: "0px 0px",
                        justifyContent: "center",
                        rowGap: "24px",
                        columnGap: "30px",
                        padding: {
                            xs: "24px 30px 48px 30px",
                            sm: "24px 30px 48px 30px",
                            md: "24px 30px 48px 30px",
                            lg: "24px 0px 48px 0px",
                        },
                    }}
                >
                    {productsData.slice(41).map((item) => (
                        <Card
                            key={item.id}
                            sx={{
                                width: "100%",
                                margin: "0 auto",
                                backgroundColor: "#FFFFFF",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.02)",
                                    boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
                                },
                            }}
                        >
                            <Link to={`/product/${item.id}/detail`}>
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
                            </Link>
                            <Stack
                                sx={{ p: "25px", pb: "35px" }}
                                spacing={1.25}
                            >
                                <Link to={`/product/${item.id}/detail`}>
                                    <Typography
                                        variant="h5"
                                        color="secondary"
                                        fontWeight={"700"}
                                        fontSize={"16px"}
                                    >
                                        {item.title}
                                    </Typography>
                                </Link>
                                <Typography
                                    variant="h3"
                                    color="gray"
                                    fontWeight={"400"}
                                    fontSize={"14px"}
                                >
                                    {item.descriptionSmall}
                                </Typography>
                                <Stack
                                    spacing={0.75}
                                    sx={{
                                        p: "5px 3px",
                                        textAlign: "center",
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
                            </Stack>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default BestSellerProducts;
