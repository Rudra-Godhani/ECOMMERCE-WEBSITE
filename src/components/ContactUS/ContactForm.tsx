import React, { useState } from "react";
import { Typography, TextField, Button, Paper, Grid } from "@mui/material";
import { toast } from "react-toastify";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = {
            name: "",
            email: "",
            phoneNumber: "",
            message: "",
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
        } else if (formData.phoneNumber.toString().length !== 10) {
            validationErrors.phoneNumber =
                "PhoneNumber must be 10 characteres long.";
        }
        if (!formData.message) {
            validationErrors.message = "Message is required";
        }

        if (
            validationErrors.name ||
            validationErrors.email ||
            validationErrors.phoneNumber ||
            validationErrors.message
        ) {
            setErrors(validationErrors);
            return;
        }

        console.log("formData:", formData);
        toast.success("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", phoneNumber: "", message: "" });
    };
    return (
        <Grid item xs={12} md={6}>
            <Paper
                elevation={6}
                sx={{
                    padding: "48px",
                    borderRadius: "20px",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                }}
            >
                <Typography
                    variant="h1"
                    color="#23A6F0"
                    sx={{
                        marginBottom: "24px",
                        textAlign: "center",
                    }}
                >
                    Get in Touch
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        textAlign: "center",
                        marginBottom: "32px",
                        fontSize: "18px",
                    }}
                >
                    Have questions or feedback? We're here to help!
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                label="Your Name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                error={!!errors.name}
                                helperText={errors.name}
                                InputLabelProps={{
                                    style: {
                                        fontSize: "14px",
                                    },
                                }}
                                InputProps={{
                                    style: { fontSize: "14px" },
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "8px",
                                    },
                                }}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Email Address"
                                name="email"
                                type="text"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                InputLabelProps={{
                                    style: {
                                        fontSize: "14px",
                                    },
                                }}
                                InputProps={{
                                    style: { fontSize: "14px" },
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "8px",
                                    },
                                }}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Phone Number"
                                name="phoneNumber"
                                type="number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                error={!!errors.phoneNumber}
                                helperText={errors.phoneNumber}
                                InputLabelProps={{
                                    style: {
                                        fontSize: "14px",
                                    },
                                }}
                                InputProps={{
                                    style: { fontSize: "14px" },
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "8px",
                                    },
                                }}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Your Message"
                                name="message"
                                type="text"
                                value={formData.message}
                                onChange={handleChange}
                                error={!!errors.message}
                                helperText={errors.message}
                                multiline
                                rows={4}
                                InputLabelProps={{
                                    style: {
                                        fontSize: "14px",
                                    },
                                }}
                                InputProps={{
                                    style: { fontSize: "14px" },
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "8px",
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                type="submit"
                                fullWidth
                                sx={{
                                    padding: "14px",
                                    backgroundColor: "#1976d2",
                                    borderRadius: "8px",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    "&:hover": {
                                        backgroundColor: "#23A6F0",
                                    },
                                }}
                            >
                                Send Message
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    );
};

export default ContactForm;
