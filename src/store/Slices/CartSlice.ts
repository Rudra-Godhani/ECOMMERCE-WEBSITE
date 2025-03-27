import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../data/allProductsData";
import { AppDispatch } from "../store";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../../const/constants";
// import { CartItem } from "./Cart_Slice";

interface CartItem {
    quantity: number;
    product: Product;
}

interface CartState {
    getCartloading: boolean;
    addLoading: boolean;
    removeLoading: boolean;
    decreaseLoading: boolean;
    cartItems: CartItem[] | [];
    error: string | null;
    message: string | null;
}

const initialState: CartState = {
    getCartloading: false,
    addLoading: false,
    removeLoading: false,
    decreaseLoading: false,
    cartItems: [],
    error: null,
    message: null,
};

interface Cart {
    cartItems: CartItem[];
}

const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        getCartRequest: (state) => {
            state.getCartloading = true;
        },
        getCartSuccess(
            state,
            action: PayloadAction<{
                cart: Cart;
                message: string;
            }>
        ) {
            state.getCartloading = false;
            state.cartItems = action.payload.cart.cartItems;
            state.message = action.payload.message;
            state.error = null;
        },
        getCartFailed(
            state,
            action: PayloadAction<{
                message: string;
            }>
        ) {
            state.getCartloading = false;
            state.cartItems = [];
            state.message = null;
            state.error = action.payload.message;
        },
        addToCartRequest: (state) => {
            state.addLoading = true;
        },
        addToCartSuccess: (
            state,
            action: PayloadAction<{
                cart: Cart;
                message: string;
            }>
        ) => {
            state.addLoading = false;
            state.message = action.payload.message;
            state.error = null;
        },
        addToCartFailed: (
            state,
            action: PayloadAction<{
                message: string;
            }>
        ) => {
            state.addLoading = false;
            state.error = action.payload.message;
            state.message = null;
        },
        removeFromCartRequest: (state) => {
            state.removeLoading = true;
        },
        removeFromCartSuccess: (
            state,
            action: PayloadAction<{
                cart: Cart;
                message: string;
            }>
        ) => {
            state.removeLoading = false;
            state.message = action.payload.message;
            state.error = null;
        },
        removeFromCartFailed: (
            state,
            action: PayloadAction<{
                message: string;
            }>
        ) => {
            state.removeLoading = false;
            state.error = action.payload.message;
            state.message = null;
        },
        decreaseQantityRequest: (state) => {
            state.decreaseLoading = true;
        },
        decreaseQantitySuccess: (
            state,
            action: PayloadAction<{
                cart: Cart;
                message: string;
            }>
        ) => {
            state.decreaseLoading = false;
            state.message = action.payload.message;
            state.error = null;
        },
        decreaseQantityFailed: (
            state,
            action: PayloadAction<{
                message: string;
            }>
        ) => {
            state.decreaseLoading = false;
            state.error = action.payload.message;
            state.message = null;
        },
    },
});

const handleApiCall = async (
    dispatch: AppDispatch,
    requestAction: () => AnyAction,
    successAction: (data: { cart: Cart; message: string }) => AnyAction,
    failureAction: (data: { message: string }) => AnyAction,
    apiCall: () => Promise<any>
) => {
    dispatch(requestAction());
    try {
        const response = await apiCall();
        // await new Promise((resolve) => setTimeout(resolve, 5000));
        console.log("data:", response.data);
        dispatch(successAction(response.data));
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        dispatch(
            failureAction({
                message: err.response?.data?.message || "An error occurred",
            })
        );
    }
};

export const getCart = () => async (dispatch: AppDispatch) => {
    console.log("gtcart:");
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

export const addProductToCarts =
    (data: { productId: string }) => async (dispatch: AppDispatch) => {
        console.log("addtocart:");
        await handleApiCall(
            dispatch,
            cartSlice.actions.addToCartRequest,
            cartSlice.actions.addToCartSuccess,
            cartSlice.actions.addToCartFailed,
            () =>
                axios.post(`${BASE_URL}/cart/addproducttocart`, data, {
                    withCredentials: true,
                })
        );
    };

export const removeProductFromCarts =
    (data: { productId: string }) => async (dispatch: AppDispatch) => {
        console.log("removetocart:");
        await handleApiCall(
            dispatch,
            cartSlice.actions.removeFromCartRequest,
            cartSlice.actions.removeFromCartSuccess,
            cartSlice.actions.removeFromCartFailed,
            () =>
                axios.post(`${BASE_URL}/cart/removeproductfromcart`, data, {
                    withCredentials: true,
                })
        );
    };

export const decreaseQuantitys =
    (data: { productId: string }) => async (dispatch: AppDispatch) => {
        console.log("decreaseQuantityCart:");
        await handleApiCall(
            dispatch,
            cartSlice.actions.removeFromCartRequest,
            cartSlice.actions.removeFromCartSuccess,
            cartSlice.actions.removeFromCartFailed,
            () =>
                axios.post(`${BASE_URL}/cart/decreasequantity`, data, {
                    withCredentials: true,
                })
        );
    };

export default cartSlice.reducer;
