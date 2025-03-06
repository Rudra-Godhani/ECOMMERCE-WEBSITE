import {
    Avatar,
    Box,
    Button,
    Drawer,
    IconButton,
    InputAdornment,
    List,
    Menu,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MyProfile from "./MyProfile";
import UpdateProfile from "./UpdateProfile";
import UpdatePassword from "./UpdatePassword";
import MyOrders from "./MyOrders";
import Logout from "./Logout";
import FilterListIcon from "@mui/icons-material/FilterList";
import EastIcon from "@mui/icons-material/East";
import ManageAccount from "./ManageAccount";

interface ProfileSettingsProps {
    selectedTab: string;
    setSelectedTab: Dispatch<SetStateAction<string>>;
}
const ProfileSettings: React.FC<ProfileSettingsProps> = ({
    selectedTab,
    setSelectedTab,
}) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open: boolean) => {
        console.log("hello");
        setDrawerOpen(open);
    };
    return (
        <>
            <Box sx={{ px: "20px" }}>
                <Box
                    sx={{
                        display: { xs: "inline-flex", md: "none" },
                        justifyContent: "flex-start",
                        backgroundColor: "#000000",
                        color: "#FFFFFF",
                        width: "auto",
                        mb: "20px",
                        borderRadius: "50%",
                    }}
                >
                    <IconButton
                        size="large"
                        onClick={() => toggleDrawer(true)}
                        color="inherit"
                    >
                        <EastIcon />
                    </IconButton>
                </Box>
                {selectedTab === "My Profile" && <MyProfile />}
                {selectedTab === "Update Profile" && <UpdateProfile />}
                {selectedTab === "Update Password" && <UpdatePassword />}
                {selectedTab === "My Orders" && <MyOrders />}
                {selectedTab === "Logout" && <Logout />}
            </Box>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => toggleDrawer(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: "80%",
                        maxWidth: "300px",
                        p: "20px",
                    },
                }}
            >
                <ManageAccount
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                    toggleDrawer={toggleDrawer}
                />
            </Drawer>
        </>
    );
};

export default ProfileSettings;
