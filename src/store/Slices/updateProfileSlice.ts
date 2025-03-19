// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axios, { AxiosError } from "axios";
// import { AppDispatch } from "../store";
// const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// interface AuthState {
//     loading: boolean;
//     error: string | null;
//     message: string | null;
//     isUpdated: boolean;
// }

// // Load auth state from localStorage
// const initialState: AuthState = {
//     loading: false,
//     error: null,
//     message: null,
//     isUpdated: false,
// };

// const updateProfileSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         updateProfileRequest: (state) => {
//             state.loading = true;
//         },
//         updateProfileSuccess: (
//             state,
//             action: PayloadAction<{ message: string }>
//         ) => {
//             state.loading = false;
//             state.isUpdated = true;
//             state.error = null;
//             state.message = action.payload.message;
//         },
//         updateProfileFailed: (
//             state,
//             action: PayloadAction<{ message: string }>
//         ) => {
//             state.loading = false;
//             state.isUpdated = false;
//             state.error = action.payload.message;
//             state.message = null;
//         },
//         updatePasswordRequest: (state) => {
//             state.loading = true;
//         },
//         updatePasswordSuccess: (
//             state,
//             action: PayloadAction<{ message: string }>
//         ) => {
//             state.loading = false;
//             state.isUpdated = true;
//             state.error = null;
//             state.message = action.payload.message;
//         },
//         updatePasswordFailed: (
//             state,
//             action: PayloadAction<{ message: string }>
//         ) => {
//             state.loading = false;
//             state.isUpdated = false;
//             state.error = action.payload.message;
//             state.message = null;
//         },
//         forgotPasswordRequest: (state) => {
//             state.loading = true;
//         },
//         forgotPasswordSuccess: (
//             state,
//             action: PayloadAction<{ message: string }>
//         ) => {
//             state.loading = false;
//             state.isUpdated = false;
//             state.error = null;
//             state.message = action.payload.message;
//         },
//         forgotPasswordFailed: (
//             state,
//             action: PayloadAction<{ message: string }>
//         ) => {
//             state.loading = false;
//             state.isUpdated = false;
//             state.error = action.payload.message;
//             state.message = null;
//         },
//         resetPasswordRequest: (state) => {
//             state.loading = true;
//         },
//         resetPasswordSuccess: (
//             state,
//             action: PayloadAction<{ message: string }>
//         ) => {
//             state.loading = false;
//             state.isUpdated = true;
//             state.error = null;
//             state.message = action.payload.message;
//         },
//         resetPasswordFailed: (
//             state,
//             action: PayloadAction<{ message: string }>
//         ) => {
//             state.loading = false;
//             state.isUpdated = false;
//             state.error = action.payload.message;
//             state.message = null;
//         },
//         profileResetAfterUpdate(state) {
//             state.error = null;
//             state.isUpdated = false;
//             state.loading = false;
//             state.message = null;
//         },
//     },
// });

// export const updateProfile =
//     (data: FormData) => async (dispatch: AppDispatch) => {
//         dispatch(updateProfileSlice.actions.updateProfileRequest());
//         try {
//             const response = await axios.put(
//                 `${BASE_URL}/user/update/profile`,
//                 data,
//                 {
//                     withCredentials: true,
//                     headers: {
//                         "Content-Type": "multipart/form-data",
//                     },
//                 }
//             );
//             dispatch(
//                 updateProfileSlice.actions.updateProfileSuccess(response.data)
//             );
//         } catch (error) {
//             const err = error as AxiosError<{ message: string }>;
//             dispatch(
//                 updateProfileSlice.actions.updateProfileFailed({
//                     message: err.response?.data?.message || "An error occurred",
//                 })
//             );
//         }
//     };

// interface PasswordData {
//     currentPassword: string;
//     newPassword: string;
//     confirmPassword: string;
// }

// export const updatePassword =
//     (data: PasswordData) => async (dispatch: AppDispatch) => {
//         dispatch(updateProfileSlice.actions.updatePasswordRequest());
//         try {
//             const response = await axios.put(
//                 `${BASE_URL}/user/update/password`,
//                 data,
//                 {
//                     withCredentials: true,
//                     headers: { "Content-Type": "application/json" },
//                 }
//             );
//             dispatch(
//                 updateProfileSlice.actions.updatePasswordSuccess(response.data)
//             );
//         } catch (error) {
//             const err = error as AxiosError<{ message: string }>;
//             dispatch(
//                 updateProfileSlice.actions.updatePasswordFailed({
//                     message: err.response?.data?.message || "An error occurred",
//                 })
//             );
//         }
//     };

// export const forgotPassword =
//     (data: { email: string }) => async (dispatch: AppDispatch) => {
//         dispatch(updateProfileSlice.actions.forgotPasswordRequest());
//         try {
//             const response = await axios.post(
//                 `${BASE_URL}/user/forgot-password`,
//                 data,
//                 {
//                     withCredentials: true,
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                 }
//             );
//             dispatch(
//                 updateProfileSlice.actions.forgotPasswordSuccess(response.data)
//             );
//         } catch (error) {
//             const err = error as AxiosError<{ message: string }>;
//             dispatch(
//                 updateProfileSlice.actions.forgotPasswordFailed({
//                     message: err.response?.data?.message || "An error occurred",
//                 })
//             );
//         }
//     };

// interface ReserPasswordData {
//     passwordData: {
//         newPassword: string;
//         confirmPassword: string;
//     };
//     token: string;
// }

// export const resetPassword =
//     (data: ReserPasswordData) => async (dispatch: AppDispatch) => {
//         dispatch(updateProfileSlice.actions.resetPasswordRequest());
//         try {
//             const response = await axios.post(
//                 `${BASE_URL}/user/reset-password/${data.token}`,
//                 data.passwordData,
//                 {
//                     withCredentials: true,
//                     headers: { "Content-Type": "application/json" },
//                 }
//             );
//             dispatch(
//                 updateProfileSlice.actions.resetPasswordSuccess(response.data)
//             );
//         } catch (error) {
//             const err = error as AxiosError<{ message: string }>;
//             dispatch(
//                 updateProfileSlice.actions.resetPasswordFailed({
//                     message: err.response?.data?.message || "An error occurred",
//                 })
//             );
//         }
//     };

// export const clearAllUpdateProfileErrorsAndMessage =
//     () => (dispatch: AppDispatch) => {
//         dispatch(updateProfileSlice.actions.profileResetAfterUpdate());
//     };

// export default updateProfileSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { AppDispatch } from "../store";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;
import { AnyAction } from "@reduxjs/toolkit";

interface AuthState {
    loading: boolean;
    error: string | null;
    message: string | null;
    isUpdated: boolean;
}

const initialState: AuthState = {
    loading: false,
    error: null,
    message: null,
    isUpdated: false,
};

const setRequestState = (state: AuthState) => {
    state.loading = true;
};

const setSuccessState = (
    state: AuthState,
    action: PayloadAction<{ message: string }>
) => {
    state.loading = false;
    state.isUpdated = true;
    state.error = null;
    state.message = action.payload.message;
};

const setFailureState = (
    state: AuthState,
    action: PayloadAction<{ message: string }>
) => {
    state.loading = false;
    state.isUpdated = false;
    state.error = action.payload.message;
    state.message = null;
};

const updateProfileSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Profile
        updateProfileRequest: setRequestState,
        updateProfileSuccess: setSuccessState,
        updateProfileFailed: setFailureState,

        // Password
        updatePasswordRequest: setRequestState,
        updatePasswordSuccess: setSuccessState,
        updatePasswordFailed: setFailureState,

        // Forgot Password
        forgotPasswordRequest: setRequestState,
        forgotPasswordSuccess: (
            state,
            action: PayloadAction<{ message: string }>
        ) => {
            state.loading = false;
            state.isUpdated = false;
            state.error = null;
            state.message = action.payload.message;
        },
        forgotPasswordFailed: setFailureState,

        // Reset Password
        resetPasswordRequest: setRequestState,
        resetPasswordSuccess: setSuccessState,
        resetPasswordFailed: setFailureState,

        // Reset State
        profileResetAfterUpdate(state) {
            state.error = null;
            state.isUpdated = false;
            state.loading = false;
            state.message = null;
        },
    },
});

const handleApiCall = async (
    dispatch: AppDispatch,
    requestAction: () => AnyAction,
    successAction: (data: { message: string }) => AnyAction,
    failureAction: (data: { message: string }) => AnyAction,
    apiCall: () => Promise<any>
) => {
    dispatch(requestAction());
    try {
        const response = await apiCall();
        dispatch(successAction({ message: response.data.message }));
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        dispatch(
            failureAction({
                message: err.response?.data?.message || "An error occurred",
            })
        );
    }
};

export const updateProfile =
    (data: FormData) => async (dispatch: AppDispatch) => {
        await handleApiCall(
            dispatch,
            updateProfileSlice.actions.updateProfileRequest,
            updateProfileSlice.actions.updateProfileSuccess,
            updateProfileSlice.actions.updateProfileFailed,
            () =>
                axios.put(`${BASE_URL}/user/update/profile`, data, {
                    withCredentials: true,
                    headers: { "Content-Type": "multipart/form-data" },
                })
        );
    };

interface PasswordData {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export const updatePassword =
    (data: PasswordData) => async (dispatch: AppDispatch) => {
        await handleApiCall(
            dispatch,
            updateProfileSlice.actions.updatePasswordRequest,
            updateProfileSlice.actions.updatePasswordSuccess,
            updateProfileSlice.actions.updatePasswordFailed,
            () =>
                axios.put(`${BASE_URL}/user/update/password`, data, {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                })
        );
    };

export const forgotPassword =
    (data: { email: string }) => async (dispatch: AppDispatch) => {
        await handleApiCall(
            dispatch,
            updateProfileSlice.actions.forgotPasswordRequest,
            updateProfileSlice.actions.forgotPasswordSuccess,
            updateProfileSlice.actions.forgotPasswordFailed,
            () =>
                axios.post(`${BASE_URL}/user/forgot-password`, data, {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                })
        );
    };

interface ResetPasswordData {
    passwordData: {
        newPassword: string;
        confirmPassword: string;
    };
    token: string;
}

export const resetPassword =
    (data: ResetPasswordData) => async (dispatch: AppDispatch) => {
        await handleApiCall(
            dispatch,
            updateProfileSlice.actions.resetPasswordRequest,
            updateProfileSlice.actions.resetPasswordSuccess,
            updateProfileSlice.actions.resetPasswordFailed,
            () =>
                axios.post(
                    `${BASE_URL}/user/reset-password/${data.token}`,
                    data.passwordData,
                    {
                        withCredentials: true,
                        headers: { "Content-Type": "application/json" },
                    }
                )
        );
    };

export const clearAllUpdateProfileErrorsAndMessage =
    () => (dispatch: AppDispatch) => {
        dispatch(updateProfileSlice.actions.profileResetAfterUpdate());
    };

export default updateProfileSlice.reducer;
