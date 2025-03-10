import React from "react";
import BestSellerProducts from "../../section/ProductDetails/BestSellerProducts";
import BrandsStrip from "../../components/BrandsStrip";
import ProductAddInfo from "../../section/ProductDetails/ProductAddInfo";
import { useParams } from "react-router-dom";
import ProductInfo from "../../section/ProductDetails/ProductInfo";
import { productsData } from "../../data/allProductsData";
import { Box, Typography } from "@mui/material";

const ProductDetails: React.FC = () => {
    const { id } = useParams();
    console.log(id);

    const product = productsData.find((product) => product.id === Number(id));

    if (!product) {
        return (
            <Box sx={{ textAlign: "center", py: 5 }}>
                <Typography variant="h4" color="error">
                    Product Not Found
                </Typography>
            </Box>
        );
    }

    return (
        <>
            <ProductInfo product={product} />
            <ProductAddInfo product={product} />
            <BestSellerProducts />
            <BrandsStrip />
        </>
    );
};

export default ProductDetails;
