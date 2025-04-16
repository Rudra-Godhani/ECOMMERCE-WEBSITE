import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const TopCompanies: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: "#FAFAFA" }}>
            <Stack
                textAlign={"center"}
                gap="30px"
                alignItems={"center"}
                sx={{ p: "80px 0 24px 0" }}
            >
                <Typography
                    variant="h2"
                    sx={{ fontSize: "40px", p: { xs: "0 20px", sm: "" } }}
                    color="secondary"
                >
                    Trusted by Leading Brands
                </Typography>
                <Typography
                    variant="h6"
                    color="gray"
                    sx={{ width: { xs: "70%", sm: "50%" } }}
                >
                    From household names to emerging labels, we collaborate with
                    the best to bring you premium products you can count on.
                </Typography>
            </Stack>
        </Box>
    );
};

export default TopCompanies;
