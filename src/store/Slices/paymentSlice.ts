import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../../const/constants";

interface PaymentSessionState {
    loading: boolean;
    error: string | null;
    message: string | null;
    sessionStatus: "paid" | "unpaid" | "invalid" | null;
}

const initialState: PaymentSessionState = {
    loading: false,
    error: null,
    message: null,
    sessionStatus: null,
};

const paymentSessionSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        validateSessionRequest: (state) => {
            state.loading = true;
            state.error = null;
            state.message = null;
            state.sessionStatus = null;
        },
        validateSessionSuccess: (
            state,
            action: PayloadAction<{
                message: string;
                status: "paid" | "unpaid";
            }>
        ) => {
            state.loading = false;
            state.error = null;
            state.message = action.payload.message;
            state.sessionStatus = action.payload.status;
        },
        validateSessionFailed: (
            state,
            action: PayloadAction<{ message: string }>
        ) => {
            state.loading = false;
            state.error = action.payload.message;
            state.message = null;
            state.sessionStatus = "invalid";
        },
        clearAllPaymentSessionErrorsAndMsgs: (state) => {
            state.error = null;
            state.message = null;
            state.sessionStatus = null;
        },
    },
});

const handleApiCall = async (
    dispatch: AppDispatch,
    requestAction: () => AnyAction,
    successAction: (data: {
        message: string;
        status: "paid" | "unpaid";
    }) => AnyAction,
    failureAction: (data: { message: string }) => AnyAction,
    apiCall: () => Promise<any>
) => {
    dispatch(requestAction());
    try {
        const response = await apiCall();
        dispatch(
            successAction({
                message:
                    response.data.message || "Session validated successfully",
                status: response.data.status,
            })
        );
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        dispatch(
            failureAction({
                message:
                    err.response?.data?.message ||
                    "Failed to validate session. Please try again.",
            })
        );
    }
};

export const validatePaymentSession =
    (sessionId: string) => async (dispatch: AppDispatch) => {
        await handleApiCall(
            dispatch,
            paymentSessionSlice.actions.validateSessionRequest,
            paymentSessionSlice.actions.validateSessionSuccess,
            paymentSessionSlice.actions.validateSessionFailed,
            () =>
                axios.get(
                    `${BASE_URL}/payment/validate-session?session_id=${sessionId}`,
                    {
                        withCredentials: true,
                    }
                )
        );
    };

export const clearAllPaymentSessionErrorsAndMessages =
    () => (dispatch: AppDispatch) => {
        dispatch(
            paymentSessionSlice.actions.clearAllPaymentSessionErrorsAndMsgs()
        );
    };

export default paymentSessionSlice.reducer;
