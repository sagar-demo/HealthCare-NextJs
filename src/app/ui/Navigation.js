"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../../public/images/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { BiChevronRight } from "react-icons/bi";
const navigationMenu = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "How we work",
  },
  {
    href: "#",
    label: "Our mission",
  },
  {
    href: "#",
    label: "About",
  },
  {
    href: "#",
    label: "Contact",
  },
];

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dimension, setDiemension] = useState({
    height: typeof window!=="undefined"? window.inhherHeight:0,
    width:  typeof window!=="undefined"? window.innerWidth:0,
  });
  const toggleNav = () => setNavOpen(!navOpen);
  useEffect(() => {
    function handleResize() {
      setDiemension({
        height: typeof window !== "undefined" ? window.innerHeight : 0,
        width: typeof window !== "undefined" ? window.innerWidth : 0,
      });
      //when the window resize,we set the navOpen to false
      if (dimension.width > 768 && navOpen) {
        setNavOpen(false);
      }
    }
    if(typeof window!=="undefined"){
      window.addEventListener("resize", handleResize);
      return (_) => window.removeEventListener("resize", handleResize);
    }
   
 
},[dimension.width,navOpen]);

  return (
    <>
      <header className="py-7">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/*Logo*/}
            <div>
              <Link href="/">
                <Image src={logo} width={157} height={30} alt="FamSec Logo" />
              </Link>
            </div>
            {/*Navigation Menu*/}
            <div className="hidden lg:block">
              <ul className="flex space-x-7">
                {navigationMenu.map((item, index) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/*CTA*/}
            <div>
              <Link
                href="#"
                className="px-5 py-4 bg-primary text-white rounded-lg hidden lg:inline-block"
              >
                Get Started
              </Link>
              <button className="block lg:hidden" onClick={toggleNav}>
                <AiOutlineMenu className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/*for Mobile Menu/Device Nva Menu*/}
      <div
        className={
          navOpen
            ? "py-0 block fixed w-screen z-[9999]"
            : "py-0 hidden  fixed w-screen z-[9999]"
        }
      >
        <div
          className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"
          onClick={toggleNav}
        ></div>
        <div className="bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed">
          <div className="h-14 px-10 border-b flex items-center">
            <button className="flex items-center space-x-3" onClick={toggleNav}>
              <GrClose />
              <span>Close</span>
            </button>
          </div>
          <div className="h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
            <ul className="block mb-7">
              {navigationMenu.map((item, idx) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary"
                  >
                    {item.label}
                    <span>{item.label}</span>
                    <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                      <BiChevronRight />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
