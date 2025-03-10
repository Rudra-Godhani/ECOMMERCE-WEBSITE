import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Button,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";

const UpdatePassword: React.FC = () => {
    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
    });
    const [errors, setErrors] = useState({
        currentPassword: "",
        newPassword: "",
    });

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("submit");

        const validationErrors = {
            currentPassword: "",
            newPassword: "",
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

        if (validationErrors.currentPassword || validationErrors.newPassword) {
            setErrors(validationErrors);
            return;
        }

        alert("Form submitted successfully!");
    };
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
                    >
                        Update Password
                    </Button>
                </Stack>
            </form>
        </Stack>
    );
};

export default UpdatePassword;
