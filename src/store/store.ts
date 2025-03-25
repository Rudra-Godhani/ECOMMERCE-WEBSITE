import { configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";
import wishListReducer from "./Slices/WishListSlice";
import filterReducer from "./Slices/FilterSlice";
import authReducer from "./Slices/authSlice";
import userReducer from "./Slices/userSlice";
import updateProfileReducer from "./Slices/updateProfileSlice";
import productReducer from "./Slices/productSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { AnyAction, combineReducers } from "redux";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart", "wishlist","user"],
};

const rootReducer = combineReducers({
    cart: cartReducer,
    wishlist: wishListReducer,
    filter: filterReducer,
    auth: authReducer,
    user: userReducer,
    updateProfile: updateProfileReducer,
    product: productReducer
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

