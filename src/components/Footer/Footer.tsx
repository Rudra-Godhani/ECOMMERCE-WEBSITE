import React from "react";
import {
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    Box,
    IconButton,
    Link,
} from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer: React.FC = () => {
    return (
        <Box>
            {/* Footer Top */}
            <Box
                sx={{ bgcolor: "#FAFAFA", py: 5, px: { xs: "20px", sm: "0" } }}
            >
                <Container maxWidth="lg">
                    <Grid
                        container
                        justifyContent="space-between"
                        sx={{
                            flexDirection: { xs: "column", sm: "row" },
                            alignItems: { xs: "flex-start", sm: "center" },
                        }}
                    >
                        <Typography
                            variant="h6"
                            fontWeight={700}
                            fontSize={"24px"}
                            sx={{ cursor: "pointer" }}
                            color="secondary"
                        >
                            Bandage
                        </Typography>
                        <Box ml={"-10px"}>
                            <IconButton>
                                <Facebook htmlColor="lightBlue" />
                            </IconButton>
                            <IconButton>
                                <Instagram htmlColor="lightBlue" />
                            </IconButton>
                            <IconButton>
                                <Twitter htmlColor="lightBlue" />
                            </IconButton>
                        </Box>
                    </Grid>
                </Container>
            </Box>

            {/* Footer Middle */}
            <Box sx={{ py: 6.25, px: { xs: "20px", sm: "0" } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} justifyContent="space-between">
                        {[
                            {
                                title: "Company Info",
                                links: [
                                    "About Us",
                                    "Carrier",
                                    "We are hiring",
                                    "Blog",
                                ],
                            },
                            {
                                title: "Legal",
                                links: [
                                    "About Us",
                                    "Carrier",
                                    "We are hiring",
                                    "Blog",
                                ],
                            },
                            {
                                title: "Features",
                                links: [
                                    "Business Marketing",
                                    "User Analytic",
                                    "Live Chat",
                                    "Unlimited Support",
                                ],
                            },
                            {
                                title: "Resources",
                                links: [
                                    "IOS & Android",
                                    "Watch a Demo",
                                    "Customers",
                                    "API",
                                ],
                            },
                        ].map((section, index) => (
                            <Grid item xs={12} sm={6} md={2} key={index}>
                                <Typography
                                    variant="h5"
                                    fontWeight={700}
                                    fontSize="16px"
                                    gutterBottom
                                    mb="20px"
                                    color="secondary"
                                >
                                    {section.title}
                                </Typography>
                                {section.links.map((link, i) => (
                                    <Link
                                        key={i}
                                        color="gray"
                                        underline="none"
                                        mb="10px"
                                        sx={{
                                            display: "block",
                                            fontSize: "14px",
                                            "&:hover": { color: "#252B42" },
                                            cursor: "pointer",
                                        }}
                                    >
                                        {link}
                                    </Link>
                                ))}
                            </Grid>
                        ))}
                        {/* Get In Touch Section with More Space */}
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            sx={{ "@media (max-width:400px)": { xs: 12 } }}
                        >
                            <Typography
                                variant="h5"
                                fontWeight={700}
                                fontSize="16px"
                                gutterBottom
                                mb="20px"
                                color="secondary"
                            >
                                Get In Touch
                            </Typography>
                            <Box>
                                <Box display="flex" alignItems="center">
                                    <TextField
                                        variant="outlined"
                                        placeholder="Your Email"
                                        size="small"
                                        sx={{
                                            flexGrow: 1,
                                            bgcolor: "#f9f9f9",
                                            "& .MuiOutlinedInput-root": {
                                                borderTopRightRadius: "0px",
                                                borderBottomRightRadius: "0px",
                                                padding: {
                                                    xs: "5px",
                                                    sm: "9px",
                                                },
                                            },
                                        }}
                                    />

                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#23A6F0",
                                            color: "#ffffff",
                                            borderTopLeftRadius: "0",
                                            borderBottomLeftRadius: "0",
                                            boxShadow: "none",
                                            "&:hover": {
                                                boxShadow: "none",
                                            },
                                            "&:active": {
                                                boxShadow: "none",
                                            },
                                            "&:focus": {
                                                boxShadow: "none",
                                            },
                                            fontSize: {
                                                xs: "12px",
                                                sm: "14px",
                                            },
                                            p: {
                                                xs: "11.5px",
                                                sm: "14px",
                                            },
                                        }}
                                    >
                                        Subscribe
                                    </Button>
                                </Box>
                                <Typography
                                    variant="h6"
                                    color="gray"
                                    sx={{
                                        mt: 1,
                                        fontSize: { xs: "14px", sm: "12px" },
                                        fontWeight: { xs: "700", sm: "400" },
                                    }}
                                >
                                    Lore imp sum dolor Amit
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Footer Bottom */}
            <Box
                sx={{
                    bgcolor: "#FAFAFA",
                    py: 3.125,
                    px: { xs: "20px", sm: "0" },
                    textAlign: { xs: "center", sm: "start" },
                }}
            >
                <Container maxWidth="lg">
                    <Typography variant="h6" fontWeight={"700"} color="gray">
                        Made With Love By Finland All Right Reserved
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
