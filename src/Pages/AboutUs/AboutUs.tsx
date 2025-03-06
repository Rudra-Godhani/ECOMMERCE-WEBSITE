import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/AboutUs/Hero'
import WebsiteDetail from '../../components/AboutUs/WebsiteDetail'
import ReachesStripe from '../../components/AboutUs/ReachesStripe'
import Video from '../../components/AboutUs/Video'
import TeamDetails from '../../components/AboutUs/TeamDetails'
import TopCompanies from '../../components/AboutUs/TopCompanies'
import BrandsStrip from '../../components/ProductDetails/BrandsStrip'
import Contact from '../../components/ContactUS/Contact'
import Footer from '../../components/Home/Footer'


const AboutUs: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <WebsiteDetail />
            <ReachesStripe />
            <Video />
            <TeamDetails />
            <TopCompanies />
            <BrandsStrip />
            <Contact />
            <Footer />
        </>
    )
}

export default AboutUs
