import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Calculate from "@/components/Calculate";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import TrackForm from "@/components/TrackForm";
import WhyUs from "@/components/WhyUs";
import React from "react";

const Home = () => {
    return (
        <div className="">
            <Banner />
            <TrackForm />
            <Services />
            <WhyUs />
            <AboutUs />
            <Calculate />
            <Contact />
        </div>
    );
};

export default Home;
