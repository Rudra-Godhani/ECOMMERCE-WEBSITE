import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout: React.FC = () => {
    const { pathname } = useLocation();

    const hiddenLayoutPaths = [
        "/login",
        "/signup",
        "/forgotPassword",
        "/resetPassword/:token",
    ];
    const hideLayout = hiddenLayoutPaths.some((path) =>
        path.includes(":")
            ? pathname.startsWith(path.split(":")[0])
            : pathname === path
    );

    return (
        <>
            {!hideLayout && <Navbar />}
            <Outlet />
            {!hideLayout && <Footer />}
        </>
    );
};

export default Layout;
