import { configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import wishListReducer from "./Slices/WishList_Slice";
import filterReducer from "./Slices/FilterSlice";
import authReducer from "./Slices/authSlice";
import cart_Reducer from "./Slices/Cart_Slice";
import userReducer from "./Slices/userSlice";
import updateProfileReducer from "./Slices/updateProfileSlice";
import productReducer from "./Slices/productSlice";
import cartReducer from "./Slices/CartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { AnyAction, combineReducers } from "redux";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["wishlist","user"],
};

const rootReducer = combineReducers({
    cart: cart_Reducer,
    wishlist: wishListReducer,
    filter: filterReducer,
    auth: authReducer,
    user: userReducer,
    updateProfile: updateProfileReducer,
    product: productReducer,
    carts: cartReducer,
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

