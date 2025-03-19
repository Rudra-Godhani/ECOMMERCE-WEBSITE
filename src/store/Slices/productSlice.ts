import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../../const/constants";

interface Product {
    id: string;
    title: string;
    descriptionSmall: string;
    descriptionLong: string[];
    price: number;
    retailPrice: number;
    images: string[];
    colors: string[];
    availability: boolean;
    reviewsText: string[];
    noOfReviews: number;
    rating: number;
    brand: string;
    category: string;
    additionalInformation: string;
    createdAt: Date;
    updatedAt: Date;
}

interface ProductState {
    loading: boolean;
    products: Product[] | [];
    error: string | null;
    message: string | null;
}

const initialState: ProductState = {
    loading: false,
    products: [],
    
    error: null,
    message: null,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        fetchAllProductsRequest(state) {
            state.loading = true;
        },
        fetchAllProductsSuccess(
            state,
            action: PayloadAction<{
                products: Product[];
            }>
        ) {
            state.loading = false;
            state.products = action.payload.products;
        },
        fetchAllProductsFailed(
            state,
            action: PayloadAction<{ message: string }>
        ) {
            state.loading = false;
            state.products = [];
            state.error = action.payload.message;
        },
        clearAllErrorsAndMsgs(state) {
            state.error = null;
            state.message = null;
        },
    },
});

const handleApiCall = async (
    dispatch: AppDispatch,
    requestAction: () => AnyAction,
    successAction: (data: { products: Product[] }) => AnyAction,
    failureAction: (data: { message: string }) => AnyAction,
    apiCall: () => Promise<any>
) => {
    dispatch(requestAction());
    try {
        const response = await apiCall();
        // await new Promise((resolve) => setTimeout(resolve, 5000));
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

export const getAllProducts = () => async (dispatch: AppDispatch) => {
    await handleApiCall(
        dispatch,
        productSlice.actions.fetchAllProductsRequest,
        productSlice.actions.fetchAllProductsSuccess,
        productSlice.actions.fetchAllProductsFailed,
        () =>
            axios.get(`${BASE_URL}/product/getallproducts`, {
                withCredentials: true,
            })
    );
};

export const clearAllErrorsAndMessages = () => (dispatch: AppDispatch) => {
    dispatch(productSlice.actions.clearAllErrorsAndMsgs());
};

export default productSlice.reducer;
