import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import { BsHouseDoor } from "react-icons/bs";

const WhyUs = () => {
    return (
        <div className="md:my-16 my-10 bg-primary py-16">
            <div className="container ">
                <h3 className="heading text-white">
                    কেন আপনি আমাদের নির্বাচন করবেন ?
                </h3>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 text-gray-100 mt-6">
                    <div className="bg-secondary grid place-content-center p-6 rounded-md text-center">
                        <div className="flex items-center justify-center">
                            <CiDeliveryTruck className="text-6xl block text-center" />
                        </div>
                        <h4 className="text-gray1 md:text-3xl text-2xl  ">
                            ডেলিভারি গ্যারান্টি
                        </h4>
                        <p className="text-base text-white pt-1">
                            মাত্র ৩ দিনে বাংলাদেশের যেকোনো প্রান্তে পার্সেল
                            ডেলিভারির নিশ্চয়তা ।
                        </p>
                    </div>
                    <div className="bg-secondary grid place-content-center p-6 rounded-md text-center">
                        <div className="flex items-center justify-center">
                            <BsHouseDoor className="text-6xl block text-center" />
                        </div>
                        <h4 className="text-gray1 md:text-3xl text-2xl  ">
                            ডোরস্টেপ পিকআপ
                        </h4>
                        <p className="text-base text-white pt-1">
                            আপনার দরজা থেকে কাঙ্ক্ষিত গন্তব্যে পার্সেল পৌঁছে
                            যাবে নির্বিঘ্নে ।
                        </p>
                    </div>
                    <div className="bg-secondary grid place-content-center p-6 rounded-md text-center">
                        <div className="flex items-center justify-center">
                            <MdOutlineSecurity className="text-6xl block text-center" />
                        </div>
                        <h4 className="text-gray1 md:text-3xl text-2xl  ">
                            সিকিউর হ্যান্ডলিং
                        </h4>
                        <p className="text-base text-white pt-1">
                            সর্বোচ্চ নিরাপদে শিপমেন্টের নিশ্চয়তা ও ক্ষতিপূরণ
                            সুবিধা ।
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
