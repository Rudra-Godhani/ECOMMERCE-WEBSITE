import React, { useEffect, useState } from "react";
import {
    Typography,
    TextField,
    Button,
    Paper,
    Grid,
    CircularProgress,
} from "@mui/material";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
    clearAllContactUsErrorsAndMessages,
    sendContactMessage,
} from "../../store/Slices/contactUsSlice";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const dispatch = useDispatch<AppDispatch>();
    const { error, message, loading } = useSelector(
        (state: RootState) => state.contact
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(sendContactMessage(formData));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        if (message) {
            toast.success(message);
            setFormData({ name: "", email: "", phoneNumber: "", message: "" });
        }
        dispatch(clearAllContactUsErrorsAndMessages());
    }, [error, message]);

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
                                disabled={loading}
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
                                {loading ? (
                                    <CircularProgress
                                        size={24}
                                        sx={{ color: "#fff" }}
                                    />
                                ) : (
                                    "Send Message"
                                )}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    );
};

export default ContactForm;
