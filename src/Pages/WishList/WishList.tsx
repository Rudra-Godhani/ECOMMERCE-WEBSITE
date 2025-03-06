import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Home/Footer'
import FavoriteProducts from '../../components/WishList/FavoriteProducts'

const WishList: React.FC = () => {
    return (
        <>
            <Navbar />
            <FavoriteProducts />
            <Footer />
        </>
    )
}

export default WishList
