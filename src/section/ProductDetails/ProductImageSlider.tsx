import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

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

const ProductImageSlider: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const { product } = useSelector((state: RootState) => state.product);

    const nextSlide = () => {
        if (!product || !product.images) return;
        setDirection(1);
        setIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        if (!product || !product.images) return;
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
                            src={product?.images[index]}
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
                    {product &&
                        product.images.length > 0 &&
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
