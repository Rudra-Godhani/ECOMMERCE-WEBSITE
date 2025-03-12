import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import AboutUs from "./pages/AboutUs/AboutUs";
import ProductDetails from "./pages/ProductDetail/ProductDetails";
import ProductListing from "./pages/ProductListing/ProductListing";
import Error from "./pages/Error/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile/Profile";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import WishList from "./pages/WishList/WishList";

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
