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
import { bgImage } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { toast } from "react-toastify";
import {
    clearAllUpdateProfileErrorsAndMessage,
    resetPassword,
} from "../../store/Slices/updateProfileSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ResetPassword: React.FC = () => {
    const [formData, setFormData] = useState({
        newPassword: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({
        newPassword: "",
        confirmPassword: "",
    });
    const { token } = useParams();
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { loading, error, isUpdated, message } = useSelector(
        (state: RootState) => state.updateProfile
    );
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        setErrors({ ...errors, [e.target.name]: "" });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = {
            newPassword: "",
            confirmPassword: "",
        };

        if (!formData.newPassword) {
            validationErrors.newPassword = "New Password is required";
        } else if (formData.newPassword.length < 8) {
            validationErrors.newPassword =
                "New Password must be at least 8 characters";
        }
        if (!formData.confirmPassword) {
            validationErrors.confirmPassword = "Confirm Password is required";
        } else if (formData.confirmPassword.length < 8) {
            validationErrors.confirmPassword =
                "Confirm Password must be at least 8 characters";
        }

        if (validationErrors.newPassword || validationErrors.confirmPassword) {
            setErrors(validationErrors);
            return;
        }

        if (formData.newPassword !== formData.confirmPassword) {
            toast.error(
                "NewPassword and ConfirmNewPassword don't match. Please check and try again."
            );
            return;
        }

        if (token) {
            dispatch(resetPassword({ passwordData: formData, token: token }));
        }
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearAllUpdateProfileErrorsAndMessage());
        }
        if (isUpdated) {
            if (message) {
                toast.success(message);
            }
            setFormData({
                newPassword: "",
                confirmPassword: "",
            });
            navigate("/login");
            dispatch(clearAllUpdateProfileErrorsAndMessage());
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
                            Reset Password
                        </Typography>
                        <Typography
                            variant="h6"
                            color="gray"
                            lineHeight={"1.2rem"}
                            textAlign={"center"}
                        >
                            Set a new password for your account.
                        </Typography>

                        <TextField
                            label="NewPassword"
                            name="newPassword"
                            type={!showNewPassword ? "text" : "password"}
                            value={formData.newPassword}
                            onChange={handleChange}
                            error={!!errors.newPassword}
                            helperText={errors.newPassword}
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
                                                setShowNewPassword(
                                                    !showNewPassword
                                                )
                                            }
                                            edge="end"
                                        >
                                            {showNewPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            label="ConfirmNewPassword"
                            name="confirmPassword"
                            type={!showConfirmPassword ? "text" : "password"}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
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
                                                setShowConfirmPassword(
                                                    !showConfirmPassword
                                                )
                                            }
                                            edge="end"
                                        >
                                            {showConfirmPassword ? (
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
                            Set Password
                        </Button>
                        <Box textAlign={"center"} my={"-10px"}>
                            <Link
                                to="/login"
                                style={{
                                    color: "#23A6F0",
                                    fontSize: "14px",
                                    textDecoration: "underline",
                                }}
                            >
                                Return to log in
                            </Link>
                        </Box>
                    </Stack>
                </form>
            </Card>
        </Box>
    );
};

export default ResetPassword;
