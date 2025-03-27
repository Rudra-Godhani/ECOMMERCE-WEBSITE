import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
    addProductToCart,
    CartItem,
    removeProductFromCart,
} from "../../store/Slices/Cart_Slice";
import { toast } from "react-toastify";
import {
    addToWishlist,
    removeFromWishlist,
    WishListProduct,
} from "../../store/Slices/WishList_Slice";
import { Product } from "../../data/allProductsData";

const FavoriteProducts: React.FC = () => {
    const wishListData = useSelector((state: RootState) => state.wishlist);

    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart);
    const wishlist = useSelector((state: RootState) => state.wishlist);

    const handleAddRemoveProduct = (product: WishListProduct) => {
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
                color: product.selectedColor,
                availability: product.availability,
                rating: product.rating,
                brand: product.brand,
                category: product.category,
            };

            dispatch(addProductToCart(cartItem));
            toast.success("Product Added To Cart");
        }
    };

    const handleFavorite = (product: WishListProduct) => {
        if (!wishlist.some((p: WishListProduct) => p.id === product.id)) {
            dispatch(addToWishlist(product));
            toast.success("Product Added To WishList");
        } else {
            dispatch(removeFromWishlist(product.id));
            toast.error("Product Removed From WishList");
        }
    };
    return (
        <Box>
            <Box>
                <Stack
                    maxWidth={"1050px"}
                    mx={"auto"}
                    py={"24px"}
                    direction={"row"}
                    gap={"15px"}
                    sx={{
                        justifyContent: { xs: "center", sm: "start" },
                        alignItems: { xs: "center", sm: "start" },
                        p: { xs: "50px 20px", lg: "50px 0px" },
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
                        WishList
                    </Typography>
                </Stack>
            </Box>
            <Box textAlign={"center"} pb="40px">
                <Typography
                    variant="h1"
                    color="secondary"
                    sx={{
                        display: "inline-block",
                        borderBottom: "3px solid #E9E9E9",
                        paddingBottom: "20px",
                    }}
                >
                    Your WishList
                </Typography>
            </Box>
            {wishListData.length === 0 && (
                <Typography
                    variant="h2"
                    color="textSecondary"
                    mb="40px"
                    textAlign={"center"}
                >
                    No items in wishList 😔
                </Typography>
            )}
            {wishListData.length > 0 && (
                <Box sx={{ backgroundColor: "#FAFAFA" }}>
                    <Box maxWidth={"1050px"} mx="auto">
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fit, minmax(300px, 1fr))",
                                p: "0px 0px",
                                justifyContent: "center",
                                rowGap: "24px",
                                columnGap: "30px",
                                padding: {
                                    xs: "24px 30px 48px 30px",
                                    sm: "24px 30px 48px 30px",
                                    md: "24px 30px 48px 30px",
                                    lg: "24px 0px 48px 0px",
                                },
                            }}
                        >
                            {wishListData.map((product) => (
                                <Link
                                    key={product.id}
                                    to={`/product/${product.id}/detail`}
                                >
                                    <Box
                                        sx={{
                                            width: "300px",
                                            margin: "0 auto",
                                            backgroundColor: "#FFFFFF",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                p: "0px 0px ",
                                                width: "100%",
                                                height: "auto",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <img
                                                src={product.images[0]}
                                                alt={product.title}
                                                style={{
                                                    objectFit: "cover",
                                                    width: "100%",
                                                    height: "300px",
                                                }}
                                            />
                                        </Box>
                                        <Stack
                                            sx={{
                                                textAlign: "center",
                                                pt: "25px",
                                                pb: "35px",
                                            }}
                                            spacing={1.25}
                                        >
                                            <Typography
                                                variant="h5"
                                                color="secondary"
                                                fontWeight={"700"}
                                                fontSize={"16px"}
                                            >
                                                {product.title}
                                            </Typography>
                                            <Typography
                                                variant="h3"
                                                color="gray"
                                                fontWeight={"400"}
                                                fontSize={"14px"}
                                            >
                                                {product.descriptionSmall}
                                            </Typography>
                                            <Stack
                                                spacing={0.75}
                                                sx={{
                                                    p: "5px 3px",
                                                    textAlign: "center",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                                direction={"row"}
                                            >
                                                <Typography
                                                    variant="h5"
                                                    color="#BDBDBD"
                                                    fontWeight={"700"}
                                                    fontSize={"16px"}
                                                >
                                                    ${product.price}
                                                </Typography>
                                                <Typography
                                                    variant="h5"
                                                    color="darkGreen"
                                                    fontWeight={"700"}
                                                    fontSize={"16px"}
                                                >
                                                    ${product.retailPrice}
                                                </Typography>
                                            </Stack>
                                            <Stack
                                                spacing={1.25}
                                                direction={"row"}
                                                sx={{
                                                    pb: "20px",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <Box
                                                    width={"30px"}
                                                    height={"30px"}
                                                    sx={{
                                                        backgroundColor:
                                                            product.selectedColor,
                                                        borderRadius: "50%",
                                                    }}
                                                ></Box>
                                            </Stack>
                                            <Stack
                                                sx={{
                                                    gap: {
                                                        xs: "10px",
                                                        sm: "5px",
                                                        md: "10px",
                                                    },
                                                    flexDirection: "row",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <Button
                                                    sx={{
                                                        color: "#FAFAFA",
                                                        backgroundColor:
                                                            "#23A6F0",
                                                        p: {
                                                            md: "10px 10px",
                                                            lg: "10px 20px",
                                                        },
                                                        whiteSpace: "nowrap",
                                                        minWidth: "fit-content",
                                                        width: "fit-content",
                                                        alignSelf: "flex-start",
                                                    }}
                                                    onClick={() =>
                                                        handleAddRemoveProduct(
                                                            product
                                                        )
                                                    }
                                                >
                                                    {cart.some(
                                                        (p: CartItem) =>
                                                            p.id === product.id
                                                    )
                                                        ? "Remove Item"
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
                                                    onClick={() =>
                                                        handleFavorite(product)
                                                    }
                                                >
                                                    {wishlist.some(
                                                        (p: Product) =>
                                                            p.id === product.id
                                                    ) ? (
                                                        <FavoriteIcon
                                                            fontSize="medium"
                                                            sx={{
                                                                color: "red",
                                                            }}
                                                        />
                                                    ) : (
                                                        <FavoriteBorderIcon fontSize="medium" />
                                                    )}
                                                </Box>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </Link>
                            ))}
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    );
};
export default FavoriteProducts;
