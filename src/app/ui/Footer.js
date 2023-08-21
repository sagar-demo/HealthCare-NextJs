"use client";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { HiPhone,    } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import {AiFillHeart} from "react-icons/ai";


import React from "react";

const FooterContent = {
  about: {
    logo: "/images/logo.svg",
    description:
      "We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.",
    cta: {
      href: "#_",
      label: "Lean more",
    },
  },
  footerLinks: [
    {
      heading: "Company",
      links: [
        {
          href: "#_",
          label: "Home",
        },
        {
          href: "#_",
          label: "How we work",
        },
        {
          href: "#_",
          label: "Our mission",
        },
        {
          href: "#_",
          label: "About",
        },
        {
          href: "#_",
          label: "Careers",
        },
        {
          href: "#_",
          label: "Contact",
        },
      ],
    },
    {
      heading: "Resources",
      links: [
        {
          href: "#_",
          label: "Blog",
        },
        {
          href: "#_",
          label: "Support",
        },
        {
          href: "#_",
          label: "Terms & Conditions",
        },
        {
          href: "#_",
          label: "Privacy Policy",
        },
      ],
    },
  ],
  contact: {
    heading: "Contact",
    description:
      "We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.",
    address: {
      street: "Nallasopara,Mumbai 401209",
      phone: "+91 1234567890",
      website: "https://google.com",
    },
  },
  copyright: {
    labelOne: "© 2023 Sagar Codes. All rights reserved.",
    labelTwo: "Designed by Sagar Codes",
  },
};

const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="block lg:flex gap-20 mb-10 pb-10">
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0" key="about">
            <Link href={"/"} className="mb-4 inline-block">
              <Image
                src={FooterContent.about.logo}
                width={157}
                height={30}
                alt="Jeofreycodes.com"
              />
            </Link>
            <p className="leading-relaxed mb-7">
              {FooterContent.about.description}
            </p>
            <p>
              <Link
                href={FooterContent.about.cta.href}
                className="flex space-x-2 outline-none items-center font-semibold text-primary group"
              >
                <span>{FooterContent.about.cta.label}</span>
                <span className="w-6 h-6 rounded-full bg-primary text-white inline-flex items-center justify-center duration-300 transition-all ease-in-out group-hover:bg-secondary">
                  <BiChevronRight className="text-lg" />
                </span>
              </Link>
            </p>
          </div>
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0"key="footerLinks">
            <div className="grid grid-cols-2 gap-10">
              {FooterContent.footerLinks.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-heading mb-5">
                    {item.heading}
                  </h3>
                  <ul className="p-0 m-0">
                    {item.links.map((link, index) => (
                      <li className="mb-3" key={index}>
                        <Link
                          href={link.href}
                          className="group-flex items-center duration-300 transition-all ease-in-out hover:text-primary"
                        >
                          <span>{link.label}</span>
                          <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:left-3">
                            <BiChevronRight className="text-xl" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-4/12 lg:w-4/12" key="contact">
          <h3 className="font-semibold text-heading mb-5">
          {FooterContent.contact.heading}
          </h3>
          <p className="leading-relaxed mb-7">
          {FooterContent.contact.description}
          </p>
            <ul >
            <li className="flex items-start space-x-3 mb-5">
            <HiLocationMarker className="text-xl text-primary" />
            <span>{FooterContent.contact.address.street}</span>
            </li>
            <li className="flex items-start space-x-3 mb-5">
            <HiPhone className="text-xl text-primary" />
            <span>{FooterContent.contact.address.phone}</span>
            </li>
            <li className="flex items-start space-x-3 mb-5">
            <MdLocationOn   className="text-xl text-primary" />
            <span>{FooterContent.contact.address.website}</span>
            </li>
            
            </ul>
          </div>
        </div>
        <div className="text-center pt-10 border-t border-gray-200" key="copyright">
        <p>
        {
            FooterContent.copyright.labelOne
        }{""}
        <AiFillHeart className="text-red-600 inline-block" />
        {FooterContent.copyright.labelTwo}
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
