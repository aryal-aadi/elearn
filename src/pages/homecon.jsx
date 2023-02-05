import React from "react";
import index from "../pngs/index.webp";
import logo from "../pngs/logo.webp";
import feature from "../pngs/featured.webp";
import featured_author from "../pngs/featured_author.webp";
import course_1 from "../pngs/course_1.webp";
import course_2 from "../pngs/course_2.webp";
import course_3 from "../pngs/course_3.webp";
import course_author_2 from "../pngs/course_author_2.webp";
import course_author_3 from "../pngs/course_author_3.webp";
import library from "../pngs/library.jpg";
import milestones_1 from "../pngs/milestone_1.svg";
import milestones_2 from "../pngs/milestone_2.svg";
import milestones_3 from "../pngs/milestone_3.svg";
import milestones_4 from "../pngs/milestone_4.svg";
import CountUp from "react-countup";

function Homecon() {
  const homedata = [
    {
      course_image: course_1,
      Featured: "Featured",
      Price: "$35",
      title: "Online Lecture Course",
      description:
        "Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar.",
      authorimage: featured_author,
      authorname: "James S. Morrison",
      no_of_sales: "325",
    },
    {
      course_image: course_2,
      Featured: "Featured",
      Price: "$35",
      title: "Social Media Course",
      description:
        "Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar.",
      authorimage: course_author_2,
      authorname: "Mark Smith",
      no_of_sales: "325",
    },
    {
      course_image: course_3,
      Featured: "Featured",
      Price: "$35",
      title: "Marketing Course",
      description:
        "Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar.",
      authorimage: course_author_3,
      authorname: "Julia Williams",
      no_of_sales: "325",
    },
  ];
  const mdata = [
    {
      m_image: milestones_1,
      alt_image: "milestones_1",
      c_end: "1548",
      c_duration: "3",
      courses: "Online Courses",
    },
    {
      m_image: milestones_2,
      alt_image: "milestones_2",
      c_end: "7286",
      c_duration: "3",
      courses: "Students",
    },
    {
      m_image: milestones_3,
      alt_image: "milestones_3",
      c_end: "257",
      c_duration: "3",
      courses: "Teachers",
    },
    {
      m_image: milestones_4,
      alt_image: "milestones_4",
      c_end: "39",
      c_duration: "3",
      courses: "Countries",
    },
  ];
  return (
    <>
      {/* index */}
      <div>
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
              className="w-28 h-14 flex justify-center items-center"
            />
          </div>
          <div className="font-Montserrat font-extrabold py-2 text-7xl">
            <h1 className="text-center text-white hover:text-orange-500">
              Complete Online Course
            </h1>
            <br />
          </div>

          <div>
            <p className="font-Montserrat font-semibold text-white text-center">
              Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio
              eget lacus tempus pulvinar. <br></br> Praesent vel nisl fermentum,
              gravida augue ut, fermentum ipsum.
            </p>
          </div>
        </div>
        <div className=" bg-white  flex justify-center items-center w-fit h-fit top- left-48  z-10">
          <div className="w-1/2 h-fit  p-9 border-b-4 border-orange-500">
            <div className="flex">
              <ul className=" w-full h-fit gap-11 text-xs font-medium">
                <li className="bg-orange-500 flex justify-center items-center w-24 h-8 text-sm font-Montserrat font-light hover:bg-gray-700 text-white px-2 py-1">
                  Featured
                </li>
              </ul>
              <p>Price:</p>
              <p className="text-orange-500 text-2xl">$35</p>
              <br />
              <br />
            </div>
            <div>
              <h1 className="text-2xl font-semibold p-5">
                Online Lecture Course
              </h1>
              <p>
                Maecenas rutrum viverra sapien sed fermentum.
                <br /> Morbi tempor odio eget lacus tempus pulvinar.
                <br /> Donec vehicula efficitur nibh, in pretium nulla interdum
                non.
              </p>
            </div>
            <div className="pt-5">
              <div className="flex justify-between">
                <div>
                  <img
                    className="h-full w-full object-cover rounded-full"
                    src={featured_author}
                  />
                </div>
                <p className="font-bold"> By </p>
                <p className="font-bold hover:text-orange-500">
                  James S. Morrison
                </p>
                <div className="">
                  <p>325 Sales</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={feature} className="w-80 h-80" />
          </div>
        </div>
      </div>

      {/* feature */}

      {/* form */}
      <div className=" flex  flex-col justify-center items-center p-32">
        <div>
          <h1 className="text-4xl text-center text-gray-800 font-extrabold">
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
          <div className="flex justify-between w-full h-fit gap-5 ">
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
            <div className="w-full h-fit flex flex-col jsutify-center items-center">
              <ul className="flex w-full h-fit gap-0 text-xs font-medium">
                <li className="bg-orange-400 text-white flex justify-center items-center w-32 h-12 text-sm font-Montserrat font-semibold hover:bg-orange-300  px-2 py-1">
                  Search
                </li>
                <li className="bg-orange-500 text-white flex justify-center items-center w-11 h-12 text-sm font-Montserrat fonr font-semibold hover:bg-orange-400  px-2 py-1">
                  ":"
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>

      {/* courses */}

      <div className="grid grid-cols-3 gap-7 w-auto h-auto  my-5 mx-32 ">
        {homedata.map((val, i) => {
          return (
            <div
              key={i}
              className="bg-slate-200 w-full  h-fit pb-8 border-b-4 hover:border-orange-500 "
            >
              <img
                src={val.course_image}
                alt="course_1"
                className="object-top"
              />
              <div className="flex justify-between  w-full h-fit p-9 ">
                <ul className=" w-full h-fit  text-xs font-medium">
                  <li className="bg-orange-500 flex justify-center items-center w-24 h-8 text-sm font-Montserrat font-light hover:bg-gray-700 text-white px-2 py-1">
                    {val.Featured}
                  </li>
                </ul>
                <p>Price:</p>
                <p className="text-orange-500 text-2xl">{val.Price}</p>
              </div>
              <div className="">
                <h1 className="text-2xl font-semibold p-5">{val.title}</h1>
                <p className="py-3 px-4">{val.description}</p>
              </div>
              <div className="flex justify-between p-5">
                <img
                  className="h-12 w-12 object-cover rounded-full"
                  src={val.authorimage}
                />
                <div className="flex">
                  <p className="flex">
                    {" "}
                    By{"  "}
                    <p className="font-bold hover:text-orange-500">
                      {val.authorname}
                    </p>
                  </p>
                </div>
                <div className="">
                  <p>{val.no_of_sales} Sales</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* milestones */}

      <div
        className=" flex p-10"
        style={{
          position: "",
          top: "0vh",
          contain: "",
          content: "",
          width: "",
          height: "100vh",
          backgroundImage: `url(${library})`,
          backgroundSize: "80% 93%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-64 flex justify-evenly gap-52">
          {mdata.map((val, i) => {
            return (
              <div key={i}>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={val.m_image}
                    className="w-24 h-24 "
                    alt={val.alt_image}
                  />
                </div>
                <div className="pt-6 flex-col text-center">
                  <p className="text-5xl text-white font-bold">
                    <CountUp end={val.c_end} duration={val.c_duration} />
                  </p>
                  <p className="text-lg text-white pt-3">{val.courses}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* join */}
      <div className="flex flex-col justify-center items-center px-20 py-10">
        <h1 className=" py-9 text-4xl text-center font-bold text-gray-800">
          Join Our Platforms Today
        </h1>
        <p className="px-52 text-sm text-center font-bold tracking-wider text-gray-600">
          Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod
          pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem
          venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac
          tempor lorem convallis ut
        </p>
        <div className="w-full h-fit flex justify-center items-center">
          <ul className="flex w-full h-fit gap-0 text-xs font-medium">
            <li className="bg-orange-400 text-white flex justify-center items-center w-44 h-12 text-sm font-Montserrat font-semibold hover:bg-orange-300  px-2 py-1">
              REGISTER NOW
            </li>
            <li className="bg-orange-500 text-white flex justify-center items-center w-11 h-12 text-sm font-Montserrat fonr font-semibold hover:bg-orange-400  px-2 py-1">
              ":"
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Homecon;
