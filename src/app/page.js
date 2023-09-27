import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import TrackForm from "@/components/TrackForm";
import WhyUs from "@/components/WhyUs";
import React from "react";

const Home = () => {
    return (
        <div className="">
            <Navbar />
            <Banner />
            <TrackForm />
            <Services />
            <WhyUs />
            <Footer />
        </div>
    );
};

export default Home;
