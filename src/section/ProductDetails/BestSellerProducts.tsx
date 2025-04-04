import { Box, Card, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const BestSellerProducts: React.FC = () => {
    const { loading, products } = useSelector(
        (state: RootState) => state.product
    );

    const bestSellerProducts = products.slice(101, 109);

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
                    {loading ? (
                        Array.from(new Array(8)).map((_, index) => (
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
                                    height={300}
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
                                        justifyContent={"center"}
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
                                        justifyContent={"center"}
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
                                </Stack>
                            </Card>
                        ))
                    ) : (
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
                            {!loading && bestSellerProducts.length === 0 && (
                                <Box
                                    sx={{
                                        textAlign: "center",
                                        pt: "40px",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography variant="h2" sx={{}}>
                                        BestSeller products is not avialble.
                                    </Typography>
                                </Box>
                            )}
                            {bestSellerProducts.map((item) => (
                                <Link
                                    to={`/product/${item.id}/detail`}
                                    key={item.id}
                                >
                                    <Card
                                        key={item.id}
                                        sx={{
                                            width: "100%",
                                            margin: "0 auto",
                                            backgroundColor: "#FFFFFF",
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
                                                    height: "300px",
                                                }}
                                            />
                                        </Box>
                                        <Stack
                                            sx={{
                                                p: "25px",
                                                pb: "35px",
                                                height: "200px",
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
                                                textAlign={"center"}
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
                                                textAlign={"center"}
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
                                                justifyContent={"center"}
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
                                                direction="row"
                                                spacing={0.75}
                                                justifyContent={"center"}
                                            >
                                                {item.colors.map(
                                                    (color, index) => (
                                                        <Box
                                                            key={index}
                                                            width="25px"
                                                            height="25px"
                                                            sx={{
                                                                backgroundColor:
                                                                    color,
                                                                borderRadius:
                                                                    "50%",
                                                                border: "2px solid rgb(184, 180, 180)",
                                                            }}
                                                        />
                                                    )
                                                )}
                                            </Stack>
                                        </Stack>
                                    </Card>
                                </Link>
                            ))}
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default BestSellerProducts;
