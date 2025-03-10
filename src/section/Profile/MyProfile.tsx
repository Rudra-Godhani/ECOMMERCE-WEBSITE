import { Avatar, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { profilePicture } from "../../assets";

const MyProfile: React.FC = () => {
    return (
        <Stack>
            <Stack>
                <Typography variant="h4" fontWeight={"700"} pb="30px">
                    My Profile
                </Typography>
            </Stack>
            <Stack gap={"20px"}>
                <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    pb={"20px"}
                >
                    <Avatar
                        alt="Remy Sharp"
                        src={profilePicture}
                        sx={{ width: "150px", height: "150px" }}
                    />
                </Stack>
                <Stack gap={"15px"}>
                    <Typography variant="h4">Name</Typography>
                    <TextField
                        value="Tom David"
                        disabled
                        InputProps={{
                            sx: {
                                fontSize: "18px",
                                backgroundColor: "#f0f0f0",
                                "& .MuiInputBase-input": {
                                    padding: "10px",
                                    WebkitTextFillba: "blue",
                                },
                                "&.Mui-disabled .MuiInputBase-input": {
                                    WebkitTextFillColor: "black",
                                },
                            },
                        }}
                        fullWidth
                    />
                </Stack>
                <Stack gap={"15px"}>
                    <Typography variant="h4">Email Address</Typography>
                    <TextField
                        value="tom34@gmail.com"
                        disabled
                        InputProps={{
                            sx: {
                                fontSize: "18px",
                                backgroundColor: "#f0f0f0",
                                "& .MuiInputBase-input": {
                                    padding: "10px",
                                    WebkitTextFillba: "blue",
                                },
                                "&.Mui-disabled .MuiInputBase-input": {
                                    WebkitTextFillColor: "black",
                                },
                            },
                        }}
                        fullWidth
                    />
                </Stack>
                <Stack gap={"15px"}>
                    <Typography variant="h4">Phone Number</Typography>
                    <TextField
                        value="2347857689"
                        disabled
                        InputProps={{
                            sx: {
                                fontSize: "18px",
                                backgroundColor: "#f0f0f0",
                                "& .MuiInputBase-input": {
                                    padding: "10px",
                                },
                                "&.Mui-disabled .MuiInputBase-input": {
                                    WebkitTextFillColor: "black",
                                },
                            },
                        }}
                    />
                </Stack>
                <Stack gap={"15px"}>
                    <Typography variant="h4">Address</Typography>
                    <TextField
                        value="India"
                        disabled
                        InputProps={{
                            sx: {
                                fontSize: "18px",
                                backgroundColor: "#f0f0f0",
                                "& .MuiInputBase-input": {
                                    padding: "10px",
                                },
                                "&.Mui-disabled .MuiInputBase-input": {
                                    WebkitTextFillColor: "black",
                                },
                            },
                        }}
                        fullWidth
                    />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default MyProfile;
