import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Box,
    Button,
    Card,
    CircularProgress,
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
    clearAllUserErrorsAndMessages,
    register,
} from "../../store/Slices/userSlice";

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
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
        dispatch(register(formData));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        if (message) {
            toast.success(message);
            navigate("/login");
        }
        if (isAuthenticated) {
            navigate("/");
        }
        dispatch(clearAllUserErrorsAndMessages());
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
                            Sign up
                        </Typography>
                        <TextField
                            label="Username"
                            name="name"
                            value={formData.name}
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
                            label="Email"
                            name="email"
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
                            type={showPassword ? "text" : "password"}
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
                                            {!showPassword ? (
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
                            {loading ? (
                                <CircularProgress
                                    size={24}
                                    sx={{
                                        color: "#FFFFFF",
                                    }}
                                />
                            ) : (
                                " Sign Up"
                            )}
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
