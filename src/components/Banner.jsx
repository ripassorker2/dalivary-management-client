import React from "react";

const Banner = () => {
    return (
        <div className=" bg-[url('https://redx.com.bd/images/revamp/Redx-interprise-landing.png')] w-full bg-no-repeat bg-cover py-40">
            <div className=" container">
                <div className="text-center">
                    <p className="text-white md:text-2xl text-lg mb-4">
                        {" "}
                        কোম্পানি কুরিয়ার <br /> পরিষেবায় আপনাকে স্বাগতম
                    </p>
                    <h2 className="lg:text-6xl md:text-4xl text-3xl   text-white font-semibold ">
                        দেশ সেরা{" "}
                        <span className="text-primary">এন্টারপ্রাইজ</span>{" "}
                        <br />
                        লজিস্টিকস পৌঁছাবে আপনার লক্ষ্যে
                    </h2>
                    <button className="btn-secondary mt-5">Contact us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
