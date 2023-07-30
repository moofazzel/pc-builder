import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import logo from "../../../public/logo.svg";

import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa"
import Link from "next/link";

const Footer = () => {
    return (
        <div className="p-4 border-t border-t-gray-200 ">
            <div className="container mx-auto mt-10 ">
                <div className="items-center justify-between mt-4 mb-10 md:flex">
                    <div className="w-3/5 md:w-2/5 lg:w-1/5">
                        <img src={logo} alt="" className="w-full" />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 pb-3 mt-10 border-b md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-b-gray-300">
                    <div>
                        <span className="mb-3 text-xl font-bold text-black">ABOUT US</span>
                        <br />
                        <Link href="#" className="block mt-2 duration-300 link link-hover hover:pl-3 ">
                            Branding
                        </Link>

                        <Link href="#" className="block mt-2 duration-300 link link-hover hover:pl-3 ">
                            Design
                        </Link>
                        <Link href="#" className="block mt-2 duration-300 link link-hover hover:pl-3 ">
                            Marketing
                        </Link>
                        <Link href="#" className="block mt-2 duration-300 link link-hover hover:pl-3 ">
                            Advertisement
                        </Link>
                    </div>
                    <div>
                        <span className="mb-3 text-xl font-bold text-black">ORDERS AND RETURNS </span>
                        <Link href="#" className="block mt-2 duration-300 link link-hover hover:pl-3 ">
                            About us
                        </Link>
                        <Link href="#" className="block mt-2 duration-300 link link-hover hover:pl-3 ">
                            Contact
                        </Link>
                        <Link href="#" className="block mt-2 duration-300 link link-hover hover:pl-3 ">
                            Jobs
                        </Link>
                        <Link href="#" className="block mt-2 duration-300 link link-hover hover:pl-3 ">
                            Press kit
                        </Link>
                    </div>
                    <div>
                        <span className="mb-3 text-xl font-bold text-black">MY ACCOUNT</span>
                        <Link href="#" className="block mt-2 duration-300 link link-hover hover:pl-3 ">
                            Terms of use
                        </Link>
                        <Link href="#" className="block mt-2 duration-300 link link-hover hover:pl-3 ">
                            Privacy policy
                        </Link>
                        <Link href="#" className="block mt-2 duration-300 link link-hover hover:pl-3 ">
                            Cookie policy
                        </Link>
                    </div>
                    <div>
                        {/* <span className="">NEWSLETTER</span> */}
                        <div className="mt-3 text-base md:mt-0">
                            <h4 className="mb-3 text-xl font-bold text-black uppercase">Our Contact Info</h4>
                            <p className="mb-2">
                                Phone:{" "}
                                <span className="text-base font-semibold md:text-lg">+123-456-789</span>
                            </p>
                            <p>
                                Email:{" "}
                                <span className="font-semibold">demo@gmail.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container flex flex-col items-center justify-between mx-auto mt-6 mb-3 md:flex-row">
                <p className="mb-3 md:mb-0">Copyright Ⓒ  2025.</p>
                <div className="flex flex-row-reverse items-center gap-4 mr-5">
                    <div className="flex items-center gap-3 text-3xl md:gap-5">
                        <FaCcVisa />
                        <FaCcMastercard />
                        <FaCcPaypal />
                    </div>
                    <Link href="/" className="text-lg font-semibold">
                        <GrFacebookOption />
                    </Link>
                    <Link href="/" className="text-lg font-semibold">
                        <BsTwitter />
                    </Link>
                    <Link href="/" className="text-lg font-semibold">
                        <AiOutlineInstagram />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;