import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const WebsiteDetail: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: "" }}>
            <Box maxWidth={"1050px"} mx="auto" sx={{ display:"flex", flexDirection: { xs: "column", sm: "row" },alignItems:"center", gap: {sm: "30px", md:"60px"},p:{xs:"80px 20px",sm:"24px 20px"},textAlign:{xs:"center",sm:"start"} }}>
                <Stack sx={{gap:"24px",py:"24px",width:{xs:"100%",sm:"394px"}}}>
                    <Typography variant='h6' color="#E74040">Problems trying</Typography>
                    <Typography variant='h3' color="secondary" sx={{px:{xs:"50px",sm:"0"}}}>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</Typography>
                </Stack>
                <Typography variant='h6' color="gray" sx={{width:{xs:"100%",sm:"529px"},pt:{xs:"60px",sm:"0"},px:{xs:"35px",sm:"0"}}}>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.</Typography>
            </Box>
        </Box>
    )
}

export default WebsiteDetail
