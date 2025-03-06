import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store.ts";
import { createTheme, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

export const theme = createTheme({
    typography: {
        fontFamily: '"Montserrat", sans-serif',
        h1: {
            fontSize: "2.5rem",
            fontWeight: "700",
        },
        h2: {
            fontSize: "2rem",
            fontWeight: "700",
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: "700",
        },
        h4: {
            fontSize: "1.25rem",
            fontWeight: "400",
        },
        h5: {
            fontSize: "1rem",
            fontWeight: "400",
        },
        h6: {
            fontSize: "0.875rem",
            fontWeight: "400",
        },
        body1: {
            fontSize: "0.75rem",
            fontWeight: "400",
        },
        body2: {
            fontSize: "0.625rem",
            fontWeight: "400",
        },
    },
    palette: {
        white: {
            main: "#ffffff",
        },
        secondary: {
            main: "#252B42",
        },
        gray: {
            main: "#737373",
        },
        lightBlue: {
            main: "#23A6F0",
        },
        darkGreen: {
            main: "#23856D",
        },
        lightGreeb: {
            main: "#2DC071",
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        },
    },
});

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                    />
                </PersistGate>
            </Provider>
        </ThemeProvider>
    </BrowserRouter>
);
