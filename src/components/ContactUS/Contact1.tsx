import {
    Box,
    Typography,
    Paper,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import { Email, Phone, LocationOn, HelpOutline } from "@mui/icons-material";
import ContactForm from "./ContactForm";

const Contact1: React.FC = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                padding: "100px 20px",
            }}
        >
            <Grid container spacing={5} maxWidth="lg">
                <ContactForm />
                <Grid item xs={12} md={6}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: "32px",
                            borderRadius: "16px",
                            backgroundColor: "#ffffff",
                            marginBottom: "24px",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{ fontWeight: "700", marginBottom: "16px" }}
                        >
                            Contact Information
                        </Typography>

                        {[
                            {
                                icon: <Email color="primary" />,
                                text: "primepicks.shop@pp.com",
                            },
                            {
                                icon: <Phone color="primary" />,
                                text: "1800 200220",
                            },
                            {
                                icon: <LocationOn color="primary" />,
                                text: "123, MG Road, Bangalore, Karnataka, 560001, India",
                            },
                        ].map((contactInfo, index) => (
                            <Box
                                key={index}
                                display="flex"
                                alignItems="center"
                                gap={2}
                                mb={2}
                            >
                                <IconButton
                                    sx={{
                                        backgroundColor: "#e3f2fd",
                                        "&:hover": {
                                            backgroundColor: "#bbdefb",
                                        },
                                    }}
                                >
                                    {contactInfo.icon}
                                </IconButton>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontSize: { xs: "14px", md: "16px" },
                                    }}
                                >
                                    {contactInfo.text}
                                </Typography>
                            </Box>
                        ))}
                    </Paper>

                    <Paper
                        elevation={3}
                        sx={{
                            padding: "32px",
                            borderRadius: "16px",
                            backgroundColor: "#ffffff",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{ fontWeight: "bold", marginBottom: "16px" }}
                        >
                            FAQs
                        </Typography>
                        <List>
                            {[
                                {
                                    que: "How long does it take to get a response?",
                                    ans: "We typically respond within 24 hours.",
                                },
                                {
                                    que: "Can I update my order?",
                                    ans: "Yes, you can modify your order within 2 hours of placing it.",
                                },
                                {
                                    que: "Support hours?",
                                    ans: "Our support team is available from 9 AM to 6 PM IST.",
                                },
                            ].map((faq, index) => (
                                <ListItem key={index}>
                                    <HelpOutline
                                        sx={{
                                            marginRight: "12px",
                                            color: "#1976d2",
                                        }}
                                    />
                                    <ListItemText
                                        primary={faq.que}
                                        secondary={faq.ans}
                                        primaryTypographyProps={{
                                            sx: {
                                                fontSize: {
                                                    xs: "14px",
                                                    md: "15px",
                                                },
                                            },
                                            fontWeight: "500",
                                        }}
                                        secondaryTypographyProps={{
                                            sx: {
                                                fontSize: {
                                                    xs: "14px",
                                                    md: "15px",
                                                },
                                            },
                                            color: "gray",
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact1;
