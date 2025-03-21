// import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AppDispatch } from "../store";
// import axios, { AxiosError } from "axios";
// import { BASE_URL } from "../../const/constants";
// import { Category } from "@mui/icons-material";

// interface Product {
//     id: string;
//     title: string;
//     descriptionSmall: string;
//     descriptionLong: string[];
//     price: number;
//     retailPrice: number;
//     images: string[];
//     colors: string[];
//     availability: boolean;
//     reviewsText: string[];
//     noOfReviews: number;
//     rating: number;
//     brand: string;
//     category: string;
//     additionalInformation: string;
//     createdAt: Date;
//     updatedAt: Date;
// }

// interface ProductState {
//     loading: boolean;
//     products: Product[] | [];
//     filteredProducts: Product[] | [];
//     error: string | null;
//     message: string | null;
// }

// const initialState: ProductState = {
//     loading: false,
//     products: [],
//     filteredProducts: [],
//     error: null,
//     message: null,
// };

// const productSlice = createSlice({
//     name: "product",
//     initialState,
//     reducers: {
//         fetchAllProductsRequest(state) {
//             state.loading = true;
//         },
//         fetchAllProductsSuccess(
//             state,
//             action: PayloadAction<{
//                 products: Product[];
//             }>
//         ) {
//             state.loading = false;
//             state.products = action.payload.products;
//         },
//         fetchAllProductsFailed(
//             state,
//             action: PayloadAction<{ message: string }>
//         ) {
//             state.loading = false;
//             state.products = [];
//             state.error = action.payload.message;
//         },
//         fetchFilteredProductsRequest(state) {
//             state.loading = true;
//         },
//         fetchFilteredProductsSuccess(
//             state,
//             action: PayloadAction<{
//                 products: Product[];
//             }>
//         ) {
//             state.loading = false;
//             state.filteredProducts = action.payload.products;
//         },
//         fetchFilteredProductsFailed(
//             state,
//             action: PayloadAction<{
//                 message: string;
//             }>
//         ) {
//             state.loading = false;
//             state.filteredProducts = [];
//             state.error = action.payload.message;
//         },
//         clearAllErrorsAndMsgs(state) {
//             state.error = null;
//             state.message = null;
//         },
//     },
// });

// const handleApiCall = async (
//     dispatch: AppDispatch,
//     requestAction: () => AnyAction,
//     successAction: (data: { products: Product[] }) => AnyAction,
//     failureAction: (data: { message: string }) => AnyAction,
//     apiCall: () => Promise<any>
// ) => {
//     dispatch(requestAction());
//     try {
//         const response = await apiCall();
//         // await new Promise((resolve) => setTimeout(resolve, 5000));
//         dispatch(successAction(response.data));
//     } catch (error) {
//         const err = error as AxiosError<{ message: string }>;
//         dispatch(
//             failureAction({
//                 message: err.response?.data?.message || "An error occurred",
//             })
//         );
//     }
// };

// export const getAllProducts = () => async (dispatch: AppDispatch) => {
//     await handleApiCall(
//         dispatch,
//         productSlice.actions.fetchAllProductsRequest,
//         productSlice.actions.fetchAllProductsSuccess,
//         productSlice.actions.fetchAllProductsFailed,
//         () =>
//             axios.get(`${BASE_URL}/product/getallproducts`, {
//                 withCredentials: true,
//             })
//     );
// };

// interface FilterData {
//     category: string;
//     brand: string;
//     minprice: number;
//     maxprice: number;
// }

// export const getFilteredProducts =
//     (data: FilterData) => async (dispatch: AppDispatch) => {
//         console.log("data:",data);
//         await handleApiCall(
//             dispatch,
//             productSlice.actions.fetchAllProductsRequest,
//             productSlice.actions.fetchAllProductsSuccess,
//             productSlice.actions.fetchAllProductsFailed,
//             () => {
//                 let url = `${BASE_URL}/product/filteredproducts?`;
//                 let queryParams = [];
//                 if (data.category) {
//                     queryParams.push(`category=${data.category}`);
//                 }
//                 if (data.brand) {
//                     queryParams.push(`brand=${data.brand}`);
//                 }
//                 if (data.minprice) {
//                     queryParams.push(`minprice=${data.minprice}`);
//                 }
//                 if (data.maxprice) {
//                     queryParams.push(`maxprice=${data.maxprice}`);
//                 }
//                 // if (data.sortby) {
//                 //     queryParams.push(`sortby=${data.sortby}`);
//                 // }
//                 url = url + queryParams.join("&");

//                 return axios.get(url,
//                     {
//                         withCredentials: true,
//                     }
//                 );
//             }
//         );
//     };

// export const clearAllErrorsAndMessages = () => (dispatch: AppDispatch) => {
//     dispatch(productSlice.actions.clearAllErrorsAndMsgs());
// };

// export default productSlice.reducer;

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
    filteredLoading: boolean;
    products: Product[] | [];
    filteredProducts: Product[] | [];
    isFiltered: boolean;
    error: string | null;
    message: string | null;
}

const initialState: ProductState = {
    loading: false,
    filteredLoading: false,
    products: [],
    filteredProducts: [],
    isFiltered:false,
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
        },
        fetchFilteredProductsRequest(state) {
            state.filteredLoading = true;
            state.isFiltered = true;
        },
        fetchFilteredProductsSuccess(
            state,
            action: PayloadAction<{
                filteredProducts: Product[];
            }>
        ) {
            state.filteredLoading = false;
            state.filteredProducts = action.payload.filteredProducts;
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
        clearAllErrorsAndMsgs(state) {
            state.error = null;
            state.message = null;
        },
    },
});

const handleApiCall = async (
    dispatch: AppDispatch,
    requestAction: () => AnyAction,
    successAction: (data: {
        products: Product[];
        filteredProducts: Product[];
    }) => AnyAction,
    failureAction: (data: { message: string }) => AnyAction,
    apiCall: () => Promise<any>
) => {
    dispatch(requestAction());
    try {
        const response = await apiCall();
        // await new Promise((resolve) => setTimeout(resolve, 5000));
        console.log("reponse:", response.data);
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

interface FilterData {
    category: string;
    brand: string;
    minprice: number;
    maxprice: number;
    sortby?: string;
}

export const getFilteredProducts =
    (data: FilterData) => async (dispatch: AppDispatch) => {
        console.log("data:", data);
        await handleApiCall(
            dispatch,
            productSlice.actions.fetchFilteredProductsRequest, // Request for filtered products
            productSlice.actions.fetchFilteredProductsSuccess, // Success for filtered products
            productSlice.actions.fetchFilteredProductsFailed,
            () => {
                let url = `${BASE_URL}/product/filteredproducts?`;
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
                url = url + queryParams.join("&");

                return axios.get(url, {
                    withCredentials: true,
                });
            }
        );
    };

export const clearAllErrorsAndMessages = () => (dispatch: AppDispatch) => {
    dispatch(productSlice.actions.clearAllErrorsAndMsgs());
};

export default productSlice.reducer;
