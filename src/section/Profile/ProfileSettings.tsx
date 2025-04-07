import {
    Box,
    Drawer,
    IconButton,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import MyProfile from "./MyProfile";
import UpdateProfile from "./UpdateProfile";
import UpdatePassword from "./UpdatePassword";
import MyOrders from "./MyOrders";
import EastIcon from "@mui/icons-material/East";
import ManageAccount from "./ManageAccount";
import ManageAddress from "./ManageAddress";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { getUserAddresses } from "../../store/Slices/addressSlice";

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

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUserAddresses());
    },[dispatch]);

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
                {selectedTab === "Manage Address" && <ManageAddress />}
                {selectedTab === "Update Password" && <UpdatePassword />}
                {selectedTab === "My Orders" && <MyOrders />}   
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
