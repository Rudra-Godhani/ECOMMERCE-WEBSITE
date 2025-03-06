import React from 'react'
import ShopCarousel from '../../components/ProductListing/ShopCarousel'
import Navbar from '../../components/Navbar/Navbar'
import Products from '../../components/ProductListing/Products'
import Footer from '../../components/Home/Footer'

const ProductListing: React.FC = () => {
    return (
        <>
            <Navbar />
            <ShopCarousel />
            <Products />
            <Footer />
        </>
    )
}

export default ProductListing
