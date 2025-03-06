import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ArrowForwardIos } from "@mui/icons-material";
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Product } from '../../Data';
import { addProductToCart, CartItem, removeProductFromCart } from '../../store/Slices/CartSlice';
import { toast } from 'react-toastify';
import { addToWishlist, removeFromWishlist } from '../../store/Slices/WishListSlice';

const FavoriteProducts: React.FC = () => {
  const [selectedColors, setSelectedColors] = useState<{ [key: number]: string }>({});
  const wishListData = useSelector((state: RootState) => state.wishlist);

  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const wishlist = useSelector((state: RootState) => state.wishlist);

  const handleColorSelection = (productId: number, color: string) => {
    setSelectedColors(prevColors => ({
      ...prevColors,
      [productId]: color,
    }));
  };

  const handleAddRemoveProduct = (product: Product) => {

    if (cart.some((p: CartItem) => p.id === product.id)) {
      dispatch(removeProductFromCart(product.id));
      toast.error("Product Removed From Cart");
    } else {
      if (!selectedColors[product.id]) {
        toast.error("Please select a color of the product");
        return;
      }
      const cartItem: CartItem = {
        id: product.id,
        title: product.title,
        description: product.descriptionSmall,
        price: product.price,
        quantity: 1,
        image: product.images[0],
        color: selectedColors[product.id],
        availability: product.availability,
        rating: product.rating,
        brand: product.brand,
        category: product.category
      };

      dispatch(addProductToCart(cartItem));
      toast.success("Product Added To Cart");

      setSelectedColors(prev => ({
        ...prev,
        [product.id]: "",
      }));
    }
  };

  const handleFavorite = (product: Product) => {
    console.log("wishlist:", wishlist);
    if (!wishlist.some((p: Product) => p.id === product.id)) {
      console.log("added wishlist");
      dispatch(addToWishlist(product));
      toast.success("Product Added To WishList");
    }
    else {
      console.log("removed wishlist");
      dispatch(removeFromWishlist(product.id));
      toast.error("Product Removed From WishList");
    }
  };
  return (
    <Box>
      <Box>
        <Stack maxWidth={"1050px"} mx={"auto"} py={"24px"} direction={"row"} gap={"15px"} sx={{ justifyContent: { xs: "center", sm: "start" }, alignItems: { xs: "center", sm: "start" }, p: { xs: "50px 20px", lg: "50px 0px" } }}>
          <Link to="/">
            <Typography variant='h6' color='secondary' fontWeight={"700"}>Home</Typography>
          </Link>
          <ArrowForwardIos fontSize='small' htmlColor='#BDBDBD' />
          <Typography variant='h6' color='#BDBDBD' fontWeight={"700"}>WishList</Typography>
        </Stack>
      </Box>
      <Box textAlign={"center"} pb="40px">
        <Typography variant="h1" color="secondary" sx={{
          display: "inline-block",
          borderBottom: "3px solid #E9E9E9",
          paddingBottom: "20px"
        }}>Your WishList</Typography>
      </Box>
      {wishListData.length === 0 &&
        <Typography variant="h2" color="textSecondary" mb="40px" textAlign={"center"}>
          No items in wishList 😔
        </Typography>
      }
      {
        wishListData.length > 0 &&
        <Box sx={{ backgroundColor: "#FAFAFA" }}>
          <Box maxWidth={"1050px"} mx="auto">
            <Box sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              p: "0px 0px",
              justifyContent: "center",
              rowGap: "24px",
              columnGap: "30px",
              padding: { xs: "24px 30px 48px 30px", sm: "24px 30px 48px 30px", md: "24px 30px 48px 30px", lg: "24px 0px 48px 0px" }
            }}>
              {
                wishListData.map((product) => (
                  <Box key={product.id} sx={{ width: "300px", margin: "0 auto", backgroundColor: "#FFFFFF" }}>
                    <Box sx={{ p: "0px 0px ", width: "100%", height: "auto", overflow: "hidden" }}>
                      <img src={product.images[0]} alt={product.title} style={{ objectFit: "cover", width: "100%", height: "300px", }} />
                    </Box>
                    <Stack sx={{ textAlign: "center", pt: "25px", pb: "35px" }} spacing={1.25}>
                      <Link to={`/product/${product.id}/detail`}>
                        <Typography variant='h5' color="secondary" fontWeight={"700"} fontSize={"16px"}>
                          {product.title}
                        </Typography>
                      </Link>
                      <Typography variant='h3' color="gray" fontWeight={"400"} fontSize={"14px"}>
                        {product.descriptionSmall}
                      </Typography>
                      <Stack spacing={0.75} sx={{ p: "5px 3px", textAlign: "center", alignItems: "center", justifyContent: "center" }} direction={"row"}>
                        <Typography variant='h5' color="#BDBDBD" fontWeight={"700"} fontSize={"16px"}>
                          ${product.price}
                        </Typography>
                        <Typography variant='h5' color="darkGreen" fontWeight={"700"} fontSize={"16px"}>
                          ${product.retailPrice}
                        </Typography>
                      </Stack>
                      <Stack spacing={1.25} direction={"row"} sx={{ pb: "20px", justifyContent: "center" }}>
                        {
                          product.colors.map((color, index) => (
                            <Box
                              key={color}
                              position="relative"
                              width={"30px"}
                              height={"30px"}
                              sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                              onClick={() => handleColorSelection(product.id, color)}
                            >
                              {selectedColors[product.id] === color && (
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


                          ))
                        }
                      </Stack>
                      <Stack sx={{ gap: { xs: "10px", sm: "5px", md: "10px" }, flexDirection: "row", justifyContent: "center" }}>
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
                          onClick={() => handleAddRemoveProduct(product)}
                        >
                          {cart.some((p: CartItem) => p.id === product.id) ? "Remove Item" : "Add to Cart"}
                        </Button>
                        <Box key="favorite-icon" width={"40px"} height={"40px"} border={"1px solid #E8E8E8"} borderRadius={"50%"} alignItems={"center"} justifyContent={"center"} display={"flex"} onClick={() => handleFavorite(product)}>
                          {wishlist.some((p: Product) => p.id === product.id) ? <FavoriteIcon fontSize='medium' sx={{ color: "red" }} /> : <FavoriteBorderIcon fontSize='medium' />}
                        </Box>
                      </Stack>
                    </Stack>
                  </Box>
                ))
              }
            </Box>
          </Box>
        </Box>
      }
    </Box>
  )
}
export default FavoriteProducts
