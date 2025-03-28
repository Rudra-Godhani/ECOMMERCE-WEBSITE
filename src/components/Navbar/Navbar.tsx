import React, { useEffect } from "react";
import SocialNavbar from "./SocialNavbar";
import MainNavbar from "./MainNavbar";
import { useDispatch } from "react-redux";
import { getCart } from "../../store/Slices/CartSlice";
import { AppDispatch } from "../../store/store";

const Navbar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
      dispatch(getCart());
    });
    return (
        <>
            <SocialNavbar />
            <MainNavbar />
        </>
    );
};

export default Navbar;
