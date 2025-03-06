import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../Data";

const initialState: Product[] = [];

const wishListSlice = createSlice({
    name: "wishlist",
    initialState: initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<Product>) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (!existingItem) {
                state.push(action.payload);
            }
        },
        removeFromWishlist: (state, action: PayloadAction<number>) => {
            return state.filter(item => item.id !== action.payload);
        }
    }
})

export const { addToWishlist,removeFromWishlist } = wishListSlice.actions;
export default wishListSlice.reducer;