import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ShopCard from "./ShopCard";
import { Box, Container, IconButton, Paper, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRef } from "react";
import { shopCardItems } from "../../Data";
import { Link } from "react-router-dom";
import { ArrowForwardIos } from "@mui/icons-material";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 5,
  },
  laptop: {
    breakpoint: { max: 1200, min: 900 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 3,
  },
  bigMobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
  },
};

const ShopCarousel: React.FC = () => {
  const carouselRef = useRef<any>(null);
  return (
    <>
      <Box sx={{ backgroundColor: "#FAFAFA" }}>
        <Stack sx={{ flexDirection: { xs: "column", sm: "row" }, textAlign: { xs: "center", sm: "start" }, gap: { xs: "30px", sm: "0" }, py: { xs: "40px", sm: "30px" }, px: { xs: "0", sm: "20px", md: "20px", lg: "0" } }} maxWidth={"1050px"} mx={"auto"} direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h3" color="secondary">Shop</Typography>
          <Stack gap={"15px"} direction={"row"} sx={{ justifyContent: { xs: "center", sm: "start" }, alignItems: { xs: "center", sm: "start" } }}>
            <Link to="/">
              <Typography
                variant='h6' color='secondary' fontWeight={"700"}>Home</Typography>
            </Link>
            <ArrowForwardIos fontSize='small' htmlColor='#BDBDBD' />
            <Typography variant='h6' color='#BDBDBD' fontWeight={"700"}>Shop</Typography>
          </Stack>
        </Stack>
      </Box>
      <Box width="100%" pb="30px 0" position="relative" sx={{backgroundColor:"#FAFAFA"}}>
        <IconButton
          onClick={() => carouselRef.current?.previous()}
          sx={{
            position: "absolute",
            left: { xl: "50px", lg: "40px", md: "20px", sm: "20px", xs: "20px" },
            top: "43%",
            transform: "translateY(-50%)",
            zIndex: 10,
            p: 0,
          }}
        >
          <Paper
            elevation={4}
            sx={{
              width: { lg: "55px", md: "45px", sm: "35px", xs: "30px" },
              height: { lg: "55px", md: "45px", sm: "35px", xs: "30px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              transition: "all 0.3s ease-in-out",
              "&:hover": { backgroundColor: "#ddd", transform: "scale(1.1)" },
            }}
          >
            <ArrowBackIosIcon
              sx={{ fontSize: { lg: "25px", sm: "18px", xs: "14px" } }}
            />
          </Paper>
        </IconButton>
        <Container maxWidth="lg" sx={{ pb: "48px" }}>
          <Carousel
            swipeable
            draggable
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="transform 0.5s ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            ref={carouselRef}
            arrows={false}
          >
            {shopCardItems.map((item) => (
              <Stack key={item.id} mx="auto">
                <ShopCard data={item} />
              </Stack>
            ))}
          </Carousel>
        </Container>
        <IconButton
          onClick={() => carouselRef.current?.next()}
          sx={{
            position: "absolute",
            right: { xl: "50px", lg: "40px", md: "20px", sm: "20px", xs: "20px" },
            top: "43%",
            transform: "translateY(-50%)",
            zIndex: 10,
            p: 0,
          }}
        >
          <Paper
            elevation={4}
            sx={{
              width: { lg: "55px", md: "45px", sm: "35px", xs: "30px" },
              height: { lg: "55px", md: "45px", sm: "35px", xs: "30px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              transition: "all 0.3s ease-in-out",
              "&:hover": { backgroundColor: "#ddd", transform: "scale(1.1)" },
            }}
          >
            <ArrowForwardIosIcon
              sx={{ fontSize: { lg: "25px", sm: "18px", xs: "14px" } }}
            />
          </Paper>
        </IconButton>
      </Box>
    </>
  );
};
export default ShopCarousel;