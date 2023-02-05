import React from "react";
import { FaGreaterThan } from "react-icons/fa";
function Join() {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-20 py-16">
        <h1 className=" py-9 text-4xl text-center font-semibold text-gray-700">
          Join Our Platforms Today
        </h1>
        <p className="px-52 text-sm text-center font-semibold tracking-wider text-gray-500">
          Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod
          pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem
          venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac
          tempor lorem convallis ut
        </p>

        <div className="flex justify-center items-center w-full h-auto gap-0 py-10 ">
          <div className="bg-orange-500 text-white flex justify-center items-center w-44 h-12 text-sm font-Montserrat font-semibold hover:bg-orange-300  px-2 py-1 cursor-pointer">
            REGISTER NOW
          </div>
          <div
            className="bg-orange-400 text-white flex justify-center items-center w-11 h-12 text-xs font-Montserrat font-semibold 
          hover:bg-orange-500  px-2 py-1 hover:text-orange-300 cursor-pointer"
          >
            <FaGreaterThan className="font-thin" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Join;
