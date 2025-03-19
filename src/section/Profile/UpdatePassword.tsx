import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Button,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { toast } from "react-toastify";
import { clearAllUpdateProfileErrorsAndMessage, updatePassword } from "../../store/Slices/updateProfileSlice";
import { getUser } from "../../store/Slices/userSlice";

const UpdatePassword: React.FC = () => {
    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { loading, error, isUpdated, message } = useSelector(
        (state: RootState) => state.updateProfile
    );
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
            passwordMatch: "",
        };

        if (!formData.currentPassword) {
            validationErrors.currentPassword = "Current Password is required";
        } else if (formData.currentPassword.length < 8) {
            validationErrors.currentPassword =
                "Current Password must be at least 8 characters";
        }
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

        if (
            validationErrors.currentPassword ||
            validationErrors.newPassword ||
            validationErrors.confirmPassword
        ) {
            setErrors(validationErrors);
            return;
        }

        if (formData.newPassword !== formData.confirmPassword) {
            toast.error(
                "NewPassword and ConfirmPassword don't match. Please check and try again."
            );
            return;
        }

        dispatch(updatePassword(formData));
    };

    useEffect(() => {
        if(error){
            toast.error(error);
            dispatch(clearAllUpdateProfileErrorsAndMessage());
        }
        if(isUpdated){
            if(message){
                toast.success(message);
            }
            setFormData({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            });
            dispatch(getUser());
            dispatch(clearAllUpdateProfileErrorsAndMessage());
        }
    },[dispatch,loading,error,isUpdated]);


    return (
        <Stack>
            <Stack>
                <Typography variant="h4" fontWeight={"700"} pb="30px">
                    Update Password
                </Typography>
            </Stack>
            <form onSubmit={handleSubmit}>
                <Stack gap={"20px"}>
                    <Stack gap={"15px"}>
                        <Typography variant="h4">Current Password</Typography>
                        <TextField
                            label="CurrentPassword"
                            name="currentPassword"
                            type={!showCurrentPassword ? "text" : "password"}
                            value={formData.currentPassword}
                            onChange={handleChange}
                            error={!!errors.currentPassword}
                            helperText={errors.currentPassword}
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
                                                setShowCurrentPassword(
                                                    !showCurrentPassword
                                                )
                                            }
                                            edge="end"
                                        >
                                            {showCurrentPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Stack>
                    <Stack gap={"15px"}>
                        <Typography variant="h4">New Password</Typography>
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
                    </Stack>
                    <Stack gap={"15px"}>
                        <Typography variant="h4">Confirm New Password</Typography>
                        <TextField
                            label="ConfirmPassword"
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
                    </Stack>
                    <Button
                        type="submit"
                        sx={{
                            color: "#FAFAFA",
                            backgroundColor: "#23A6F0",
                            p: { md: "10px 10px", lg: "10px 20px" },
                            whiteSpace: "nowrap",
                            minWidth: "fit-content",
                            width: "fit-content",
                            alignSelf: "flex-end",
                        }}
                        disabled={loading}
                    >
                        Update Password
                    </Button>
                </Stack>
            </form>
        </Stack>
    );
};

export default UpdatePassword;
