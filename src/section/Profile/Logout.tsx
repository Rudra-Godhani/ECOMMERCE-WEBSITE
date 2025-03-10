import { Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/Slices/authSlice";

const Logout: React.FC = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <Stack>
            <Stack>
                <Typography
                    variant="h4"
                    fontWeight={"700"}
                    pb="30px"
                    onClick={() => handleLogout()}
                >
                    Logout
                </Typography>
            </Stack>
        </Stack>
    );
};

export default Logout;
