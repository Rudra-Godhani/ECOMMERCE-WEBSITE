import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Home/Footer";
import ProfileDetails from "../../components/Profile/ProfileDetails";

const Profile: React.FC = () => {
    return (
        <>
            <Navbar />
            <ProfileDetails />
            <Footer />
        </>
    );
};

export default Profile;
