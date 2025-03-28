import React, { useEffect } from "react";
import CartData from "../../section/ShoppingCart/CartData";
import CartTotal from "../../section/ShoppingCart/CartTotal";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { getCart } from "../../store/Slices/CartSlice";

const ShoppingCart: React.FC = () => {
    const dispacth = useDispatch<AppDispatch>();
    useEffect(() => {
        dispacth(getCart());
    }, [dispacth]);
    return (
        <>
            <CartData />
            <CartTotal />
        </>
    );
};

export default ShoppingCart;
