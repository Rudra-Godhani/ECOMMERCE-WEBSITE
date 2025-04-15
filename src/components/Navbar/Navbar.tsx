import React, { useEffect } from "react";
import SocialNavbar from "./SocialNavbar";
import MainNavbar from "./MainNavbar";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { getCart } from "../../store/Slices/CartSlice";
import { getWishList } from "../../store/Slices/WishListSlice";

const Navbar: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getCart());
        dispatch(getWishList());
    }, [dispatch]);
    return (
        <>
            <SocialNavbar />
            <MainNavbar />
        </>
    );
};

export default Navbar;
