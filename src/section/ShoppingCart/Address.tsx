import {
    Box,
    Button,
    Card,
    CardContent,
    IconButton,
    Menu,
    MenuItem,
    Radio,
    Skeleton,
    Stack,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { RootState, AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowForwardIos, MoreVert, Add as AddIcon } from "@mui/icons-material";
import AddressForm from "../Profile/AddressForm";
import {
    addAddress,
    updateAddress,
    clearAllAddressErrorsAndMessages,
    getUserAddresses,
    setAddressAsDefault,
} from "../../store/Slices/addressSlice";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { BASE_URL } from "../../const/constants";

const Address = () => {
    const { error, message, addresses, loading } = useSelector(
        (state: RootState) => state.address
    );
    const dispatch = useDispatch<AppDispatch>();

    const [showAddressForm, setShowAddressForm] = useState(false);
    const [editAddressId, setEditAddressId] = useState<string | null>(null);
    const [addAddressFormData, setAddAddressFormData] = useState({
        line1: "",
        line2: "",
        pincode: "",
        city: "",
        state: "",
    });
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
        null
    );
    const open = Boolean(anchorEl);

    const handleAddAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddAddressFormData({
            ...addAddressFormData,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddressSubmit = async (data: FormData) => {
        if (editAddressId) {
            data.append("addressId", editAddressId);
            await dispatch(updateAddress(data, editAddressId));
            dispatch(getUserAddresses());
        } else {
            await dispatch(addAddress(data));
            dispatch(getUserAddresses());
        }
        setShowAddressForm(false);
        setEditAddressId(null);
        setAddAddressFormData({
            line1: "",
            line2: "",
            pincode: "",
            city: "",
            state: "",
        });
    };

    const handleEditAddress = (address: any) => {
        setEditAddressId(address.id);
        setShowAddressForm(true);
        setAddAddressFormData({
            line1: address.line1,
            line2: address.line2,
            pincode: address.pincode,
            city: address.city,
            state: address.state,
        });
    };

    const handleSetAddressAsDefault = async (addressId: string) => {
        await dispatch(setAddressAsDefault(addressId));
        dispatch(getUserAddresses());
        handleClose();
    };

    const handleMenuClick = (
        event: React.MouseEvent<HTMLElement>,
        addressId: string
    ) => {
        setAnchorEl(event.currentTarget);
        setSelectedAddressId(addressId);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedAddressId(null);
    };

    const handleFormClose = (close: boolean) => {
        setShowAddressForm(close);
        setEditAddressId(null);
        setAddAddressFormData({
            line1: "",
            line2: "",
            pincode: "",
            city: "",
            state: "",
        });
    };

    useEffect(() => {
        dispatch(getUserAddresses());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        if (message) {
            toast.success(message);
        }
        dispatch(clearAllAddressErrorsAndMessages());
    }, [error, message, dispatch]);

    const { cartItems } = useSelector((state: RootState) => state.cart);

    const makePayment = async () => {
        const stripe = await loadStripe(
            "pk_test_51RBVnhP5q7TBIR8cWlbZpjL6RhDPWGbbP7eIiGkMV1AGLPz31ah1cNhdJkPzGl8X1qRXYGlIqeM1bJ46OenPFdyK009Y2Whf2b"
        );

        const defaultAddress = addresses.find((addr) => addr.isDefault);

        if (addresses.length === 0) {
            toast.error(
                "Add a delivery address so we know where to ship your order!"
            );
            return;
        }
        if (!defaultAddress) {
            toast.error(
                "Select a delivery address so we know where to ship your items."
            );
            return;
        }

        const paymentData = {
            cartItems,
            shippingAddress: defaultAddress,
        };

        try {
            const response = await axios.post(
                `${BASE_URL}/payment/create-checkout-session`,
                paymentData,
                { withCredentials: true }
            );

            const session = response.data;

            const result = await stripe?.redirectToCheckout({
                sessionId: session.id,
            });

            if (result?.error) {
                toast.error(result.error.message);
            }
        } catch (error) {
            toast.error("Payment initiation failed");
        }
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
                        sx={{ display: { xs: "none", sm: "block" } }}
                    />
                    <Link to="/shopping-cart/checkout">
                        <Typography
                            variant="h6"
                            color="secondary"
                            fontWeight="700"
                            sx={{ fontSize: { xs: "14px", sm: "16px" } }}
                        >
                            Cart
                        </Typography>
                    </Link>
                    <ArrowForwardIos
                        fontSize="small"
                        htmlColor="#BDBDBD"
                        sx={{ display: { xs: "none", sm: "block" } }}
                    />
                    <Typography
                        variant="h6"
                        color="#BDBDBD"
                        fontWeight="700"
                        sx={{ fontSize: { xs: "14px", sm: "16px" } }}
                    >
                        Address
                    </Typography>
                </Stack>
            </Box>

            <Stack
                sx={{
                    width: { xs: "90%", sm: "70%", md: "50%" },
                    maxWidth: "1050px",
                    mx: "auto",
                    my: "20px",
                    px: { xs: "10px", sm: "0" },
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight="700"
                    textAlign="center"
                    sx={{
                        mb: "20px",
                        fontSize: { xs: "24px", sm: "28px", md: "32px" },
                    }}
                >
                    Select Delivery Address
                </Typography>

                <Stack
                    direction="row"
                    gap={1}
                    sx={{
                        cursor: "pointer",
                        textTransform: "uppercase",
                        color: "#23A6F0",
                        border: "1px solid rgb(211, 208, 208)",
                        p: "10px",
                        alignItems: "center",
                        mb: "20px",
                        justifyContent: "center",
                        backgroundColor: "#f0f0f0",
                    }}
                    onClick={() => {
                        setEditAddressId(null);
                        setAddAddressFormData({
                            line1: "",
                            line2: "",
                            pincode: "",
                            city: "",
                            state: "",
                        });
                        setShowAddressForm(true);
                    }}
                >
                    <AddIcon />
                    <Typography variant="h5" fontWeight={600}>
                        Add New Address
                    </Typography>
                </Stack>

                {showAddressForm && !editAddressId && (
                    <AddressForm
                        addAddressformData={addAddressFormData}
                        handleChange={handleAddAddressChange}
                        handleSubmit={handleAddressSubmit}
                        handleClose={handleFormClose}
                        isEditMode={false}
                    />
                )}

                <Stack spacing={1}>
                    {loading ? (
                        <Stack spacing={2}>
                            {[...Array(3)].map((_, index) => (
                                <Card
                                    key={index}
                                    variant="outlined"
                                    sx={{
                                        width: "100%",
                                        borderRadius: 0,
                                        mb: "5px",
                                    }}
                                >
                                    <CardContent>
                                        <Box
                                            display="flex"
                                            justifyContent="space-between"
                                            alignItems="center"
                                        >
                                            <Skeleton
                                                variant="text"
                                                width="80%"
                                                height={20}
                                                sx={{ mt: 1 }}
                                            />
                                            <Skeleton
                                                variant="text"
                                                width={5}
                                                height={35}
                                            />
                                        </Box>
                                        <Skeleton
                                            variant="text"
                                            width="80%"
                                            height={20}
                                            sx={{ mt: 1 }}
                                        />
                                    </CardContent>
                                </Card>
                            ))}
                        </Stack>
                    ) : addresses.length === 0 ? (
                        <Stack py="20px">
                            <Typography
                                variant="h5"
                                color="gray"
                                textAlign="center"
                            >
                                You have not added any addresses yet.
                            </Typography>
                            <Typography
                                variant="h5"
                                color="gray"
                                textAlign="center"
                            >
                                Add one now!
                            </Typography>
                        </Stack>
                    ) : (
                        addresses.map((address) => (
                            <React.Fragment key={address.id}>
                                {editAddressId === address.id &&
                                showAddressForm ? (
                                    <AddressForm
                                        addAddressformData={addAddressFormData}
                                        handleChange={handleAddAddressChange}
                                        handleSubmit={handleAddressSubmit}
                                        handleClose={handleFormClose}
                                        isEditMode={true}
                                    />
                                ) : (
                                    <Card
                                        variant="outlined"
                                        sx={{
                                            width: "100%",
                                            borderRadius: "8px",
                                            boxShadow: address.isDefault
                                                ? "0 0 0 2px #23A6F0"
                                                : "0 1px 3px rgba(0,0,0,0.1)",
                                            bgcolor: address.isDefault
                                                ? "#f5faff"
                                                : "#fff",
                                            transition: "0.2s",
                                        }}
                                    >
                                        <CardContent>
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="space-between"
                                                gap={2}
                                            >
                                                <Box
                                                    display="flex"
                                                    alignItems="center"
                                                    gap={2}
                                                    flexGrow={1}
                                                >
                                                    <Radio
                                                        checked={
                                                            address.isDefault
                                                        }
                                                        onChange={() =>
                                                            handleSetAddressAsDefault(
                                                                address.id
                                                            )
                                                        }
                                                    />

                                                    <Typography variant="h5">
                                                        {address.line1},{" "}
                                                        {address.line2},{" "}
                                                        {address.city},{" "}
                                                        {address.state} -{" "}
                                                        {address.pincode}
                                                    </Typography>
                                                </Box>

                                                <IconButton
                                                    size="small"
                                                    onClick={(e) =>
                                                        handleMenuClick(
                                                            e,
                                                            address.id
                                                        )
                                                    }
                                                >
                                                    <MoreVert />
                                                </IconButton>
                                                <Menu
                                                    anchorEl={anchorEl}
                                                    open={
                                                        open &&
                                                        selectedAddressId ===
                                                            address.id
                                                    }
                                                    onClose={handleClose}
                                                >
                                                    <MenuItem
                                                        onClick={() => {
                                                            handleEditAddress(
                                                                address
                                                            );
                                                            handleClose();
                                                        }}
                                                    >
                                                        Edit
                                                    </MenuItem>
                                                </Menu>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                )}
                            </React.Fragment>
                        ))
                    )}
                </Stack>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={makePayment}
                    sx={{
                        mt: "20px",
                        alignSelf: "end",
                        px: { xs: "20px", sm: "30px" },
                        py: "10px",
                        fontSize: { xs: "14px", sm: "16px" },
                        textTransform: "none",
                        bgcolor: "#23A6F0",
                        "&:hover": { bgcolor: "#1e90d6" },
                    }}
                >
                    Payment
                </Button>
            </Stack>
        </Box>
    );
};

export default Address;

{
    /* {loading && (
                <Box
                    sx={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        bgcolor: "rgba(0, 0, 0, 0.5)", // Semi-transparent gray overlay
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1300, // Above most content (MUI default for modals)
                    }}
                >
                    <Stack direction="column" alignItems="center" spacing={2}>
                        <CircularProgress sx={{ color: "#23A6F0" }} />
                        <Typography variant="h6" color="white">
                            Loading
                        </Typography>
                    </Stack>
                </Box>
            )} */
}
