import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, CircularProgress, Button, Grow, Card, CardContent } from "@mui/material";
import { AppDispatch, RootState } from "../../store/store";
import {
    clearAllPaymentSessionErrorsAndMessages,
    validatePaymentSession,
} from "../../store/Slices/paymentSlice";
import CancelIcon from "@mui/icons-material/Cancel";

const PaymentFailed = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const location = useLocation();
    const { loading, error, sessionStatus } = useSelector(
        (state: RootState) => state.payment
    );
    const [hasValidated, setHasValidated] = useState(false);

    useEffect(() => {
        const sessionId = new URLSearchParams(location.search).get(
            "session_id"
        );

        if (!sessionId) {
            navigate("/");
            return;
        }

        dispatch(validatePaymentSession(sessionId)).then(() => {
            setHasValidated(true);
        });

        return () => {
            dispatch(clearAllPaymentSessionErrorsAndMessages());
        };
    }, [dispatch, location, navigate]);

    useEffect(() => {
        if (hasValidated && !loading) {
            if (error || sessionStatus === "paid") {
                navigate("/");
            }
        }
    }, [hasValidated, loading, error, sessionStatus, navigate]);

    if (loading || !hasValidated) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    if (sessionStatus === "paid") {
        return null;
    }

    return (
        <Box
            sx={{
                minHeight: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "grey.100",
                p: { xs: 4, sm: 4 },
            }}
        >
            <Grow in={true} timeout={500}>
                <Card
                    sx={{
                        maxWidth: 600,
                        width: "100%",
                        borderRadius: 3,
                        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                        overflow: "hidden",
                    }}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            py: 6,
                            px: { xs: 3, sm: 5 },
                        }}
                    >
                        <CancelIcon
                            sx={{
                                fontSize: 70,
                                color: "error.main",    
                                mb: 2,
                                animation: "pulse 2s infinite",
                                "@keyframes pulse": {
                                    "0%": { transform: "scale(1)" },
                                    "50%": { transform: "scale(1.1)" },
                                    "100%": { transform: "scale(1)" },
                                },
                            }}
                        />

                        <Typography
                            variant="h4"
                            component="h1"
                            color="error.main"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ fontSize: { xs: "1.75rem", sm: "2.125rem" } }}
                        >
                            Payment Failed
                        </Typography>

                        <Typography
                            variant="h6"
                            color="gray"
                            sx={{ mb: 4, maxWidth: 400, lineHeight: 1.6 }}
                        >
                            We’re sorry, something went wrong with your payment.
                            Please try again.
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", sm: "row" },
                                gap: 2,
                                width: "100%",
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() =>
                                    navigate("/shopping-cart/checkout")
                                }
                                sx={{
                                    borderRadius: 2,
                                    px: 4,
                                    py: 1.5,
                                    mb:"10px",
                                    fontWeight: "medium",
                                    textTransform: "none",
                                    flex: { xs: "1 1 auto", sm: "0 1 auto" },
                                    backgroundColor:"#23A6F0"
                                }}
                            >
                                Try Again
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grow>
        </Box>
    );
};

export default PaymentFailed;