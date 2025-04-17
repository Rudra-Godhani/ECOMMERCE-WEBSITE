import React from "react";
import CartData from "../../section/ShoppingCart/CartData";
import CartTotal from "../../section/ShoppingCart/CartTotal";

const ShoppingCart: React.FC = () => {
    return (
        <>
            <CartData />
            <CartTotal />
        </>
    );
};

export default ShoppingCart;
