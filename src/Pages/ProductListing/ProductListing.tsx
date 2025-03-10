import React from "react";
import ShopCarousel from "../../section/ProductListing/ShopCarousel";
import Products from "../../section/ProductListing/Products";

const ProductListing: React.FC = () => {
    return (
        <>
            <ShopCarousel />
            <Products />
        </>
    );
};

export default ProductListing;
