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
import { errorImage2 } from "../../assets";

const ProductDetails: React.FC = () => {
    const { id } = useParams();

    const { loading, error } = useSelector(
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
                    height: {
                        xs: "90vh",
                        sm: "80vh",
                    },
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        direction: "row",
                        maxWidth: { xs: "250px", sm: "300px" },
                    }}
                >
                    <img
                        src={errorImage2}
                        alt="Error illustration"
                        style={{ marginBottom: "20px" }}
                    />
                </Box>
                <Typography variant="h3" fontWeight="700" sx={{ my: 2 }}>
                    Something went wrong. Please try again.
                </Typography>
                <Button
                    variant="contained"
                    sx={{ color: "white", backgroundColor: "#23A6F0" }}
                    onClick={() => window.location.reload()}
                >
                    Refresh
                </Button>
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
