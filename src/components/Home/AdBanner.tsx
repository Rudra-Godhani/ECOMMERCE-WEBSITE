import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import adBanner from "../../assets/adbanner.svg";

const AdBanner: React.FC = () => {
    return (
        <Box sx={{ maxWidth: "1300px", mx: "auto", pt: { xs: "120px", md: "0px" } }}>
            <Stack width={"100%"} height={"100%"} sx={{
                gap: { sx: "30px", sm: "30px", md: "80px" },
                display: "flex",
                flexDirection: { xs: "column-reverse", sm: "row", md: "row" },
                textAlign: { xs: "center", sm: "start" }
            }}>
                <Box sx={{ p: "0px 0px ", width: { xs: "100%", sm: "50%" }, height: "auto", overflow: "hidden" }}>
                    <img src={adBanner} alt="" style={{ objectFit: "cover", width: "100%", height: "100%", display: "block" }} />
                </Box>
                <Box display={"flex"} alignItems={"center"} sx={{ width: { xs: "100%", sm: "50%" }, p: { xs: "0 50px", sm: "0" } }} height={"auto"}>
                    <Stack spacing={3.75} sx={{ width: { xs: "100%", sm: "90%", md: "70%" } }}>
                        <Typography variant='h5' fontWeight={"700"} fontSize={"16px"} color="#BDBDBD">SUMMER 2020</Typography>
                        <Typography variant='h2' fontWeight={"700"} fontSize={"40px"} lineHeight="50px" color="secondary">Part of the Neural
                            Universe</Typography>
                        <Typography variant='h4' fontWeight={"400"} fontSize={"20px"} lineHeight="30px" color="gray">We know how large objects will act,
                            but things on a small scale.</Typography>
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: { xs: "25px", sm: "10px" }, justifyContent: "center", alignItems: "center" }}>
                            <Button sx={{ color: "#FFFFFF", backgroundColor: "#2DC071", p: "15px 40px", whiteSpace: "nowrap" }}>BUT NOW</Button>
                            <Button variant='outlined' sx={{ color: "#2DC071", borderRadius: "5px", border: "1px solid #2DC071", p: "15px 40px", whiteSpace: "nowrap" }}>Read More</Button>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default AdBanner
