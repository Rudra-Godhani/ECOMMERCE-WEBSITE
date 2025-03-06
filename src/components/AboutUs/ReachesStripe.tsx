import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ReachesStripe = () => {
    return (
        <Box>
            <Box sx={{display:"flex", flexDirection: {xs:"column",sm:"row"},justifyContent:"space-between", gap: {xs:"100px",sm:"30px"},p:{xs:"80px 40px",sm:"80px 20px"} }} maxWidth={"1050px"} mx="auto">
                <Stack textAlign={"center"}>
                    <Typography variant="h1" fontWeight={"700"} color="secondary"
                        sx={{
                            fontSize: { xs: "40px", md: "45px", lg: "58px" },
                            lineHeight: { sx: "40px", md: "60px", lg: "80px" }
                        }}
                    >15K</Typography>
                    <Typography variant='h5' color="gray">Happy Customers</Typography>
                </Stack>
                <Stack textAlign={"center"}>
                    <Typography variant="h1" fontWeight={"700"} color="secondary"
                        sx={{
                            fontSize: { xs: "40px", md: "45px", lg: "58px" },
                            lineHeight: { sx: "40px", md: "60px", lg: "80px" }
                        }}
                    >150K</Typography>
                    <Typography variant='h5' color="gray">Monthly Visitors</Typography>
                </Stack>
                <Stack textAlign={"center"}>
                    <Typography variant="h1" fontWeight={"700"} color="secondary"
                        sx={{
                            fontSize: { xs: "40px", md: "45px", lg: "58px" },
                            lineHeight: { sx: "40px", md: "60px", lg: "80px" }
                        }}
                    >15</Typography>
                    <Typography variant='h5' color="gray">Countries  Worldwide</Typography>
                </Stack>
                <Stack textAlign={"center"}>
                    <Typography variant="h1" fontWeight={"700"} color="secondary"
                        sx={{
                            fontSize: { xs: "40px", md: "45px", lg: "58px" },
                            lineHeight: { sx: "40px", md: "60px", lg: "80px" }
                        }}
                    >100+</Typography>
                    <Typography variant='h5' color="gray">Top Partners</Typography>
                </Stack>
            </Box>
        </Box>
    )
}

export default ReachesStripe
