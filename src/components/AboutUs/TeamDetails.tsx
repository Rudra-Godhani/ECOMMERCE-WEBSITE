import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { teamDetail } from "../../Data";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const TeamDetails: React.FC = () => {
    return (
        <Box>
            <Box
                maxWidth={"1050px"}
                mx="auto"
                sx={{ p: { xs: "75px 0 0 0", sm: "112px 0" } }}
            >
                <Stack sx={{ gap: { xs: "45px", sm: "112px" } }} gap="112px">
                    <Stack
                        textAlign={"center"}
                        gap="10px"
                        alignItems={"center"}
                    >
                        <Typography
                            variant="h2"
                            sx={{ fontSize: "40px" }}
                            color="secondary"
                        >
                            Meet Our Team
                        </Typography>
                        <Typography
                            variant="h6"
                            color="gray"
                            sx={{ width: { xs: "70%", sm: "50%" } }}
                        >
                            Problems trying to resolve the conflict between the
                            two major realms of Classical physics: Newtonian
                            mechanics{" "}
                        </Typography>
                    </Stack>
                    <Box>
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
                                    xs: "0 30px 48px 30px",
                                    sm: "0px 30px",
                                    md: "0px 30px",
                                    lg: "0px 0px",
                                },
                                textAlign: "center",
                            }}
                        >
                            {teamDetail.map((item) => (
                                <Box
                                    key={item.username}
                                    sx={{
                                        width: "100%",
                                        margin: "0 auto",
                                        backgroundColor: "#FFFFFF",
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
                                            src={item.img}
                                            alt={item.img}
                                            style={{
                                                objectFit: "cover",
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                    </Box>
                                    <Stack sx={{ p: "30px 0" }} spacing={1.25}>
                                        <Typography
                                            variant="h5"
                                            color="secondary"
                                            fontWeight={"700"}
                                        >
                                            {item.username}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            color="gray"
                                            fontWeight={"700"}
                                        >
                                            {item.profession}
                                        </Typography>
                                        <Box ml={"-10px"}>
                                            <IconButton>
                                                <Facebook htmlColor="lightBlue" />
                                            </IconButton>
                                            <IconButton>
                                                <Instagram htmlColor="lightBlue" />
                                            </IconButton>
                                            <IconButton>
                                                <Twitter htmlColor="lightBlue" />
                                            </IconButton>
                                        </Box>
                                    </Stack>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

export default TeamDetails;
