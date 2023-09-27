import { ImLocation2 } from "react-icons/im";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsFillTelephonePlusFill } from "react-icons/bs";

const Contact = () => {
    return (
        <div className=" md:my-16 my-10">
            <h2 className="heading text-primary mb-6">
                আমাদের সাথে যোগাযোগ করুন
            </h2>
            <div className="container grid md:grid-cols-3  grid-cols-1 md:gap-10 gap-2">
                <div className="grid place-content-center p-6 rounded-md text-center">
                    <div className="flex items-center justify-center">
                        <BsFillTelephonePlusFill className="md:text-4xl text-4xl block text-center" />
                    </div>
                    <h4 className="text-gray1 md:text-2xl text-xl  ">
                        ফোন নম্বর
                    </h4>
                    <p className="text-base text-black pt-1">
                        +৮৮০১৩০৯৮৬৪৩৪৩ <br />
                        +৮৮০১৩০৯৮৬৮৯৫৪৫
                    </p>
                </div>
                <div className="grid place-content-center p-6 rounded-md text-center">
                    <div className="flex items-center justify-center">
                        <ImLocation2 className="md:text-4xl text-4xl block text-center" />
                    </div>
                    <h4 className="text-gray1 md:text-2xl text-xl  ">ঠিকানা</h4>
                    <p className="text-base text-black pt-1">
                        হাউস 200, সেন্ট্রাল রোড, ডিওএইচএস মহাখালী, ঢাকা-1206।
                    </p>
                </div>{" "}
                <div className="grid place-content-center p-6 rounded-md text-center">
                    <div className="flex items-center justify-center">
                        <HiOutlineMailOpen className="md:text-4xl text-4xl block text-center" />
                    </div>
                    <h4 className="text-gray1 md:text-2xl text-xl  ">ইমেল</h4>
                    <p className="text-base text-black pt-1">
                        example@gmail.com <br />
                        testing@gmail.com
                    </p>
                </div>
            </div>
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 container">
                <form className="lg:col-span-3">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-3">
                            <label>আপনার পূর্ণ নাম</label>
                            <input
                                type="text"
                                name="name"
                                className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                                placeholder="আপনার পূর্ণ নাম..."
                                required
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label>ইমেল</label>
                            <input
                                type="email"
                                name="photoUrl"
                                className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                                placeholder="আপনার ইমেল"
                                required
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label>আপনার ঠিকানা</label>
                            <input
                                type="text"
                                name="author"
                                className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                                placeholder="আপনার ঠিকানা..."
                                required
                            />
                        </div>

                        <div className="md:col-span-3">
                            <label>ফোন নম্বর </label>
                            <input
                                type="text"
                                name="number"
                                className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                                placeholder="ফোন নম্বর..."
                                required
                            />
                        </div>

                        <div className="md:col-span-5">
                            <label>আপনার মন্তব্য</label>
                            <div className=" border-gray-400 rounded items-center mt-1">
                                <textarea
                                    className="h-14 border mt-1 rounded px-4 pt-1 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                                    name="description"
                                    placeholder="আপনার মন্তব্য...."
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end items-end mt-3">
                        <button type="submit" className="btn-secondary">
                            জমা দিন
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
