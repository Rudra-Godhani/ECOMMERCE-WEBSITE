import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { bgImage } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { toast } from "react-toastify";
import {
    clearAllUpdateProfileErrorsAndMessage,
    forgotPassword,
} from "../../store/Slices/updateProfile";

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");

    const { loading, error, isUpdated, message } = useSelector(
        (state: RootState) => state.updateProfile
    );
    const dispatch = useDispatch<AppDispatch>();

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailError("");
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let validationEmail: string = "";

        if (!email) {
            validationEmail = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationEmail = "Enter a valid email";
        }

        if (validationEmail) {
            setEmailError(validationEmail);
            return;
        }
        dispatch(forgotPassword({ email }));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearAllUpdateProfileErrorsAndMessage());
        }
        if (message) {
            toast.success(message);
            dispatch(clearAllUpdateProfileErrorsAndMessage());
            setEmail("");
        }
    }, [dispatch, loading, error, isUpdated]);

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                px: { xs: "20px", sm: "0px" },
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Card
                sx={{
                    width: "400px",
                    mx: "auto",
                    boxShadow:
                        "rgba(17, 17, 26, 0.3) 0px 4px 20px, rgba(17, 17, 26, 0.1) 0px 10px 50px, rgba(17, 17, 26, 0.1) 0px 16px 56px;",
                    borderRadius: "10px",
                    p: "60px 20px 30px 20px",
                }}
            >
                <form onSubmit={handleSubmit}>
                    <Stack gap={"20px"}>
                        <Typography
                            variant="h2"
                            color="secondary"
                            textAlign={"center"}
                        >
                            Forgot Password
                        </Typography>
                        <Typography
                            variant="h6"
                            color="gray"
                            lineHeight={"1.2rem"}
                            textAlign={"center"}
                        >
                            Don't worry! Enter your email below, and we'll send
                            you a link to reset your password.
                        </Typography>

                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={handleChange}
                            error={!!emailError}
                            helperText={emailError}
                            InputLabelProps={{
                                style: { fontSize: "15px" },
                            }}
                            InputProps={{
                                style: { fontSize: "15px" },
                            }}
                            fullWidth
                        />
                        <Button
                            type="submit"
                            sx={{
                                color: "#FFFFFF",
                                backgroundColor: "#23A6F0",
                                p: "15px 40px",
                                whiteSpace: "nowrap",
                                textTransform: "none",
                                fontSize: "15px",
                                ":hover": { backgroundColor: "#1A8CD8" },
                            }}
                            disabled={loading}
                        >
                            continue
                        </Button>
                    </Stack>
                </form>
            </Card>
        </Box>
    );
};

export default ForgotPassword;
