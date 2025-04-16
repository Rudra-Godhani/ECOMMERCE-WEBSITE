import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const WebsiteDetail: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: "" }}>
            <Box
                maxWidth={"1050px"}
                mx="auto"
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "column" },
                    justifyContent: { xs: "center", sm: "space-between" },
                    p: { xs: "80px 20px", sm: "40px 20px" },
                    textAlign: { xs: "center", sm: "start" },
                }}
            >
                <Stack
                    sx={{
                        gap: "24px",
                        py: "24px",
                        width: { xs: "100%", sm: "394px" },
                    }}
                >
                    <Typography variant="h6" color="#E74040">
                        Why Prime Picks?
                    </Typography>
                </Stack>
                <Stack
                    sx={{
                        flexDirection: {
                            xs: "column",
                            sm: "row",
                        },
                        gap: { xs: "30px", sm: "20px" },
                    }}
                >
                    <Typography
                        variant="h3"
                        color="secondary"
                        sx={{ px: { xs: "50px", sm: "0" } }}
                    >
                        Your one-stop shop for curated quality and everyday
                        essentials
                    </Typography>
                    <Typography
                        variant="h5"
                        color="gray"
                        sx={{
                            width: { xs: "100%", sm: "529px" },
                            px: { xs: "35px", sm: "0" },
                        }}
                    >
                        From trending products to timeless must-haves, we bring
                        convenience and style to your doorstep all with trusted
                        service.
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
};

export default WebsiteDetail;
