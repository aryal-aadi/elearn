import React from "react";
import library from "../pngs/library.jpg";
import milestones_1 from "../pngs/milestone_1.svg";
import milestones_2 from "../pngs/milestone_2.svg";
import milestones_3 from "../pngs/milestone_3.svg";
import milestones_4 from "../pngs/milestone_4.svg";
import CountUp from "react-countup";

function Mstones() {
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
                  <p className="text-5xl tracking-wide text-white font-semibold">
                    <CountUp end={val.c_end} duration={val.c_duration} />
                  </p>
                  <p className="text-xl font-medium text-white pt-4">
                    {val.courses}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Mstones;
