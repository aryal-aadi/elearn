import React from "react";
import index from "../pngs/index.webp";
import logo from "../pngs/logo.webp";
import feature from "../pngs/featured.webp";
import featured_author from "../pngs/featured_author.webp";

function Index() {
  return (
    <>
      {/* index */}
      <div className="flex justify-center items-center">
        <div
          className=" bg-center w-screen h-screen flex flex-col justify-center items-center"
          style={{
            // position: "relative",
            top: "0vh",
            contain: "",
            content: "",
            height: "100vh",
            backgroundImage: `url(${index})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="">
            <img
              src={logo}
              className="w-36 h-18 flex justify-center items-center"
              alt="logo"
            />
          </div>
          <div className="font-Montserrat font-semibold py-7 text-8xl">
            <h1 className="text-center text-white hover:text-orange-500">
              Complete Online Course
            </h1>
          </div>

          <div>
            <p className="font-Montserrat font-medium text-lg text-white text-center">
              Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio
              eget lacus tempus pulvinar. <br></br> Praesent vel nisl fermentum,
              gravida augue ut, fermentum ipsum.
            </p>
          </div>
        </div>
        {/* feature */}
        <div className="absolute bg-white border-y-4 border-orange-500 flex justify-center items-center w-1/2 h-1/2 top-full left-0 right-0 mx-auto  z-10">
          <div className="w-1/2 h-full py-9 px-9   ">
            <div className="flex justify-center items-center">
              <ul className=" w-full h-fit  text-xs font-medium">
                <li className="bg-orange-500 flex justify-center items-center w-24 h-8 text-sm font-Montserrat font-medium tracking-wider hover:bg-gray-700 text-white  py-1">
                  Featured
                </li>
              </ul>
              <p>Price:</p>
              <p className="text-orange-500 text-xl ">$35</p>
              <br />
              <br />
            </div>
            <div>
              <p className="text-2xl font-semibold tracking-wide pt-9 pb-5 text-gray-800 hover:text-orange-500">
                Online Lecture Course
              </p>

              <p className="text-gray-700 text-base">
                Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio
                eget lacus tempus pulvinar. Donec vehicula efficitur nibh, in
                pretium nulla interdum non.
              </p>
              <br />
            </div>
            <div className="pt-5">
              <div className="flex justify-between ">
                <div className="flex justify-center items-center">
                  <img
                    className="h-11 w-11 object-cover rounded-full"
                    src={featured_author}
                    alt="featured author"
                  />
                  <p className="font-semibold pl-2 pr-1 text-gray-800"> By </p>
                  <p className="font-semibold text-gray-800 hover:text-orange-500">
                    James S. Morrison
                  </p>
                </div>

                <div className="flex justify-center items-center ">
                  <p>325 Sales</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-fit">
            <img src={feature} className="w-fit h-fit" alt="feature" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
