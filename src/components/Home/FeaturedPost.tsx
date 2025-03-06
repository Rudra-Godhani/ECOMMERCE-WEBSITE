import { Box, Card, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { featuredData, featuredPostData } from '../../Data'
import { NavLink } from 'react-router-dom'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const FeaturedPost: React.FC = () => {
    return (
        <Box sx={{ p: { xs: "80px 0", sm: "112px 0" }, pl: { xs: "35px", md: "0" }, pr: { xs: "35px", md: "0" } }}>
            <Box sx={{ margin: "auto", p: "0", maxWidth: "1050px" }}>
                <Stack sx={{ textAlign: "center", p: { xs: "0px 30px 80px 30px", sm: "0px 0px 80px 0px" }, }} spacing={1.25} >
                    <Typography variant='h6' color="lightBlue" fontWeight={"700"} fontSize={"14px"}>
                        Practice Advice
                    </Typography>
                    <Typography variant='h2' color="secondary" fontWeight={"700"} fontSize={"40px"} >
                        Featured Posts
                    </Typography>
                    <Typography variant='body2' color="gray" fontWeight={"400"} >
                        Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics
                    </Typography>
                </Stack>

                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: {xs: "repeat(auto-fit, minmax(200px, 1fr))", sm: "repeat(auto-fit, minmax(300px, 1fr))"},
                    p: "0px 0px",
                    // justifyContent: "center",
                    gap: { xs: "30px", sm: "10px" }
                }}>
                    {
                        featuredPostData.map((item,index) => (
                            <Box key={index} sx={{ width: "100%", margin: "0 auto" }}>
                                <Box sx={{ p: "0px 0px ", width: "100%", height: "auto", overflow: "hidden" }}>
                                    <img src={item.img} alt={item.title} style={{ objectFit: "cover", width: "100%", height: "100%",display:"block" }} />
                                </Box>
                                <Card sx={{ margin: "0", padding: "0",borderRadius:"0px",borderBottomLeftRadius:"2px" ,borderBottomRightRadius:"2px"}}>
                                    <Stack sx={{ p: "35px 25px", gap: "10px" }}>
                                        <Stack direction={"row"} spacing={1.3}>
                                            <NavLink to="/google" style={({ isActive }) => ({
                                                textDecoration: "none",
                                            })}>
                                                {({ isActive }) => (
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: isActive ? "#8EC2F2" : "#737373", // Active color applied here
                                                        }}
                                                        fontWeight={400}
                                                        fontSize="12px"
                                                    >
                                                        Google
                                                    </Typography>
                                                )}
                                            </NavLink>
                                            <NavLink to="/trending" style={({ isActive }) => ({
                                                textDecoration: "none",
                                            })}>
                                                {({ isActive }) => (
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: isActive ? "#8EC2F2" : "#737373", // Active color applied here
                                                        }}
                                                        fontWeight={400}
                                                        fontSize="12px"
                                                    >
                                                        Trending
                                                    </Typography>
                                                )}
                                            </NavLink>
                                            <NavLink to="/new" style={({ isActive }) => ({
                                                textDecoration: "none",
                                            })}>
                                                {({ isActive }) => (
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: isActive ? "#8EC2F2" : "#737373", // Active color applied here
                                                        }}
                                                        fontWeight={400}
                                                        fontSize="12px"
                                                    >
                                                        New
                                                    </Typography>
                                                )}
                                            </NavLink>
                                        </Stack>
                                        <Typography variant='h4' color="secondary" fontWeight={"400"} fontSize={"20px"} lineHeight={"30px"}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant='body2' color="#737373" fontWeight={"400"} fontSize={"14px"} lineHeight={"20px"}>
                                            {item.description}
                                        </Typography>
                                        <Stack spacing={0.75} sx={{ p: "15px 0px", justifyContent: "space-between" }} direction={"row"}>
                                            <Stack direction={"row"} sx={{ alignItems: "center", justifyContent: "center" }} spacing={0.625}>
                                                <AccessAlarmIcon fontSize='16px' color='lightBlue' />
                                                <Typography variant='body2' color="gray" fontWeight={"400"} fontSize={"12px"}>
                                                    {item.date}
                                                </Typography>
                                            </Stack>
                                            <Stack direction={"row"} sx={{ alignItems: "center", justifyContent: "center" }} spacing={0.625}>
                                                <ShowChartIcon fontSize='16px' color="darkGreen" />
                                                <Typography variant='body2' color="gray" fontWeight={"400"} fontSize={"12px"}>
                                                    {item.comments} comments
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                        <Stack direction={"row"} sx={{ alignItems: "center" }} spacing={1.25}>
                                            <Typography variant='h6' color="gray" fontWeight={"700"} fontSize={"14px"}>
                                                Learn More
                                            </Typography>
                                            <ChevronRightIcon color="lightBlue" />
                                        </Stack>
                                    </Stack>
                                </Card>
                            </Box>
                        ))
                    }
                </Box>
            </Box >
        </Box >
    )
}

export default FeaturedPost
