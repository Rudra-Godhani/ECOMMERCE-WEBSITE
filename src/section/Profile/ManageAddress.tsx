import {
    Box,
    Card,
    CardContent,
    IconButton,
    Menu,
    MenuItem,
    Skeleton,
    Stack,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { toast } from "react-toastify";
import AddIcon from "@mui/icons-material/Add";
import AddressForm from "./AddressForm";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
    addAddress,
    clearAllAddressErrorsAndMessages,
    deleteAddress,
    getUserAddresses,
    updateAddress,
} from "../../store/Slices/addressSlice";

const ManageAddress = () => {
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [editAddressId, setEditAddressId] = useState<string | null>(null);
    const { error, message, addresses, loading } = useSelector(
        (state: RootState) => state.address
    );

    const dispatch = useDispatch<AppDispatch>();

    const [addAddressformData, setaddAddressFormData] = useState({
        line1: "",
        line2: "",
        pincode: "",
        city: "",
        state: "",
    });

    const handleAddAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setaddAddressFormData({
            ...addAddressformData,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddAddressSubmit = async (data: FormData) => {
        for (const [key, value] of data.entries()) {
            console.log(`${key}: ${value}`);
        }

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
        setaddAddressFormData({
            line1: "",
            line2: "",
            pincode: "",
            city: "",
            state: "",
        });
    };

    const handleEditAddress = (address: any) => {
        setEditAddressId(address.id);
        setaddAddressFormData({
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

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
        null
    );
    const open = Boolean(anchorEl);

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
        setaddAddressFormData({
            line1: "",
            line2: "",
            pincode: "",
            city: "",
            state: "",
        });
    };

    return (
        <Stack>
            <Stack>
                <Typography variant="h4" fontWeight={"700"} pb="30px">
                    Manage Address
                </Typography>
            </Stack>
            <Stack
                direction={"row"}
                gap={1}
                sx={{
                    cursor: "pointer",
                    textTransform: "uppercase",
                    color: "#23A6F0",
                    border: "1px solid rgb(211, 208, 208)",
                    p: "10px",
                    alignItems: "center",
                    mb: "20px",
                    backgroundColor: "#f0f0f0",
                }}
                onClick={() => {
                    setEditAddressId(null);
                    setaddAddressFormData({
                        line1: "",
                        line2: "",
                        pincode: "",
                        city: "",
                        state: "",
                    });
                    setShowAddressForm(!showAddressForm);
                }}
            >
                <AddIcon />
                <Typography variant="h5" fontWeight={600}>
                    Add New Address
                </Typography>
            </Stack>
            {showAddressForm && !editAddressId && (
                <AddressForm
                    addAddressformData={addAddressformData}
                    handleChange={handleAddAddressChange}
                    handleSubmit={handleAddAddressSubmit}
                    handleClose={handleFormClose}
                    isEditMode={false}
                />
            )}
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
                <Typography variant="h5" color="gray" mt={"10px"}>
                    You have not added any addresses yet. Add one now!
                </Typography>
            ) : (
                <Stack>
                    {addresses.map((address) => (
                        <React.Fragment key={address.id}>
                            {editAddressId !== address.id ? (
                                <Card
                                    variant="outlined"
                                    sx={{
                                        width: "100%",
                                        position: "relative",
                                        borderRadius: 0,
                                        mb: "5px",
                                    }}
                                >
                                    <CardContent>
                                        <Box
                                            display="flex"
                                            sx={{
                                                justifyContent: "flex-end",
                                            }}
                                            alignItems="start"
                                        >
                                            <IconButton
                                                size="small"
                                                onClick={(e) =>
                                                    handleMenuClick(
                                                        e,
                                                        address.id
                                                    )
                                                }
                                            >
                                                <MoreVertIcon />
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
                                        <Typography variant="h5">
                                            {address.line1},{address.line2},
                                            {address.city},{address.state} -{" "}
                                            {address.pincode}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ) : (
                                <AddressForm
                                    addAddressformData={addAddressformData}
                                    handleChange={handleAddAddressChange}
                                    handleSubmit={handleAddAddressSubmit}
                                    handleClose={handleFormClose}
                                    isEditMode={true}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </Stack>
            )}
        </Stack>
    );
};

export default ManageAddress;
