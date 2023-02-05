import React from "react";
import logo from "../pngs/logo.webp";
import { FaGooglePlusG } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
function Footer() {
  const fdata = [
    {
      title: "Quick Menus",
      content1: "Home",
      content2: "About Us",
      content3: "Testimonials",
      content4: "Services",
      content5: "Contact",
      content6: "Facts",
    },
    {
      title: "Useful Links",
      content1: "Courses",
      content2: "Events",
      content3: "Teachers",
      content4: "Links",
      content5: "FAQ",
      content6: "News",
    },
  ];
  return (
    <>
      <div className="flex justify-evenly gap-3 px-44 py-28 bg-slate-100 w-full h-auto">
        <div className=" w-1/4 ">
          <div className="w-full flex items-end py-5">
            <img src={logo} className="w-16 h-8" alt="logo" />
            <p className="font-Montserrat h-5 font-bold text-xl text-gray-700">
              LEARN
            </p>
          </div>
          <div>
            <p className="text-gray-600 py-5">
              Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio
              eget lacus tempus pulvinar.
            </p>
            <div className=" text-orange-500 flex justify-start items-center gap-8">
              <FaGooglePlusG className="text-2xl cursor-pointer hover:text-orange-400" />
              <BsPinterest className="text-xl cursor-pointer hover:text-orange-400" />
              <FaFacebookF className="text-xl cursor-pointer hover:text-orange-400" />
              <AiOutlineTwitter className="text-2xl cursor-pointer hover:text-orange-400" />
            </div>
          </div>
          <div className="bottom-0 pt-10">
            <p className="text-gray-400 text-xs">
              Copyright ©2023 All rights reserved | This template is made with
              by{" "}
              <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                Colorlib
              </span>
            </p>
          </div>
        </div>
        <div className="w-3/4 flex justify-evenly">
          {fdata.map((val, i) => {
            return (
              <div key={i}>
                <p className="font-semibold text-2xl py-5 ">{val.title}</p>
                <p className="font-base text-gray-600 text-base py-2 cursor-pointer hover:text-orange-400">
                  {" "}
                  {val.content1}
                </p>
                <p className="font-base text-gray-600 text-base py-2 cursor-pointer hover:text-orange-400">
                  {val.content2}
                </p>
                <p className="font-base text-gray-600 text-base py-2 cursor-pointer hover:text-orange-400">
                  {val.content3}
                </p>
                <p className="font-base text-gray-600 text-base py-2 cursor-pointer hover:text-orange-400">
                  {val.content4}
                </p>
                <p className="font-base text-gray-600 text-base py-2 cursor-pointer hover:text-orange-400">
                  {val.content5}
                </p>
                <p className="font-base text-gray-600 text-base py-2 cursor-pointer hover:text-orange-400">
                  {val.content6}
                </p>
              </div>
            );
          })}

          <div>
            <p className="font-bold text-2xl py-5">Contact Us</p>
            <div className="pb-5">
              <p className="font-bold text-base text-orange-500 pt-2">
                Address:
              </p>
              <p className=" text-gray-600">1481 Creekside Lane Avila </p>
              <p className="text-gray-600">Beach, CA 93424</p>
            </div>
            <div className="pb-4">
              <p className="font-bold  text-orange-500 pt-2">Phones:</p>
              <p className="text-gray-600">+53 345 7953 32453</p>
            </div>
            <div>
              <p className="font-bold  text-orange-500 pt-3">Emails:</p>
              <p className="text-gray-600">yourmail@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
