import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { featuredPostData } from "../../data/featuredPostData";
import { Link } from "react-router-dom";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const FeaturedPost: React.FC = () => {
    return (
        <Box
            sx={{
                p: { xs: "80px 0", sm: "112px 0" },
                pl: { xs: "35px", md: "0" },
                pr: { xs: "35px", md: "0" },
            }}
        >
            <Box sx={{ margin: "auto", p: "0", maxWidth: "1050px" }}>
                <Stack
                    sx={{
                        textAlign: "center",
                        p: { xs: "0px 30px 80px 30px", sm: "0px 0px 80px 0px" },
                    }}
                    spacing={1.25}
                >
                    <Typography
                        variant="h6"
                        color="lightBlue"
                        fontWeight={"700"}
                        fontSize={"14px"}
                    >
                        Practice Advice
                    </Typography>
                    <Typography
                        variant="h2"
                        color="secondary"
                        fontWeight={"700"}
                        fontSize={"40px"}
                    >
                        Featured Posts
                    </Typography>
                    <Typography variant="h6" color="gray">
                        Stay updated with the latest trends and insights.
                    </Typography>
                </Stack>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "repeat(auto-fit, minmax(200px, 1fr))",
                            sm: "repeat(auto-fit, minmax(300px, 1fr))",
                        },
                        p: "0px 0px",
                        gap: { xs: "30px", sm: "10px" },
                    }}
                >
                    {featuredPostData.map((item, index) => (
                        <Box
                            key={index}
                            sx={{ width: "100%", margin: "0 auto"}}
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
                                    src={item.img}
                                    alt={item.title}
                                    style={{
                                        objectFit: "cover",
                                        width: "100%",
                                        height: "100%",
                                        display: "block",
                                    }}
                                />
                            </Box>
                            <Card
                                sx={{
                                    margin: "0",
                                    padding: "0",
                                    borderRadius: "0px",
                                    borderBottomLeftRadius: "2px",
                                    borderBottomRightRadius: "2px",
                                }}
                            >
                                <Stack sx={{ p: "35px 25px", gap: "10px" }}>
                                    <Stack direction={"row"} spacing={1.3}>
                                        <Link to="/">
                                            <Typography
                                                variant="body1"
                                                color="gray"
                                                sx={{
                                                    "&:hover": {
                                                        color: "#23A6F0",
                                                    },
                                                }}
                                            >
                                                Google
                                            </Typography>
                                        </Link>
                                        <Link to="/">
                                            <Typography
                                                variant="body1"
                                                color="gray"
                                                sx={{
                                                    "&:hover": {
                                                        color: "#23A6F0",
                                                    },
                                                }}
                                            >
                                                Trending
                                            </Typography>
                                        </Link>
                                        <Link to="/">
                                            <Typography
                                                variant="body1"
                                                color="gray"
                                                sx={{
                                                    "&:hover": {
                                                        color: "#23A6F0",
                                                    },
                                                }}
                                            >
                                                New
                                            </Typography>
                                        </Link>
                                    </Stack>
                                    <Typography
                                        variant="h4"
                                        color="secondary"
                                        fontWeight={"400"}
                                        fontSize={"20px"}
                                        lineHeight={"30px"}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="#737373"
                                        fontWeight={"400"}
                                        fontSize={"14px"}
                                        lineHeight={"20px"}
                                    >
                                        {item.description}
                                    </Typography>
                                    <Stack
                                        spacing={0.75}
                                        sx={{
                                            p: "15px 0px",
                                            justifyContent: "space-between",
                                        }}
                                        direction={"row"}
                                    >
                                        <Stack
                                            direction={"row"}
                                            sx={{
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                            spacing={0.625}
                                        >
                                            <AccessAlarmIcon
                                                fontSize="small"
                                                htmlColor="lightBlue"
                                            />
                                            <Typography
                                                variant="body2"
                                                color="gray"
                                                fontWeight={"400"}
                                                fontSize={"12px"}
                                            >
                                                {item.date}
                                            </Typography>
                                        </Stack>
                                        <Stack
                                            direction={"row"}
                                            sx={{
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                            spacing={0.625}
                                        >
                                            <ShowChartIcon
                                                fontSize="small"
                                                htmlColor="darkGreen"
                                            />
                                            <Typography
                                                variant="body2"
                                                color="gray"
                                                fontWeight={"400"}
                                                fontSize={"12px"}
                                            >
                                                {item.comments} comments
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                    <Link to="/about-us">
                                        <Stack
                                            direction={"row"}
                                            sx={{ alignItems: "center" }}
                                            spacing={0.5}
                                        >
                                            <Typography
                                                variant="h6"
                                                color="gray"
                                                fontWeight={"700"}
                                                fontSize={"14px"}
                                            >
                                                Learn More
                                            </Typography>
                                            <ChevronRightIcon htmlColor="lightBlue" />
                                        </Stack>
                                    </Link>
                                </Stack>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default FeaturedPost;
