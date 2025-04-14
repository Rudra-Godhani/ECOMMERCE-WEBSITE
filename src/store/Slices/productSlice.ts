import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../../const/constants";

export interface Product {
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
    brand: {
        id: string;
        name: string;
        category: {
            id: string;
            name: string;
        };
    };
    category: {
        id: string;
        name: string;
    };
    additionalInformation: string;
    createdAt: Date;
    updatedAt: Date;
}

interface ProductState {
    loading: boolean;
    filteredLoading: boolean;
    searchedLoading: boolean;
    products: Product[] | [];
    product: Product | null;
    filteredProducts: Product[] | [];
    searchedProducts: Product[] | [];
    totalPages: number;
    currentPage: number;
    isFiltered: boolean;
    isSearched: boolean;
    error: string | null;
    message: string | null;
}

const initialState: ProductState = {
    loading: false,
    filteredLoading: false,
    searchedLoading: false,
    products: [],
    product: null,
    filteredProducts: [],
    searchedProducts: [],
    totalPages: 1,
    currentPage: 1,
    isFiltered: false,
    isSearched: false,
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
            state.isFiltered = false;
        },
        fetchAllProductsFailed(
            state,
            action: PayloadAction<{ message: string }>
        ) {
            state.loading = false;
            state.products = [];
            state.error = action.payload.message;
            state.message = null;
        },
        fetchSingleProductRequest(state) {
            state.loading = true;
        },
        fetchSingleProductSuccess(
            state,
            action: PayloadAction<{
                product: Product;
            }>
        ) {
            state.loading = false;
            state.product = action.payload.product;
        },
        fetchSingleProductFailed(
            state,
            action: PayloadAction<{ message: string }>
        ) {
            state.loading = false;
            state.product = null;
            state.error = action.payload.message;
            state.message = null;
        },
        fetchFilteredProductsRequest(state) {
            state.filteredLoading = true;
            state.isFiltered = true;
        },
        fetchFilteredProductsSuccess(
            state,
            action: PayloadAction<{
                filteredProducts: Product[];
                totalPages: number;
                currentPage: number;
            }>
        ) {
            state.filteredLoading = false;
            state.filteredProducts = action.payload.filteredProducts;
            state.totalPages = action.payload.totalPages;
            state.currentPage = action.payload.currentPage;
            state.isFiltered = true;
        },
        fetchFilteredProductsFailed(
            state,
            action: PayloadAction<{
                message: string;
            }>
        ) {
            state.filteredLoading = false;
            state.filteredProducts = [];
            state.error = action.payload.message;
            state.isFiltered = true;
        },
        fetchSearchedProductsRequest(state) {
            state.searchedLoading = true;
            state.isSearched = true;
        },
        fetchSearchedProductsSuccess(
            state,
            action: PayloadAction<{
                searchedProducts: Product[];
            }>
        ) {
            state.searchedLoading = false;
            state.searchedProducts = action.payload.searchedProducts;
            state.isSearched = true;
        },
        fetchSearchedProductsFailed(
            state,
            action: PayloadAction<{
                message: string;
            }>
        ) {
            state.searchedLoading = false;
            state.searchedProducts = [];
            state.error = action.payload.message;
            state.isSearched = true;
        },
        clearAllProductErrorsAndMsgs(state) {
            state.error = null;
            state.message = null;
        },
    },
});

const handleApiCall = async (
    dispatch: AppDispatch,
    requestAction: () => AnyAction,
    successAction: (data: {
        product: Product;
        products: Product[];
        filteredProducts: Product[];
        searchedProducts: Product[];
        totalPages: number;
        currentPage: number;
    }) => AnyAction,
    failureAction: (data: { message: string }) => AnyAction,
    apiCall: () => Promise<any>
) => {
    dispatch(requestAction());
    try {
        const response = await apiCall();
        // await new Promise((resolve) => setTimeout(resolve, 500000));
        console.log("product data:", response.data);
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

export const getAllProducts = () => async (dispatch: AppDispatch) => {
    await handleApiCall(
        dispatch,
        productSlice.actions.fetchAllProductsRequest,
        productSlice.actions.fetchAllProductsSuccess,
        productSlice.actions.fetchAllProductsFailed,
        () => {
            return axios.get(`${BASE_URL}/product/getallproducts`, {
                withCredentials: true,
            });
        }
    );
};

export const getSingleProduct =
    (data: { productId: string }) => async (dispatch: AppDispatch) => {
        await handleApiCall(
            dispatch,
            productSlice.actions.fetchSingleProductRequest,
            productSlice.actions.fetchSingleProductSuccess,
            productSlice.actions.fetchSingleProductFailed,
            () =>
                axios.get(`${BASE_URL}/product/getproduct/${data.productId}`, {
                    withCredentials: true,
                })
        );
    };

interface FilterData {
    category: string;
    brand: string;
    minprice: number;
    maxprice: number;
    sortby?: string;
    search: string;
    page: number;
    limit: number;
}

export const getFilteredProducts =
    (data: FilterData) => async (dispatch: AppDispatch) => {
        await handleApiCall(
            dispatch,
            productSlice.actions.fetchFilteredProductsRequest,
            productSlice.actions.fetchFilteredProductsSuccess,
            productSlice.actions.fetchFilteredProductsFailed,
            () => {
                let url = `${BASE_URL}/product/filteredproducts?page=${data.page}&limit=${data.limit}&`;
                let queryParams = [];
                if (data.category) {
                    queryParams.push(`category=${data.category}`);
                }
                if (data.brand) {
                    queryParams.push(`brand=${data.brand}`);
                }
                if (data.minprice) {
                    queryParams.push(`minprice=${data.minprice}`);
                }
                if (data.maxprice) {
                    queryParams.push(`maxprice=${data.maxprice}`);
                }
                if (data.sortby) {
                    queryParams.push(`sortby=${data.sortby}`);
                }
                if (data.search) {
                    queryParams.push(`search=${data.search}`);
                }
                url = url + queryParams.join("&");

                return axios.get(url, {
                    withCredentials: true,
                });
            }
        );
    };

export const getSearchedProducts =
    (query: string) => async (dispatch: AppDispatch) => {
        await handleApiCall(
            dispatch,
            productSlice.actions.fetchSearchedProductsRequest,
            productSlice.actions.fetchSearchedProductsSuccess,
            productSlice.actions.fetchSearchedProductsFailed,
            () => {
                let url = `${BASE_URL}/product/searchedproducts?search=${query}`;
                return axios.get(url, {
                    withCredentials: true,
                });
            }
        );
    };

export const clearAllProductErrorsAndMessages =
    () => (dispatch: AppDispatch) => {
        dispatch(productSlice.actions.clearAllProductErrorsAndMsgs());
    };

export default productSlice.reducer;
