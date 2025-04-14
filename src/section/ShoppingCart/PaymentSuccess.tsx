import React from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";

const PaymentSuccess: React.FC = () => {
    return (
        <Container maxWidth="sm" sx={{ textAlign: "center", my: "140px" }}>
            <CheckCircleOutlineIcon sx={{ fontSize: 80, color: "green" }} />
            <Typography variant="h3" fontWeight="bold" mt={"10px"} gutterBottom>
                Payment Successful
            </Typography>
            <Typography variant="h4" color="gray" mt="40px">
                Thank you for your order! We've received your payment and will
                process your order shortly.
            </Typography>

            <Box mt={5}>
                <Button
                    component={Link}
                    to="/product/listing"
                    variant="contained"
                    size="large"
                    sx={{
                        backgroundColor: "green",
                    }}
                >
                    Continue Shopping
                </Button>
            </Box>
        </Container>
    );
};

export default PaymentSuccess;
