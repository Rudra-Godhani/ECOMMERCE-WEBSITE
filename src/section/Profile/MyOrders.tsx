import {
    Box,
    Card,
    CardContent,
    Divider,
    Skeleton,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const MyOrders: React.FC = () => {
    const { orders,loading } = useSelector((state: RootState) => state.order);
    const navigate = useNavigate();

    return (
        <Stack>
            <Typography variant="h4" fontWeight={"700"} pb="30px">
                My Orders
            </Typography>
            {loading ? (
                <>
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <React.Fragment key={idx}>
                            <Card
                                variant="outlined"
                                sx={{ borderRadius: 2, boxShadow: 1, mb: 3 }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: "#f5f5f5",
                                        px: 2,
                                        py: 1,
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8,
                                        borderBottom: "1px solid #e0e0e0",
                                    }}
                                >
                                    <Skeleton variant="text" width="30%" />
                                </Box>
                                <CardContent>
                                    <Stack direction="row" spacing={2} mb={2}>
                                        <Skeleton
                                            variant="rectangular"
                                            width={70}
                                            height={70}
                                            animation="wave"
                                        />
                                        <Box sx={{ flex: 1 }}>
                                            <Skeleton
                                                variant="text"
                                                width="80%"
                                                height={30}
                                            />
                                            <Skeleton
                                                variant="text"
                                                width="40%"
                                                height={25}
                                            />
                                        </Box>
                                    </Stack>
                                    <Divider sx={{ my: 2 }} />
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                    >
                                        <Skeleton
                                            variant="text"
                                            width="50%"
                                            height={25}
                                        />
                                        <Skeleton
                                            variant="text"
                                            width="20%"
                                            height={25}
                                        />
                                    </Stack>
                                </CardContent>
                            </Card>
                        </React.Fragment>
                    ))}
                </>
            ) : orders.length === 0 ? (
                <Typography variant="h5" color="gray" mt={"10px"}>
                    You haven’t placed any orders yet.
                </Typography>
            ) : (
                orders.map((order) => (
                    <Card
                        key={order.id}
                        onClick={() => navigate(`/order_details/${order.id}`)}
                        variant="outlined"
                        sx={{ borderRadius: 2, boxShadow: 1, mb: 3 }}
                    >
                        <Box
                            sx={{
                                backgroundColor: "#f5f5f5",
                                px: 2,
                                py: 1,
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                                borderBottom: "1px solid #e0e0e0",
                            }}
                        >
                            <Typography variant="body1" fontWeight={600}>
                                Order ID: #{order.id}
                            </Typography>
                        </Box>

                        <CardContent>
                            {order.orderItems.map((item) => (
                                <Box
                                    key={item.id}
                                    sx={{
                                        display: "flex",
                                        flexDirection: {
                                            xs: "column",
                                            sm: "row",
                                        },
                                        alignItems: {
                                            xs: "flex-start",
                                            sm: "center",
                                        },
                                        justifyContent: "space-between",
                                        gap: 2,
                                        mb: 2,
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        sx={{ width: "100%" }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 2,
                                            }}
                                        >
                                            <img
                                                src={item.product.images[0]}
                                                alt={item.product.title}
                                                style={{
                                                    width: 70,
                                                    height: 70,
                                                    objectFit: "cover",
                                                    borderRadius: 8,
                                                }}
                                            />
                                            <Typography
                                                variant="h6"
                                                fontWeight={600}
                                                sx={{
                                                    wordBreak: "break-word",
                                                }}
                                            >
                                                {item.product.title}
                                            </Typography>
                                        </Box>

                                        <Typography
                                            variant="body1"
                                            fontWeight={600}
                                            sx={{
                                                minWidth: "80px",
                                                textAlign: "right",
                                            }}
                                        >
                                            ₹{item.price}
                                        </Typography>
                                    </Stack>
                                </Box>
                            ))}

                            <Divider sx={{ my: 2 }} />

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: {
                                        xs: "column",
                                        sm: "row",
                                    },
                                    justifyContent: "space-between",
                                    alignItems: {
                                        xs: "flex-start",
                                        sm: "center",
                                    },
                                    gap: 2,
                                }}
                            >
                                {(() => {
                                    const status = order.status.toLowerCase();
                                    const formattedDate = new Date(
                                        order.createdAt
                                    ).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric",
                                    });

                                    let message = "";
                                    let color = "";

                                    if (
                                        [
                                            "placed",
                                            "processing",
                                            "shipping",
                                        ].includes(status)
                                    ) {
                                        message = `Order confirmed on ${formattedDate}`;
                                        color = "orange";
                                    } else if (status === "delivered") {
                                        message = `Order delivered on ${formattedDate}`;
                                        color = "green";
                                    } else if (status === "cancelled") {
                                        message = `Order cancelled on ${formattedDate}`;
                                        color = "red";
                                    } else {
                                        message = `Order status: ${order.status}`;
                                        color = "gray";
                                    }

                                    return (
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: color,
                                                fontWeight: 500,
                                            }}
                                        >
                                            {message}
                                        </Typography>
                                    );
                                })()}

                                <Stack direction={"row"} gap={"2px"}>
                                    <Typography variant="h6" color="gray">
                                        Status:
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        fontWeight={600}
                                        sx={{
                                            color:
                                                order.status === "Delivered"
                                                    ? "green"
                                                    : order.status ===
                                                      "Cancelled"
                                                    ? "red"
                                                    : "orange",
                                        }}
                                    >
                                        {order.status}
                                    </Typography>
                                </Stack>
                            </Box>
                        </CardContent>
                    </Card>
                ))
            )}
        </Stack>
    );
};

export default MyOrders;
