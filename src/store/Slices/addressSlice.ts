import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../../const/constants";
import { Address } from "./userSlice";

interface AddressState {
    loading: boolean;
    error: string | null;
    message: string | null;
    addresses: Address[];
}

const initialState: AddressState = {
    loading: false,
    error: null,
    message: null,
    addresses: [],
};

const setRequestState = (state: AddressState) => {
    state.loading = true;
};

const setSuccessState = (
    state: AddressState,
    action: PayloadAction<{ message: string }>
) => {
    state.loading = false;
    state.error = null;
    state.message = action.payload.message;
};

const setFailureState = (
    state: AddressState,
    action: PayloadAction<{ message: string }>
) => {
    state.loading = false;
    state.error = action.payload.message;
    state.message = null;
};

const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        getAddressesRequest: (state) => {
            state.loading = true;
        },
        getAddressesSuccess: (
            state,
            action: PayloadAction<{ addresses: Address[]; message: string }>
        ) => {
            state.loading = false;
            state.addresses = action.payload.addresses;
            state.error = null;
            state.message = action.payload.message;
        },
        getAddressesFailed: (
            state,
            action: PayloadAction<{ message: string }>
        ) => {
            state.loading = false;
            state.addresses = [];
            state.error = action.payload.message;
            state.message = null;
        },
        addAddressRequest: setRequestState,
        addAddressSuccess: setSuccessState,
        addAddressFailed: setFailureState,

        updateAddressRequest: setRequestState,
        updateAddressSuccess: setSuccessState,
        updateAddressFailed: setFailureState,

        deleteAddressRequest: setRequestState,
        deleteAddressSuccess: setSuccessState,
        deleteAddressFailed: setFailureState,

        clearAllAddressErrorsAndMsgs(state) {
            state.error = null;
            state.message = null;
        },
    },
});

const handleApiCall = async (
    dispatch: AppDispatch,
    requestAction: () => AnyAction,
    successAction: (data: {
        addresses: Address[];
        message: string;
    }) => AnyAction,
    failureAction: (data: { message: string }) => AnyAction,
    apiCall: () => Promise<any>
) => {
    dispatch(requestAction());
    try {
        const response = await apiCall();
        dispatch(
            successAction({
                addresses: response.data.addresses,
                message: response.data.message,
            })
        );
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        dispatch(
            failureAction({
                message: err.response?.data?.message || "An error occurred",
            })
        );
    }
};

export const getUserAddresses = () => async (dispatch: AppDispatch) => {
    await handleApiCall(
        dispatch,
        addressSlice.actions.getAddressesRequest,
        addressSlice.actions.getAddressesSuccess,
        addressSlice.actions.getAddressesFailed,
        () =>
            axios.get(`${BASE_URL}/user/getuseraddresses`, {
                withCredentials: true,
            })
    );
};

export const addAddress = (data: FormData) => async (dispatch: AppDispatch) => {
    await handleApiCall(
        dispatch,
        addressSlice.actions.addAddressRequest,
        addressSlice.actions.addAddressSuccess,
        addressSlice.actions.addAddressFailed,
        () =>
            axios.post(`${BASE_URL}/user/addnewaddress`, data, {
                withCredentials: true,
            })
    );
};

export const updateAddress =
    (data: FormData, id: string) => async (dispatch: AppDispatch) => {
        await handleApiCall(
            dispatch,
            addressSlice.actions.updateAddressRequest,
            addressSlice.actions.updateAddressSuccess,
            addressSlice.actions.updateAddressFailed,
            () =>
                axios.put(`${BASE_URL}/user/update/address/${id}`, data, {
                    withCredentials: true,
                })
        );
    };

export const deleteAddress =
    (id: string) => async (dispatch: AppDispatch) => {
        await handleApiCall(
            dispatch,
            addressSlice.actions.updateAddressRequest,
            addressSlice.actions.updateAddressSuccess,
            addressSlice.actions.updateAddressFailed,
            () =>
                axios.delete(`${BASE_URL}/user/delete/address/${id}`, {
                    withCredentials: true,
                })
        );
    };

export const clearAllAddressErrorsAndMessages =
    () => (dispatch: AppDispatch) => {
        dispatch(addressSlice.actions.clearAllAddressErrorsAndMsgs());
    };

export default addressSlice.reducer;
