import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import { heroSecond1, heroSecond2 } from "../../assets";
import { NavLink } from "react-router-dom";

const slides = [
    {
        image: heroSecond1,
        title: "Vita Classic Product",
        subtitle:
            "We know how large objects will act, We know how are objects will act, We know",
    },
    {
        image: heroSecond2,
        title: "SUMMER SPECIALS",
        subtitle: "Exclusive deals on the best styles of the season.",
    },
];

const responsive = {
    all: {
        breakpoint: { max: 4000, min: 0 },
        items: 1,
    },
};

const HeroSecond: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = React.useRef<Carousel | null>(null);

    const goToNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next(1); // Move to the next slide
            setCurrentSlide((prev) => (prev + 1) % slides.length); // Update state properly
        }
    };

    const goToPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.previous(1); // Move to the previous slide
            setCurrentSlide(
                (prev) => (prev - 1 + slides.length) % slides.length
            ); // Update state properly
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
        <Box width="100%" height="100%" position="relative">
            <Carousel
                ref={carouselRef}
                responsive={responsive}
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={3000}
                arrows={false}
                showDots={false}
                afterChange={handleAfterChange}
            >
                {slides.map((slide, index) => (
                    <Box
                        key={index}
                        sx={{
                            backgroundColor: "#23856D",
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: { md: "space-around" },
                            pl: { md: "120px", lg: "150px" },
                            pr: { md: "90px", lg: "150px" },
                            pt: { xs: "100px", md: "0px" },
                            textAlign: { xs: "center", md: "start" },
                            gap: { xs: "0px", md: "30px" },
                        }}
                    >
                        <Stack
                            sx={{
                                justifyContent: "center",
                                alignItems: { xs: "center", md: "flex-start" },
                                gap: "30px",
                                width: { xs: "100%", md: "45%" },
                            }}
                        >
                            <Typography
                                variant="h4"
                                fontWeight={"400"}
                                fontSize={"20px"}
                                lineHeight={"30px"}
                                color="white"
                            >
                                SUMMER 2020
                            </Typography>
                            <Typography
                                variant="h1"
                                fontWeight={"700"}
                                color="white"
                                sx={{
                                    fontSize: {
                                        xs: "40px",
                                        md: "45px",
                                        lg: "58px",
                                    },
                                    lineHeight: {
                                        sx: "40px",
                                        md: "60px",
                                        lg: "80px",
                                    },
                                }}
                            >
                                {slide.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                fontWeight={"400"}
                                fontSize={"14px"}
                                lineHeight={"20px"}
                                color="white"
                                sx={{ width: "70%" }}
                            >
                                {slide.subtitle}
                            </Typography>
                            <Stack
                                sx={{
                                    width: "100%",
                                    gap: "35px",
                                    textAlign: "center",
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: { xs: "column", md: "row" },
                                    justifyContent: {
                                        xs: "center",
                                        md: "start",
                                    },
                                }}
                            >
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
                                        Shop Now
                                    </Button>
                                </NavLink>
                            </Stack>
                        </Stack>
                        <Box
                            sx={{
                                p: "0px 0px ",
                                height: "auto",
                                overflow: "hidden",
                                pt: { xs: "30px", md: "112px" },
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                src={slide.image}
                                alt=""
                                style={{
                                    objectFit: "cover",
                                    width: "510px",
                                    height: "auto",
                                    display: "block",
                                }}
                            />
                        </Box>
                    </Box>
                ))}
            </Carousel>

            <Box
                sx={{
                    position: "absolute",
                    bottom: { xs: "40px", md: "20px" },
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
                            transition: "all 0.3s ease-in-out",
                        }}
                    />
                ))}
            </Box>

            <IconButton
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "2%",
                    transform: "translateY(-50%)",
                    color: "#FFFFFF",
                }}
                onClick={goToPrev}
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
                onClick={goToNext}
            >
                <ArrowForwardIos fontSize="large" />
            </IconButton>
        </Box>
    );
};

export default HeroSecond;
