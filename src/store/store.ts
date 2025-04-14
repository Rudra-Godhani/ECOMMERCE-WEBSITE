import { configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import wishListReducer from "./Slices/WishListSlice";
import filterReducer from "./Slices/FilterSlice";
import authReducer from "./Slices/authSlice";
import userReducer from "./Slices/userSlice";
import updateProfileReducer from "./Slices/updateProfileSlice";
import productReducer from "./Slices/productSlice";
import cartReducer from "./Slices/CartSlice";
import addressReducer from "./Slices/addressSlice";
import orderReducer from "./Slices/orderSlice";
import categoryReducer from "./Slices/categorySlice";
import brandReducer from "./Slices/brandSlice";
import contactReducer from "./Slices/contactUsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { AnyAction, combineReducers } from "redux";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user", "cart", "wishList"],
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
    address: addressReducer,
    order: orderReducer,
    contact: contactReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
