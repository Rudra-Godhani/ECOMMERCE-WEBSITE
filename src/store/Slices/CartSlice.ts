import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    title: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
    color: string;
    availability: Boolean;
    rating: number;
    brand: string;
    category: string;
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<CartItem>) => {
            state.push(action.payload);
        },
        removeProductFromCart: (state, action: PayloadAction<number>) => {
            return state.filter((item) => item.id !== action.payload);
        },
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const existingProduct = state.find(
                (item) => item.id === action.payload
            );
            if (existingProduct) {
                existingProduct.quantity += 1;
            }
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const existingProduct = state.find(
                (item) => item.id === action.payload
            );
            console.log(existingProduct?.quantity);
            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
                console.log(existingProduct?.quantity);
            } else {
                return state.filter((item) => item.id !== action.payload);
            }
        },
    },
});

export const {
    addProductToCart,
    removeProductFromCart,
    increaseQuantity,
    decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
