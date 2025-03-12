import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const Error: React.FC = () => {
    return (
        <Box sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            bgcolor: "white",
        }}>
            <Typography variant="h1" fontSize="100px">404</Typography>
            <Typography variant="h4" fontWeight={500} mb={2}>Oops! Page Not Found</Typography>
            <Typography variant="h6" mb={3} px="10px">
                The page you're looking for doesn't exist or has been moved.
            </Typography>
            <Button variant="contained" component={Link} to="/" sx={{ bgcolor: "#2DC071" }}>
                Go to Home
            </Button>
        </Box>
    );
};

export default Error;
