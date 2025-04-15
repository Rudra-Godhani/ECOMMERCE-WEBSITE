import {
    Box,
    Button,
    CircularProgress,
    IconButton,
    Rating,
    Skeleton,
    Stack,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AppDispatch, RootState } from "../../store/store";
import ProductImageSlider from "./ProductImageSlider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
    addProductToCart,
    CartItem,
    clearAllCartErrosAndMsgs,
    removeProductFromCart,
} from "../../store/Slices/CartSlice";
import {
    addProductToWishList,
    clearAllWishListErrosAndMsgs,
    removeProductFromWishList,
} from "../../store/Slices/WishListSlice";

const ProductInfo: React.FC = () => {
    const { product, loading } = useSelector(
        (state: RootState) => state.product
    );

    const [selectedColor, setSelectedColor] = useState(
        product?.colors.length ? product?.colors[0] : ""
    );

    const dispatch = useDispatch<AppDispatch>();
    const {
        cartItems,
        error: cartError,
        message: cartMessage,
        loadingStates: cartLoadingStates,
    } = useSelector((state: RootState) => state.cart);
    const {
        wishListItems,
        error: wishListError,
        message: wishListMessage,
        loadingStates: wishListLaodingStates,
    } = useSelector((state: RootState) => state.wishList);

    const handleAddRemoveProduct = (id: string) => {
        if (cartItems?.some((item) => item.product.id === id)) {
            dispatch(removeProductFromCart({ productId: id }));
        } else {
            dispatch(addProductToCart({ productId: id, color: selectedColor }));
        }
    };

    const handleFavorite = (id: string) => {
        if (wishListItems?.some((item) => item.product.id === id)) {
            dispatch(removeProductFromWishList({ productId: id }));
        } else {
            dispatch(
                addProductToWishList({ productId: id, color: selectedColor })
            );
        }
    };

    const isInCart = product
        ? cartItems.some((item: CartItem) => item.product.id === product?.id)
        : false;

    const isAddingToCart = product
        ? cartLoadingStates[product.id]?.isAdding
        : false;
    const isRemovingFromCart = product
        ? cartLoadingStates[product.id]?.isRemoving
        : false;
    const isLoadingCart = isAddingToCart || isRemovingFromCart;

    const isAddingToWishList = product
        ? wishListLaodingStates[product.id]?.isAdding
        : false;
    const isRemovingFromWishList = product
        ? wishListLaodingStates[product.id]?.isRemoving
        : false;
    const isLoadingWishList = isAddingToWishList || isRemovingFromWishList;

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

    useEffect(() => {
        setSelectedColor(product?.colors.length ? product?.colors[0] : "");
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
                    {loading ? (
                        <Skeleton width={60} height={30} />
                    ) : (
                        <Link to="/">
                            <Typography
                                variant="h6"
                                color="secondary"
                                fontWeight={"700"}
                            >
                                Home
                            </Typography>
                        </Link>
                    )}
                    <ArrowForwardIos fontSize="small" htmlColor="#BDBDBD" />

                    {loading ? (
                        <Skeleton width={60} height={30} />
                    ) : (
                        <Typography
                            variant="h6"
                            color="#BDBDBD"
                            fontWeight={"700"}
                        >
                            Shop
                        </Typography>
                    )}
                </Stack>
            </Box>
            <Box sx={{ backgroundColor: "#FAFAFA" }}>
                <Box key={product?.id}>
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
                        {loading ? (
                            <Box
                                sx={{
                                    width: {
                                        xs: "100%",
                                        sm: "450px",
                                        md: "500px",
                                    },
                                    maxWidth: "100%",
                                }}
                            >
                                <Skeleton
                                    variant="rectangular"
                                    animation="wave"
                                    sx={{
                                        width: "100%",
                                        height: {
                                            xs: "300px",
                                            sm: "400px",
                                            md: "500px",
                                        },
                                    }}
                                />
                                <Stack direction="row" gap="10px" mt="20px">
                                    {[...Array(3)].map((_, i) => (
                                        <Skeleton
                                            key={i}
                                            variant="rectangular"
                                            sx={{
                                                width: "100px",
                                                height: "75px",
                                            }}
                                            animation="wave"
                                        />
                                    ))}
                                </Stack>
                            </Box>
                        ) : (
                            <ProductImageSlider />
                        )}

                        <Stack
                            sx={{
                                width: { xs: "100%", sm: "50%", md: "60%" },
                                p: { xs: "12px", sm: "24px" },
                            }}
                            height={"100%"}
                        >
                            {loading ? (
                                <>
                                    <Skeleton
                                        variant="text"
                                        width="80%"
                                        height={40}
                                    />
                                    <Skeleton
                                        variant="text"
                                        width="60%"
                                        height={30}
                                    />
                                    <Skeleton
                                        variant="text"
                                        width="20%"
                                        height={40}
                                    />
                                    <Skeleton
                                        variant="text"
                                        width="40%"
                                        height={40}
                                    />
                                    <Skeleton
                                        variant="text"
                                        width="60%"
                                        height={30}
                                    />
                                    <Skeleton
                                        variant="rectangular"
                                        width="100%"
                                        height={2}
                                        sx={{ my: 2 }}
                                    />
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        sx={{ mt: "20px" }}
                                    >
                                        <Skeleton
                                            variant="circular"
                                            width={30}
                                            height={30}
                                        />
                                        <Skeleton
                                            variant="circular"
                                            width={30}
                                            height={30}
                                        />
                                        <Skeleton
                                            variant="circular"
                                            width={30}
                                            height={30}
                                        />
                                    </Stack>
                                    <Stack
                                        direction={"row"}
                                        spacing={2}
                                        mt="20px"
                                    >
                                        <Skeleton
                                            variant="rectangular"
                                            width={120}
                                            height={36}
                                            sx={{ mt: 2 }}
                                        />
                                        <Skeleton
                                            variant="circular"
                                            width={35}
                                            height={35}
                                            sx={{ mt: 2 }}
                                        />
                                    </Stack>
                                </>
                            ) : (
                                <>
                                    <Typography
                                        variant="h4"
                                        color="secondary"
                                        pb={"12px"}
                                    >
                                        {product?.title}
                                    </Typography>
                                    <Stack direction={"row"} gap={"10px"}>
                                        <Rating
                                            name="half-rating"
                                            defaultValue={2.5}
                                            precision={0.1}
                                            sx={{ pb: "20px" }}
                                            value={product?.rating}
                                        />
                                        <Typography
                                            variant="h6"
                                            color="gray"
                                            fontWeight={"700"}
                                        >
                                            {product?.noOfReviews} Reviews
                                        </Typography>
                                    </Stack>
                                    <Stack direction={"row"} gap={1}>
                                        <Typography
                                            variant="h3"
                                            color="#BDBDBD"
                                            pb={"5px"}
                                            sx={{
                                                textDecoration: "line-through",
                                            }}
                                        >
                                            ₹{product?.price}
                                        </Typography>
                                        <Typography
                                            variant="h3"
                                            color="darkGreen"
                                            pb={"5px"}
                                        >
                                            ₹{product?.retailPrice}
                                        </Typography>
                                    </Stack>
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
                                            {product?.availability
                                                ? "In Stock"
                                                : "Out Of Stock"}
                                        </Typography>
                                    </Stack>
                                    <Typography variant="h6" color="#858585">
                                        {product?.descriptionSmall}
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
                                        {product?.colors.map(
                                            (color: string, index: number) => (
                                                <Box
                                                    key={index}
                                                    position="relative"
                                                    width={"30px"}
                                                    height={"30px"}
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "center",
                                                    }}
                                                    onClick={() =>
                                                        setSelectedColor(color)
                                                    }
                                                >
                                                    {selectedColor ===
                                                        color && (
                                                        <Box
                                                            sx={{
                                                                position:
                                                                    "absolute",
                                                                width: "40px",
                                                                height: "40px",
                                                                borderRadius:
                                                                    "50%",
                                                                border: "3px solid #7fff00",
                                                            }}
                                                        />
                                                    )}
                                                    <Box
                                                        sx={{
                                                            backgroundColor:
                                                                color,
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
                                            gap: {
                                                xs: "10px",
                                                sm: "5px",
                                                md: "10px",
                                            },
                                            flexDirection: {
                                                xs: "row",
                                            },
                                        }}
                                    >
                                        <Button
                                            sx={{
                                                color: "#FAFAFA",
                                                backgroundColor: "#23A6F0",
                                                p: {
                                                    xs: "10px 10px",
                                                    sm: "10px 20px",
                                                },
                                                whiteSpace: "nowrap",
                                                minWidth: "fit-content",
                                                width: "fit-content",
                                                alignSelf: "flex-start",
                                            }}
                                            onClick={() =>
                                                handleAddRemoveProduct(
                                                    product!.id
                                                )
                                            }
                                            disabled={isLoadingCart}
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
                                            border={"1px solid #E8E8E8"}
                                            borderRadius={"50%"}
                                            alignItems={"center"}
                                            justifyContent={"center"}
                                            display={"flex"}
                                        >
                                            {isLoadingWishList ? (
                                                <IconButton disabled>
                                                    <FavoriteBorderIcon
                                                        fontSize="medium"
                                                        sx={{
                                                            color: "#E8E8E8",
                                                        }}
                                                    />
                                                </IconButton>
                                            ) : wishListItems?.some(
                                                  (item) =>
                                                      item.product.id ===
                                                      product?.id
                                              ) ? (
                                                <IconButton
                                                    onClick={() =>
                                                        handleFavorite(
                                                            product!.id
                                                        )
                                                    }
                                                    disabled={isLoadingWishList}
                                                >
                                                    <FavoriteIcon
                                                        fontSize="medium"
                                                        sx={{ color: "red" }}
                                                    />
                                                </IconButton>
                                            ) : (
                                                <IconButton
                                                    onClick={() =>
                                                        handleFavorite(
                                                            product!.id
                                                        )
                                                    }
                                                    disabled={isLoadingWishList}
                                                >
                                                    <FavoriteBorderIcon fontSize="medium" />
                                                </IconButton>
                                            )}
                                        </Box>
                                    </Stack>
                                </>
                            )}
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductInfo;
