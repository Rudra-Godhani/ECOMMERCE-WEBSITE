import {
    Avatar,
    Box,
    Button,
    CircularProgress,
    IconButton,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { Edit } from "@mui/icons-material";
import {
    clearAllUpdateProfileErrorsAndMessage,
    updateProfile,
} from "../../store/Slices/updateProfileSlice";
import { toast } from "react-toastify";
import { getUser } from "../../store/Slices/userSlice";

const UpdateProfile: React.FC = () => {
    const { user } = useSelector((state: RootState) => state.user);
    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        phoneNumber: user?.phoneNumber ?? "",
        profileImage: user?.profileImage.url || null,
    });

    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { loading, error, isUpdated, message } = useSelector(
        (state: RootState) => state.updateProfile
    );
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setPreviewImage(objectUrl);
        }
    };

    const handleEditClick = () => {
        fileInputRef.current?.click();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("phoneNumber", formData.phoneNumber);
        if (fileInputRef.current?.files?.[0]) {
            formDataToSend.append(
                "profileImage",
                fileInputRef.current.files[0]
            );
        }

        dispatch(updateProfile(formDataToSend));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearAllUpdateProfileErrorsAndMessage());
        }
        if (isUpdated) {
            if (message) {
                toast.success(message);
            }
            dispatch(getUser());
            dispatch(clearAllUpdateProfileErrorsAndMessage());
        }
    }, [dispatch, loading, error, isUpdated, user]);

    useEffect(() => {
        setPreviewImage(user?.profileImage?.url || null);
        setFormData({
            name: user?.name || "",
            email: user?.email || "",
            phoneNumber: user?.phoneNumber || "",
            profileImage: user?.profileImage?.url || null,
        });
    }, [user]);

    return (
        <Stack>
            <Stack>
                <Typography variant="h4" fontWeight={"700"} pb="30px">
                    Update Profile
                </Typography>
            </Stack>
            <form onSubmit={handleSubmit}>
                <Stack gap={"20px"}>
                    <Stack pb="20px" alignItems={"center"}>
                        <Box position={"relative"}>
                            <Avatar
                                alt="Profile Picture"
                                src={previewImage || user?.profileImage?.url}
                                sx={{
                                    width: "150px",
                                    height: "150px",
                                    bgcolor: user?.profileImage?.url
                                        ? "transparent"
                                        : "#ccc",
                                    fontSize: "80px",
                                    color: "#fff",
                                }}
                            >
                                {" "}
                                {!user?.profileImage?.url &&
                                    user?.name?.[0]?.toUpperCase()}
                            </Avatar>
                            <IconButton
                                onClick={handleEditClick}
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: 20,
                                    backgroundColor: "white",
                                    border: "1px solid #ccc",
                                    transform: "translate(20%, 20%)",
                                    "&:hover": {
                                        backgroundColor: "#f0f0f0",
                                    },
                                    width: "40px",
                                    height: "40px",
                                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                                }}
                            >
                                <Edit />
                            </IconButton>
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                            />
                        </Box>
                    </Stack>
                    <Stack gap={"15px"}>
                        <Typography variant="h4">Name</Typography>
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
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
                        <Typography variant="h4">Email Address</Typography>
                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
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
                        <Typography variant="h4">Phone Number</Typography>
                        <TextField
                            label="PhoneNumber"
                            name="phoneNumber"
                            type="number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            InputLabelProps={{
                                style: { fontSize: "15px" },
                            }}
                            InputProps={{
                                style: { fontSize: "15px" },
                            }}
                            fullWidth
                        />
                    </Stack>
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
                        disabled={loading}
                    >
                        {loading ? (
                            <CircularProgress
                                size={24}
                                sx={{
                                    color: "#FFFFFF",
                                }}
                            />
                        ) : (
                            "Save Changes"
                        )}
                    </Button>
                </Stack>
            </form>
        </Stack>
    );
};

export default UpdateProfile;
