import React from 'react'
import { Box } from '@mui/material'
import image1 from "../../assets/images/Banner/edi-1.svg"
import Navbar from '../../components/Navbar/Navbar'
import HeroFirst from '../../components/Home/HeroFirst'
import Banner from '../../components/Home/Banner'
import Featured from '../../components/Home/Featured'
import HeroSecond from '../../components/Home/HeroSecond'
import AdBanner from '../../components/Home/AdBanner'
import FeaturedPost from '../../components/Home/FeaturedPost'
import Footer from '../../components/Home/Footer'

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <HeroFirst />
            <Banner />
            <Featured />
            <HeroSecond />
            <AdBanner />
            <FeaturedPost />
            <Footer />
        </>
    )
}

export default Home