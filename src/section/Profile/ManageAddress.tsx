// import { Edit } from "@mui/icons-material";
// import {
//     Avatar,
//     Box,
//     Button,
//     Card,
//     CardContent,
//     Chip,
//     IconButton,
//     Menu,
//     MenuItem,
//     Stack,
//     TextField,
//     Typography,
// } from "@mui/material";
// import React, { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../store/store";
// import {
//     clearAllUpdateProfileErrorsAndMessage,
//     updateProfile,
// } from "../../store/Slices/updateProfileSlice";
// import { toast } from "react-toastify";
// import { getUser } from "../../store/Slices/userSlice";
// import AddIcon from "@mui/icons-material/Add";
// import AddressForm from "./AddressForm";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import {
//     addAddress,
//     clearAllAddressErrorsAndMessages,
// } from "../../store/Slices/addressSlice";

// const ManageAddress = () => {
//     const [showAddressForm, setShowAddressForm] = useState(false);
//     const { error, message } = useSelector((state: RootState) => state.address);
//     const { user } = useSelector((state: RootState) => state.user);

//     console.log("user:", user);
//     const dispatch = useDispatch<AppDispatch>();

//     const [addAddressformData, setaddAddressFormData] = useState({
//         line1: "",
//         line2: "",
//         pincode: "",
//         city: "",
//         state: "",
//     });

//     const handleAddAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setaddAddressFormData({
//             ...addAddressformData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleAddAddressSubmit = (data: FormData) => {
//         for (const [key, value] of data.entries()) {
//             console.log(`${key}: ${value}`);
//         }

//         dispatch(addAddress(data));
//     };

//     useEffect(() => {
//         if (error) {
//             toast.error(error);
//         }
//         if (message) {
//             toast.success(message);
//         }
//         dispatch(clearAllAddressErrorsAndMessages());
//     }, [error, message]);

//     const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//     const open = Boolean(anchorEl);

//     const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     return (
//         <Stack>
//             <Stack>
//                 <Typography variant="h4" fontWeight={"700"} pb="30px">
//                     Manage Address
//                 </Typography>
//             </Stack>
//             <Stack
//                 direction={"row"}
//                 gap={1}
//                 sx={{
//                     cursor: "pointer",
//                     textTransform: "uppercase",
//                     color: "#23A6F0",
//                     border: "1px solid rgb(211, 208, 208)",
//                     p: "10px",
//                     alignItems: "center",
//                     mb: "20px",
//                 }}
//                 onClick={() => setShowAddressForm(!showAddressForm)}
//             >
//                 <AddIcon />
//                 <Typography variant="h5">Add New Address</Typography>
//             </Stack>
//             {showAddressForm && (
//                 <AddressForm
//                     addAddressformData={addAddressformData}
//                     handleChange={handleAddAddressChange}
//                     handleSubmit={handleAddAddressSubmit}
//                     handleClose={setShowAddressForm}
//                 />
//             )}
//             <Stack>
//                 {/* {user?.addresses.map((address) => (
//                     <>
//                         <Stack key={address.id} direction={"row"} >
//                             <Typography variant="h4">{user.name}</Typography>
//                             <Typography variant="h4">
//                                 {user.phoneNumber}
//                             </Typography>
//                         </Stack>
//                         <Stack>
//                             <Typography>
//                                 {address.line1},{address.line2},{address.city},
//                                 {address.state} - {address.pincode}
//                             </Typography>
//                         </Stack>
//                     </>
//                 ))} */}
//                 {user?.addresses.map((address) => (
//                     <Card
//                         variant="outlined"
//                         sx={{
//                             width: "100%",
//                             position: "relative",
//                             borderRadius: 0,
//                             mb: "5px",
//                         }}
//                     >
//                         <CardContent>
//                             <Box
//                                 display="flex"
//                                 sx={{
//                                     justifyContent: address.isDefault
//                                         ? "space-between"
//                                         : "flex-end",
//                                 }}
//                                 alignItems="start"
//                             >
//                                 {address.isDefault && (
//                                     <CheckCircleOutlineIcon htmlColor="green" />
//                                 )}
//                                 <IconButton
//                                     size="small"
//                                     onClick={handleMenuClick}
//                                 >
//                                     <MoreVertIcon />
//                                 </IconButton>

//                                 <Menu
//                                     anchorEl={anchorEl}
//                                     open={open}
//                                     onClose={handleClose}
//                                     disableScrollLock
//                                     PaperProps={{
//                                         elevation: 2,
//                                         sx: {
//                                             boxShadow:
//                                                 "0px 2px 4px rgba(0,0,0,0.1)",
//                                             borderRadius: 1.5,
//                                         },
//                                     }}
//                                 >
//                                     <MenuItem
//                                         onClick={() => {
//                                             handleClose();
//                                         }}
//                                     >
//                                         Edit
//                                     </MenuItem>
//                                     <MenuItem
//                                         onClick={() => {
//                                             handleClose();
//                                         }}
//                                     >
//                                         Delete
//                                     </MenuItem>
//                                 </Menu>
//                             </Box>
//                             <Typography key={address.id} variant="h5">
//                                 {address.line1},{address.line2},{address.city},
//                                 {address.state} - {address.pincode}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 ))}
//             </Stack>
//         </Stack>
//     );
// };

// export default ManageAddress;

// import { Edit } from "@mui/icons-material";
// import {
//     Avatar,
//     Box,
//     Button,
//     Card,
//     CardContent,
//     Chip,
//     IconButton,
//     Menu,
//     MenuItem,
//     Stack,
//     TextField,
//     Typography,
// } from "@mui/material";
// import React, { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../store/store";
// import {
//     clearAllUpdateProfileErrorsAndMessage,
//     updateProfile,
// } from "../../store/Slices/updateProfileSlice";
// import { toast } from "react-toastify";
// import { getUser } from "../../store/Slices/userSlice";
// import AddIcon from "@mui/icons-material/Add";
// import AddressForm from "./AddressForm";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import {
//     addAddress,
//     clearAllAddressErrorsAndMessages,
// } from "../../store/Slices/addressSlice";

// const ManageAddress = () => {
//     const [showAddressForm, setShowAddressForm] = useState(false);
//     const [editAddress, setEditAddress] = useState<any>(null);
//     const { error, message } = useSelector((state: RootState) => state.address);
//     const { user } = useSelector((state: RootState) => state.user);

//     console.log("user:", user);
//     const dispatch = useDispatch<AppDispatch>();

//     const [addAddressformData, setaddAddressFormData] = useState({
//         line1: "",
//         line2: "",
//         pincode: "",
//         city: "",
//         state: "",
//     });

//     const handleAddAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setaddAddressFormData({
//             ...addAddressformData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleAddAddressSubmit = (data: FormData) => {
//         for (const [key, value] of data.entries()) {
//             console.log(`${key}: ${value}`);
//         }

//         dispatch(addAddress(data));
//         setShowAddressForm(false);
//         setaddAddressFormData({
//             line1: "",
//             line2: "",
//             pincode: "",
//             city: "",
//             state: "",
//         });
//     };

//     const handleEditAddress = (address: any) => {
//         setEditAddress(address); // Set the address to edit
//         setShowAddressForm(true); // Show the form
//         setaddAddressFormData({
//             line1: address.line1,
//             line2: address.line2,
//             pincode: address.pincode,
//             city: address.city,
//             state: address.state,
//         }); // Pre-fill the form with address data
//     };

//     useEffect(() => {
//         if (error) {
//             toast.error(error);
//         }
//         if (message) {
//             toast.success(message);
//         }
//         dispatch(clearAllAddressErrorsAndMessages());
//     }, [error, message, dispatch]);

//     const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//     const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
//         null
//     );
//     const open = Boolean(anchorEl);

//     const handleMenuClick = (event: React.MouseEvent<HTMLElement>,addressId: string) => {
//         setAnchorEl(event.currentTarget);
//         setSelectedAddressId(addressId);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//         setSelectedAddressId(null);
//     };

//     return (
//         <Stack>
//             <Stack>
//                 <Typography variant="h4" fontWeight={"700"} pb="30px">
//                     Manage Address
//                 </Typography>
//             </Stack>
//             <Stack
//                 direction={"row"}
//                 gap={1}
//                 sx={{
//                     cursor: "pointer",
//                     textTransform: "uppercase",
//                     color: "#23A6F0",
//                     border: "1px solid rgb(211, 208, 208)",
//                     p: "10px",
//                     alignItems: "center",
//                     mb: "20px",
//                 }}
//                 onClick={() => {
//                     setEditAddress(null); // Reset edit mode
//                     setaddAddressFormData({
//                         line1: "",
//                         line2: "",
//                         pincode: "",
//                         city: "",
//                         state: "",
//                     }); // Reset form
//                     setShowAddressForm(!showAddressForm);
//                 }}
//             >
//                 <AddIcon />
//                 <Typography variant="h5">Add New Address</Typography>
//             </Stack>
//             {showAddressForm && (
//                 <AddressForm
//                     addAddressformData={addAddressformData}
//                     handleChange={handleAddAddressChange}
//                     handleSubmit={handleAddAddressSubmit}
//                     handleClose={setShowAddressForm}
//                     isEditMode={false}
//                 />
//             )}
//             <Stack>
//                 {user?.addresses.map((address) => (
//                     <Card
//                         variant="outlined"
//                         sx={{
//                             width: "100%",
//                             position: "relative",
//                             borderRadius: 0,
//                             mb: "5px",
//                         }}
//                     >
//                         <CardContent>
//                             <Box
//                                 display="flex"
//                                 sx={{
//                                     justifyContent: address.isDefault
//                                         ? "space-between"
//                                         : "flex-end",
//                                 }}
//                                 alignItems="start"
//                             >
//                                 {address.isDefault && (
//                                     <CheckCircleOutlineIcon htmlColor="green" />
//                                 )}
//                                 <IconButton
//                                     size="small"
//                                     onClick={(e) =>
//                                         handleMenuClick(e, address.id)
//                                     }
//                                 >
//                                     <MoreVertIcon />
//                                 </IconButton>

//                                 <Menu
//                                     anchorEl={anchorEl}
//                                     open={
//                                         open && selectedAddressId === address.id
//                                     }
//                                     onClose={handleClose}
//                                     disableScrollLock
//                                     PaperProps={{
//                                         elevation: 2,
//                                         sx: {
//                                             boxShadow:
//                                                 "0px 2px 4px rgba(0,0,0,0.1)",
//                                             borderRadius: 1.5,
//                                         },
//                                     }}
//                                 >
//                                     <MenuItem
//                                         onClick={() => {
//                                             handleEditAddress(address);
//                                             handleClose();
//                                         }}
//                                     >
//                                         Edit
//                                     </MenuItem>
//                                     <MenuItem
//                                         onClick={() => {
//                                             handleClose();
//                                         }}
//                                     >
//                                         Delete
//                                     </MenuItem>
//                                 </Menu>
//                             </Box>
//                             <Typography key={address.id} variant="h5">
//                                 {address.line1},{address.line2},{address.city},
//                                 {address.state} - {address.pincode}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 ))}
//             </Stack>
//         </Stack>
//     );
// };

// export default ManageAddress;

import { Edit } from "@mui/icons-material";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
    clearAllUpdateProfileErrorsAndMessage,
    updateProfile,
} from "../../store/Slices/updateProfileSlice";
import { toast } from "react-toastify";
import { getUser } from "../../store/Slices/userSlice";
import AddIcon from "@mui/icons-material/Add";
import AddressForm from "./AddressForm";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
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
    const { error, message, addresses } = useSelector(
        (state: RootState) => state.address
    );
    const { user } = useSelector((state: RootState) => state.user);

    console.log("user:", user);
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
            // If editing, append the address ID and call updateAddress
            data.append("addressId", editAddressId);
            await dispatch(updateAddress(data, editAddressId));
            dispatch(getUserAddresses());
        } else {
            // If adding, call addAddress
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
        setEditAddressId(address.id); // Set the address to edit
        // setShowAddressForm(true); // Show the form
        setaddAddressFormData({
            line1: address.line1,
            line2: address.line2,
            pincode: address.pincode,
            city: address.city,
            state: address.state,
        }); // Pre-fill the form with address data
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
        setShowAddressForm(close); // Set showAddressForm based on the passed value
        setEditAddressId(null); // Reset edit mode when closing
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
                    }); // Reset form
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
                    handleClose={setShowAddressForm}
                    isEditMode={false}
                />
            )}
            <Stack>
                {addresses.map((address) => (
                    <React.Fragment key={address.id}>
                        {/* Hide the address card if it's being edited */}
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
                                            justifyContent: address.isDefault
                                                ? "space-between"
                                                : "flex-end",
                                        }}
                                        alignItems="start"
                                    >
                                        {address.isDefault && (
                                            <CheckCircleOutlineIcon htmlColor="green" />
                                        )}
                                        <IconButton
                                            size="small"
                                            onClick={(e) =>
                                                handleMenuClick(e, address.id)
                                            }
                                        >
                                            <MoreVertIcon />
                                        </IconButton>

                                        <Menu
                                            anchorEl={anchorEl}
                                            open={
                                                open &&
                                                selectedAddressId === address.id
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
                                                    handleEditAddress(address);
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
                            /* Show AddressForm in place of the address being edited */
                            <AddressForm
                                addAddressformData={addAddressformData}
                                handleChange={handleAddAddressChange}
                                handleSubmit={handleAddAddressSubmit}
                                handleClose={setShowAddressForm}
                                isEditMode={true}
                                initialIsDefault={address.isDefault}
                            />
                        )}
                    </React.Fragment>
                ))}
            </Stack>
        </Stack>
    );
};

export default ManageAddress;
