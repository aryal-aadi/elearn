import React from "react";
import course_1 from "../pngs/course_1.webp";
import course_2 from "../pngs/course_2.webp";
import course_3 from "../pngs/course_3.webp";
import featured_author from "../pngs/featured_author.webp";
import course_author_2 from "../pngs/course_author_2.webp";
import course_author_3 from "../pngs/course_author_3.webp";
function Courses() {
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
  return (
    <>
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
              <div className="flex justify-between  w-full h-fit py-8 px-9 ">
                <ul className=" w-full h-fit  text-xs font-medium">
                  <li className="bg-orange-500 flex justify-center items-center w-24 h-8 text-sm font-Montserrat font-medium tracking-wider hover:bg-gray-700 text-white px-2 py-1">
                    {val.Featured}
                  </li>
                </ul>
                <p>Price:</p>
                <p className="text-orange-500 text-2xl">{val.Price}</p>
              </div>
              <div className="">
                <h1 className="text-2xl font-semibold px-7 py-5">
                  {val.title}
                </h1>
                <p className="py-3 text-gray-500 px-7">{val.description}</p>
              </div>
              <div className="pt-5 px-9">
                <div className="flex justify-between ">
                  <div className="flex justify-center items-center">
                    <img
                      className="h-12 w-12 object-cover rounded-full"
                      src={val.authorimage}
                      alt="featured author"
                    />
                    <p className="font-semibold pl-2 pr-1 text-gray-800">
                      {" "}
                      By{" "}
                    </p>
                    <p className="font-semibold text-gray-800 hover:text-orange-500">
                      {val.authorname}
                    </p>
                  </div>

                  <div className="flex justify-center items-center ">
                    <p>{val.no_of_sales} Sales</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Courses;
