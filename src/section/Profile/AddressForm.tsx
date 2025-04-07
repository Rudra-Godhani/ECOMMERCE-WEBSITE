// import { Box, Button, Stack, TextField, Typography } from "@mui/material";
// import React, { useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../store/store";
// import { updateProfile } from "../../store/Slices/updateProfileSlice";

// interface AddressFormProps {
//     addAddressformData: {
//         line1: string;
//         line2: string;
//         pincode: string;
//         city: string;
//         state: string;
//     };
//     handleChange: (e: any) => void;
//     handleSubmit: (data: FormData) => void;
//     handleClose: (close: boolean) => void;
// }

// const AddressForm: React.FC<AddressFormProps> = ({
//     addAddressformData,
//     handleChange,
//     handleSubmit,
//     handleClose,
// }) => {
//     const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         handleChange(e);
//     };

//     const handleFormSubmit = (e: React.FormEvent) => {
//         e.preventDefault();

//         const formDataToSend = new FormData();
//         formDataToSend.append("line1", addAddressformData.line1);
//         formDataToSend.append("line2", addAddressformData.line2);
//         formDataToSend.append("pincode", addAddressformData.pincode);
//         formDataToSend.append("city", addAddressformData.city);
//         formDataToSend.append("state", addAddressformData.state);
//         formDataToSend.forEach((value, key) => {
//             console.log(`key: ${key}, value: ${value}`);
//         });
//         handleSubmit(formDataToSend);
//     };
//     return (
//         <Box sx={{ backgroundColor: "#F5FAFF", p: "20px", mb:"20px"}}>
//             <form onSubmit={handleFormSubmit}>
//                 <Stack gap={"20px"}>
//                     <Stack gap={"15px"}>
//                         <Typography variant="h4">Line1</Typography>
//                         <TextField
//                             label="House no./ Building name"
//                             name="line1"
//                             value={addAddressformData.line1}
//                             onChange={handleFormDataChange}
//                             InputLabelProps={{
//                                 style: { fontSize: "15px" },
//                             }}
//                             InputProps={{
//                                 style: { fontSize: "15px" },
//                             }}
//                             fullWidth
//                         />
//                     </Stack>
//                     <Stack gap={"15px"}>
//                         <Typography variant="h4">Line2</Typography>
//                         <TextField
//                             label="Road Name / Area / Colony"
//                             name="line2"
//                             value={addAddressformData.line2}
//                             onChange={handleFormDataChange}
//                             InputLabelProps={{
//                                 style: { fontSize: "15px" },
//                             }}
//                             InputProps={{
//                                 style: { fontSize: "15px" },
//                             }}
//                             fullWidth
//                         />
//                     </Stack>
//                     <Stack gap={"15px"}>
//                         <Typography variant="h4">Pincode</Typography>
//                         <TextField
//                             label="Pincode"
//                             name="pincode"
//                             type="number"
//                             value={addAddressformData.pincode}
//                             onChange={handleFormDataChange}
//                             InputLabelProps={{
//                                 style: { fontSize: "15px" },
//                             }}
//                             InputProps={{
//                                 style: { fontSize: "15px" },
//                             }}
//                             fullWidth
//                         />
//                     </Stack>
//                     <Stack direction={"row"} justifyContent={"space-between"}>
//                         <Stack gap={"15px"}>
//                             <Typography variant="h4">City</Typography>
//                             <TextField
//                                 label="City"
//                                 name="city"
//                                 value={addAddressformData.city}
//                                 onChange={handleFormDataChange}
//                                 InputLabelProps={{
//                                     style: { fontSize: "15px" },
//                                 }}
//                                 InputProps={{
//                                     style: { fontSize: "15px" },
//                                 }}
//                             />
//                         </Stack>
//                         <Stack gap={"15px"}>
//                             <Typography variant="h4">State</Typography>
//                             <TextField
//                                 label="State"
//                                 name="state"
//                                 value={addAddressformData.state}
//                                 onChange={handleFormDataChange}
//                                 InputLabelProps={{
//                                     style: { fontSize: "15px" },
//                                 }}
//                                 InputProps={{
//                                     style: { fontSize: "15px" },
//                                 }}
//                             />
//                         </Stack>
//                     </Stack>
//                     <Stack
//                         justifyContent={"flex-end"}
//                         gap={2}
//                         sx={{
//                             flexDirection: {
//                                 xs: "column",
//                                 sm: "row"
//                             }
//                         }}
//                     >
//                         <Button
//                             type="submit"
//                             sx={{
//                                 color: "#FAFAFA",
//                                 backgroundColor: "#23A6F0",
//                                 p: { md: "10px 10px", lg: "10px 20px" },
//                                 whiteSpace: "nowrap",
//                                 minWidth: "fit-content",
//                                 width: "fit-content",
//                                 alignSelf: "flex-end",
//                             }}
//                         >
//                             Save and Make Default
//                         </Button>
//                         <Button
//                             sx={{
//                                 color: "#FAFAFA",
//                                 backgroundColor: "#23A6F0",
//                                 p: { md: "10px 10px", lg: "10px 20px" },
//                                 whiteSpace: "nowrap",
//                                 minWidth: "fit-content",
//                                 width: "fit-content",
//                                 alignSelf: "flex-end",
//                             }}
//                             onClick={() => handleClose(false)}
//                         >
//                             Cancel
//                         </Button>
//                     </Stack>
//                 </Stack>
//             </form>
//         </Box>
//     );
// };

// export default AddressForm;

import { Box, Button, Checkbox, FormControlLabel, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

interface AddressFormProps {
    addAddressformData: {
        line1: string;
        line2: string;
        pincode: string;
        city: string;
        state: string;
    };
    handleChange: (e: any) => void;
    handleSubmit: (data: FormData) => void;
    handleClose: (close: boolean) => void;
    isEditMode: boolean;
    initialIsDefault?: boolean
}

const AddressForm: React.FC<AddressFormProps> = ({
    addAddressformData,
    handleChange,
    handleSubmit,
    handleClose,
    isEditMode,
    initialIsDefault = false
}) => {
    const [isDefault, setIsDefault] = useState(initialIsDefault);
    const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e);
    };

    const handleIsDefaultChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsDefault(e.target.checked);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("line1", addAddressformData.line1);
        formDataToSend.append("line2", addAddressformData.line2);
        formDataToSend.append("pincode", addAddressformData.pincode);
        formDataToSend.append("city", addAddressformData.city);
        formDataToSend.append("state", addAddressformData.state);
        if (isEditMode) {
            formDataToSend.append("isDefault", String(isDefault));
        }
        formDataToSend.forEach((value, key) => {
            console.log(`key: ${key}, value: ${value}`);
        });
        handleSubmit(formDataToSend);
        handleClose(false);
    };
    return (
        <Box sx={{ backgroundColor: "#F5FAFF", p: "20px", mb: "20px" }}>
            <form onSubmit={handleFormSubmit}>
                <Stack gap={"20px"}>
                    <Stack gap={"15px"}>
                        <Typography variant="h4">Line1</Typography>
                        <TextField
                            label="House no./ Building name"
                            name="line1"
                            value={addAddressformData.line1}
                            onChange={handleFormDataChange}
                            InputLabelProps={{
                                style: { fontSize: "15px" },
                            }}
                            InputProps={{
                                style: { fontSize: "15px" },
                            }}
                            fullWidth
                        />
                    </Stack>
                    <Stack gap={"15px"}>
                        <Typography variant="h4">Line2</Typography>
                        <TextField
                            label="Road Name / Area / Colony"
                            name="line2"
                            value={addAddressformData.line2}
                            onChange={handleFormDataChange}
                            InputLabelProps={{
                                style: { fontSize: "15px" },
                            }}
                            InputProps={{
                                style: { fontSize: "15px" },
                            }}
                            fullWidth
                        />
                    </Stack>
                    <Stack gap={"15px"}>
                        <Typography variant="h4">Pincode</Typography>
                        <TextField
                            label="Pincode"
                            name="pincode"
                            type="number"
                            value={addAddressformData.pincode}
                            onChange={handleFormDataChange}
                            InputLabelProps={{
                                style: { fontSize: "15px" },
                            }}
                            InputProps={{
                                style: { fontSize: "15px" },
                            }}
                            fullWidth
                        />
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Stack gap={"15px"}>
                            <Typography variant="h4">City</Typography>
                            <TextField
                                label="City"
                                name="city"
                                value={addAddressformData.city}
                                onChange={handleFormDataChange}
                                InputLabelProps={{
                                    style: { fontSize: "15px" },
                                }}
                                InputProps={{
                                    style: { fontSize: "15px" },
                                }}
                            />
                        </Stack>
                        <Stack gap={"15px"}>
                            <Typography variant="h4">State</Typography>
                            <TextField
                                label="State"
                                name="state"
                                value={addAddressformData.state}
                                onChange={handleFormDataChange}
                                InputLabelProps={{
                                    style: { fontSize: "15px" },
                                }}
                                InputProps={{
                                    style: { fontSize: "15px" },
                                }}
                            />
                        </Stack>
                    </Stack>
                    {isEditMode && (
                        <Stack gap={"15px"}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isDefault}
                                        onChange={handleIsDefaultChange}
                                        name="isDefault"
                                    />
                                }
                                label="Set as Default Address"
                            />
                        </Stack>
                    )}
                    <Stack
                        justifyContent={"flex-end"}
                        gap={2}
                        sx={{
                            flexDirection: {
                                xs: "column",
                                sm: "row",
                            },
                        }}
                    >
                        <Button
                            type="submit"
                            sx={{
                                color: "#FAFAFA",
                                backgroundColor: "#23A6F0",
                                p: { md: "10px 10px", lg: "10px 20px" },
                                whiteSpace: "nowrap",
                                minWidth: "fit-content",
                                width: "fit-content",
                                alignSelf: "flex-end",
                            }}
                        >
                            {isEditMode
                                ? "Update Address"
                                : "Save and Make Default"}
                        </Button>
                        <Button
                            sx={{
                                color: "#FAFAFA",
                                backgroundColor: "#23A6F0",
                                p: { md: "10px 10px", lg: "10px 20px" },
                                whiteSpace: "nowrap",
                                minWidth: "fit-content",
                                width: "fit-content",
                                alignSelf: "flex-end",
                            }}
                            onClick={() => handleClose(false)}
                        >
                            Cancel
                        </Button>
                    </Stack>
                </Stack>
            </form>
        </Box>
    );
};

export default AddressForm;
