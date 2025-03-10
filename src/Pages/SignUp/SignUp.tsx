import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Box,
    Button,
    Card,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { bgImage } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { resetErrorAndMesssage, signUp } from "../../store/Slices/authSlice";
import { RootState } from "../../store/store";
import { toast } from "react-toastify";

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authData = useSelector((state: RootState) => state.auth);

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        // Clear errors when user starts typing
        setErrors({ ...errors, [e.target.name]: "" });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = { name: "", email: "", password: "" };

        if (!formData.name) validationErrors.name = "Username is required";
        if (!formData.email) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Enter a valid email";
        }
        if (!formData.password) {
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            validationErrors.password =
                "Password must be at least 8 characters";
        }

        // If there are errors, update state and stop submission
        if (
            validationErrors.name ||
            validationErrors.email ||
            validationErrors.password
        ) {
            setErrors(validationErrors);
            return;
        }

        dispatch(signUp(formData));
    };

    useEffect(() => {
        if (authData.isLoggedIn) {
            navigate("/");
        }
    }, [authData.isLoggedIn, navigate]);

    useEffect(() => {
        if (authData.message) {
            toast.success(authData.message);
            dispatch(resetErrorAndMesssage());
            navigate("/login");
        }
        if (authData.error) {
            toast.error(authData.error);
            dispatch(resetErrorAndMesssage());
        }
    }, [authData, dispatch, navigate]);

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
                            variant="h1"
                            color="secondary"
                            textAlign={"center"}
                        >
                            Sign up
                        </Typography>
                        <TextField
                            label="Username"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                            InputLabelProps={{
                                style: { fontSize: "15px" },
                            }}
                            InputProps={{
                                style: { fontSize: "15px" },
                            }}
                            fullWidth
                        />
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            InputLabelProps={{
                                style: { fontSize: "15px" },
                            }}
                            InputProps={{
                                style: { fontSize: "15px" },
                            }}
                            fullWidth
                        />
                        <TextField
                            label="Password"
                            name="password"
                            type={!showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                            InputLabelProps={{
                                style: { fontSize: "15px" },
                            }}
                            fullWidth
                            InputProps={{
                                style: { fontSize: "15px" },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
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
                        >
                            Sign Up
                        </Button>
                        <Stack
                            justifyContent={"center"}
                            alignItems={"center"}
                            direction={"row"}
                            sx={{ gap: { xs: "5px", sm: "10px" } }}
                        >
                            <Typography variant="h6" color="gray">
                                Already have an account?
                            </Typography>
                            <Link to="/login" style={{ color: "#23A6F0" }}>
                                Log In
                            </Link>
                        </Stack>
                    </Stack>
                </form>
            </Card>
        </Box>
    );
};

export default SignUp;
