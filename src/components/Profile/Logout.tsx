import { Stack, Typography } from "@mui/material";
import React from "react";

const Logout:React.FC = () => {
    return (
        <Stack>
            <Stack>
                <Typography variant="h4" fontWeight={"700"} pb="30px">
                    Logout
                </Typography>
            </Stack>
        </Stack>
    );
};

export default Logout;
