import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import First from "../assets/Build/1.gif";
import Second from "../assets/Build/2.gif";

const Build = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white">
      {/* Logo Section */}
      <div className="cursor-pointer md:absolute pt-5 pl-5 lg:hidden flex items-center space-x-2">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-20 h-16 md:w-36 md:h-28"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="h-[calc(100%-100px)] flex flex-col xl:justify-center max-sm:gap-4 w-full p-10">
        <div className="flex flex-col h-[calc(100%-120px)] max-sm:h-full w-full justify-start gap-4">
          {/* Main Content */}
          <div className="w-full max-lg:h-auto h-auto max-w-3xl mx-auto flex flex-col md:flex-row gap-2 overflow-x-visible sm:mt-5 md:mt-24 xl:mt-0">
            {/* Left Section */}
            <div className="relative w-full md:w-2/3 text-left space-y-0">
              <div className="cursor-pointer absolute -left-44 max-lg:hidden flex items-center space-x-2">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-20 h-16 md:w-36 md:h-28"
                  onClick={() => navigate("/")}
                />
              </div>
              {/* Row 1: Full Width Text */}
              <div className="flex justify-between w-full">
                <h1 className="text-[45px] sm:text-[55px] md:text-[70px] font-bricolage font-condensed !leading-none">
                  BUILDING ENVIRONMENTS
                </h1>
              </div>
              {/* Row 2: Half Text (Right Aligned) & Box */}
              <div className="flex justify-center w-full space-x-2">
                {/* Text (1/2, Right Aligned) */}
                <h1 className="text-[45px] sm:text-[55px] md:text-[70px] font-bricolage font-condensed !leading-none">
                  THAT <br /> RESONATE
                </h1>
                {/* Box (1/2) */}
                <div className="w-full md:w-[calc(100%-5px)] h-20 md:h-32">
                  <img
                    src={First}
                    alt="HomeAbout"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Row 3: Square & Text */}
              <div className="flex justify-center w-full space-x-2">
                {" "}
                {/* Square (3/4) */}
                <div className="w-full md:w-[calc(100%-5px)] h-20 md:h-28">
                  <img
                    src={Second}
                    alt="HomeAbout"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Text (1/4) */}
                <h1 className="text-[45px] sm:text-[55px] md:text-[70px] font-bricolage font-condensed !leading-none -mt-2">
                  WITH YOU.
                </h1>
              </div>
            </div>
            {/* Right Section (Tall Rectangle) */}
            <div
              className="cursor-pointer w-full md:w-1/3 h-[calc(100%-13px)] max-sm:h-16 max-h-[440px] flex flex-col items-start justify-between border border-pink-500 px-6 py-6 relative hover:bg-[#EC1459] group"
              onClick={() => navigate("/buildprojects")}
            >
              {/* Arrow Top Right */}
              <span className="absolute top-0 right-2 text-pink-500 text-3xl font-condensed font-light rotate-[315deg] group-hover:text-white">
                →
              </span>

              {/* Explore Works */}
              <span className="absolute bottom-2 left-2 text-pink-500 font-bricolage font-condensed font-light text-lg group-hover:text-white">
                EXPLORE WORKS
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center text-gray-500 text-lg md:text-xl font-arapey font-light gap-1 md:gap-6">
            {[
              "Architecture",
              "Interior Design",
              "Product Design",
              "Planning",
            ].map((category, index) => (
              <React.Fragment key={category}>
                <span className="italic text-[16px] md:text-lg">
                  {category}
                </span>{" "}
                {/* Italic added here */}
                {index < 3 && (
                  <span className="text-yellow-500 text-xl md:text-3xl">*</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* Navigation Bar */}
        <div className="w-full space-x-3">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Build;
