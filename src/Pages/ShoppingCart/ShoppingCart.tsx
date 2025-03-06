import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Cart from '../../components/ShoppingCart/Cart'
import Footer from '../../components/Home/Footer'

const ShoppingCart: React.FC = () => {
    return (
        <>
            <Navbar />
            <Cart />
            <Footer />
        </>
    )
}

export default ShoppingCart
