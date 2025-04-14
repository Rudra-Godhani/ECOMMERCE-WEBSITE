import { Box, Button, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const CartTotal: React.FC = () => {
    const { cartItems, getCartloading } = useSelector(
        (state: RootState) => state.cart
    );

    const total = cartItems.map((item) => item.product.price * item.quantity);
    let subTotal: number = 0;
    if (total.length !== 0) {
        subTotal = Number(total.reduce((acc, curr) => acc + curr).toFixed(2));
    }
    let shippingCost: number = 0;
    let totalCost: number = 0;
    if (subTotal !== 0) {
        shippingCost = 20;
        totalCost = Number((subTotal + shippingCost).toFixed(2));
    }

    const navigate = useNavigate();

    if (cartItems.length === 0 && !getCartloading) {
        return <></>;
    }

    return (
        <Box
            sx={{
                maxWidth: "1050px",
                mx: "auto",
                display: "flex",
                justifyContent: "flex-end",
                p: "50px 20px 100px 20px",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
            }}
        >
            <Stack
                width={{ xs: "280px", sm: "400px", lg: "400px" }}
                sx={{ p: "32px 24px 10px 24px" }}
                border={"1.5px solid #000000"}
                borderRadius={"4px"}
            >
                {getCartloading ? (
                    <>
                        <Skeleton
                            variant="text"
                            width="50%"
                            height={40}
                            sx={{ mb: 3 }}
                        />
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                        >
                            <Skeleton variant="text" width="30%" height={30} />
                            <Skeleton variant="text" width="30%" height={30} />
                        </Stack>
                        <Skeleton
                            variant="rectangular"
                            height={1}
                            sx={{ my: 2 }}
                        />
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                        >
                            <Skeleton variant="text" width="30%" height={30} />
                            <Skeleton variant="text" width="30%" height={30} />
                        </Stack>
                        <Skeleton
                            variant="rectangular"
                            height={1}
                            sx={{ my: 2 }}
                        />
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                        >
                            <Skeleton variant="text" width="30%" height={30} />
                            <Skeleton variant="text" width="30%" height={30} />
                        </Stack>
                        <Skeleton
                            variant="rectangular"
                            width="50%"
                            height={40}
                            sx={{ my: 4, mx: "auto" }}
                        />
                    </>
                ) : (
                    <>
                        <Typography
                            variant="h4"
                            fontWeight={"500"}
                            color="#000000"
                            sx={{ pb: "24px" }}
                        >
                            Cart Total
                        </Typography>
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                        >
                            <Typography
                                variant="h6"
                                fontWeight={"400"}
                                color="#000000"
                            >
                                Subtotal:
                            </Typography>
                            <Typography
                                variant="h6"
                                fontWeight={"400"}
                                color="#000000"
                            >
                                ${subTotal}
                            </Typography>
                        </Stack>
                        <hr
                            style={{
                                backgroundColor: "#000000",
                                height: "1px",
                                border: "none",
                                opacity: "40%",
                                margin: "16px 0",
                            }}
                        />
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                        >
                            <Typography
                                variant="h6"
                                fontWeight={"400"}
                                color="#000000"
                            >
                                Shipping:
                            </Typography>
                            <Typography
                                variant="h6"
                                fontWeight={"400"}
                                color="#000000"
                            >
                                ${shippingCost}
                            </Typography>
                        </Stack>
                        <hr
                            style={{
                                backgroundColor: "#000000",
                                height: "1px",
                                border: "none",
                                opacity: "40%",
                                margin: "16px 0",
                            }}
                        />
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                        >
                            <Typography
                                variant="h6"
                                fontWeight={"400"}
                                color="#000000"
                            >
                                Total:
                            </Typography>
                            <Typography
                                variant="h6"
                                fontWeight={"400"}
                                color="#000000"
                            >
                                ${totalCost}
                            </Typography>
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
                                textTransform: "none",
                            }}
                            onClick={() => {
                               if(totalCost !== 0) {
                                navigate("/shopping-cart/checkout/address")
                               }
                            }}
                        >
                            Checkout
                        </Button>
                    </>
                )}
            </Stack>
        </Box>
    );
};

export default CartTotal;
