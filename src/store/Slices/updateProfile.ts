import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import axios, { AxiosError } from "axios";
import { AppDispatch } from "../store";

interface AuthState {
    loading: boolean;
    error: string | null;
    message: string | null;
    isUpdated: boolean;
}

// Load auth state from localStorage
const initialState: AuthState = {
    loading: false,
    error: null,
    message: null,
    isUpdated: false,
};

const updateProfileSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateProfileRequest: (state) => {
            state.loading = true;
        },
        updateProfileSuccess: (
            state,
            action: PayloadAction<{ message: string }>
        ) => {
            state.loading = false;
            state.isUpdated = true;
            state.error = null;
            state.message = action.payload.message;
        },
        updateProfileFailed: (
            state,
            action: PayloadAction<{ message: string }>
        ) => {
            state.loading = false;
            state.isUpdated = false;
            state.error = action.payload.message;
            state.message = null;
        },
        updatePasswordRequest: (state) => {
            state.loading = true;
        },
        updatePasswordSuccess: (
            state,
            action: PayloadAction<{ message: string }>
        ) => {
            state.loading = false;
            state.isUpdated = true;
            state.error = null;
            state.message = action.payload.message;
        },
        updatePasswordFailed: (
            state,
            action: PayloadAction<{ message: string }>
        ) => {
            state.loading = false;
            state.isUpdated = false;
            state.error = action.payload.message;
            state.message = null;
        },
        profileResetAfterUpdate(state) {
            state.error = null;
            state.isUpdated = false;
            state.loading = false;
            state.message = null;
        },
    },
});

export const updateProfile =
    (data: FormData) => async (dispatch: AppDispatch) => {
        dispatch(updateProfileSlice.actions.updateProfileRequest());
        try {
            const response = await axios.put(
                "http://localhost:5000/api/v1/user/update/profile",
                data,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            dispatch(
                updateProfileSlice.actions.updateProfileSuccess(response.data)
            );
        } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            dispatch(
                updateProfileSlice.actions.updateProfileFailed({
                    message: err.response?.data?.message || "An error occurred",
                })
            );
        }
    };

interface PasswordData {
    oldPassword: string;
    newPassword: string;
}

export const updatePassword =
    (data: PasswordData) => async (dispatch: AppDispatch) => {
        dispatch(updateProfileSlice.actions.updatePasswordRequest());
        try {
            const response = await axios.put(
                "http://localhost:5000/api/v1/user/update/password",
                data,
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                }
            );
            dispatch(
                updateProfileSlice.actions.updatePasswordSuccess(response.data)
            );
        } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            dispatch(
                updateProfileSlice.actions.updatePasswordFailed({
                    message: err.response?.data?.message || "An error occurred",
                })
            );
        }
    };

export const clearAllUpdateProfileErrorsAndMessage = () => (dispatch: AppDispatch) => {
    dispatch(updateProfileSlice.actions.profileResetAfterUpdate());
};

export default updateProfileSlice.reducer;
