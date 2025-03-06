import { ArrowForwardIos } from "@mui/icons-material";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ManageAccount from "./ManageAccount";
import ProfileSettings from "./ProfileSettings";

const ProfileDetails: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<string>("My Profile");
    return (
        <Box>
            <Box sx={{ backgroundColor: "#FAFAFA" }}>
                <Stack
                    sx={{
                        flexDirection: { xs: "column", sm: "row" },
                        textAlign: { xs: "center", sm: "start" },
                        gap: { xs: "30px", sm: "0" },
                        py: { xs: "40px", sm: "30px" },
                        px: { xs: "0", sm: "20px", md: "20px", lg: "0" },
                    }}
                    maxWidth={"1050px"}
                    mx={"auto"}
                    direction={"row"}
                    justifyContent={"space-between"}
                >
                    <Typography variant="h3" color="secondary">
                        My Profile
                    </Typography>
                    <Stack
                        gap={"15px"}
                        direction={"row"}
                        sx={{
                            justifyContent: { xs: "center", sm: "start" },
                            alignItems: { xs: "center", sm: "start" },
                        }}
                    >
                        <Link to="/">
                            <Typography
                                variant="h6"
                                color="secondary"
                                fontWeight={"700"}
                            >
                                Home
                            </Typography>
                        </Link>
                        <ArrowForwardIos fontSize="small" htmlColor="#BDBDBD" />
                        <Typography
                            variant="h6"
                            color="#BDBDBD"
                            fontWeight={"700"}
                        >
                            Profile
                        </Typography>
                    </Stack>
                </Stack>
            </Box>

            <Box sx={{ py: "48px" }} maxWidth={"1100px"} mx={"auto"}>
                <Grid container>
                    <Grid
                        item
                        sx={{
                            flexBasis: "40%",
                            flexGrow: 0,
                            maxWidth: "40%",
                            display: { xs: "none", md: "block" },
                        }}
                    >
                        <ManageAccount
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                        />
                    </Grid>
                    <Grid
                        item
                        sx={{
                            flexBasis: { xs: "100%", md: "60%" },
                            flexGrow: 1,
                            maxWidth: { xs: "100%", md: "60%" },
                        }}
                    >
                        <ProfileSettings
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ProfileDetails;
