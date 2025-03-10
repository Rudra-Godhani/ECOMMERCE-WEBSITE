import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box, CssBaseline, Container } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer"; // Loading component for better UX

const Layout: React.FC = () => {
    const { pathname } = useLocation();

    // Paths where Navbar & Footer should be hidden
    const hiddenLayoutPaths = ["/login", "/signup"];
    const hideLayout = hiddenLayoutPaths.includes(pathname);

    return (
        <>
            {!hideLayout && <Navbar />}
            <Outlet />
            {!hideLayout && <Footer />}
        </>
    );
};

export default Layout;
