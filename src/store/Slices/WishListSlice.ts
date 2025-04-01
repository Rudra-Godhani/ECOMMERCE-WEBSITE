import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../data/allProductsData";
import { AppDispatch } from "../store";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../../const/constants";

interface LoadingStates {
    [productId: string]: {
        isAdding?: boolean;
        isRemoving?: boolean;
    };
}

export interface WishListItem {
    product: Product;
    color: string;
}

interface WishListState {
    getWishListLoading: boolean;
    wishListItems: WishListItem[] | [];
    loadingStates: LoadingStates;
    error: string | null;
    message: string | null;
}

const initialState: WishListState = {
    getWishListLoading: false,
    wishListItems: [],
    loadingStates: {},
    error: null,
    message: null,
};

const wishListSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
        getWishListRequest: (state) => {
            state.getWishListLoading = true;
        },
        getWishListSuccess(
            state,
            action: PayloadAction<{
                wishListData: WishListItem[];
                message: string;
            }>
        ) {
            state.getWishListLoading = false;
            state.wishListItems = action.payload.wishListData;
        },
        getWishListFailed(
            state,
            action: PayloadAction<{
                message: string;
            }>
        ) {
            state.getWishListLoading = false;
            state.wishListItems = [];
            state.message = null;
            state.error = action.payload.message;
        },
        addToWishListRequest: (
            state,
            action: PayloadAction<{ productId: string }>
        ) => {
            state.loadingStates[action.payload.productId] = {
                ...state.loadingStates[action.payload.productId],
                isAdding: true,
            };
        },
        addToWIshListSuccess: (
            state,
            action: PayloadAction<{
                wishListData: WishListItem[];
                message: string;
            }>
        ) => {
            state.wishListItems = action.payload.wishListData;
            state.loadingStates = {};
            state.message = action.payload.message;
            state.error = null;
        },
        addToWishListFailed: (
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
        removeFromWishListRequest: (
            state,
            action: PayloadAction<{ productId: string }>
        ) => {
            state.loadingStates[action.payload.productId] = {
                ...state.loadingStates[action.payload.productId],
                isAdding: true,
            };
        },
        removeFromWIshListSuccess: (
            state,
            action: PayloadAction<{
                wishListData: WishListItem[];
                message: string;
            }>
        ) => {
            state.wishListItems = action.payload.wishListData;
            state.loadingStates = {};
            state.message = action.payload.message;
            state.error = null;
        },
        removeFromWishListFailed: (
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
        clearAllWishListErrosAndMsgs(state) {
            state.error = null;
            state.message = null;
        },
    },
});

const handleApiCall = async (
    dispatch: AppDispatch,
    requestAction: () => AnyAction,
    successAction: (data: {
        wishListData: WishListItem[];
        message: string;
    }) => AnyAction,
    failureAction: (data: { message: string; productId?: string }) => AnyAction,
    apiCall: () => Promise<any>
) => {
    dispatch(requestAction());
    try {
        const response = await apiCall();
        // await new Promise((resolve) => setTimeout(resolve, 5000));
        console.log("wishlist data:", response.data);
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

export const getWishList = () => async (dispatch: AppDispatch) => {
    console.log("gtwishlist:");
    await handleApiCall(
        dispatch,
        wishListSlice.actions.getWishListRequest,
        wishListSlice.actions.getWishListSuccess,
        wishListSlice.actions.getWishListFailed,
        () =>
            axios.get(`${BASE_URL}/wishlist/getwishlist`, {
                withCredentials: true,
            })
    );
};

export const addProductToWishList =
    (data: { productId: string; color: string }) =>
    async (dispatch: AppDispatch) => {
        await handleApiCall(
            dispatch,
            () => wishListSlice.actions.addToWishListRequest(data),
            wishListSlice.actions.addToWIshListSuccess,
            (errorData) =>
                wishListSlice.actions.addToWishListFailed({
                    ...errorData,
                    productId: data.productId,
                }),
            () =>
                axios.post(`${BASE_URL}/wishlist/addproducttowishlist`, data, {
                    withCredentials: true,
                })
        );
    };
export const removeProductFromWishList =
    (data: { productId: string }) => async (dispatch: AppDispatch) => {
        await handleApiCall(
            dispatch,
            () => wishListSlice.actions.removeFromWishListRequest(data),
            wishListSlice.actions.removeFromWIshListSuccess,
            (errorData) =>
                wishListSlice.actions.removeFromWishListFailed({
                    ...errorData,
                    productId: data.productId,
                }),
            () =>
                axios.post(
                    `${BASE_URL}/wishlist/removeproductfromwishlist`,
                    data,
                    {
                        withCredentials: true,
                    }
                )
        );
    };

export const clearAllWishListErrosAndMsgs = () => (dispatch: AppDispatch) => {
    dispatch(wishListSlice.actions.clearAllWishListErrosAndMsgs());
};

export default wishListSlice.reducer;
