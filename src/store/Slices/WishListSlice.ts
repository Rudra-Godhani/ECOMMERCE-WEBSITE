import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../data/allProductsData";

export interface WishLishItem {
    product: Product;
}

interface WishListSlice {
    getWishListLoading: boolean;
    wishListItems: [];
    error: string | null;
    message: string | null;
}

const wishListSlice = createSlice({
    name: "wishlists",
    initialState: {},
    reducers: {},
});
