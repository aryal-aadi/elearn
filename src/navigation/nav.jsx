import React from "react";
import logo from "../pngs/logo.webp";
import { GrFormSearch } from "react-icons/gr";
function Nav() {
  return (
    <div className="  w-screen h-fit ">
      <div className="bg-egray w-full h-fit flex justify-between py-4 px-44 ">
        <div className="flex w-full h-fit gap-10 bg-transparent text-sm  font-semibold text-gray-500 px-2 py-1">
          <p>HAVE ANY QUESTIONS?</p>
          <p>(009) 35475 6688933 32</p>
          <p>info@elaerntemplate.com</p>
        </div>
        <div className="w-auto h-auto flex flex-row justify-end items-center hover:text-orange-500">
          <p className="bg-transparent text-sm tracking-wider font-medium subpixel-antialiased text-white hover:text-orange-500">
            REGISTER{" "}
          </p>
          <p className="bg-transparent text-xs tracking-wider px-1 font-medium text-white">
            {" "}
            /{" "}
          </p>
          <p className="bg-transparent text-sm tracking-wider font-medium antialiased  text-white hover:text-orange-500">
            {" "}
            LOGIN
          </p>
        </div>
      </div>

      <div className="sticky top-0 w-full h-fit z-50 flex justify-start py-7 px-44 bg-white">
        <div className="w-full flex items-end  ">
          <img src={logo} className="w-14 h-7 cursor-pointer" alt="logo" />
          <p className="font-Montserrat h-6 font-bold text-lg text-gray-700 cursor-pointer">
            LEARN
          </p>
        </div>
        <div className="flex justify-centers pl-96">
          <ul className="flex w-full h-fit gap-11 text-xs font-medium">
            <li className="bg-transparent flex justify-center items-center w-24 h-8 text-sm font-Montserrat font-semibold tracking-wide hover:bg-orange-500 cursor-pointer hover:text-white px-2 py-1">
              HOME
            </li>
            <li className="bg-transparent flex justify-center items-center w-28 h-8 text-sm font-Montserrat font-semibold tracking-wide hover:bg-orange-500 cursor-pointer hover:text-white px-2 py-1 ">
              ABOUT US
            </li>
            <li className="bg-transparent flex justify-center items-center w-24 h-8 text-sm font-Montserrat font-semibold tracking-wide hover:bg-orange-500 cursor-pointer hover:text-white px-2 py-1 ">
              COURSES
            </li>
            <li className="bg-transparent flex justify-center items-center w-24 h-8 text-sm font-Montserrat font-semibold tracking-wide hover:bg-orange-500 cursor-pointer hover:text-white px-2 py-1 ">
              NEWS
            </li>
            <li className="bg-transparent flex justify-center items-center w-28 h-8 text-sm font-Montserrat font-semibold tracking-wide hover:bg-orange-500 cursor-pointer hover:text-white px-2 py-1 ">
              CONTACTS
            </li>
          </ul>
        </div>
        <div className="w-full text-3xl flex justify-end ">
          <GrFormSearch className="text-gray-900 cursor-pointer hover:text-orange-400" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
