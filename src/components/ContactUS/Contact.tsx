import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { footerData } from '../../Data'
import heroFirst1 from "../../assets/hero-1.jpg";

const Contact: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${heroFirst1})`,
                backgroundSize: "cover",
                backgroundPosition: { xs: "center bottom", sm: "top 10%", md: "top" },
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: { sm: "100%", md: "100vh" },
                position: "relative",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    zIndex: 1
                }}
            />

            <Box sx={{
                position: "relative",
                zIndex: 2,
                display: { xs: "", sm: "column", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                pt: { xs: "112px", md: "0px" },
                pb: "20px"
            }}>
                <Stack gap="35px" sx={{ width: { sm: "100%", md: "497px" }, textAlign: { xs: "center", md: "start" }, pb: { xs: "50px", md: "0" }, pl: { md: "40px", lg: "0" } }}>
                    <Typography variant='h2' fontSize={"40px"} fontWeight={"700"} color='white'>CONTACT US</Typography>
                    <Typography variant='body2' fontSize={"14px"} fontWeight={"400"} color='white' sx={{ width: { xs: "70%", md: "70%" }, mx: { xs: "auto", md: "0px" } }}>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </Typography>
                    <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=rudragodhani04@gmail.com" target="_blank">
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
                            CONTACT US
                        </Button>
                    </Link>
                </Stack>
                <Box>
                    <Box display={"grid"} gridTemplateColumns={"repeat(auto-fit,minmax(243px,1fr))"} sx={{ width: { xs: "100%", sm: "100%", md: "516px" }, px: { xs: "0px", ms: "0px" } }}>
                        {
                            footerData.map((data,index) => (
                                <Stack key={index} p="25px" gap="16px">
                                    <Typography variant='h3' fontSize={"24px"} fontWeight={"700"} color='white'>{data.city}</Typography>
                                    <Typography variant='h4' fontSize={"20px"} fontWeight={"400"} color='white'>{data.street}</Typography>
                                    <Box width="58px" border={"2px solid #23A6F0"}></Box>
                                    <Typography variant='h5' fontSize={"16px"} fontWeight={"700"} color='white'>{data.no}</Typography>
                                    <Typography variant='h5' fontSize={"16px"} fontWeight={"700"} color='white'>Phone : {data.mobileNo}</Typography>
                                    <Typography variant='h5' fontSize={"16px"} fontWeight={"700"} color='white'>Fax : {data.fax}</Typography>
                                </Stack>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact
