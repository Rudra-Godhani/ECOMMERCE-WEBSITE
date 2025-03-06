import React from "react";
import { Box, Typography, Stack, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowForwardIos } from "@mui/icons-material";
import Paper from '@mui/material/Paper';
import item1 from "../../assets/featured/featured-1.svg"
import item2 from "../../assets/featured/featured-2.svg"
import item3 from "../../assets/featured/featured-3.svg"
import item4 from "../../assets/featured/featured-4.svg"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeProductFromCart } from "../../store/Slices/CartSlice";
import { RootState } from "../../store/store";

interface ProductData {
    img: string,
    name: string,
    color: string,
    price: string,
    Quantity: string
}

const rows: ProductData[] = [
    {
        img: item1,
        name: "Yellow T-shirt",
        color: "#23A6F0",
        price: "$20",
        Quantity: "1"
    },
    {
        img: item2,
        name: "White T-shirt",
        color: "#23856D",
        price: "$10",
        Quantity: "2"
    },
    {
        img: item3,
        name: "Pink T-shirt",
        color: "#E77C40",
        price: "$30",
        Quantity: "1"
    },
    {
        img: item4,
        name: "Brown Jacket",
        color: "#252B42",
        price: "$20",
        Quantity: "1"
    }
];

const Cart: React.FC = () => {

    const cartData = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    console.log("cart:", cartData);

    const total = cartData.map((item) => item.price * item.quantity);
    let subTotal = 0;
    if (total.length !== 0) {
        subTotal = Number(total.reduce((acc, curr) => acc + curr).toFixed(2));
    }
    const shippingCost = 20;
    const totalCost = Number((subTotal + shippingCost).toFixed(2));

    const incQuantity = (id: number) => {
        console.log("add++", id);
        dispatch(increaseQuantity(id));
    }

    const decQuantity = (id: number) => {
        console.log("dec--", id);
        dispatch(decreaseQuantity(id));
    }

    return (
        <Box>
            <Box>
                <Stack maxWidth={"1050px"} mx={"auto"} py={"24px"} direction={"row"} gap={"15px"} sx={{ justifyContent: { xs: "center", sm: "start" }, alignItems: { xs: "center", sm: "start" }, p: { xs: "50px 20px", lg: "50px 0px" } }}>
                    <Link to="/">
                        <Typography variant='h6' color='secondary' fontWeight={"700"}>Home</Typography>
                    </Link>
                    <ArrowForwardIos fontSize='small' htmlColor='#BDBDBD' />
                    <Typography variant='h6' color='#BDBDBD' fontWeight={"700"}>Cart</Typography>
                </Stack>
            </Box>
            <Box textAlign={"center"} pb="40px">
                <Typography variant="h1" color="secondary" sx={{
                    display: "inline-block",
                    borderBottom: "3px solid #E9E9E9",
                    paddingBottom: "20px"
                }}>Your Cart</Typography>
            </Box>
            <Box maxWidth={"1050px"} mx="auto" pb="40px" sx={{ p: { xs: "0 20px", lg: "0 0" } }}>
                <TableContainer component={Paper} elevation={0} sx={{ overflowX: "auto", width: "100%" }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: "#FAFAFA" }}>
                            <TableRow>
                                <TableCell sx={{ fontSize: "14px", color: "#737373", border: "none" }}>Product</TableCell>
                                <TableCell align="center" sx={{ fontSize: "14px", color: "#737373", border: "none" }}>Color</TableCell>
                                <TableCell align="center" sx={{ fontSize: "14px", color: "#737373", border: "none" }}>Quantity</TableCell>
                                <TableCell align="center" sx={{ fontSize: "14px", color: "#737373", border: "none" }}>Price</TableCell>
                                <TableCell align="center" sx={{ fontSize: "14px", color: "#737373", border: "none" }}>Total Price</TableCell>
                                <TableCell align="center" sx={{ border: "none" }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartData.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={6} align="center">
                                        <Typography variant="h2" color="textSecondary" mt={5} mb={5}>
                                            No items in cart 😔
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            )}
                            {cartData.length > 0 && cartData.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="left" sx={{ pl: "0px" }}>
                                        <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
                                            <Box sx={{ p: "0px 0px ", width: "150px", height: "120px", overflow: "hidden", borderRadius: "10px" }}>
                                                <img src={item.image} alt="" style={{ objectFit: "cover", width: "100%", height: "100%", display: "block" }} />
                                            </Box>
                                            <Stack>
                                                <Typography variant="h5" fontWeight={"700"} color="secondary">{item.title}</Typography>
                                            </Stack>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Box display="flex" justifyContent="center">
                                            <Box width={"16px"} height={"16px"} sx={{ backgroundColor: item.color, borderRadius: "50%" }}></Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="center" >
                                        <Stack direction={"row"} gap="20px" justifyContent={"center"} alignItems={"center"}>
                                            <Box sx={{ cursor: "pointer" }} onClick={() => decQuantity(item.id)}>
                                                <RemoveIcon fontSize="small" />
                                            </Box>
                                            <Typography sx={{ fontSize: "16px", color: "#252B42", fontWeight: "700" }}>{item.quantity}</Typography>
                                            <Box sx={{ cursor: "pointer" }} onClick={() => incQuantity(item.id)}>
                                                <AddIcon fontSize="small" />
                                            </Box>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="center" sx={{ fontSize: "16px", color: "#252B42", fontWeight: "700" }}>{item.price}</TableCell>
                                    <TableCell align="center" sx={{ fontSize: "16px", color: "#252B42", fontWeight: "700" }}>{(item.price * item.quantity).toFixed(2)}</TableCell>
                                    <TableCell align="center" sx={{ fontSize: "16px", color: "#252B42" }}>
                                        <Box sx={{ cursor: "pointer" }} onClick={() => { console.log("hello"); dispatch(removeProductFromCart(item.id)) }}>X
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box
                sx={{
                    maxWidth: "1050px",
                    mx: "auto",
                    display: "flex",
                    justifyContent: "flex-end",  // Center instead of flex-end
                    p: "50px 20px 100px 20px",  // Added horizontal padding
                    flexDirection: { xs: "column", sm: "row" },  // Stack on small screens
                    alignItems: "center"
                }}
            >
                <Stack
                    width={{ xs: "280px", sm: "400px", lg: "400px" }}
                    sx={{ p: "32px 24px 10px 24px" }}
                    border={"1.5px solid #000000"}
                    borderRadius={"4px"}
                >
                    <Typography variant="h4" fontWeight={"500"} color="#000000" sx={{ pb: "24px" }}>Cart Total</Typography>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant="h6" fontWeight={"400"} color="#000000">Subtotal:</Typography>
                        <Typography variant="h6" fontWeight={"400"} color="#000000">${subTotal}</Typography>
                    </Stack>
                    <hr style={{ backgroundColor: "#000000", height: "1px", border: "none", opacity: "40%", margin: "16px 0" }} />
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant="h6" fontWeight={"400"} color="#000000">Shipping:</Typography>
                        <Typography variant="h6" fontWeight={"400"} color="#000000">${shippingCost}</Typography>
                    </Stack>
                    <hr style={{ backgroundColor: "#000000", height: "1px", border: "none", opacity: "40%", margin: "16px 0" }} />
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant="h6" fontWeight={"400"} color="#000000">Total:</Typography>
                        <Typography variant="h6" fontWeight={"400"} color="#000000">${totalCost}</Typography>
                    </Stack>
                    <Button
                        sx={{
                            color: "#FAFAFA",
                            backgroundColor: "#23A6F0",
                            p: { md: "10px 10px", lg: "10px 20px" },
                            whiteSpace: "nowrap",
                            minWidth: "fit-content",
                            width: "fit-content",
                            alignSelf: "center",
                            border: "1px solid #E6E6E6",
                            my: "30px",
                            textTransform: "none"
                        }}
                    >Checkout
                    </Button>
                </Stack>
            </Box>
        </Box >
    );
};

export default Cart;

