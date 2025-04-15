import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { AppDispatch } from "../store";
import { BASE_URL } from "../../const/constants";

export interface Address {
    id: string;
    line1: string;
    line2: string;
    pincode: string;
    isDefault: boolean;
    city: string;
    state: string;
}

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    addresses: Address[];
    profileImage: {
        public_id: string;
        url: string;
    };
    token: string;
    createdAt: Date;
    updatedAt: Date;
}

interface AuthState {
    loading: boolean;
    isAuthenticated: boolean;
    user: User | null;
    error: string | null;
    message: string | null;
}

const initialState: AuthState = {
    loading: false,
    isAuthenticated: false,
    user: null,
    error: null,
    message: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        registerRequest: (state) => {
            state.loading = true;
        },
        registerSuccess: (
            state,
            action: PayloadAction<{
                user: User;
                message: string;
            }>
        ) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = action.payload.user;
            state.error = null;
            state.message = action.payload.message;
        },
        registerFailed: (state, action: PayloadAction<{ message: string }>) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload.message;
            state.message = null;
        },
        loginRequest: (state) => {
            state.loading = true;
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
            state.message = null;
        },
        loginSuccess: (
            state,
            action: PayloadAction<{
                user: User;
                message: string;
            }>
        ) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.error = null;
            state.message = action.payload.message;
        },
        loginFailed: (state, action: PayloadAction<{ message: string }>) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload.message;
            state.message = null;
        },
        fetchUserRequest: (state) => {
            state.loading = true;
            state.isAuthenticated = true;
        },
        fetchUserSuccess: (
            state,
            action: PayloadAction<{
                user: User;
            }>
        ) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.error = null;
            state.message = null;
        },
        fetchUserFailed: (
            state,
            action: PayloadAction<{ message: string }>
        ) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload.message;
            state.message = null;
        },
        logoutRequest: (state) => {
            state.loading = true;
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
            state.message = null;
        },
        logoutSuccess: (
            state,
            action: PayloadAction<{
                message: string;
            }>
        ) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
            state.message = action.payload.message;
        },
        logoutFailed: (state, action: PayloadAction<{ message: string }>) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        clearAllUserErrorsAndMsgs(state) {
            state.message = null;
            state.error = null;
        },
    },
});

const handleApiCall = async (
    dispatch: AppDispatch,
    requestAction: () => AnyAction,
    successAction: (data: { user: User; message: string }) => AnyAction,
    failureAction: (data: { message: string }) => AnyAction,
    apiCall: () => Promise<any>
) => {
    dispatch(requestAction());
    try {
        const response = await apiCall();
        dispatch(successAction(response.data));
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        dispatch(
            failureAction({
                message:
                    err.response?.data?.message ||
                    "Something went wrong. Please try again.",
            })
        );
    }
};

interface RegisterData {
    name: string;
    email: string;
    password: string;
}

export const register =
    (data: RegisterData) => async (dispatch: AppDispatch) => {
        await handleApiCall(
            dispatch,
            userSlice.actions.registerRequest,
            userSlice.actions.registerSuccess,
            userSlice.actions.registerFailed,
            () =>
                axios.post(`${BASE_URL}/user/register`, data, {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                })
        );
    };

interface LoginData {
    email: string;
    password: string;
}

export const login = (data: LoginData) => async (dispatch: AppDispatch) => {
    await handleApiCall(
        dispatch,
        userSlice.actions.loginRequest,
        userSlice.actions.loginSuccess,
        userSlice.actions.loginFailed,
        () =>
            axios.post(`${BASE_URL}/user/login`, data, {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            })
    );
};

export const getUser = () => async (dispatch: AppDispatch) => {
    await handleApiCall(
        dispatch,
        userSlice.actions.fetchUserRequest,
        userSlice.actions.fetchUserSuccess,
        userSlice.actions.fetchUserFailed,
        () =>
            axios.get(`${BASE_URL}/user/getuser`, {
                withCredentials: true,
            })
    );
};

export const logout = () => async (dispatch: AppDispatch) => {
    await handleApiCall(
        dispatch,
        userSlice.actions.logoutRequest,
        userSlice.actions.logoutSuccess,
        userSlice.actions.logoutFailed,
        () =>
            axios.get(`${BASE_URL}/user/logout`, {
                withCredentials: true,
            })
    );
};

export const clearAllUserErrorsAndMessages = () => (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.clearAllUserErrorsAndMsgs());
};

export default userSlice.reducer;
