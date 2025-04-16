import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

interface AddressFormProps {
    addAddressformData: {
        line1: string;
        line2: string;
        pincode: string;
        city: string;
        state: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (data: FormData) => void;
    handleClose: (close: boolean) => void;
    isEditMode: boolean;
}

const AddressForm: React.FC<AddressFormProps> = ({
    addAddressformData,
    handleChange,
    handleSubmit,
    handleClose,
    isEditMode,
}) => {
    const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("line1", addAddressformData.line1);
        formDataToSend.append("line2", addAddressformData.line2);
        formDataToSend.append("pincode", addAddressformData.pincode);
        formDataToSend.append("city", addAddressformData.city);
        formDataToSend.append("state", addAddressformData.state);
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
                                ? "Save Changes"
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
