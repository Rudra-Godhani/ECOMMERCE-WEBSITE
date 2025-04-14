import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../../const/constants";

interface ContactUsState {
    loading: boolean;
    error: string | null;
    message: string | null;
}

const initialState: ContactUsState = {
    loading: false,
    error: null,
    message: null,
};

const contactUsSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        sendContactMessageRequest: (state) => {
            state.loading = true;
        },
        sendContactMessageSuccess: (
            state,
            action: PayloadAction<{ message: string }>
        ) => {
            state.loading = false;
            state.error = null;
            state.message = action.payload.message;
        },
        sendContactMessageFailed: (
            state,
            action: PayloadAction<{ message: string }>
        ) => {
            state.loading = false;
            state.error = action.payload.message;
            state.message = null;
        },
        clearAllContactUsErrorsAndMsgs(state) {
            state.error = null;
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
        // await new Promise((resolve) => setTimeout(resolve, 500000));
        dispatch(
            successAction({
                message: response.data.message,
            })
        );
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

interface contactMessageData {
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
}

export const sendContactMessage =
    (data: contactMessageData) => async (dispatch: AppDispatch) => {
        await handleApiCall(
            dispatch,
            contactUsSlice.actions.sendContactMessageRequest,
            contactUsSlice.actions.sendContactMessageSuccess,
            contactUsSlice.actions.sendContactMessageFailed,
            () =>
                axios.post(`${BASE_URL}/contact/sendcontactmessage`, data, {
                    withCredentials: true,
                })
        );
    };

export const clearAllContactUsErrorsAndMessages =
    () => (dispatch: AppDispatch) => {
        dispatch(contactUsSlice.actions.clearAllContactUsErrorsAndMsgs());
    };

export default contactUsSlice.reducer;
