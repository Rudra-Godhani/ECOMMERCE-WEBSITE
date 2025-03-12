import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./Layout/Layout.tsx";
import Home from "./pages/Home/index.tsx";
import ContactUs from "./pages/ContactUs/index.tsx";
import Login from "./pages/Login/index.tsx";
import SignUp from "./pages/SignUp/index.tsx";
import ForgotPassword from "./pages/ForgotPassword/index.tsx";
import ResetPassword from "./pages/ResetPassword/index.tsx";
import AboutUs from "./pages/AboutUs/index.tsx";
import ProductDetails from "./pages/ProductDetail/index.tsx";
import ProductListing from "./pages/ProductListing/index.tsx";
import Error from "./pages/Error/index.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Profile from "./pages/Profile/index.tsx";
import ShoppingCart from "./pages/ShoppingCart/index.tsx";
import WishList from "./pages/WishList/index.tsx";

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="contact-us" element={<ContactUs />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="forgotPassword" element={<ForgotPassword />} />
                    <Route path="resetPassword/:token" element={<ResetPassword />} />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route
                        path="product/:id/detail"
                        element={<ProductDetails />}
                    />
                    <Route
                        path="product/listing"
                        element={<ProductListing />}
                    />
                    <Route path="*" element={<Error />} />

                    <Route element={<ProtectedRoute />}>
                        <Route path="profile" element={<Profile />} />
                        <Route
                            path="shopping-cart"
                            element={<ShoppingCart />}
                        />
                        <Route path="wishlist" element={<WishList />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
