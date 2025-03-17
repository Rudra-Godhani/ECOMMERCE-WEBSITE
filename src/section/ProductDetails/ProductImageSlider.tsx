import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "../../data/allProductsData";

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? "-100%" : "100%",
        opacity: 0,
    }),
};

interface ProductImageSliderProps {
    product: Product;
}

const ProductImageSlider: React.FC<ProductImageSliderProps> = ({ product }) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const nextSlide = () => {
        setDirection(1);
        setIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setDirection(-1);
        setIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
    };
    return (
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
                    <AnimatePresence custom={direction} mode="popLayout">
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
                        <ArrowBackIos fontSize="large" htmlColor="#FFFFFF" />
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
                        <ArrowForwardIos fontSize="large" htmlColor="#FFFFFF" />
                    </Button>
                </Box>

                <Stack direction="row" gap="10px">
                    {product.images.length > 0 &&
                        product.images.map((img: string, imgIndex: number) => (
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
    );
};

export default ProductImageSlider;
