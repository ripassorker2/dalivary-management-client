/* eslint-disable @next/next/no-img-element */
const Calculate = () => {
    return (
        <section className="md:my-16 my-10 bg-primary py-16" id="about">
            <div className="container">
                <div>
                    <h2 className="heading text-white mb-6">খরচ ক্যালকুলেটর</h2>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 place-content-center mt-8 ">
                    <div className="md:hidden">
                        <img
                            src={
                                "https://www.reactev.com/sites/default/files/field/image/Reactev_blog_price-strategy_0.jpg"
                            }
                            alt=""
                            className="bg-contain rounded md:w-[90%] w-full max-h-[450px] m-auto "
                        />
                    </div>
                    <div className="">
                        <form className=" md:p-2 md:grid grid-cols-2 gap-x-5 ">
                            <div className="mb-3 md:col-span-2">
                                <label
                                    className="text-white text-base mb-2"
                                    htmlFor="height"
                                >
                                    উচ্চতা (সেমি)
                                </label>
                                <input
                                    type="text"
                                    name="height"
                                    className="w-full border rounded focus:outline-none focus:border-gray-500 px-5 py-2"
                                    placeholder="উচ্চতা (সেমি)... "
                                    required
                                />
                            </div>
                            <div className="mb-3 md:col-span-1">
                                <label
                                    className="text-white text-base mb-2"
                                    htmlFor="width"
                                >
                                    প্রস্থ (সেমি)
                                </label>
                                <input
                                    type="text"
                                    name="width"
                                    className="w-full border rounded focus:outline-none focus:border-gray-500 px-5 py-2"
                                    placeholder="প্রস্থ (সেমি)... "
                                    required
                                />
                            </div>
                            <div className="mb-3 md:col-span-1">
                                <label
                                    className="text-white text-base mb-2"
                                    htmlFor="depth"
                                >
                                    গভীরতা (সেমি)
                                </label>
                                <input
                                    type="text"
                                    name="depth"
                                    className="w-full border rounded focus:outline-none focus:border-gray-500 px-5 py-2"
                                    placeholder="গভীরতা (সেমি)... "
                                    required
                                />
                            </div>
                            <div className="mb-3 md:col-span-2">
                                <label
                                    className="text-white text-base mb-2"
                                    htmlFor="weight"
                                >
                                    ওজন (কেজি)
                                </label>
                                <input
                                    type="text"
                                    name="weight"
                                    className="w-full border rounded focus:outline-none focus:border-gray-500 px-5 py-2"
                                    placeholder="ওজন (কেজি)... "
                                    required
                                />
                            </div>
                            <div className="mb-3 md:col-span-1">
                                <label
                                    className="text-white text-base mb-2"
                                    htmlFor="location-from"
                                >
                                    কোন অবস্থান থেকে
                                </label>
                                <input
                                    type="text"
                                    name="location-from"
                                    className="w-full border rounded focus:outline-none focus:border-gray-500 px-5 py-2"
                                    placeholder="কোন অবস্থান থেকে ... "
                                    required
                                />
                            </div>
                            <div className="mb-3 md:col-span-1">
                                <label
                                    className="text-white text-base mb-2"
                                    htmlFor=""
                                >
                                    কোন অবস্থানে
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    className="w-full border rounded focus:outline-none focus:border-gray-500 px-5 py-2"
                                    placeholder="কোন অবস্থানে... "
                                    required
                                />
                            </div>

                            <div className=" md:col-span-2">
                                <button
                                    type="submit"
                                    className="btn-secondary w-full"
                                >
                                    ক্যালকুলেট
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="hidden md:flex items-center">
                        <img
                            src={
                                "https://www.reactev.com/sites/default/files/field/image/Reactev_blog_price-strategy_0.jpg"
                            }
                            alt=""
                            className="bg-contain rounded md:w-[90%] w-full max-h-[450px] m-auto "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculate;
