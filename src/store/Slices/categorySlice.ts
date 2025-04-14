import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../data/allProductsData";
import axios, { AxiosError } from "axios";
import { AppDispatch } from "../store";
import { BASE_URL } from "../../const/constants";

interface Category {
    id: string;
    name: string;
}

interface CategoryState {
    loading: boolean;
    categories: Category[] | [];
    error: string | null;
    message: string | null;
}

const initialState: CategoryState = {
    loading: false,
    categories: [],
    error: null,
    message: null,
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        fetchAllCategoriesRequest(state) {
            state.loading = true;
        },
        fetchAllCategoriesSuccess(
            state,
            action: PayloadAction<{
                categories: Category[];
            }>
        ) {
            state.loading = false;
            state.categories = action.payload.categories;
        },
        fetchAllCategoriesFailed(
            state,
            action: PayloadAction<{ message: string }>
        ) {
            state.loading = false;
            state.categories = [];
            state.error = action.payload.message;
            state.message = null;
        },
        clearAllCategoryErrorsAndMsgs(state) {
            state.error = null;
            state.message = null;
        },
    },
});

const handleApiCall = async (
    dispatch: AppDispatch,
    requestAction: () => AnyAction,
    successAction: (data: { categories: Category[] }) => AnyAction,
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
                message:
                    err.response?.data?.message ||
                    "Something went wrong. Please try again.",
            })
        );
    }
};

export const getAllCategories = () => async (dispatch: AppDispatch) => {
    await handleApiCall(
        dispatch,
        categorySlice.actions.fetchAllCategoriesRequest,
        categorySlice.actions.fetchAllCategoriesSuccess,
        categorySlice.actions.fetchAllCategoriesFailed,
        () =>
            axios.get(`${BASE_URL}/product/getallcategories`, {
                withCredentials: true,
            })
    );
};

export default categorySlice.reducer;
