import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const Banner: React.FC = () => {
    const { loading, products: productsData } = useSelector(
        (state: RootState) => state.product
    );

    const edit1 = (productsData ?? []).slice(26, 27)[0]?.images[0];
    const edit2 = (productsData ?? []).slice(42, 43)[0]?.images[0];
    const edit3 = (productsData ?? []).slice(13, 14)[0]?.images[0];
    const edit4 = (productsData ?? []).slice(29, 30)[0]?.images[0];

    return (
        <Box sx={{ backgroundColor: "#FAFAFA" }}>
            <Box sx={{ p: "80px 0", maxWidth: "1050px", mx: "auto" }}>
                <Stack
                    sx={{
                        textAlign: "center",
                        pb: "48px",
                        px: { xs: "45px", sm: "0px" },
                    }}
                    spacing={1.25}
                >
                    <Typography
                        variant="h3"
                        color="secondary"
                        fontWeight={"700"}
                    >
                        EDITOR’S PICK
                    </Typography>
                    <Typography variant="h6" color="gray" fontWeight={"400"}>
                        Explore Categories That Suit You
                    </Typography>
                </Stack>

                <Box sx={{ p: { xs: "0px 40px", sm: "0px" } }}>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(auto-fit, minmax(180px, 1fr))",
                            },
                            rowGap: "16px",
                            columnGap: "30px",
                        }}
                    >
                        {/* Image 1 */}
                        <Box
                            position={"relative"}
                            width={"100%"}
                            overflow={"hidden"}
                            sx={{
                                gridColumn: {
                                    xs: "span 1",
                                    sm: "span 1",
                                    md: "span 2",
                                },
                                height: { xs: "500px", sm: "auto" },
                            }}
                        >
                            {loading ? (
                                <Skeleton
                                    variant="rectangular"
                                    width="100%"
                                    height="500px"
                                    animation="wave"
                                />
                            ) : (
                                <img
                                    src={edit1}
                                    alt="edit1"
                                    width="100%"
                                    height="500px"
                                    style={{ objectFit: "cover" }}
                                />
                            )}
                            {!loading && (
                                <Typography
                                    sx={{
                                        position: "absolute",
                                        bottom: 25,
                                        left: 30,
                                        p: "12px 60px",
                                        backgroundColor: "#ffffff",
                                        color: "#252B42",
                                    }}
                                >
                                    BEAUTY
                                </Typography>
                            )}
                        </Box>

                        {/* Image 2 */}
                        <Box
                            position={"relative"}
                            width={"100%"}
                            overflow={"hidden"}
                            sx={{ height: { xs: "500px", sm: "auto" } }}
                        >
                            {loading ? (
                                <Skeleton
                                    variant="rectangular"
                                    width="100%"
                                    height="500px"
                                    animation="wave"
                                />
                            ) : (
                                <img
                                    src={edit2}
                                    alt="edit2"
                                    width="100%"
                                    height="500px"
                                    style={{ objectFit: "cover" }}
                                />
                            )}
                            {!loading && (
                                <Typography
                                    sx={{
                                        position: "absolute",
                                        bottom: 25,
                                        left: 30,
                                        p: "12px 33px",
                                        backgroundColor: "#ffffff",
                                        color: "#252B42",
                                    }}
                                >
                                    HANDBAGS
                                </Typography>
                            )}
                        </Box>

                        {/* Small Images Section */}
                        <Box
                            display={"grid"}
                            gap={"16px"}
                            sx={{
                                gridTemplateColumns: { xs: "1fr", md: "auto" },
                            }}
                        >
                            {/* Image 3 */}
                            <Box
                                position={"relative"}
                                width={"100%"}
                                overflow={"hidden"}
                                sx={{ height: { xs: "250px", sm: "auto" } }}
                            >
                                {loading ? (
                                    <Skeleton
                                        variant="rectangular"
                                        width="100%"
                                        height="238px"
                                        animation="wave"
                                    />
                                ) : (
                                    <img
                                        src={edit3}
                                        alt="edit3"
                                        width="100%"
                                        height="238px"
                                        style={{ objectFit: "cover" }}
                                    />
                                )}
                                {!loading && (
                                    <Typography
                                        sx={{
                                            position: "absolute",
                                            bottom: 25,
                                            left: 30,
                                            p: "12px 26px",
                                            backgroundColor: "#ffffff",
                                            color: "#252B42",
                                        }}
                                    >
                                        WATCHES
                                    </Typography>
                                )}
                            </Box>

                            {/* Image 4 */}
                            <Box
                                position={"relative"}
                                width={"100%"}
                                sx={{ height: { xs: "250px", sm: "auto" } }}
                            >
                                {loading ? (
                                    <Skeleton
                                        variant="rectangular"
                                        width="100%"
                                        height="238px"
                                        animation="wave"
                                    />
                                ) : (
                                    <img
                                        src={edit4}
                                        alt="edit4"
                                        width="100%"
                                        height="238px"
                                        style={{ objectFit: "cover" }}
                                    />
                                )}
                                {!loading && (
                                    <Typography
                                        sx={{
                                            position: "absolute",
                                            bottom: 25,
                                            left: 30,
                                            p: "12px 40px",
                                            backgroundColor: "#ffffff",
                                            color: "#252B42",
                                        }}
                                    >
                                        KIDS
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Banner;
