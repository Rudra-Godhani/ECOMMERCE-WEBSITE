import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, productsData } from "../../Data";

interface FilterState {
    allProducts: Product[];
    filteredProducts: Product[];
    selectedCategory: string | null;
    selectedBrands: string[];
    showAll: boolean;
    minPrice: number;
    maxPrice: number;
}

const initialState: FilterState = {
    allProducts: productsData,
    filteredProducts: productsData,
    selectedCategory: null,
    selectedBrands: [],
    showAll: true,
    minPrice: 10, // Set the min price (as per UI)
    maxPrice: 5000, // Set the max price (as per UI)
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterByCategory: (state, action: PayloadAction<{ category: string }>) => {
            state.selectedCategory = action.payload.category;
            state.showAll = false;

            // Apply category filter first
            let filtered = state.allProducts.filter((item) => item.category === action.payload.category);

            // Apply brand filter if brands are selected
            if (state.selectedBrands.length > 0) {
                filtered = filtered.filter((item) => state.selectedBrands.includes(item.brand));
            }

            // Apply price filter
            state.filteredProducts = filtered.filter(
                (item) => item.retailPrice >= state.minPrice && item.retailPrice <= state.maxPrice
            );
        },
        filterByBrands: (state, action: PayloadAction<{ brands: string[] }>) => {
            state.selectedBrands = action.payload.brands;
            state.showAll = action.payload.brands.length === 0; // If no brands are selected, treat as "All Brands"

            // Step 1: Start with category filter if selected
            let filtered = state.selectedCategory
                ? state.allProducts.filter((item) => item.category === state.selectedCategory)
                : state.allProducts;

            // Step 2: Apply brand filter if specific brands are selected
            if (!state.showAll) {
                filtered = filtered.filter((item) => state.selectedBrands.includes(item.brand));
            }

            // Step 3: Apply price filter (ALWAYS apply this)
            state.filteredProducts = filtered.filter(
                (item) => item.retailPrice >= state.minPrice && item.retailPrice <= state.maxPrice
            );
        },


        filterByPrice: (state, action: PayloadAction<{ minPrice: number; maxPrice: number }>) => {
            state.minPrice = action.payload.minPrice;
            state.maxPrice = action.payload.maxPrice;
            state.showAll = false;

            // Start with all products or filtered category
            let filtered = state.selectedCategory
                ? state.allProducts.filter((item) => item.category === state.selectedCategory)
                : state.allProducts;

            // Apply brand filter if brands are selected
            if (state.selectedBrands.length > 0) {
                filtered = filtered.filter((item) => state.selectedBrands.includes(item.brand));
            }

            // Apply price filter
            state.filteredProducts = filtered.filter(
                (item) => item.retailPrice >= state.minPrice && item.retailPrice <= state.maxPrice
            );
        },

        filterAll: (state) => {
            state.showAll = true;
            state.selectedBrands = [];

            // Step 1: Start with category filter if selected
            let filtered = state.selectedCategory
                ? state.allProducts.filter((item) => item.category === state.selectedCategory)
                : state.allProducts;

            // Step 2: Apply price filter (ALWAYS apply this)
            state.filteredProducts = filtered.filter(
                (item) => item.retailPrice >= state.minPrice && item.retailPrice <= state.maxPrice
            );
        },


        resetFilter: (state) => {
            state.showAll = true;
            state.selectedCategory = null;
            let filtered = state.allProducts;

            if (state.selectedBrands.length > 0) {
                filtered = filtered.filter((item) => state.selectedBrands.includes(item.brand));
            }

            state.filteredProducts = filtered.filter(
                (item) => item.retailPrice >= state.minPrice && item.retailPrice <= state.maxPrice
            );
        },

    },
});

export const { filterByCategory, filterByBrands, filterByPrice, filterAll, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;

