import React, { useState } from "react";
import ShopCarousel from "../../section/ProductListing/ShopCarousel";
import Products from "../../section/ProductListing/Products";

const ProductListing: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    return (
        <>
            <ShopCarousel setSelectedCategory={setSelectedCategory} />
            <Products
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
        </>
    );
};

export default ProductListing;
