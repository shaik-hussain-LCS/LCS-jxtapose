import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import Big from "../assets/Home/Big.gif";
import Small from "../assets/Home/Small.gif";

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white">
      {/* Logo Section */}
      <div className="cursor-pointer md:absolute pt-5 pl-5 lg:hidden flex items-center space-x-2">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-auto h-20 md:w-36 md:h-28"
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
              {/* Main Heading */}
              <div className="flex justify-between w-full">
                {["A", "JUXTAPOSITION"].map((text) => (
                  <h1
                    key={text}
                    className="text-[45px] sm:text-[55px] md:text-[70px] font-bricolage font-condensed !leading-none"
                  >
                    {text}
                  </h1>
                ))}
              </div>

              {/* <div className="w-full md:w-[calc(100%-5px)] h-14 md:h-32 border border-gray-300">
                <img src={Big}></img>
              </div> */}
              <div className="w-full md:w-[calc(100%-5px)] h-14 md:h-32">
                <img
                  src={Big}
                  alt="HomeAbout"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Subheading */}
              <div className="flex justify-between w-full">
                {["OF", "FUNCTIONALITY,"].map((text) => (
                  <h1
                    key={text}
                    className="text-[45px] sm:text-[55px] md:text-[70px] font-bricolage font-condensed !leading-none"
                  >
                    {text}
                  </h1>
                ))}
              </div>

              {/* DESIGN & AESTHETICS Section */}
              <div className="flex items-center space-x-4">
                <div className="w-3/5">
                  <h2 className="text-[45px] sm:text-[55px] md:text-[70px] font-bricolage font-condensed !leading-none">
                    DESIGN &nbsp;
                    <span className="font-alice text-[35px] sm:text-[45px] md:text-[70px] font-light">
                      &
                    </span>
                  </h2>
                  <h2 className="text-[45px] sm:text-[55px] md:text-[70px] font-bricolage font-condensed !leading-none">
                    AESTHETICS
                  </h2>
                </div>
                <div className="w-3/5 flex justify-start">
                  <div className="w-full md:w-[calc(100%-5px)] h-16 md:h-28">
                    <img
                      src={Small}
                      alt="HomeAbout"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section (Tall Rectangle) */}
            <div
              className="cursor-pointer w-full md:w-1/3 h-[calc(100%-13px)] max-sm:h-16 max-h-[440px] flex flex-col items-start justify-between border border-pink-500 px-6 py-6 relative hover:bg-[#EC1459] group"
              onClick={() => navigate("/Abha")}
            >
              <span className="absolute top-0 right-2 text-pink-500 text-3xl font-condensed font-light rotate-[315deg] group-hover:text-white">
                →
              </span>
              <span className="absolute bottom-2 left-2 text-pink-500 font-bricolage font-condensed font-light text-lg group-hover:text-white">
                FEATURED
              </span>
            </div>
          </div>
          {/* Categories Section */}
          <div className="flex flex-wrap justify-center text-gray-500 text-lg md:text-xl font-arapey font-light gap-1 md:gap-6">
            {[
              "Architecture",
              "Interior Design",
              "Branding",
              "Marketing",
              "Experiences",
            ].map((category, index) => (
              <React.Fragment key={category}>
                <span className="italic text-[16px] md:text-lg">
                  {category}
                </span>
                {index < 4 && (
                  <span className="text-yellow-500 text-xl md:text-3xl justify-center">
                    *
                  </span>
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

export default HomeScreen;
