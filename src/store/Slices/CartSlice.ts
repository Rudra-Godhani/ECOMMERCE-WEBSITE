import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../data/allProductsData";
import { AppDispatch } from "../store";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../../const/constants";

interface LoadingStates {
    [productId: string]: {
        isAdding?: boolean;
        isRemoving?: boolean;
        isDecreasing?: boolean;
    };
}

export interface CartItem {
    quantity: number;
    product: Product;
    color: string;
}

interface CartState {
    getCartloading: boolean;
    cartItems: CartItem[] | [];
    loadingStates: LoadingStates;
    error: string | null;
    message: string | null;
}

const initialState: CartState = {
    getCartloading: false,
    cartItems: [],
    loadingStates: {},
    error: null,
    message: null,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        getCartRequest: (state) => {
            state.getCartloading = true;
        },
        getCartSuccess(
            state,
            action: PayloadAction<{
                cartData: CartItem[];
                message: string;
            }>
        ) {
            state.getCartloading = false;
            state.cartItems = action.payload.cartData;
            state.message = null;
            state.error = null;
        },
        getCartFailed(
            state,
            _action: PayloadAction<{
                message: string;
            }>
        ) {
            state.getCartloading = false;
            state.cartItems = [];
            state.message = null;
            state.error = null;
        },
        addToCartRequest: (
            state,
            action: PayloadAction<{ productId: string }>
        ) => {
            state.loadingStates[action.payload.productId] = {
                ...state.loadingStates[action.payload.productId],
                isAdding: true,
            };
        },
        addToCartSuccess: (
            state,
            action: PayloadAction<{
                cartData: CartItem[];
                message: string;
            }>
        ) => {
            state.cartItems = action.payload.cartData;
            state.loadingStates = {};
            state.message = action.payload.message;
            state.error = null;
        },
        addToCartFailed: (
            state,
            action: PayloadAction<{
                message: string;
                productId?: string;
            }>
        ) => {
            if (action.payload.productId) {
                state.loadingStates[action.payload.productId] = {
                    ...state.loadingStates[action.payload.productId],
                    isAdding: false,
                };
            }
            state.error = action.payload.message;
            state.message = null;
        },
        removeFromCartRequest: (
            state,
            action: PayloadAction<{ productId: string }>
        ) => {
            state.loadingStates[action.payload.productId] = {
                ...state.loadingStates[action.payload.productId],
                isRemoving: true,
            };
        },
        removeFromCartSuccess: (
            state,
            action: PayloadAction<{
                cartData: CartItem[];
                message: string;
            }>
        ) => {
            state.cartItems = action.payload.cartData;
            state.loadingStates = {};
            state.message = action.payload.message;
            state.error = null;
        },
        removeFromCartFailed: (
            state,
            action: PayloadAction<{
                message: string;
                productId?: string;
            }>
        ) => {
            if (action.payload.productId) {
                state.loadingStates[action.payload.productId] = {
                    ...state.loadingStates[action.payload.productId],
                    isRemoving: false,
                };
            }
            state.error = action.payload.message;
            state.message = null;
        },
        decreaseQantityRequest: (
            state,
            action: PayloadAction<{ productId: string }>
        ) => {
            state.loadingStates[action.payload.productId] = {
                ...state.loadingStates[action.payload.productId],
                isDecreasing: true,
            };
        },
        decreaseQantitySuccess: (
            state,
            action: PayloadAction<{
                cartData: CartItem[];
                message: string;
            }>
        ) => {
            state.cartItems = action.payload.cartData;
            state.loadingStates = {};
            state.message = action.payload.message;
            state.error = null;
        },
        decreaseQantityFailed: (
            state,
            action: PayloadAction<{
                message: string;
                productId?: string;
            }>
        ) => {
            if (action.payload.productId) {
                state.loadingStates[action.payload.productId] = {
                    ...state.loadingStates[action.payload.productId],
                    isDecreasing: false,
                };
            }
            state.error = action.payload.message;
            state.message = null;
        },
        clearAllCartErrosAndMsgs(state) {
            state.error = null;
            state.message = null;
        },
    },
});

const handleApiCall = async (
    dispatch: AppDispatch,
    requestAction: () => AnyAction,
    successAction: (data: {
        cartData: CartItem[];
        message: string;
    }) => AnyAction,
    failureAction: (data: { message: string; productId?: string }) => AnyAction,
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

export const getCart = () => async (dispatch: AppDispatch) => {
    await handleApiCall(
        dispatch,
        cartSlice.actions.getCartRequest,
        cartSlice.actions.getCartSuccess,
        cartSlice.actions.getCartFailed,
        () =>
            axios.get(`${BASE_URL}/cart/getcart`, {
                withCredentials: true,
            })
    );
};

export const addProductToCart =
    (data: { productId: string; color: string }) =>
    async (dispatch: AppDispatch) => {
        await handleApiCall(
            dispatch,
            () => cartSlice.actions.addToCartRequest(data),
            cartSlice.actions.addToCartSuccess,
            (errorData) =>
                cartSlice.actions.addToCartFailed({
                    ...errorData,
                    productId: data.productId,
                }),
            () =>
                axios.post(`${BASE_URL}/cart/addproducttocart`, data, {
                    withCredentials: true,
                })
        );
    };

export const removeProductFromCart =
    (data: { productId: string }) => async (dispatch: AppDispatch) => {
        await handleApiCall(
            dispatch,
            () => cartSlice.actions.removeFromCartRequest(data),
            cartSlice.actions.removeFromCartSuccess,
            (errorData) =>
                cartSlice.actions.removeFromCartFailed({
                    ...errorData,
                    productId: data.productId,
                }),
            () =>
                axios.post(`${BASE_URL}/cart/removeproductfromcart`, data, {
                    withCredentials: true,
                })
        );
    };

export const decreaseQuantity =
    (data: { productId: string }) => async (dispatch: AppDispatch) => {
        await handleApiCall(
            dispatch,
            () => cartSlice.actions.decreaseQantityRequest(data),
            cartSlice.actions.decreaseQantitySuccess,
            (errorData) =>
                cartSlice.actions.decreaseQantityFailed({
                    ...errorData,
                    productId: data.productId,
                }),
            () =>
                axios.post(`${BASE_URL}/cart/decreasequantity`, data, {
                    withCredentials: true,
                })
        );
    };

export const clearAllCartErrosAndMsgs = () => (dispatch: AppDispatch) => {
    dispatch(cartSlice.actions.clearAllCartErrosAndMsgs());
};

export default cartSlice.reducer;
