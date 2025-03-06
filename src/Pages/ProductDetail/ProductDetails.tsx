import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import productDetail1 from "../../assets/productDatail/productDetail1.svg";
import productDetail2 from "../../assets/productDatail/productDetail1.svg";
import productDetail3 from "../../assets/productDatail/productDetail2.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import ProductDes from "../../components/ProductDetails/ProductDes";
import BestSellerProducts from "../../components/ProductDetails/BestSellerProducts";
import BrandsStrip from "../../components/ProductDetails/BrandsStrip";
import Footer from "../../components/Home/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
    addProductToCart,
    CartItem,
    removeProductFromCart,
} from "../../store/Slices/CartSlice";
import { Product, productsData } from "../../Data";
import { toast } from "react-toastify";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
    addToWishlist,
    removeFromWishlist,
} from "../../store/Slices/WishListSlice";
import { RootState } from "../../store/store";

const images = [productDetail1, productDetail2, productDetail3];
const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%", // New slide enters from correct side
        opacity: 0,
    }),
    center: {
        x: 0, // Center the current image
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? "-100%" : "100%", // Current slide exits in opposite direction
        opacity: 0,
    }),
};

const ProductDetails: React.FC = () => {
    const { id } = useParams();
    console.log(id);

    const product = productsData.find((product) => product.id === Number(id));

    if (!product) {
        return (
            <Typography variant="h4" color="error">
                Product not found
            </Typography>
        );
    }

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);

    const nextSlide = () => {
        setDirection(1);
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setDirection(-1);
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart);
    const wishlist = useSelector((state: RootState) => state.wishlist);

    const handleAddRemoveProduct = (product: Product) => {
        if (cart.some((p: CartItem) => p.id === product.id)) {
            dispatch(removeProductFromCart(product.id));
            toast.error("Product Removed From Cart");
        } else {
            console.log("Adding product to cart...");

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
        console.log("wishlist:", wishlist);
        if (!wishlist.some((p: Product) => p.id === product.id)) {
            console.log("added wishlist");
            dispatch(addToWishlist(product));
            toast.success("Product Added To WishList");
        } else {
            console.log("removed wishlist");
            dispatch(removeFromWishlist(product.id));
            toast.error("Product Removed From WishList");
        }
    };

    return (
        <>
            <Navbar />
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
                        <Box
                            sx={{
                                p: "0px 0px ",
                                width: { xs: "100%", md: "100%" },
                                height: "auto",
                                overflow: "hidden",
                            }}
                        >
                            <Stack gap={"20px"}>
                                <Box
                                    position="relative"
                                    width="100%"
                                    height="500px"
                                    overflow="hidden"
                                >
                                    <AnimatePresence
                                        custom={direction}
                                        mode="popLayout"
                                    >
                                        <motion.img
                                            key={index}
                                            src={product.images[index]}
                                            alt={`Slide ${index}`}
                                            style={{
                                                position: "absolute",
                                                width: "100%",
                                                height: "100%",
                                                display: "block",
                                                objectFit: "cover",
                                            }}
                                            variants={slideVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            custom={direction}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </AnimatePresence>

                                    {/* Previous Button */}
                                    <Button
                                        sx={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "10px",
                                            transform: "translateY(-50%)",
                                            color: "white",
                                        }}
                                        onClick={prevSlide}
                                    >
                                        <ArrowBackIos
                                            fontSize="large"
                                            htmlColor="#FFFFFF"
                                        />
                                    </Button>

                                    {/* Next Button */}
                                    <Button
                                        sx={{
                                            position: "absolute",
                                            top: "50%",
                                            right: "10px",
                                            transform: "translateY(-50%)",
                                            color: "white",
                                        }}
                                        onClick={nextSlide}
                                    >
                                        <ArrowForwardIos
                                            fontSize="large"
                                            htmlColor="#FFFFFF"
                                        />
                                    </Button>
                                </Box>

                                <Stack direction="row" gap="10px">
                                    {product.images.map((img, imgIndex) => (
                                        <img
                                            key={imgIndex}
                                            src={img}
                                            alt={`Thumbnail ${imgIndex}`}
                                            style={{
                                                objectFit: "cover",
                                                width: "100px",
                                                height: "75px",
                                                cursor: "pointer",
                                                border:
                                                    imgIndex === index
                                                        ? "2px solid #252B42"
                                                        : "none",
                                            }}
                                            onClick={() => setIndex(imgIndex)}
                                        />
                                    ))}
                                </Stack>
                            </Stack>
                        </Box>

                        <Stack
                            p="24px"
                            sx={{ width: { xs: "100%", sm: "50%", md: "60%" } }}
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
                                {product.colors.map((color,index) => (
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
                                        onClick={() => setSelectedColor(color)}
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
                                ))}
                            </Stack>
                            <Stack
                                sx={{
                                    gap: { xs: "10px", sm: "5px", md: "10px" },
                                    flexDirection: {
                                        xs: "column",
                                        sm: "row",
                                        md: "row",
                                    },
                                }}
                            >
                                <Button
                                    sx={{
                                        color: "#FAFAFA",
                                        backgroundColor: "#23A6F0",
                                        p: { md: "10px 10px", lg: "10px 20px" },
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
            <ProductDes product={product} />
            <BestSellerProducts />
            <BrandsStrip />
            <Footer />
        </>
    );
};

export default ProductDetails;
