import { Avatar, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { profilePicture } from "../../assets";

const UpdateProfile: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("submit");

        const validationErrors = {
            name: "",
            email: "",
            phoneNumber: "",
            address: "",
        };

        if (!formData.name) {
            validationErrors.name = "Name is required";
        }
        if (!formData.email) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Enter a valid email";
        }
        if (!formData.phoneNumber) {
            validationErrors.phoneNumber = "PhoneNumber is required";
        } else if (formData.phoneNumber.length < 10) {
            validationErrors.phoneNumber =
                "PhoneNumber must be at least 10 characteres.";
        }
        if (!formData.address) {
            validationErrors.address = "Address is required";
        }

        // If there are errors, update state and stop submission
        if (
            validationErrors.name ||
            validationErrors.email ||
            validationErrors.phoneNumber ||
            validationErrors.address
        ) {
            setErrors(validationErrors);
            return;
        }

        alert("Form submitted successfully!");
    };
    return (
        <Stack>
            <Stack>
                <Typography variant="h4" fontWeight={"700"} pb="30px">
                    Update Profile
                </Typography>
            </Stack>
            <form onSubmit={handleSubmit}>
                <Stack gap={"20px"}>
                    <Stack
                        alignItems={"center"}
                        justifyContent={"center"}
                        pb={"20px"}
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src={profilePicture}
                            sx={{ width: "150px", height: "150px" }}
                        />
                    </Stack>
                    <Stack gap={"15px"}>
                        <Typography variant="h4">Name</Typography>
                        <TextField
                            label="Name"
                            name="name"
                            type="text"
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
                    </Stack>
                    <Stack gap={"15px"}>
                        <Typography variant="h4">Email Address</Typography>
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
                    </Stack>
                    <Stack gap={"15px"}>
                        <Typography variant="h4">Phone Number</Typography>
                        <TextField
                            label="PhoneNumber"
                            name="phoneNumber"
                            type="number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            error={!!errors.phoneNumber}
                            helperText={errors.phoneNumber}
                            InputLabelProps={{
                                style: { fontSize: "15px" },
                            }}
                            InputProps={{
                                style: { fontSize: "15px" },
                            }}
                            fullWidth
                        />
                    </Stack>
                    <Stack gap={"15px"}>
                        <Typography variant="h4">Address</Typography>
                        <TextField
                            label="Address"
                            name="address"
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                            error={!!errors.address}
                            helperText={errors.address}
                            InputLabelProps={{
                                style: { fontSize: "15px" },
                            }}
                            InputProps={{
                                style: { fontSize: "15px" },
                            }}
                            fullWidth
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
                        Save Changes
                    </Button>
                </Stack>
            </form>
        </Stack>
    );
};

export default UpdateProfile;
