"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { ImCancelCircle } from "react-icons/im";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="bg-white sticky -top-1 right-0 z-[99999999] shadow py-8">
            <div className="flex items-center font-medium justify-between container">
                <div className="md:w-auto w-full flex justify-between">
                    <Link href="/" className="inline-flex items-center">
                        <span className=" text-2xl  font-serif font-bold tracking-wide text-primary ">
                            কুরিয়ার
                        </span>
                    </Link>
                    <div
                        className="text-2xl md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <ImCancelCircle />
                        ) : (
                            <HiBars3 className="font-semibold" />
                        )}
                    </div>
                </div>
                <ul className="md:flex hidden  items-center gap-8 font-[Poppins]">
                    <li>
                        <Link
                            href="/"
                            className="inline-block hover:text-primary duration-300 font-semibold "
                        >
                            হোম
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className="inline-block hover:text-primary duration-300 font-semibold "
                        >
                            ড্যাশবোর্ড
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/services"
                            className="inline-block hover:text-primary duration-300 font-semibold "
                        >
                            সেবা সমূহ
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/contact"
                            className="inline-block hover:text-primary duration-300 font-semibold "
                        >
                            যোগাযোগ
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="inline-block hover:text-primary duration-300 font-semibold "
                        >
                            আমাদের সম্পর্কে
                        </Link>
                    </li>
                    <li>
                        <button className=" btn-secondary">লগিন</button>
                    </li>
                </ul>
                <div
                    className={`md:hidden bg-white fixed flex items-center justify-center w-full top-0 overflow-y-auto bottom-0 py-10 mt-7 pl-4 duration-500 -z-20 ${
                        open ? "left-0" : "left-[-100%]"
                    }
    `}
                >
                    <ul className="-mt-16 text-center">
                        <li>
                            <Link
                                href="/"
                                className="inline-block hover:text-primary duration-300 font-semibold mt-3 "
                            >
                                হোম
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="inline-block hover:text-primary duration-300 font-semibold mt-3 "
                            >
                                ড্যাশবোর্ড
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/services"
                                className="inline-block hover:text-primary duration-300 font-semibold mt-3 "
                            >
                                সেবা সমূহ
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/contact"
                                className="inline-block hover:text-primary duration-300 font-semibold mt-3 "
                            >
                                যোগাযোগ
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="inline-block hover:text-primary duration-300 font-semibold mt-3 "
                            >
                                আমাদের সম্পর্কে
                            </Link>
                        </li>
                        <li>
                            <button className=" btn-secondary mt-3 w-full block">
                                লগিন
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
