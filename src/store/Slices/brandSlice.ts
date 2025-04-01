import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../data/allProductsData";
import axios, { AxiosError } from "axios";
import { AppDispatch } from "../store";
import { BASE_URL } from "../../const/constants";

interface Brand {
    id: string;
    name: string;
    categories: [
        {
            id: string;
            name: string;
        }
    ];
}

interface BrandState {
    loading: boolean;
    brands: Brand[] | [];
    error: string | null;
    message: string | null;
}

const initialState: BrandState = {
    loading: false,
    brands: [],
    error: null,
    message: null,
};

const brandSlice = createSlice({
    name: "brand",
    initialState,
    reducers: {
        fetchAllbrandsRequest(state) {
            state.loading = true;
        },
        fetchAllbrandsSuccess(
            state,
            action: PayloadAction<{
                brands: Brand[];
            }>
        ) {
            state.loading = false;
            state.brands = action.payload.brands;
        },
        fetchAllbrandsFailed(
            state,
            action: PayloadAction<{ message: string }>
        ) {
            state.loading = false;
            state.brands = [];
            state.error = action.payload.message;
            state.message = null;
        },
        clearAllBrandErrorsAndMsgs(state) {
            state.error = null;
            state.message = null;
        },
    },
});

const handleApiCall = async (
    dispatch: AppDispatch,
    requestAction: () => AnyAction,
    successAction: (data: { brands: Brand[] }) => AnyAction,
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

export const getAllBrands = () => async (dispatch: AppDispatch) => {
    await handleApiCall(
        dispatch,
        brandSlice.actions.fetchAllbrandsRequest,
        brandSlice.actions.fetchAllbrandsSuccess,
        brandSlice.actions.fetchAllbrandsFailed,
        () =>
            axios.get(`${BASE_URL}/product/getallbrands`, {
                withCredentials: true,
            })
    );
};

export default brandSlice.reducer;
