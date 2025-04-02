import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/index";
import ContactUs from "./pages/ContactUs/index";
import Login from "./pages/Login/index";
import SignUp from "./pages/SignUp/index";
import ForgotPassword from "./pages/ForgotPassword/index";
import ResetPassword from "./pages/ResetPassword/index";
import AboutUs from "./pages/AboutUs/index";
import ProductDetails from "./pages/ProductDetail/index";
import ProductListing from "./pages/ProductListing/index";
import Error from "./pages/Error/index";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile/index";
import ShoppingCart from "./pages/ShoppingCart/index";
import WishList from "./pages/WishList/index";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { useEffect } from "react";
import {
    clearAllErrorsAndMessages,
    getAllProducts,
} from "./store/Slices/productSlice";
import { toast } from "react-toastify";
import { getCart } from "./store/Slices/CartSlice";
import { getWishList } from "./store/Slices/WishListSlice";
import { getAllCategories } from "./store/Slices/categorySlice";
import { getAllBrands } from "./store/Slices/brandSlice";

const App: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error, message } = useSelector(
        (state: RootState) => state.product
    );

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        if (message) {
            toast.success(message);
        }
        dispatch(clearAllErrorsAndMessages());
    }, [dispatch, loading, error, message]);

    // useEffect(() => {
    //     dispatch(getSearchedProducts("gold"));
    // }, [dispatch]);
    // useEffect(() => {
    //     dispatch(getCart());
    // }, [dispatch]);h]);

    useEffect(() => {
        dispatch(getWishList());
    }, [dispatch]);

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
                    <Route
                        path="resetPassword/:token"
                        element={<ResetPassword />}
                    />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route path="product">
                        <Route
                            path="listing"
                            element={<ProductListing />}
                        ></Route>
                        <Route
                            path=":id/detail"
                            element={<ProductDetails />}
                        ></Route>
                    </Route>
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
};

export default App;
