import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./Layout/Layout.tsx";
import Home from "./pages/Home/Home.tsx";
import ContactUs from "./pages/ContactUs/ContactUs.tsx";
import Login from "./pages/Login/Login.tsx";
import SignUp from "./pages/SignUp/SignUp.tsx";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.tsx";
import ResetPassword from "./pages/ResetPassword/ResetPassword.tsx";
import AboutUs from "./pages/AboutUs/AboutUs.tsx";
import ProductDetails from "./pages/ProductDetail/ProductDetails.tsx";
import ProductListing from "./pages/ProductListing/ProductListing.tsx";
import Error from "./pages/Error/Error.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart.tsx";
import WishList from "./pages/WishList/WishList.tsx";

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
