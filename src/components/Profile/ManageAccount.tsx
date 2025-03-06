import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    IconButton,
    Slider,
    Stack,
    Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import WestIcon from "@mui/icons-material/West";

const tabs: string[] = [
    "My Profile",
    "Update Profile",
    "Update Password",
    "My Orders",
    "Logout",
];

interface ManageAccountProps {
    selectedTab: string;
    setSelectedTab: Dispatch<SetStateAction<string>>;
    toggleDrawer?: (open: boolean) => void;
}

const ManageAccount: React.FC<ManageAccountProps> = ({
    selectedTab,
    setSelectedTab,
    toggleDrawer,
}) => {
    return (
        <Box px="20px">
            <Stack direction={"row"}>
                <Typography
                    variant="h3"
                    fontWeight={"700"}
                    color="#000000"
                    pb="30px"
                >
                    Manage Account
                </Typography>
                {toggleDrawer && (
                    <Box
                        sx={{
                            display: { xs: "inline-flex", md: "none" },
                            justifyContent: "flex-end",
                            backgroundColor: "#000000",
                            color: "#FFFFFF",
                            width: "auto",
                            height: "48px",
                            mb: "20px",
                            borderRadius: "50%",
                        }}
                    >
                        <IconButton
                            size="large"
                            onClick={() => {
                                toggleDrawer(false);
                            }}
                            color="inherit"
                        >
                            <WestIcon />
                        </IconButton>
                    </Box>
                )}
            </Stack>
            <Box>
                <Stack>
                    <Stack pb="12px" gap={"20px"}>
                        {tabs.map((tab) => (
                            <Box sx={{ cursor: "pointer" }}>
                                <Typography
                                    variant="h4"
                                    color="gray"
                                    onClick={() => setSelectedTab(tab)}
                                    fontWeight={
                                        selectedTab === tab ? "700" : " 400"
                                    }
                                >
                                    {tab}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
};

export default ManageAccount;
