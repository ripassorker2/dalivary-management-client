import React from "react";

const TrackForm = () => {
    return (
        <div className="mb-32 -mt-20">
            <div className="container ">
                <div className="bg-primary rounded md:w-[70%] mx-auto shadow px-7 py-14 flex justify-center items-center flex-col">
                    <h2 className="text-white mb-2 text-lg">
                        মুভমেন্ট স্ট্যাটাস ট্র্যাক করুন
                    </h2>
                    <input
                        type="text"
                        name="parcelId"
                        className="md:w-[45%] border rounded focus:outline-none focus:border-gray-500 px-5 py-2"
                        placeholder="পার্সেল  আইডি  দিন "
                    />
                    <div>
                        <button className="btn-secondary mt-3">
                            ট্র্যাক করুন{" "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackForm;
