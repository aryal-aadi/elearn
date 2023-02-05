import React from "react";
import { FaGreaterThan } from "react-icons/fa";

function Form() {
  return (
    <>
      <div className=" flex  flex-col justify-center items-center pt-96 p-32">
        <div>
          <h1 className="text-5xl text-center text-gray-800 font-semibold">
            Choose your Course
          </h1>
          <p className="text-center p-12 text-gray-500 text-bold">
            Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut
            euismod pellentesque imperdiet. Cras laoreet gravida lectus, at
            viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum
            interdum dui, ac tempor lorem convallis ut
          </p>
        </div>
        <form>
          <div className="flex justify-between items-center w-full h-fit gap-5 ">
            <div className="w-full h-fit flex-col justify-center items-center">
              <input
                className="  appearance-none w-96 h-12 bg-gray-200 hover:border-b-2 hover:border-orange-600 text-black mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:italic placeholder:text-sm"
                placeholder="Course"
              />
            </div>
            <div className="w-full h-fit flex flex-col justify-center items-center ">
              <input
                className=" appearance-none w-96 h-12 bg-gray-200 hover:border-b-2 hover:border-orange-600 text-black mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:italic placeholder:text-sm"
                placeholder="Level"
              />
            </div>
            <div className="flex justify-center items-center pl-8 w-full h-auto gap-0 py-10 ">
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
        </form>
      </div>
    </>
  );
}

export default Form;
