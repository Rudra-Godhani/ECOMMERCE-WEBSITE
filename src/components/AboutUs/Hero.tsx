import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import AboutUsHero from "../../assets/aboutUs/aboutUsHero.svg";

const Hero: React.FC = () => {
    return (
        <Box width="100%" height="100%" position="relative">
            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: { md: "space-around" },
                pl: { md: "120px", lg: "150px" },
                pr: { md: "90px", lg: "150px" },
                pt: { xs: "0px", md: "0px" },
                textAlign: { xs: "center", md: "start" },
                gap: { xs: "0px", md: "30px" }
            }}>
                <Stack sx={{
                    justifyContent: "center",
                    alignItems: { xs: "center", md: "flex-start" },
                    gap: "35px",
                    width: { xs: "100%", md: "45%" },
                    pt:{xs:"100px",md:"0px"}
                }}>
                    <Typography variant="h5" fontWeight={"700"} lineHeight={"24px"} color="secondary" >ABOUT COMPANY</Typography>
                    <Typography variant="h1" fontWeight={"700"} color="secondary"
                        sx={{
                            fontSize: { xs: "40px", md: "45px", lg: "58px" },
                            lineHeight: { sx: "40px", md: "60px", lg: "80px" }
                        }}
                    >ABOUT US</Typography>
                    <Typography variant="h4" lineHeight={"30px"} color="gray" sx={{ width: "70%" }}>We know how large objects will act,
                        but things on a small scale</Typography>
                    <Button
                        sx={{
                            color: "#FFFFFF",
                            backgroundColor: "#23A6F0",
                            p: "15px 40px",
                            whiteSpace: "nowrap",
                            minWidth: "fit-content",
                            width: "fit-content",
                            alignSelf: { xs: "center", md: "flex-start" },
                        }}
                    >
                        Get Quote Now
                    </Button>
                </Stack>

                <Box
                    sx={{
                        height: "auto",
                        overflow: "visible",
                        p: { xs: "60px 15px 15px 15px", sm: "60px 15px 15px 15px",md:"0" },
                        display: "flex",
                        justifyContent: "center", 
                    }}
                >
                    <img
                        src={AboutUsHero}
                        alt=""
                        style={{
                            objectFit: "cover",
                            width: "600px",
                            height: "auto",
                            display: "block"
                        }}
                    />
                </Box>

            </Box>
        </Box >
    )
}

export default Hero
