/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const AboutUs = () => {
    return (
        <section className="md:my-16 my-10 " id="about">
            <div className="container">
                <div>
                    <h2 className="heading text-primary mb-6">
                        আমাদের সম্পর্কে জানেন
                    </h2>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 place-content-center mt-8 ">
                    <div>
                        <img
                            src={
                                "https://st2.depositphotos.com/3591429/6006/i/450/depositphotos_60063963-stock-photo-people-discussing-about-us.jpg"
                            }
                            alt=""
                            className="bg-contain rounded md:w-[90%] w-full max-h-[450px] "
                        />
                    </div>
                    <div className="flex items-center justify-center ">
                        <div className=" md:p-2 rounded-sm ">
                            <p className="mt-6 mb-5 desc md:pr-4">
                                AJR কুরিয়ার এবং পার্সেল সার্ভিস হল একটি
                                পূর্ণ-পরিষেবা লজিস্টিক অপারেটর, 9 বছরের
                                অভিজ্ঞতার সাথে চীন থেকে বাংলাদেশ পর্যন্ত
                                ক্রস-বর্ডার ই-কমার্স লজিস্টিকসে বিশেষীকরণ করে,
                                আমরা রাখি “গ্রাহকের ইচ্ছা কী তা বিবেচনা করুন,
                                গ্রাহকের চাহিদা কী, তা সমাধান করুন। গ্রাহকের
                                বিভ্রান্তি কাজের মনোভাব, গ্রাহককে সেরা অনুভূতি
                                এবং পরিষেবা দেওয়ার জন্য আমাদের যথাসাধ্য চেষ্টা
                                করুন। AJR কুরিয়ার এবং পার্সেল সার্ভিস হল একটি
                                পূর্ণ-পরিষেবা লজিস্টিক অপারেটর, 9 বছরের
                                অভিজ্ঞতার সাথে চীন থেকে বাংলাদেশ পর্যন্ত
                                ক্রস-বর্ডার ই-কমার্স লজিস্টিকসে বিশেষীকরণ করে,
                                আমরা রাখি “গ্রাহকের ইচ্ছা কী তা বিবেচনা করুন,
                                গ্রাহকের চাহিদা কী, তা সমাধান করুন। গ্রাহকের
                                বিভ্রান্তি কাজের মনোভাব, গ্রাহককে সেরা অনুভূতি
                                এবং পরিষেবা দেওয়ার জন্য আমাদের যথাসাধ্য চেষ্টা
                                করুন।
                            </p>

                            <div className="flex flex-col space-y-4 sm:flex-row  md:justify-start">
                                <Link href={"/contact"}>
                                    <button className="btn-primary">
                                        যোগাযোগ করুন
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
