import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import {
    addProductToCart,
    CartItem,
    removeProductFromCart,
} from "../../store/Slices/CartSlice";
import { toast } from "react-toastify";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
    addToWishlist,
    removeFromWishlist,
} from "../../store/Slices/WishListSlice";
import { RootState } from "../../store/store";
import { Product } from "../../data/allProductsData";
import ProductImageSlider from "./ProductImageSlider";

interface ProductProps {
    product: Product;
}

const ProductInfo: React.FC<ProductProps> = ({ product }) => {

    if (!product) {
        return (
            <Typography variant="h4" color="error">
                Product not found
            </Typography>
        );
    }

    const [selectedColor, setSelectedColor] = useState(product.colors[0]);

    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart);
    const wishlist = useSelector((state: RootState) => state.wishlist);

    const handleAddRemoveProduct = (product: Product) => {
        if (cart.some((p: CartItem) => p.id === product.id)) {
            dispatch(removeProductFromCart(product.id));
            toast.error("Product Removed From Cart");
        } else {
            const cartItem: CartItem = {
                id: product.id,
                title: product.title,
                description: product.descriptionSmall,
                price: product.price,
                quantity: 1,
                image: product.images[0],
                color: selectedColor,
                availability: product.availability,
                rating: product.rating,
                brand: product.brand,
                category: product.category,
            };

            dispatch(addProductToCart(cartItem));
            toast.success("Product Added To Cart");
        }
    };

    const handleFavorite = (product: Product) => {
        const productToAdd = { ...product, selectedColor };
        if (!wishlist.some((p: Product) => p.id === product.id)) {
            dispatch(addToWishlist(productToAdd));
            toast.success("Product Added To WishList");
        } else {
            console.log("removed wishlist");
            dispatch(removeFromWishlist(product.id));
            toast.error("Product Removed From WishList");
        }
    };

    useEffect(() => {
        setSelectedColor(product.colors[0]);
    }, [product]);
    return (
        <Box>
            <Box sx={{ backgroundColor: "#FAFAFA" }}>
                <Stack
                    maxWidth={"1050px"}
                    mx={"auto"}
                    py={"24px"}
                    direction={"row"}
                    gap={"15px"}
                    sx={{
                        justifyContent: { xs: "center", sm: "start" },
                        pl: { xs: "0px", sm: "20px", md: "0" },
                        alignItems: { xs: "center", sm: "start" },
                    }}
                >
                    <Link to="/">
                        <Typography
                            variant="h6"
                            color="secondary"
                            fontWeight={"700"}
                        >
                            Home
                        </Typography>
                    </Link>
                    <ArrowForwardIos fontSize="small" htmlColor="#BDBDBD" />
                    <Typography variant="h6" color="#BDBDBD" fontWeight={"700"}>
                        Shop
                    </Typography>
                </Stack>
            </Box>
            <Box sx={{ backgroundColor: "#FAFAFA" }}>
                <Box key={product.id}>
                    <Box
                        sx={{
                            gap: { xs: "30px", sm: "10px", md: "30px" },
                            pb: "48px",
                            pt: { xs: "48px", sm: "0px", md: "0px" },
                            px: { xs: "33px", sm: "20px", md: "0", lg: "0" },
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            maxWidth: { xs: "100%", sm: "1050px" },
                            mx: "auto",
                        }}
                    >
                        <ProductImageSlider product={product} />

                        <Stack
                            sx={{
                                width: { xs: "100%", sm: "50%", md: "60%" },
                                p: { xs: "12px", sm: "24px" },
                            }}
                            height={"100%"}
                        >
                            <Typography
                                variant="h4"
                                color="secondary"
                                pb={"12px"}
                            >
                                {product.title}
                            </Typography>
                            <Stack direction={"row"} gap={"10px"}>
                                <Rating
                                    name="half-rating"
                                    defaultValue={2.5}
                                    precision={0.1}
                                    sx={{ pb: "20px" }}
                                    value={product.rating}
                                />
                                <Typography
                                    variant="h6"
                                    color="gray"
                                    fontWeight={"700"}
                                >
                                    {product.noOfReviews} Reviews
                                </Typography>
                            </Stack>
                            <Typography
                                variant="h3"
                                color="secondary"
                                pb={"5px"}
                            >
                                ${product.price}
                            </Typography>
                            <Stack direction={"row"} pb={"32px"}>
                                <Typography
                                    variant="h6"
                                    fontWeight={"700"}
                                    color="gray"
                                >
                                    Availability :{" "}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    fontWeight={"700"}
                                    color="lightBlue"
                                >
                                    {product.availability
                                        ? "In Stock"
                                        : "Out Of Stock"}
                                </Typography>
                            </Stack>
                            <Typography variant="h6" color="#858585">
                                {product.descriptionSmall}
                            </Typography>
                            <hr
                                color="#BDBDBD"
                                style={{ margin: "28px 0px" }}
                            />
                            <Stack
                                spacing={1.25}
                                direction={"row"}
                                sx={{ pb: { xs: "58px", sm: "68px" } }}
                            >
                                {product.colors.map(
                                    (color: string, index: number) => (
                                        <Box
                                            key={index}
                                            position="relative"
                                            width={"30px"}
                                            height={"30px"}
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                            onClick={() =>
                                                setSelectedColor(color)
                                            }
                                        >
                                            {selectedColor === color && (
                                                <Box
                                                    sx={{
                                                        position: "absolute",
                                                        width: "40px",
                                                        height: "40px",
                                                        borderRadius: "50%",
                                                        border: "3px solid #7fff00",
                                                    }}
                                                />
                                            )}
                                            <Box
                                                sx={{
                                                    backgroundColor: color,
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: "50%",
                                                }}
                                            ></Box>
                                        </Box>
                                    )
                                )}
                            </Stack>
                            <Stack
                                sx={{
                                    gap: { xs: "10px", sm: "5px", md: "10px" },
                                    flexDirection: {
                                        xs: "row",
                                    },
                                }}
                            >
                                <Button
                                    sx={{
                                        color: "#FAFAFA",
                                        backgroundColor: "#23A6F0",
                                        p: { xs: "10px 10px", sm: "10px 20px" },
                                        whiteSpace: "nowrap",
                                        minWidth: "fit-content",
                                        width: "fit-content",
                                        alignSelf: "flex-start",
                                    }}
                                    onClick={() =>
                                        handleAddRemoveProduct(product)
                                    }
                                >
                                    {cart.some(
                                        (p: CartItem) => p.id === product.id
                                    )
                                        ? "Remove From Cart"
                                        : "Add to Cart"}
                                </Button>
                                <Box
                                    key="favorite-icon"
                                    width={"40px"}
                                    height={"40px"}
                                    border={"1px solid #E8E8E8"}
                                    borderRadius={"50%"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    display={"flex"}
                                    onClick={() => handleFavorite(product)}
                                >
                                    {wishlist.some(
                                        (p: Product) => p.id === product.id
                                    ) ? (
                                        <FavoriteIcon
                                            fontSize="medium"
                                            sx={{ color: "red" }}
                                        />
                                    ) : (
                                        <FavoriteBorderIcon fontSize="medium" />
                                    )}
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductInfo;
