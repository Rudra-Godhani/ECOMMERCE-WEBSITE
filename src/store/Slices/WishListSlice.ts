import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WishListProduct {
    id: number;
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
    selectedColor: string;
}

const initialState: WishListProduct[] = [];

const wishListSlice = createSlice({
    name: "wishlist",
    initialState: initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<WishListProduct>) => {
            const existingItem = state.find(
                (item) => item.id === action.payload.id
            );
            if (!existingItem) {
                state.push(action.payload);
            }
        },
        removeFromWishlist: (state, action: PayloadAction<number>) => {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishListSlice.actions;
export default wishListSlice.reducer;
