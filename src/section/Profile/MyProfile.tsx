import { Avatar, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";

const MyProfile: React.FC = () => {
    const { user } = useSelector((state: RootState) => state.user);

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
                        src={user?.profileImage.url}
                        sx={{
                            width: "150px",
                            height: "150px",
                            bgcolor: user?.profileImage?.url
                                ? "transparent"
                                : "#ccc",
                            fontSize: "80px",
                            color: "#fff",
                        }}
                    >
                        {" "}
                        {!user?.profileImage?.url &&
                            user?.name?.[0]?.toUpperCase()}
                    </Avatar>
                </Stack>
                <Stack gap={"15px"}>
                    <Typography variant="h4">Name</Typography>
                    <TextField
                        value={user?.name}
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
                        value={user?.email}
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
                {user?.phoneNumber != null && (
                    <Stack gap={"15px"}>
                        <Typography variant="h4">Phone Number</Typography>
                        <TextField
                            value={user?.phoneNumber}
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
                )}
                {user?.address !== "" && (
                    <Stack gap={"15px"}>
                        <Typography variant="h4">Address</Typography>
                        <TextField
                            value={user?.address}
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
                )}
            </Stack>
        </Stack>
    );
};

export default MyProfile;
