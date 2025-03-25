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
import { AppDispatch, RootState } from "../../store/store";
import { toast } from "react-toastify";
import {
    clearAllUserErrors,
    clearAllUserMessage,
    login,
} from "../../store/Slices/userSlice";

const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const { loading, isAuthenticated, error, message } = useSelector(
        (state: RootState) => state.user
    );
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login(formData));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearAllUserErrors());
        }
        if (isAuthenticated) {
            if (message) {
                toast.success(message);
                dispatch(clearAllUserMessage());
            }
            navigate("/");
        }
    }, [dispatch, error, loading, isAuthenticated, message]);

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
                    <Stack gap={"25px"}>
                        <Typography
                            variant="h1"
                            color="secondary"
                            textAlign={"center"}
                        >
                            Login
                        </Typography>
                        <TextField
                            label="Email"
                            name="email"
                            type="text"
                            value={formData.email}
                            onChange={handleChange}
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
                            disabled={loading}
                        >
                            Login
                        </Button>
                        <Box textAlign={"center"} my={"-10px"}>
                            <Link
                                to="/forgotPassword"
                                style={{ color: "#23A6F0", fontSize: "14px",textDecoration:"underline" }}
                            >
                                Forgot Password?
                            </Link>
                        </Box>
                        <Stack
                            justifyContent={"center"}
                            alignItems={"center"}
                            direction={"row"}
                            sx={{ gap: { xs: "5px", sm: "10px" } }}
                        >
                            <Typography variant="h6" color="gray">
                                Don't have an account?
                            </Typography>
                            <Link to="/signup" style={{ color: "#23A6F0" }}>
                                Sign up
                            </Link>
                        </Stack>
                    </Stack>
                </form>
            </Card>
        </Box>
    );
};

export default Login;
