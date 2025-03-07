import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import heroFirst1 from "../../assets/hero-1.jpg";
import heroFirst2 from "../../assets/carousal-3.jpg";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const slides = [
    {
        image: heroFirst1,
        title: "NEW COLLECTION",
        subtitle:
            "We know how large objects will act, but things on a small scale.",
    },
    {
        image: heroFirst2,
        title: "SUMMER SPECIALS",
        subtitle: "Exclusive deals on the best styles of the season.",
    },
];

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const HeroFirst: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = React.useRef<Carousel | null>(null);

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.previous(1);
            setCurrentSlide(
                (prev) => (prev -1 + slides.length) % slides.length
            );
        }
    };

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next(1);
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }
    };

    const handleAfterChange = (
        _previousSlide: number,
        { currentSlide: nextSlide }: { currentSlide: number }
    ) => {
        // Update currentSlide based on the carousel's internal state after transition
        setCurrentSlide(nextSlide % slides.length);
    };

    return (
        <Box width="100%" height="716px" position="relative">
            {/* React Multi Carousel */}
            <Carousel
                ref={carouselRef}
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={3000}
                showDots={false}
                arrows={false} // Hide default arrows
                afterChange={handleAfterChange} // Fix indicator blinking issue
            >
                {slides.map((slide, index) => (
                    <Box
                        key={index}
                        sx={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            height: "716px",
                            position: "relative",
                        }}
                    >
                        <Stack
                            sx={{
                                position: "absolute",
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
                                variant="h5"
                                fontSize="16px"
                                fontWeight="700"
                                color="white"
                            >
                                SUMMER 2024
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: "40px", md: "58px" },
                                    fontWeight: "700",
                                    lineHeight: { xs: "50px", md: "80px" },
                                    color: "#FFFFFF",
                                }}
                            >
                                {slide.title}
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
                                    {slide.subtitle}
                                </Typography>
                                <NavLink to="/product/listing">
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

            {/* Custom Indicator - Horizontal Lines */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                }}
            >
                {slides.map((_, index) => (
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

            {/* Navigation Buttons */}
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
        </Box>
    );
};

export default HeroFirst;
