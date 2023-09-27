/* eslint-disable @next/next/no-img-element */
import React from "react";

const Services = () => {
    return (
        <div className="md:my-16 my-10">
            <div className="container">
                <h2 className="heading text-primary mb-6">আমাদের সেবা সমূহ </h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                    <div className=" hover:shadow-lg  hover:border-gray-300 duration-500 border-2  relative overflow-hidden rounded-lg shadow">
                        <div className="relative pt-5 px-5 flex items-center justify-center">
                            <img
                                className="rounded w-full h-60"
                                src="https://redx.com.bd/images/provide-services/parcel-delivery.webp"
                                alt=""
                            />
                        </div>
                        <div className="text-gray-900 px-5 pb-6 mt-2">
                            <div className="flex justify-between">
                                <span className="block font-semibold opacity-100 text-primary mb-1 text-lg ">
                                    পার্সেল ডেলিভারি
                                </span>
                            </div>
                            <p>
                                ব্যক্তিগত, ছোট ব্যবসা এবং কর্পোরেটদের জন্য
                                ফার্স্ট-মাইল পিকআপ এবং লাস্ট মাইল ডেলিভারি সেবা
                            </p>
                        </div>
                    </div>

                    <div className=" hover:shadow-lg  hover:border-gray-300 duration-500 border-2  relative overflow-hidden rounded-lg shadow">
                        <div className="relative pt-5 px-5 flex items-center justify-center">
                            <img
                                className="rounded w-full h-60"
                                src="https://redx.com.bd/images/provide-services/parcel-delivery.webp"
                                alt=""
                            />
                        </div>
                        <div className="text-gray-900 px-5 pb-6 mt-2">
                            <div className="flex justify-between">
                                <span className="block font-semibold opacity-100 text-primary mb-1 text-lg ">
                                    বাল্ক শিপমেন্ট
                                </span>
                            </div>
                            <p>
                                বড় আইটেম এবং বড় সংখ্যক ডেলিভারির বিশেষ সমাধান
                            </p>
                        </div>
                    </div>

                    <div className=" hover:shadow-lg  hover:border-gray-300 duration-500 border-2  relative overflow-hidden rounded-lg shadow">
                        <div className="relative pt-5 px-5 flex items-center justify-center">
                            <img
                                className="rounded w-full h-60"
                                src="https://redx.com.bd/images/provide-services/parcel-delivery.webp"
                                alt=""
                            />
                        </div>
                        <div className="text-gray-900 px-5 pb-6 mt-2">
                            <div className="flex justify-between">
                                <span className="block font-semibold opacity-100 text-primary mb-1 text-lg ">
                                    লাইন হল
                                </span>
                            </div>
                            <p>
                                এফটিএল (পুরো ট্রাকলোড) ও এলটিএল (আংশিক ট্রাকলোড)
                                সহ মালামাল পরিবহনের সকল সমাধান
                            </p>
                        </div>
                    </div>

                    <div className=" hover:shadow-lg  hover:border-gray-300 duration-500 border-2  relative overflow-hidden rounded-lg shadow">
                        <div className="relative pt-5 px-5 flex items-center justify-center">
                            <img
                                className="rounded w-full h-60"
                                src="https://redx.com.bd/images/provide-services/parcel-delivery.webp"
                                alt=""
                            />
                        </div>
                        <div className="text-gray-900 px-5 pb-6 mt-2">
                            <div className="flex justify-between">
                                <span className="block font-semibold opacity-100 text-primary mb-1 text-lg ">
                                    লজিস্টিকস সেবা
                                </span>
                            </div>
                            <p>
                                লজিস্টিকস সংক্রান্ত যে কোন সমস্যার সমাধানে
                                অভিজ্ঞ টিমের সহায়তা
                            </p>
                        </div>
                    </div>

                    <div className=" hover:shadow-lg  hover:border-gray-300 duration-500 border-2  relative overflow-hidden rounded-lg shadow">
                        <div className="relative pt-5 px-5 flex items-center justify-center">
                            <img
                                className="rounded w-full h-60"
                                src="https://redx.com.bd/images/provide-services/parcel-delivery.webp"
                                alt=""
                            />
                        </div>
                        <div className="text-gray-900 px-5 pb-6 mt-2">
                            <div className="flex justify-between">
                                <span className="block font-semibold opacity-100 text-primary mb-1 text-lg ">
                                    ট্রাক ভাড়া
                                </span>
                            </div>
                            <p>
                                খোলা ট্রাক এবং কাভার্ড ভ্যান দেশের যে কোন
                                জায়গায় যে কোন সময়
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
