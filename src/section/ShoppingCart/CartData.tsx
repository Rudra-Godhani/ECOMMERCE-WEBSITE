import { ArrowForwardIos } from "@mui/icons-material";
import {
    Box,
    Button,
    CircularProgress,
    Paper,
    Skeleton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
    addProductToCart,
    clearAllCartErrosAndMsgs,
    decreaseQuantity,
    removeProductFromCart,
} from "../../store/Slices/CartSlice";
import { toast } from "react-toastify";
import { emptyBox } from "../../assets";

const CartData: React.FC = () => {
    const { cartItems, getCartloading, loadingStates, error, message } =
        useSelector((state: RootState) => state.cart);

    const dispatch = useDispatch<AppDispatch>();

    const incQuantity = (id: string, color: string) => {
        dispatch(addProductToCart({ productId: id, color: color }));
    };

    const decQuantity = (id: string) => {
        dispatch(decreaseQuantity({ productId: id }));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        if (message) {
            toast.success(message);
        }
        dispatch(clearAllCartErrosAndMsgs());
    }, [dispatch, error, message]);

    return (
        <Box>
            <Box>
                <Stack
                    maxWidth={"1050px"}
                    mx={"auto"}
                    py={"24px"}
                    direction={"row"}
                    gap={"15px"}
                    sx={{
                        justifyContent: { xs: "center", sm: "start" },
                        alignItems: { xs: "center", sm: "start" },
                        p: { xs: "50px 20px", lg: "50px 0px" },
                    }}
                >
                    <Link to="/">
                        <Typography
                            variant="h6"
                            color="secondary"
                            fontWeight={"700"}
                        >
                            Home
                        </Typography>
                    </Link>
                    <ArrowForwardIos fontSize="small" htmlColor="#BDBDBD" />
                    <Typography variant="h6" color="#BDBDBD" fontWeight={"700"}>
                        Cart
                    </Typography>
                </Stack>
            </Box>
            <Box textAlign={"center"} pb="40px">
                <Typography
                    variant="h1"
                    color="secondary"
                    sx={{
                        display: "inline-block",
                        borderBottom: "3px solid #E9E9E9",
                        paddingBottom: "20px",
                    }}
                >
                    Your Cart
                </Typography>
            </Box>
            {getCartloading ? (
                <Box
                    maxWidth={"1050px"}
                    mx="auto"
                    pb="40px"
                    sx={{ p: { xs: "0 30px", lg: "0 0" } }}
                >
                    <TableContainer
                        component={Paper}
                        elevation={0}
                        sx={{ overflowX: "auto", width: "100%" }}
                    >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{ backgroundColor: "#FAFAFA" }}>
                                <TableRow>
                                    {[
                                        "Product",
                                        "Color",
                                        "Quantity",
                                        "Price",
                                        "Total Price",
                                        "",
                                    ].map((_, index) => (
                                        <TableCell
                                            key={index}
                                            align={
                                                index === 0 ? "left" : "center"
                                            }
                                            sx={{ border: "none" }}
                                        >
                                            <Skeleton
                                                variant="text"
                                                width={
                                                    index === 0 ? "60%" : "80%"
                                                }
                                                height={20}
                                                sx={{
                                                    margin:
                                                        index === 0
                                                            ? "0"
                                                            : "auto",
                                                }}
                                            />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {[...Array(3)].map((_, rowIndex) => (
                                    <TableRow key={rowIndex}>
                                        <TableCell
                                            align="left"
                                            sx={{ pl: "16px" }}
                                        >
                                            <Stack
                                                direction="row"
                                                alignItems="center"
                                                gap={2}
                                            >
                                                <Skeleton
                                                    variant="rounded"
                                                    width={150}
                                                    height={120}
                                                    animation="wave"
                                                />
                                                <Skeleton
                                                    variant="text"
                                                    width={200}
                                                    height={25}
                                                />
                                            </Stack>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Skeleton
                                                variant="circular"
                                                width={25}
                                                height={25}
                                                sx={{ margin: "auto" }}
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            <Skeleton
                                                variant="text"
                                                width={60}
                                                height={25}
                                                sx={{ margin: "auto" }}
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            <Skeleton
                                                variant="text"
                                                width={60}
                                                height={25}
                                                sx={{ margin: "auto" }}
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            <Skeleton
                                                variant="text"
                                                width={80}
                                                height={25}
                                                sx={{ margin: "auto" }}
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            <Skeleton
                                                variant="text"
                                                width={30}
                                                height={25}
                                                sx={{ margin: "auto" }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            ) : cartItems.length === 0 ? (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: {
                            xs: "100%",
                            sm: "100%",
                        },
                        textAlign: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            direction: "row",
                            maxWidth: { xs: "300px", sm: "400px" },
                            mt: "-90px",
                        }}
                    >
                        <img
                            src={emptyBox}
                            alt="Error illustration"
                            style={{}}
                        />
                    </Box>
                    <Stack>
                        <Typography
                            variant="h3"
                            fontWeight="700"
                            sx={{ mb: 2 }}
                        >
                            Your cart is empty!
                        </Typography>
                        <Typography
                            variant="h6"
                            color="gray"
                            fontWeight="700"
                            sx={{ mb: 2 }}
                        >
                            start Adding items to it now.
                        </Typography>
                        <Button
                            component={Link}
                            to="/product/listing"
                            variant="outlined"
                            sx={{
                                color: "white",
                                backgroundColor: "#23A6F0",
                                mt: "10px",
                                mb: "50px",
                            }}
                        >
                            Shop now
                        </Button>
                    </Stack>
                </Box>
            ) : (
                <Box
                    maxWidth={"1050px"}
                    mx="auto"
                    pb="40px"
                    sx={{ p: { xs: "0 30px", lg: "0 0" } }}
                >
                    <TableContainer
                        component={Paper}
                        elevation={0}
                        sx={{ overflowX: "auto", width: "100%" }}
                    >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{ backgroundColor: "#FAFAFA" }}>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            fontSize: "14px",
                                            color: "#737373",
                                            border: "none",
                                        }}
                                    >
                                        Product
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            fontSize: "14px",
                                            color: "#737373",
                                            border: "none",
                                        }}
                                    >
                                        Color
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            fontSize: "14px",
                                            color: "#737373",
                                            border: "none",
                                        }}
                                    >
                                        Quantity
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            fontSize: "14px",
                                            color: "#737373",
                                            border: "none",
                                        }}
                                    >
                                        Price
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            fontSize: "14px",
                                            color: "#737373",
                                            border: "none",
                                        }}
                                    >
                                        Total Price
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{ border: "none" }}
                                    ></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cartItems.map((item) => (
                                    <TableRow
                                        key={item.product.id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            align="left"
                                            sx={{ pl: "0px" }}
                                        >
                                            <Link
                                                to={`/product/${item.product.id}/detail`}
                                            >
                                                <Stack
                                                    direction={"row"}
                                                    alignItems={"center"}
                                                    gap={"20px"}
                                                >
                                                    <Box
                                                        sx={{
                                                            p: "0px 0px ",
                                                            width: "150px",
                                                            height: "120px",
                                                            overflow: "hidden",
                                                            borderRadius:
                                                                "10px",
                                                        }}
                                                    >
                                                        <img
                                                            src={
                                                                item.product
                                                                    .images[0]
                                                            }
                                                            alt=""
                                                            style={{
                                                                objectFit:
                                                                    "cover",
                                                                width: "100%",
                                                                height: "100%",
                                                                display:
                                                                    "block",
                                                            }}
                                                        />
                                                    </Box>
                                                    <Stack>
                                                        <Typography
                                                            variant="h5"
                                                            fontWeight={"700"}
                                                            color="secondary"
                                                        >
                                                            {item.product.title}
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Box
                                                display="flex"
                                                justifyContent="center"
                                            >
                                                <Box
                                                    width={"25px"}
                                                    height={"25px"}
                                                    sx={{
                                                        backgroundColor:
                                                            item.color,
                                                        borderRadius: "50%",
                                                        border: "2px solid rgb(184, 180, 180)",
                                                    }}
                                                ></Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Stack
                                                direction={"row"}
                                                gap="20px"
                                                justifyContent={"center"}
                                                alignItems={"center"}
                                            >
                                                <Box
                                                    sx={{
                                                        cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                        decQuantity(
                                                            item.product.id
                                                        )
                                                    }
                                                >
                                                    {loadingStates[
                                                        item.product.id
                                                    ]?.isDecreasing ? (
                                                        <CircularProgress
                                                            size={20}
                                                            color="inherit"
                                                        />
                                                    ) : item.quantity === 1 ? (
                                                        <DeleteOutlineIcon fontSize="small" />
                                                    ) : (
                                                        <RemoveIcon fontSize="small" />
                                                    )}
                                                </Box>
                                                <Typography
                                                    sx={{
                                                        fontSize: "16px",
                                                        color: "#252B42",
                                                        fontWeight: "700",
                                                    }}
                                                >
                                                    {item.quantity}
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                        incQuantity(
                                                            item.product.id,
                                                            item.color
                                                        )
                                                    }
                                                >
                                                    {loadingStates[
                                                        item.product.id
                                                    ]?.isAdding ? (
                                                        <CircularProgress
                                                            size={20}
                                                            color="inherit"
                                                        />
                                                    ) : (
                                                        <AddIcon fontSize="small" />
                                                    )}
                                                </Box>
                                            </Stack>
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                fontSize: "16px",
                                                color: "#252B42",
                                                fontWeight: "700",
                                            }}
                                        >
                                            ₹
                                            {item.product.retailPrice.toFixed(
                                                2
                                            )}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                fontSize: "16px",
                                                color: "#252B42",
                                                fontWeight: "700",
                                            }}
                                        >
                                            ₹
                                            {(
                                                item.product.retailPrice *
                                                item.quantity
                                            ).toFixed(2)}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                fontSize: "16px",
                                                color: "#252B42",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    cursor: "pointer",
                                                }}
                                                onClick={() => {
                                                    console.log("hello");
                                                    dispatch(
                                                        removeProductFromCart({
                                                            productId:
                                                                item.product.id,
                                                        })
                                                    );
                                                }}
                                            >
                                                {loadingStates[item.product.id]
                                                    ?.isRemoving ? (
                                                    <CircularProgress
                                                        size={20}
                                                        color="inherit"
                                                    />
                                                ) : (
                                                    "X"
                                                )}
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}
        </Box>
    );
};

export default CartData;
