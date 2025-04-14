import { Box, Typography, Stack } from "@mui/material";
import CircleIcon from "@mui/icons-material/FiberManualRecord";

const OrderStatusStripe = ({ status }: { status: string }) => {
    let steps = [];

    if (status === "Cancelled") {
        steps = [
            { label: "Order Confirmed", key: "confirmed" },
            { label: "Cancelled", key: "cancelled" },
        ];
    } else {
        steps = [
            { label: "Order Confirmed", key: "confirmed" },
            { label: "Shipped", key: "shipped" },
            { label: "Delivered", key: "delivered" },
        ];
    }

    const statusMap = {
        Processing: "confirmed",
        Shipping: "shipped",
        Delivered: "delivered",
        Cancelled: "cancelled",
    };

    const currentStatusKey = statusMap[status as keyof typeof statusMap];

    const getStatusIndex = () => {
        return steps.findIndex((step) => step.key === currentStatusKey);
    };

    const activeIndex = getStatusIndex();

    return (
        <Box
            sx={{
                position: "relative",
                pl: 2,
                ml: 1,
                my: 5,
                "&:before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: "7px",
                    width: 3,
                    backgroundColor: "grey.400",
                    transition: "all 0.3s ease",
                    zIndex: 1,
                },
                "&:after": {    
                    content: '""',
                    position: "absolute",
                    top:10,
                    height: `${((activeIndex + 1) * 87) / steps.length}%`,
                    left: "7px",
                    width: 3,
                    backgroundColor: "green",
                    transition: "all 0.3s ease",
                    zIndex: 2,
                },
            }}
        >
            {steps.map((step, i) => (
                <Stack
                    key={i}
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ mb: 6 }}
                >
                    <CircleIcon
                        sx={{
                            fontSize: 22,
                            color: i <= activeIndex ? "green" : "grey.400",
                            position: "relative",
                            left: "-18.215px",
                            bgcolor: "white",
                            zIndex: 1,
                        }}
                    />
                    <Box>
                        <Typography
                            variant="h6"
                            fontWeight={600}
                            color={
                                i <= activeIndex ? "green" : "text.secondary"
                            }
                        >
                            {step.label}
                        </Typography>
                    </Box>
                </Stack>
            ))}
        </Box>
    );
};

export default OrderStatusStripe;
