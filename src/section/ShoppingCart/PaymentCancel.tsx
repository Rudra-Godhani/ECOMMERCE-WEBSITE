import React from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Link } from "react-router-dom";

const PaymentCancel: React.FC = () => {
    return (
        <Container maxWidth="sm" sx={{ textAlign: "center", my: "140px" }}>
            <CancelOutlinedIcon sx={{ fontSize: 80, color: "red" }} />
            <Typography variant="h3" fontWeight="bold" mt={"10px"} gutterBottom>
                Payment Cancelled
            </Typography>
            <Typography variant="h4" color="gray" mt="40px">
                Your payment was not completed. You can try again or return to
                the store.
            </Typography>

            <Box mt={5}>
                <Button
                    component={Link}
                    to="/shopping-cart/checkout"
                    variant="outlined"
                    color="error"
                    size="large"
                >
                    Try Again
                </Button>
            </Box>
        </Container>
    );
};

export default PaymentCancel;
