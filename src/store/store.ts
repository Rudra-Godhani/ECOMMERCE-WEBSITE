// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./Slices/CartSlice";
// import wishListReducer from "./Slices/WishListSlice";
// import filterReducer from "./Slices/FilterSlice";
// import authReducer from "./Slices/authSlice";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";
// import { combineReducers } from "redux";

// const persistConfig = {
//     key: "root",
//     storage,
//     whitelist: ["cart", "wishlist"],
// };

// const rootReducer = combineReducers({
//     cart: cartReducer,
//     wishlist: wishListReducer,
//     filter: filterReducer,
//     auth: authReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: false, // Required to prevent serialization errors with redux-persist
//         }),
// });

// export const persistor = persistStore(store);
// export default store;
// export type RootState = ReturnType<typeof store.getState>;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";
import wishListReducer from "./Slices/WishListSlice";
import filterReducer from "./Slices/FilterSlice";
import authReducer from "./Slices/authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart", "wishlist","auth"],
};

const rootReducer = combineReducers({
    cart: cartReducer,
    wishlist: wishListReducer,
    filter: filterReducer,
    auth: authReducer,
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

