// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

// interface User {
//     name: string;
//     email: string;
//     password: string;
// }

// interface AuthState {
//     users: User[]; // Store multiple users
//     isLoggedIn: boolean;
//     token: string | null;
//     error: string | null;
//     message: string | null;
//     loggedInUser: User | null; // Track current logged-in user
// }

// // Load auth state from localStorage
// const storedAuth = localStorage.getItem("authData");
// const initialState: AuthState = storedAuth
//     ? JSON.parse(storedAuth)
//     : {
//           users: [],
//           isLoggedIn: false,
//           token: null,
//           error: null,
//           message: null,
//           loggedInUser: null,
//       };

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         login: (
//             state,
//             action: PayloadAction<{ email: string; password: string }>
//         ) => {
//             const foundUser = state.users.find(
//                 (user) =>
//                     user.email === action.payload.email &&
//                     user.password === action.payload.password
//             );

//             if (foundUser) {
//                 state.isLoggedIn = true;
//                 state.token = uuidv4();
//                 state.message = "User Logged In Successfully.";
//                 state.error = null;
//                 state.loggedInUser = foundUser;

//                 // Save to localStorage
//                 localStorage.setItem("authData", JSON.stringify(state));
//             } else {
//                 state.error = "User Not Found with given Credentials.";
//                 state.message = null;
//             }
//         },
//         signUp: (state, action: PayloadAction<User>) => {
//             const existingUser = state.users.find(
//                 (user) => user.email === action.payload.email
//             );

//             if (existingUser) {
//                 state.error = "User Already Exists.";
//                 state.message = null;
//             } else {
//                 state.users.push(action.payload);
//                 state.message = "User Signed Up Successfully.";
//                 state.error = null;

//                 // Save to localStorage
//                 localStorage.setItem("authData", JSON.stringify(state));
//             }
//         },
//         resetErrorAndMesssage: (state) => {
//             state.error = null;
//             state.message = null;

//             const storedAuth = JSON.parse(
//                 localStorage.getItem("authData") || "{}"
//             );

//             const updatedAuth = { ...storedAuth, error: null, message: null };
//             localStorage.setItem("authData", JSON.stringify(updatedAuth));
//         },
//         logout: (state) => {
//             state.isLoggedIn = false;
//             state.token = null;
//             state.loggedInUser = null;
//             state.message = null;
//             state.error = null;

//             // Clear localStorage
//             localStorage.removeItem("authData");
//         },
//     },
// });

// export const { login, signUp, logout,resetErrorAndMesssage } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface User {
    name: string;
    email: string;
    password: string;
}

interface AuthState {
    users: User[]; // Store multiple users
    isLoggedIn: boolean;
    token: string | null;
    error: string | null;
    message: string | null;
    loggedInUser: User | null; // Track current logged-in user
}

// Load auth state from localStorage
const initialState: AuthState = {
    users: [],
    isLoggedIn: false,
    token: null,
    error: null,
    message: null,
    loggedInUser: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (
            state,
            action: PayloadAction<{ email: string; password: string }>
        ) => {
            const foundUser = state.users.find(
                (user) =>
                    user.email === action.payload.email &&
                    user.password === action.payload.password
            );

            if (foundUser) {
                state.isLoggedIn = true;
                state.token = uuidv4();
                state.message = "User Logged In Successfully.";
                state.error = null;
                state.loggedInUser = foundUser;
            } else {
                state.error = "User Not Found with given Credentials.";
                state.message = null;
            }
        },
        signUp: (state, action: PayloadAction<User>) => {
            const existingUser = state.users.find(
                (user) => user.email === action.payload.email
            );

            if (existingUser) {
                state.error = "User Already Exists.";
                state.message = null;
            } else {
                state.users.push(action.payload);
                state.message = "User Signed Up Successfully.";
                state.error = null;
            }
        },
        resetErrorAndMesssage: (state) => {
            state.error = null;
            state.message = null;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.token = null;
            state.loggedInUser = null;
            state.message = null;
            state.error = null;
        },
    },
});

export const { login, signUp, logout, resetErrorAndMesssage } =
    authSlice.actions;
export default authSlice.reducer;
