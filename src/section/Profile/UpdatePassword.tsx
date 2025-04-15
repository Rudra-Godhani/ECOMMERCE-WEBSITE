import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Button,
    CircularProgress,
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
import {
    clearAllUpdateProfileErrorsAndMessage,
    updatePassword,
} from "../../store/Slices/updateProfileSlice";
import { getUser } from "../../store/Slices/userSlice";

const UpdatePassword: React.FC = () => {
    const [formData, setFormData] = useState({
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
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(updatePassword(formData));
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
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            });
            dispatch(getUser());
            dispatch(clearAllUpdateProfileErrorsAndMessage());
        }
    }, [dispatch, loading, error, isUpdated]);

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
                        <Typography variant="h4">
                            Confirm New Password
                        </Typography>
                        <TextField
                            label="ConfirmNewPassword"
                            name="confirmPassword"
                            type={!showConfirmPassword ? "text" : "password"}
                            value={formData.confirmPassword}
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
                        {loading ? (
                            <CircularProgress
                                size={24}
                                sx={{
                                    color: "#FFFFFF",
                                }}
                            />
                        ) : (
                            " Update Password"
                        )}
                    </Button>
                </Stack>
            </form>
        </Stack>
    );
};

export default UpdatePassword;
