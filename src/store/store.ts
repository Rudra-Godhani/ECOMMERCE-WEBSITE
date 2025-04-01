import { configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import wishListReducer from "./Slices/WishListSlice";
import filterReducer from "./Slices/FilterSlice";
import authReducer from "./Slices/authSlice";
import userReducer from "./Slices/userSlice";
import updateProfileReducer from "./Slices/updateProfileSlice";
import productReducer from "./Slices/productSlice";
import cartReducer from "./Slices/CartSlice";
import categoryReducer from "./Slices/categorySlice";
import brandReducer from "./Slices/brandSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { AnyAction, combineReducers } from "redux";
import { brands } from "../data/allProductsData";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["wishList", "user"],
};

const rootReducer = combineReducers({
    filter: filterReducer,
    auth: authReducer,
    user: userReducer,
    updateProfile: updateProfileReducer,
    product: productReducer,
    cart: cartReducer,
    wishList: wishListReducer,
    category: categoryReducer,
    brands: brandReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Required to prevent serialization errors with redux-persist
        }),
});

export const persistor = persistStore(store);
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
