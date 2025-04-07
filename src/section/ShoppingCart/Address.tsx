import {
    Box,
    Button,
    Card,
    CardContent,
    CircularProgress,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { RootState, AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ArrowForwardIos, MoreVert, Add as AddIcon } from "@mui/icons-material";
import AddressForm from "../Profile/AddressForm";
import {
    addAddress,
    updateAddress,
    deleteAddress,
    clearAllAddressErrorsAndMessages,
    getUserAddresses,
} from "../../store/Slices/addressSlice";
import { toast } from "react-toastify";

const Address = () => {
    const { error, message, addresses,loading } = useSelector(
        (state: RootState) => state.address
    );
    const navigate = useNavigate();
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

    const handleDeleteAddress = async (addressId: string) => {
        await dispatch(deleteAddress(addressId));
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
        if (error) {
            toast.error(error);
        }
        if (message) {
            toast.success(message);
        }
        dispatch(clearAllAddressErrorsAndMessages());
    }, [error, message, dispatch]);

    return (
        <Box sx={{ minHeight: "100vh" }}>
            <Box>
                <Stack
                    maxWidth={{ xs: "100%", sm: "1050px" }}
                    mx="auto"
                    py="24px"
                    direction="row"
                    gap="15px"
                    sx={{
                        justifyContent: { xs: "center", sm: "start" },
                        alignItems: "center",
                        px: { xs: "20px", sm: "0" },
                        flexWrap: "wrap",
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
                    {addresses.map((address) => (
                        <React.Fragment key={address.id}>
                            {editAddressId === address.id && showAddressForm ? (
                                <AddressForm
                                    addAddressformData={addAddressFormData}
                                    handleChange={handleAddAddressChange}
                                    handleSubmit={handleAddressSubmit}
                                    handleClose={handleFormClose}
                                    isEditMode={true}
                                    initialIsDefault={address.isDefault}
                                />
                            ) : (
                                <Card
                                    variant="outlined"
                                    sx={{
                                        width: "100%",
                                        borderRadius: 0,
                                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                    }}
                                >
                                    <CardContent>
                                        <Box
                                            display="flex"
                                            sx={{
                                                justifyContent:
                                                    address.isDefault
                                                        ? "space-between"
                                                        : "flex-end",
                                                alignItems: "center",
                                            }}
                                        >
                                            {address.isDefault && (
                                                <CheckCircleOutlineIcon
                                                    fontSize="large"
                                                    htmlColor="green"
                                                />
                                            )}
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
                                                disableScrollLock
                                                PaperProps={{
                                                    elevation: 2,
                                                    sx: {
                                                        boxShadow:
                                                            "0px 2px 4px rgba(0,0,0,0.1)",
                                                        borderRadius: 1.5,
                                                    },
                                                }}
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
                                                <MenuItem
                                                    onClick={() => {
                                                        handleDeleteAddress(
                                                            address.id
                                                        );
                                                        handleClose();
                                                    }}
                                                >
                                                    Delete
                                                </MenuItem>
                                            </Menu>
                                        </Box>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontSize: {
                                                    xs: "16px",
                                                    sm: "18px",
                                                },
                                                mt: 2,
                                            }}
                                        >
                                            {address.line1}, {address.line2},{" "}
                                            {address.city}, {address.state} -{" "}
                                            {address.pincode}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            )}
                        </React.Fragment>
                    ))}
                </Stack>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate("/shopping-cart/checkout/payment")}
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

            {loading && (
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
            )}
        </Box>
    );
};

export default Address;
