import {
    Box,
    Button,
    CircularProgress,
    IconButton,
    Skeleton,
    Stack,
    Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
    addProductToCart,
    CartItem,
    clearAllCartErrosAndMsgs,
    removeProductFromCart,
} from "../../store/Slices/CartSlice";
import { toast } from "react-toastify";
import {
    addProductToWishList,
    clearAllWishListErrosAndMsgs,
    getWishList,
    removeProductFromWishList,
    WishListItem,
} from "../../store/Slices/WishListSlice";
import { emptyBox } from "../../assets";

const FavoriteProducts: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {
        cartItems,
        loadingStates: cartLoadingStates,
        error: cartError,
        message: cartMessage,
    } = useSelector((state: RootState) => state.cart);
    const {
        wishListItems,
        getWishListLoading,
        loadingStates: wishListLoadingStates,
        error: wishListError,
        message: wishListMessage,
    } = useSelector((state: RootState) => state.wishList);

    const handleAddRemoveProduct = (id: string, color: string) => {
        if (cartItems.some((item) => item.product.id === id)) {
            dispatch(removeProductFromCart({ productId: id }));
        } else {
            dispatch(addProductToCart({ productId: id, color: color }));
        }
    };

    const handleFavorite = (id: string, color: string) => {
        if (wishListItems?.some((item) => item.product.id === id)) {
            dispatch(removeProductFromWishList({ productId: id }));
        } else {
            dispatch(addProductToWishList({ productId: id, color: color }));
        }
    };

    useEffect(() => {
        dispatch(getWishList());
    }, [dispatch]);

    useEffect(() => {
        if (cartError) {
            toast.error(cartError);
        }
        if (cartMessage) {
            toast.success(cartMessage);
        }
        dispatch(clearAllCartErrosAndMsgs());
    }, [dispatch, cartError, cartMessage]);

    useEffect(() => {
        if (wishListError) {
            toast.error(wishListError);
        }
        if (wishListMessage) {
            toast.success(wishListMessage);
        }
        dispatch(clearAllWishListErrosAndMsgs());
    }, [dispatch, wishListError, wishListMessage]);

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
            {getWishListLoading ? (
                <Box sx={{ backgroundColor: "#FAFAFA" }}>
                    <Box maxWidth={"1050px"} mx="auto">
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fit, minmax(300px, 1fr))",
                                gap: "24px",
                                padding: {
                                    xs: "24px 10px 48px 10px",
                                    md: "24px 30px 48px 30px",
                                },
                                justifyItems: "center",
                                alignItems: "center",
                            }}
                        >
                            {[...Array(6)].map((_, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: "300px",
                                        margin: "0 auto",
                                        backgroundColor: "#FFFFFF",
                                    }}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        width="100%"
                                        height={300}
                                        animation="wave"
                                    />
                                    <Stack
                                        sx={{
                                            textAlign: "center",
                                            pt: "25px",
                                            pb: "35px",
                                            px: "10px",
                                        }}
                                        spacing={1.25}
                                    >
                                        <Stack
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                        >
                                            <Skeleton
                                                variant="text"
                                                width="60%"
                                                height={30}
                                            />
                                            <Skeleton
                                                variant="text"
                                                width="80%"
                                                height={20}
                                            />
                                        </Stack>
                                        <Stack
                                            direction="row"
                                            spacing={0.75}
                                            justifyContent="center"
                                        >
                                            <Skeleton
                                                variant="text"
                                                width="60px"
                                                height={30}
                                            />
                                            <Skeleton
                                                variant="text"
                                                width="60px"
                                                height={30}
                                            />
                                        </Stack>
                                        <Stack
                                            direction="row"
                                            spacing={0.75}
                                            justifyContent="center"
                                        >
                                            {Array.from(new Array(3)).map(
                                                (_, i) => (
                                                    <Skeleton
                                                        key={i}
                                                        variant="circular"
                                                        width={25}
                                                        height={25}
                                                    />
                                                )
                                            )}
                                        </Stack>
                                        <Stack
                                            direction="row"
                                            spacing={0.75}
                                            justifyContent="center"
                                            alignItems={"center"}
                                        >
                                            <Skeleton
                                                variant="text"
                                                width="130px"
                                                height={60}
                                            />
                                            <Skeleton
                                                variant="circular"
                                                width={30}
                                                height={30}
                                            />
                                        </Stack>
                                    </Stack>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            ) : (
                <>
                    {!wishListItems || wishListItems?.length === 0 ? (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: {
                                    xs: "100%",
                                    sm: "100%",
                                },
                                textAlign: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    direction: "row",
                                    maxWidth: { xs: "300px", sm: "400px" },
                                    mt: "-90px",
                                }}
                            >
                                <img
                                    src={emptyBox}
                                    alt="Error illustration"
                                    style={{}}
                                />
                            </Box>
                            <Stack>
                                <Typography
                                    variant="h3"
                                    fontWeight="700"
                                    sx={{ mb: 2 }}
                                >
                                    Your wishlist is empty!
                                </Typography>
                                <Typography
                                    variant="h6"
                                    color="gray"
                                    fontWeight="700"
                                    sx={{ mb: 2 }}
                                >
                                    Add your favorite products to it now.
                                </Typography>
                                <Button
                                    component={Link}
                                    to="/product/listing"
                                    variant="outlined"
                                    sx={{
                                        color: "white",
                                        backgroundColor: "#23A6F0",
                                        mt: "10px",
                                        mb: "50px",
                                    }}
                                >
                                    Find Your Favorites
                                </Button>
                            </Stack>
                        </Box>
                    ) : (
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
                                    {wishListItems?.map((item) => {
                                        const isInCart = cartItems?.some(
                                            (p: CartItem) =>
                                                p.product.id ===
                                                item.product?.id
                                        );
                                        const isAddingToCart =
                                            cartLoadingStates[item.product?.id]
                                                ?.isAdding;
                                        const isRemovingFromCart =
                                            cartLoadingStates[item.product?.id]
                                                ?.isRemoving;
                                        const isLoadingCart =
                                            isAddingToCart ||
                                            isRemovingFromCart;
                                        const isInWishList =
                                            wishListItems?.some(
                                                (p: WishListItem) =>
                                                    p.product.id ===
                                                    item.product?.id
                                            );
                                        const isAddingToWishList =
                                            wishListLoadingStates[
                                                item.product?.id
                                            ]?.isAdding;
                                        const isRemovingFromWishList =
                                            wishListLoadingStates[
                                                item.product?.id
                                            ]?.isRemoving;
                                        const isLoadingWishList =
                                            isAddingToWishList ||
                                            isRemovingFromWishList;
                                        return (
                                            <Box
                                                sx={{
                                                    width: "300px",
                                                    margin: "0 auto",
                                                    backgroundColor: "#FFFFFF",
                                                }}
                                            >
                                                <Link
                                                    to={`/product/${item.product.id}/detail`}
                                                    key={item.product.id}
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
                                                            src={
                                                                item.product
                                                                    .images[0]
                                                            }
                                                            alt={
                                                                item.product
                                                                    .title
                                                            }
                                                            style={{
                                                                objectFit:
                                                                    "cover",
                                                                width: "100%",
                                                                height: "300px",
                                                            }}
                                                        />
                                                    </Box>
                                                </Link>
                                                <Stack
                                                    sx={{
                                                        textAlign: "center",
                                                        pt: "25px",
                                                        pb: "35px",
                                                    }}
                                                    spacing={1.25}
                                                >
                                                    <Link
                                                        to={`/product/${item.product.id}/detail`}
                                                        key={item.product.id}
                                                    >
                                                        <Typography
                                                            variant="h5"
                                                            color="secondary"
                                                            fontWeight={"700"}
                                                            fontSize={"16px"}
                                                        >
                                                            {item.product.title}
                                                        </Typography>
                                                    </Link>
                                                    <Typography
                                                        variant="h3"
                                                        color="gray"
                                                        fontWeight={"400"}
                                                        fontSize={"14px"}
                                                    >
                                                        {
                                                            item.product
                                                                .descriptionSmall
                                                        }
                                                    </Typography>
                                                    <Stack
                                                        spacing={0.75}
                                                        sx={{
                                                            p: "5px 3px",
                                                            textAlign: "center",
                                                            alignItems:
                                                                "center",
                                                            justifyContent:
                                                                "center",
                                                        }}
                                                        direction={"row"}
                                                    >
                                                        <Typography
                                                            variant="h5"
                                                            color="#BDBDBD"
                                                            fontWeight={"700"}
                                                            fontSize={"16px"}
                                                        >
                                                            ₹
                                                            {item.product.price}
                                                        </Typography>
                                                        <Typography
                                                            variant="h5"
                                                            color="darkGreen"
                                                            fontWeight={"700"}
                                                            fontSize={"16px"}
                                                        >
                                                            ₹
                                                            {
                                                                item.product
                                                                    .retailPrice
                                                            }
                                                        </Typography>
                                                    </Stack>
                                                    <Stack
                                                        spacing={1.25}
                                                        direction={"row"}
                                                        sx={{
                                                            pb: "20px",
                                                            justifyContent:
                                                                "center",
                                                        }}
                                                    >
                                                        <Box
                                                            width={"30px"}
                                                            height={"30px"}
                                                            sx={{
                                                                backgroundColor:
                                                                    item.color,
                                                                borderRadius:
                                                                    "50%",
                                                                border: "2px solid rgb(184, 180, 180)",
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
                                                            flexDirection:
                                                                "row",
                                                            justifyContent:
                                                                "center",
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
                                                                whiteSpace:
                                                                    "nowrap",
                                                                minWidth:
                                                                    "fit-content",
                                                                width: "fit-content",
                                                                alignSelf:
                                                                    "flex-start",
                                                            }}
                                                            onClick={() =>
                                                                handleAddRemoveProduct(
                                                                    item.product
                                                                        .id,
                                                                    item.color
                                                                )
                                                            }
                                                            disabled={
                                                                isLoadingCart
                                                            }
                                                        >
                                                            {isLoadingCart ? (
                                                                <CircularProgress
                                                                    size={24}
                                                                    sx={{
                                                                        color: "#FFFFFF",
                                                                    }}
                                                                />
                                                            ) : isInCart ? (
                                                                "Remove From Cart"
                                                            ) : (
                                                                "Add to Cart"
                                                            )}
                                                        </Button>
                                                        <Box
                                                            key="favorite-icon"
                                                            width={"40px"}
                                                            height={"40px"}
                                                            border={
                                                                "1px solid #E8E8E8"
                                                            }
                                                            borderRadius={"50%"}
                                                            alignItems={
                                                                "center"
                                                            }
                                                            justifyContent={
                                                                "center"
                                                            }
                                                            display={"flex"}
                                                        >
                                                            {isLoadingWishList ? (
                                                                <IconButton
                                                                    disabled
                                                                >
                                                                    <FavoriteBorderIcon
                                                                        fontSize="medium"
                                                                        sx={{
                                                                            color: "#E8E8E8",
                                                                        }}
                                                                    />
                                                                </IconButton>
                                                            ) : isInWishList ? (
                                                                <IconButton
                                                                    onClick={() =>
                                                                        handleFavorite(
                                                                            item
                                                                                .product
                                                                                .id,
                                                                            item.color
                                                                        )
                                                                    }
                                                                    disabled={
                                                                        isLoadingWishList
                                                                    }
                                                                >
                                                                    <FavoriteIcon
                                                                        fontSize="medium"
                                                                        sx={{
                                                                            color: "red",
                                                                        }}
                                                                    />
                                                                </IconButton>
                                                            ) : (
                                                                <IconButton
                                                                    onClick={() =>
                                                                        handleFavorite(
                                                                            item
                                                                                .product
                                                                                .id,
                                                                            item.color
                                                                        )
                                                                    }
                                                                    disabled={
                                                                        isLoadingWishList
                                                                    }
                                                                >
                                                                    <FavoriteBorderIcon fontSize="medium" />
                                                                </IconButton>
                                                            )}
                                                        </Box>
                                                    </Stack>
                                                </Stack>
                                            </Box>
                                        );
                                    })}
                                </Box>
                            </Box>
                        </Box>
                    )}
                </>
            )}
        </Box>
    );
};
export default FavoriteProducts;
