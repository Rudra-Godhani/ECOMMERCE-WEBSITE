import React from "react";
import HeroFirst from "../../section/Home/HeroFirst";
import Banner from "../../section/Home/Banner";
import Featured from "../../section/Home/Featured";
import HeroSecond from "../../section/Home/HeroSecond";
import AdBanner from "../../section/Home/AdBanner";
import FeaturedPost from "../../section/Home/FeaturedPost";

const Home: React.FC = () => {
    return (
        <>
            <HeroFirst />
            <Banner />
            <Featured/>
            <HeroSecond />
            <AdBanner/>
            <FeaturedPost />
        </>
    );
};

export default Home;
