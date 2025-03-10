import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const TopCompanies: React.FC = () => {
    return (
        <Box sx={{backgroundColor:"#FAFAFA"}}>
            <Stack textAlign={"center"} gap="30px" alignItems={"center"} sx={{p:"80px 0 24px 0"}}>
                <Typography variant='h2' sx={{ fontSize: "40px",p:{xs:"0 20px",sm:""} }} color="secondary">Big Companies Are Here</Typography>
                <Typography variant='h6' color="gray" sx={{ width: { xs: "70%", sm: "50%" } }}>Problems trying to resolve the conflict between 
                the two major realms of Classical physics: Newtonian mechanics </Typography>
            </Stack>
        </Box>
    )
}

export default TopCompanies
