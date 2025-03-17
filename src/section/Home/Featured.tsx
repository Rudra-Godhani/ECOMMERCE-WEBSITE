import { Box, Card, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { productsData } from "../../data/allProductsData";
import { Link } from "react-router-dom";

const Featured: React.FC = () => {
    const randomProducts = [...productsData]
        .sort(() => Math.random() - 0.5)
        .slice(0, 8);

    return (
        <Box
            sx={{
                p: "80px 0",
                pl: { xs: "35px", md: "0" },
                pr: { xs: "35px", md: "0" },
            }}
        >
            <Container maxWidth={"lg"} sx={{ margin: "auto", p: "0" }}>
                <Stack
                    sx={{
                        textAlign: "center",
                        p: { xs: "0px 20px 80px 20px", sm: "0px 0px 80px 0px" },
                    }}
                    spacing={1.25}
                >
                    <Typography
                        variant="h4"
                        color="gray"
                        fontWeight={"400"}
                        fontSize={"20px"}
                    >
                        Featured Products
                    </Typography>
                    <Typography
                        variant="h3"
                        color="secondary"
                        fontWeight={"700"}
                        fontSize={"24px"}
                    >
                        BESTSELLER PRODUCTS
                    </Typography>
                    <Typography variant="h6" color="gray" fontWeight={"400"}>
                        Top Quality Products recommended for You
                    </Typography>
                </Stack>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                        p: "0px 0px",
                        justifyContent: "center",
                        rowGap: "24px",
                        columnGap: "30px",
                    }}
                >
                    {randomProducts.map((product) => (
                        <Link
                            key={product.id}
                            to={`/product/${product.id}/detail`}
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
                                        src={product.images[0]}
                                        alt={product.title}
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
                                        {product.title}
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
                                            ${product.price}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            color="darkGreen"
                                            fontWeight={"700"}
                                            fontSize={"16px"}
                                        >
                                            ${product.retailPrice}
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
                                        <Box
                                            width={"16px"}
                                            height={"16px"}
                                            sx={{
                                                backgroundColor: "#23856D",
                                                borderRadius: "50%",
                                            }}
                                        ></Box>
                                        <Box
                                            width={"16px"}
                                            height={"16px"}
                                            sx={{
                                                backgroundColor: "#E77C40",
                                                borderRadius: "50%",
                                            }}
                                        ></Box>
                                        <Box
                                            width={"16px"}
                                            height={"16px"}
                                            sx={{
                                                backgroundColor: "#252B42",
                                                borderRadius: "50%",
                                            }}
                                        ></Box>
                                    </Stack>
                                </Stack>
                            </Card>
                        </Link>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Featured;
