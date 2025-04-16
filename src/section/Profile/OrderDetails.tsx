import {
    Box,
    Typography,
    Stack,
    Divider,
    Button,
    Paper,
    Skeleton,
} from "@mui/material";
import { useEffect } from "react";
import { getMyOrderById } from "../../store/Slices/orderSlice";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { ArrowForwardIos } from "@mui/icons-material";
import OrderStatusStripe from "./OrderStatusStripe";
import { errorImage2 } from "../../assets";

const OrderDetailsPage = () => {
    const { orderId } = useParams();
    const { order, loading, error } = useSelector(
        (state: RootState) => state.order
    );
    const dispatch = useDispatch<AppDispatch>();

    if (orderId) {
        useEffect(() => {
            dispatch(getMyOrderById(orderId));
        }, [orderId, dispatch]);
    }

    if (!loading && error) {
        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: {
                        xs: "90vh",
                        sm: "80vh",
                    },
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        direction: "row",
                        maxWidth: { xs: "250px", sm: "300px" },
                    }}
                >
                    <img
                        src={errorImage2}
                        alt="Error illustration"
                        style={{ marginBottom: "20px" }}
                    />
                </Box>
                <Typography variant="h3" fontWeight="700" sx={{ my: 2 }}>
                    Something went wrong. Please try again.
                </Typography>
                <Button
                    component={Link}
                    to="/profile"
                    variant="outlined"
                    sx={{ color: "white", backgroundColor: "#23A6F0" }}
                >
                    Go to My Orders
                </Button>
            </Box>
        );
    }

    if (!loading && !error && !order) {
        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: {
                        xs: "90vh",
                        sm: "80vh",
                    },
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        direction: "row",
                        maxWidth: { xs: "250px", sm: "300px" },
                    }}
                >
                    <img
                        src={errorImage2}
                        alt="Error illustration"
                        style={{ marginBottom: "20px" }}
                    />
                </Box>
                <Typography variant="h3" fontWeight="700" sx={{ my: 2 }}>
                    Something went wrong. Please try again.
                </Typography>
                <Button
                    component={Link}
                    to="/profile"
                    variant="outlined"
                    sx={{ color: "white", backgroundColor: "#23A6F0" }}
                >
                    Go to My Orders
                </Button>
            </Box>
        );
    }

    const calculateListPrice = () => {
        return order?.orderItems
            .reduce(
                (total, item) => total + item.product.price * item.quantity,
                0
            )
            .toFixed(2);
    };

    return (
        <Box sx={{ minHeight: "100vh" }}>
            <Box>
                <Stack
                    maxWidth={{ xs: "100%", sm: "1050px" }}
                    mx="auto"
                    py="24px"
                    direction="row"
                    sx={{
                        justifyContent: { xs: "center", sm: "start" },
                        alignItems: "center",
                        px: { xs: "20px", sm: "0" },
                        flexWrap: "wrap",
                        gap: { xs: "10px", sm: "15px" },
                    }}
                >
                    <Link to="/">
                        <Typography
                            variant="h6"
                            color="secondary"
                            fontWeight="700"
                            sx={{ fontSize: { xs: "14px", sm: "16px" } }}
                        >
                            Home
                        </Typography>
                    </Link>
                    <ArrowForwardIos
                        fontSize="small"
                        htmlColor="#BDBDBD"
                        sx={{ display: { sm: "block" } }}
                    />
                    <Link to="/profile">
                        <Typography
                            variant="h6"
                            color="secondary"
                            fontWeight="700"
                            sx={{ fontSize: { xs: "14px", sm: "16px" } }}
                        >
                            Profile
                        </Typography>
                    </Link>
                    <ArrowForwardIos
                        fontSize="small"
                        htmlColor="#BDBDBD"
                        sx={{ display: { sm: "block" } }}
                    />
                    <Link to="/profile">
                        <Typography
                            variant="h6"
                            color="secondary"
                            fontWeight="700"
                            sx={{ fontSize: { xs: "14px", sm: "16px" } }}
                        >
                            My Orders
                        </Typography>
                    </Link>
                    <ArrowForwardIos
                        fontSize="small"
                        htmlColor="#BDBDBD"
                        sx={{ display: { sm: "block" } }}
                    />
                    <Typography
                        variant="h6"
                        color="#BDBDBD"
                        fontWeight="700"
                        sx={{ fontSize: { xs: "14px", sm: "16px" } }}
                    >
                        {order?.id}
                    </Typography>
                </Stack>
            </Box>

            <Paper
                elevation={3}
                sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 4,
                    mx: "auto",
                    maxWidth: "1050px",
                    my: "40px",
                }}
            >
                <Box flex={1}>
                    {loading ? (
                        <>
                            {[1, 2].map((_, index) => (
                                <Box key={index} mb={3}>
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        justifyContent="space-between"
                                    >
                                        <Box width="100%">
                                            <Skeleton
                                                variant="text"
                                                width="20%"
                                                height={40}
                                            />
                                            <Skeleton
                                                variant="text"
                                                width="40%"
                                                height={20}
                                            />
                                            <Stack
                                                direction="row"
                                                gap={2}
                                                mt="30px"
                                            >
                                                <Skeleton
                                                    variant="text"
                                                    width="60px"
                                                />
                                                <Skeleton
                                                    variant="text"
                                                    width="80px"
                                                />
                                            </Stack>
                                        </Box>
                                        <Skeleton
                                            variant="rectangular"
                                            width={90}
                                            height={90}
                                            sx={{ borderRadius: 2 }}
                                        />
                                    </Stack>
                                    <Divider sx={{ my: 2 }} />
                                </Box>
                            ))}
                            <Skeleton variant="rectangular" height={40} />
                        </>
                    ) : (
                        <>
                            {order?.orderItems.map((item, i) => (
                                <Box key={i} mb={3}>
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        justifyContent={"space-between"}
                                    >
                                        <Box>
                                            <Typography
                                                variant="h5"
                                                fontWeight={600}
                                            >
                                                {item.product.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                            >
                                                {item.product.descriptionSmall}
                                            </Typography>
                                            <Stack
                                                direction={"row"}
                                                gap={"2px"}
                                                alignItems={"center"}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    color="text.secondary"
                                                >
                                                    color:
                                                </Typography>
                                                <Box
                                                    width={"18px"}
                                                    height={"18px"}
                                                    sx={{
                                                        backgroundColor:
                                                            item.color,
                                                        borderRadius: "50%",
                                                        border: "2px solid rgb(184, 180, 180)",
                                                    }}
                                                ></Box>
                                            </Stack>
                                            <Stack
                                                direction={"row"}
                                                alignItems={"center"}
                                                mt={"30px"}
                                                gap={2}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    fontWeight={500}
                                                >
                                                    Qty: {item.quantity}
                                                </Typography>
                                                <Typography
                                                    variant="h5"
                                                    fontWeight={500}
                                                >
                                                    ₹
                                                    {item.totalPrice.toFixed(2)}
                                                </Typography>
                                            </Stack>
                                        </Box>
                                        <img
                                            src={item.product.images[0]}
                                            alt={item.product.title}
                                            width={90}
                                            height={90}
                                            style={{
                                                borderRadius: 8,
                                                objectFit: "cover",
                                            }}
                                        />
                                    </Stack>
                                    <Divider sx={{ my: 2 }} />
                                </Box>
                            ))}

                            <OrderStatusStripe status={order!.status} />
                        </>
                    )}
                </Box>

                <Box width={{ xs: "100%", md: "35%" }}>
                    {loading ? (
                        <>
                            <Paper sx={{ p: 2, mb: 2 }}>
                                <Skeleton variant="text" width="40%" />
                                <Divider sx={{ my: 1 }} />
                                <Skeleton variant="text" width="60%" />
                                <Skeleton variant="text" width="80%" />
                                <Skeleton variant="text" width="50%" />
                            </Paper>

                            <Paper sx={{ p: 2 }}>
                                <Skeleton variant="text" width="40%" />
                                <Divider sx={{ my: 1 }} />
                                {[1, 2, 3, 4].map((_, index) => (
                                    <Stack
                                        key={index}
                                        direction="row"
                                        justifyContent="space-between"
                                        mb={1}
                                    >
                                        <Skeleton variant="text" width="40%" />
                                        <Skeleton variant="text" width="20%" />
                                    </Stack>
                                ))}
                                <Divider sx={{ my: 1 }} />
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                >
                                    <Skeleton variant="text" width="40%" />
                                    <Skeleton variant="text" width="20%" />
                                </Stack>
                            </Paper>
                        </>
                    ) : (
                        <>
                            <Paper sx={{ p: 2, mb: 2 }}>
                                <Typography fontWeight={600}>
                                    Shipping Details
                                </Typography>
                                <Divider sx={{ my: 1 }} />
                                <Typography variant="h4" fontWeight={600}>
                                    {order?.user.name.toUpperCase()}
                                </Typography>
                                <Typography variant="h6" mt={"10px"}>
                                    {order?.address.line1},{" "}
                                    {order?.address.line2}
                                    ,<br />
                                    {order?.address.city},{" "}
                                    {order?.address.state} -{" "}
                                    {order?.address.pincode}
                                </Typography>
                                <Stack direction={"row"} gap={"4px"}>
                                    <Typography
                                        variant="h6"
                                        fontWeight={500}
                                        mt={1}
                                    >
                                        Phone number:
                                    </Typography>
                                    {order?.user.phoneNumber && (
                                        <Typography variant="h6" mt={1}>
                                            {order?.user.phoneNumber}
                                        </Typography>
                                    )}
                                </Stack>
                            </Paper>

                            <Paper sx={{ p: 2 }}>
                                <Typography fontWeight={600}>
                                    Price Details
                                </Typography>
                                <Divider sx={{ my: 1 }} />
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="h6">
                                        List Price
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            textDecoration: "line-through",
                                        }}
                                    >
                                        ₹{calculateListPrice()}
                                    </Typography>
                                </Stack>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="h6">
                                        Selling Price
                                    </Typography>
                                    <Typography variant="h6">
                                        ₹{order?.total.toFixed(2)}
                                    </Typography>
                                </Stack>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="h6">
                                        Discount
                                    </Typography>
                                    <Typography variant="h6" color="green">
                                        - ₹{order?.discount.toFixed(2)}
                                    </Typography>
                                </Stack>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="h6">
                                        Delivery Charges
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        color={
                                            order!.deliveryCharge > 0
                                                ? "error"
                                                : "green"
                                        }
                                    >
                                        {order!.deliveryCharge > 0
                                            ? `₹${order?.deliveryCharge.toFixed(2)}`
                                            : "Free"}
                                    </Typography>
                                </Stack>
                                <Divider sx={{ my: 1 }} />
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="h6" fontWeight={600}>
                                        Total Amount
                                    </Typography>
                                    <Typography variant="h6" fontWeight={600}>
                                        ₹{order?.netTotal.toFixed(2)}
                                    </Typography>
                                </Stack>
                            </Paper>
                        </>
                    )}
                </Box>
            </Paper>
        </Box>
    );
};

export default OrderDetailsPage;
