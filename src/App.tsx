import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import SignUp from "./Pages/SignUp/SignUp";
import ProductDetails from "./Pages/ProductDetail/ProductDetails";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import Login from "./Pages/Login/Login";
import ProductListing from "./Pages/ProductListing/ProductListing";
import Error from "./Pages/Error/Error";
import WishList from "./Pages/WishList/WishList";
import Profile from "./Pages/Profile/Profile";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/google" element={<Home />}></Route>
                <Route path="/trending" element={<Home />}></Route>
                <Route path="/new" element={<Home />}></Route>
                <Route path="/contact-us" element={<ContactUs />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route
                    path="/product/:id/detail"
                    element={<ProductDetails />}
                ></Route>
                <Route path="/about-us" element={<AboutUs />}></Route>
                <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
                <Route path="/wishlist" element={<WishList />}></Route>
                <Route
                    path="/product/listing"
                    element={<ProductListing />}
                ></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/*" element={<Error />}></Route>
            </Routes>
        </>
    );
}

export default App;
