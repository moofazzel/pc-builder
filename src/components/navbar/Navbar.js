import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import logo_white from "../../../public/logo_white.png";
import logo from "../../../public/logo.svg";

import { BiPlus, BiUser } from "react-icons/bi";
import { FaBars, FaUser, FaCaretDown } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [navCustom, setNavCustom] = useState(false);

  // side mobile menu
  const navRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    //Stop scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.cursor = "not-allowed";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.cursor = "auto";
    }

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  // side mobile menu end
  const listenScrollEvent = () => {
    window.scrollY > 20 ? setNavCustom(true) : setNavCustom(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const menuItems = (
    <>
      <Link className="navHover hover:text-main" href={"/"}>
        Home
      </Link>
      <Link className="relative group" href="#">
        <div className="navHover flex gap-[3px] items-center hover:text-main">
          Components
          <FaCaretDown className="w-2 ml-2 lg:ml-0" />
        </div>

        <div className="hidden lg:block">
          <div className="absolute top-5 w-[200px] pt-4 hidden group-hover:block bg-white shadow-md">
            <ul className="px-5 py-3 pt-1 pr-8 space-y-3 border-t-2 border-main">
              <li className="hover:text-main">Processor</li>
              <li className="hover:text-main">Motherboard</li>
              <li className="hover:text-main">RAM</li>
              <li className="hover:text-main">Power Supply</li>
              <li className="hover:text-main">Storage Device</li>
              <li className="hover:text-main">Others</li>
            </ul>
          </div>
        </div>
      </Link>

      <Link
        className="navHover flex gap-[3px] items-center hover:text-main"
        href={"#"}
      >
        About Us
      </Link>
      <Link
        className="navHover flex gap-[3px] items-center hover:text-main !border-b-0"
        href={"#"}
      >
        Contact Us
      </Link>
      <Link
        className="navHover flex gap-[3px] items-center hover:text-main"
        href={"#"}
      >
        Offers
      </Link>
    </>
  );
  return (
    <>
      {/* Navbar */}
      <div className="relative mb-28">
        <div
          className={`${navCustom ? "bg-white shadow-lg max-h-24 " : "bg-transparent h-24"
            }  w-full px-4 md:px-8 py-5 fixed top-0 z-50 transition-all duration-500 bg-white`}
        >
          <div className="container relative flex items-center justify-between">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen((oldState) => !oldState)}
              className="p-2 text-2xl text-white transition-all rounded bg-main xl:hidden hover:bg-red-600 "
            >
              <FaBars />
            </button>

            <Link href={"/"} className="flex items-center justify-center">
              <Image
                className={`${navCustom ? "hidden" : " block"}`}
                width={150}
                height={47}
                src={logo}
                alt=""
              />

              <Image
                className={`${navCustom ? "block" : "hidden"}`}
                width={150}
                height={47}
                src={logo}
                alt=""
              />
            </Link>

            <div
              className={` 
               xl:flex hidden items-center gap-6 text-[#303030]`}
            >
              <nav className="flex items-center gap-[3.5rem] text-base font-semibold">
                {menuItems}
              </nav>
            </div>

            <div className="items-center justify-between hidden gap-4 text-white lg:flex text-md">
              <div className="flex items-center justify-center gap-1 pl-5">
                <BiUser className="text-2xl" />
                <Link href={"#"} className="text-base">
                  <span title="Login">Login</span> /
                  <span title="Register">Register</span>
                </Link>
              </div>
              <button
                className={` ${navCustom && "border-2 border-main"
                  } flex gap-1.5 items-center px-[30px] py-3 rounded-full bg-white text-main  hover:bg-main hover:text-white hover:border-current transition-all duration-200`}
              >
                <span className="text-sm font-bold">PC Builder</span>
              </button>
            </div>

            {/* custom hamburger button */}

            {/* mobile menu user button */}

            <button className="text-2xl xl:hidden">
              <FaUser className={navCustom ? "fill-black" : "fill-white"} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}

        <div
          ref={navRef}
          className={` ${isMenuOpen ? "w-11/12 opacity-100" : "w-0 opacity-0"
            } fixed top-0 left-0  z-50 overflow-hidden transition-all duration-300`}
        >
          {<MobileMenu menuItems={menuItems} />}
          {/* {isMenuOpen && <MobileMenu menuItems={menuItems} />} */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
