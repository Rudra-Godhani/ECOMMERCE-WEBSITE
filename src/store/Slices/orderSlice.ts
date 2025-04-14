import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../../const/constants";
import { Product } from "./productSlice";

export interface Order {
    id: string;
    total: number;
    discount: number;
    netTotal: number;
    deliveryCharge: number;
    status: string;
    createdAt: string;
    updatedAt: string;
    user: {
        id: string;
        name: string;
        phoneNumber: string;
    };
    orderItems: [
        {
            id: string;
            quantity: number;
            price: number;
            totalPrice: number;
            product: Product;
        }
    ];
    address: {
        id: string;
        line1: string;
        line2: string;
        city: string;
        state: string;
        pincode: string;
    };
}

interface OrderState {
    loading: boolean;
    orders: Order[] | [];
    order: Order | null;
    error: string | null;
    message: string | null;
}

const initialState: OrderState = {
    loading: false,
    orders: [],
    order: null,
    error: null,
    message: null,
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        getAllMyOrdersRequest(state) {
            state.loading = true;
        },
        getAllMyOrdersSuccess(
            state,
            action: PayloadAction<{
                orders: Order[];
            }>
        ) {
            state.loading = false;
            state.orders = action.payload.orders;
        },
        getAllMyOrdersFailed(
            state,
            action: PayloadAction<{
                message: string;
            }>
        ) {
            state.loading = false;
            state.orders = [];
            state.error = action.payload.message;
            state.message = null;
        },
        getMyOrderByIdRequest(state) {
            state.loading = true;
        },
        getMyOrderByIdSuccess(
            state,
            action: PayloadAction<{
                order: Order;
            }>
        ) {
            state.loading = false;
            state.order = action.payload.order;
        },
        getMyOrderByIdFailed(
            state,
            action: PayloadAction<{
                message: string;
            }>
        ) {
            state.loading = false;
            state.order = null;
            state.error = action.payload.message;
            state.message = null;
        },
        clearAllOrderErrorsAndMsgs(state) {
            state.error = null;
            state.message = null;
        },
    },
});

const handleApiCall = async (
    dispatch: AppDispatch,
    requestAction: () => AnyAction,
    successAction: (data: { orders: Order[]; order: Order }) => AnyAction,
    failureAction: (data: { message: string }) => AnyAction,
    apiCall: () => Promise<any>
) => {
    dispatch(requestAction());
    try {
        const response = await apiCall();
        // await new Promise((resolve) => setTimeout(resolve, 500000));
        console.log("order data:", response.data);
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

export const getAllMyOrders = () => async (dispatch: AppDispatch) => {
    await handleApiCall(
        dispatch,
        orderSlice.actions.getAllMyOrdersRequest,
        orderSlice.actions.getAllMyOrdersSuccess,
        orderSlice.actions.getAllMyOrdersFailed,
        () => {
            return axios.get(`${BASE_URL}/order/getmyorders`, {
                withCredentials: true,
            });
        }
    );
};

export const getMyOrderById = (orderId: string) => async (dispatch: AppDispatch) => {
    await handleApiCall(
        dispatch,
        orderSlice.actions.getMyOrderByIdRequest,
        orderSlice.actions.getMyOrderByIdSuccess,
        orderSlice.actions.getMyOrderByIdFailed,
        () => {
            return axios.get(`${BASE_URL}/order/getmyorderbyid/${orderId}`, {
                withCredentials: true,
            });
        }
    );
};

export const clearAllOrderErrorsAndMessages =
    () => (dispatch: AppDispatch) => {
        dispatch(orderSlice.actions.clearAllOrderErrorsAndMsgs());
    };

export default orderSlice.reducer;
