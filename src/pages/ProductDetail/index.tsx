import React, { useEffect } from "react";
import BestSellerProducts from "../../section/ProductDetails/BestSellerProducts";
import BrandsStrip from "../../components/BrandsStrip";
import ProductAddInfo from "../../section/ProductDetails/ProductAddInfo";
import { useParams } from "react-router-dom";
import ProductInfo from "../../section/ProductDetails/ProductInfo";
import { Box, Button, Typography } from "@mui/material";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../store/Slices/productSlice";

const ProductDetails: React.FC = () => {
    const { id } = useParams();

    const { product, loading, error } = useSelector(
        (state: RootState) => state.product
    );

    const dispatch = useDispatch<AppDispatch>();

    if (id) {
        useEffect(() => {
            dispatch(getSingleProduct({ productId: id }));
        }, [id, dispatch]);
    }

    if (!loading && error) {
        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "50vh",
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h5"
                    fontWeight="700"
                    color="error"
                    sx={{ mb: 2 }}
                >
                    Failed to load product details. Please check your connection
                    or try again.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => window.location.reload()}
                >
                    Refresh
                </Button>
            </Box>
        );
    }

    if (!loading && !error && !product) {
        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "50vh",
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h5"
                    fontWeight="700"
                    color="textSecondary"
                    sx={{ mb: 2 }}
                >
                    Product not found.
                </Typography>
            </Box>
        );
    }

    return (
        <>
            <ProductInfo />
            <ProductAddInfo />
            <BestSellerProducts />
            <BrandsStrip />
        </>
    );
};

export default ProductDetails;
