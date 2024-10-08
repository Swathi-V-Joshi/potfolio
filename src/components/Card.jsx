import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Card({ children }) {
  return (
    <>
      <div className="flex flex-wrap justify-evenly my-5 py-20 rounded-3xl">
        {children.map((icon, index) => (
          <div
            key={index}
            className="relative w-96 h-96 my-5 ml-3 rounded-2xl bg-white shadow-lg group"
            data-aos="zoom-in"
          >
            <div className=" relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="bg-[#a7adc497] absolute inset-0 flex flex-col justify-between px-10 py-10 bg-white rounded-2xl shadow-lg [backface-visibility:hidden]">
                <div className="text-center font-hanuman text-lg text-slate-900 font-bold">
                  {icon.name}
                </div>
                <div
                  className="h-full w-full  bg-no-repeat bg-center shadow-lg shadow-slate-600 rounded-3xl bg-white"
                  style={{
                    backgroundImage: `url(${icon.url})`,
                    backgroundSize: "contain",
                  }}
                ></div>
              </div>

              {/* Back side (description) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-10 py-10 bg-white text-slate-900 text-lg font-bold rounded-2xl shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h2 className="mb-4 text-2xl">Description</h2> {/* Heading */}
                <div className="text-center text-sm font-normal">
                  {icon.discription}
                </div>{" "}
                {/* Actual description */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
