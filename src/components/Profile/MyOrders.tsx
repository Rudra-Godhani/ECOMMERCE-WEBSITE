import { Stack, Typography } from "@mui/material";
import React from "react";

const MyOrders:React.FC = () => {
    return (
        <Stack>
            <Stack>
                <Typography variant="h4" fontWeight={"700"} pb="30px">
                    My Orders
                </Typography>
            </Stack>
        </Stack>
    );
};

export default MyOrders;
