import React from "react";
import Hero from "../../section/AboutUs/Hero";
import WebsiteDetail from "../../section/AboutUs/WebsiteDetail";
import ReachesStripe from "../../section/AboutUs/ReachesStripe";
import Video from "../../section/AboutUs/Video";
import TeamDetails from "../../section/AboutUs/TeamDetails";
import TopCompanies from "../../section/AboutUs/TopCompanies";
import BrandsStrip from "../../components/BrandsStrip";
import Contact from "../../components/ContactUS/Contact";

const AboutUs: React.FC = () => {
    return (
        <>
            <Hero />
            <WebsiteDetail />
            <ReachesStripe />
            <Video />
            <TeamDetails />
            <TopCompanies />
            <BrandsStrip />
            <Contact />
        </>
    );
};

export default AboutUs;
