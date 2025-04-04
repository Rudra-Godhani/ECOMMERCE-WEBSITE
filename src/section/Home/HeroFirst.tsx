import {
    Box,
    Button,
    IconButton,
    Skeleton,
    Stack,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Product } from "../../store/Slices/productSlice";

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const HeroFirst: React.FC = () => {
    const { loading, products: productsData } = useSelector(
        (state: RootState) => state.product
    );

    const products = [
        (productsData ?? []).slice(73,74)[0],
        (productsData ?? []).slice(42,43)[0],
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = React.useRef<Carousel | null>(null);

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.previous(1);
            setCurrentSlide(
                (prev) => (prev - 1 + products.length) % products.length
            );
        }
    };

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next(1);
            setCurrentSlide((prev) => (prev + 1) % products.length);
        }
    };

    const handleAfterChange = (
        _previousSlide: number,
        { currentSlide: nextSlide }: { currentSlide: number }
    ) => {
        setCurrentSlide(nextSlide % products.length);
    };

    return (
        <Box width="100%" height="716px" position="relative">
            {loading ? (
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="716px"
                    animation="wave"
                />
            ) : (
                <Carousel
                    ref={carouselRef}
                    responsive={responsive}
                    infinite
                    autoPlay
                    autoPlaySpeed={3000}
                    showDots={false}
                    arrows={false}
                    afterChange={handleAfterChange}
                >
                    {products.map((product: Product) => (
                        <Box
                            key={product?.id}
                            sx={{
                                backgroundImage: `url(${product?.images[1]})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: "100%",
                                height: "716px",
                                position: "relative",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    zIndex: 1,
                                }}
                            />
                            <Stack
                                sx={{
                                    position: "absolute",
                                    zIndex: 1000,
                                    gap: "35px",
                                    top: "50%",
                                    left: { xs: "50%", md: "15%" },
                                    transform: {
                                        xs: "translate(-50%, -50%)",
                                        md: "translateY(-50%)",
                                    },
                                    width: { xs: "90%", md: "50%" },
                                    textAlign: { xs: "center", md: "left" },
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: "40px", md: "58px" },
                                        fontWeight: "700",
                                        lineHeight: { xs: "50px", md: "80px" },
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {product?.title}
                                </Typography>
                                <Stack
                                    sx={{
                                        textAlign: { xs: "center", md: "left" },
                                        alignItems: {
                                            xs: "center",
                                            md: "flex-start",
                                        },
                                        width: "100%",
                                        gap: "35px",
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        fontSize="20px"
                                        fontWeight="400"
                                        lineHeight="30px"
                                        color="#FAFAFA"
                                        width={{ xs: "80%", md: "60%" }}
                                    >
                                        {product?.descriptionSmall}
                                    </Typography>
                                    <NavLink
                                        to={`/product/${product?.id}/detail`}
                                    >
                                        <Button
                                            sx={{
                                                color: "#FFFFFF",
                                                backgroundColor: "#2DC071",
                                                p: "15px 40px",
                                                whiteSpace: "nowrap",
                                                minWidth: "fit-content",
                                                width: "fit-content",
                                                alignSelf: {
                                                    xs: "center",
                                                    md: "flex-start",
                                                },
                                            }}
                                        >
                                            SHOP NOW
                                        </Button>
                                    </NavLink>
                                </Stack>
                            </Stack>
                        </Box>
                    ))}
                </Carousel>
            )}

            {!loading && (
                <Box
                    sx={{
                        position: "absolute",
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                    }}
                >
                    {products.map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: "62px",
                                height: "10px",
                                backgroundColor: "#FFFFFF",
                                opacity: currentSlide === index ? 1 : 0.5,
                                transition: "opacity 0.5s ease-in-out",
                            }}
                        />
                    ))}
                </Box>
            )}

            {!loading && (
                <>
                    <IconButton
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "2%",
                            transform: "translateY(-50%)",
                            color: "#FFFFFF",
                        }}
                        onClick={handlePrev}
                    >
                        <ArrowBackIos fontSize="large" />
                    </IconButton>

                    <IconButton
                        sx={{
                            position: "absolute",
                            top: "50%",
                            right: "2%",
                            transform: "translateY(-50%)",
                            color: "#FFFFFF",
                        }}
                        onClick={handleNext}
                    >
                        <ArrowForwardIos fontSize="large" />
                    </IconButton>
                </>
            )}
        </Box>
    );
};

export default HeroFirst;
