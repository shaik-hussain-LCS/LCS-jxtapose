import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import First from "../assets/Social/1.gif";
import Second from "../assets/Social/2.gif";

const SocialPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-black">
      {/* Logo Section */}
      <div className="cursor-pointer md:absolute pt-5 pl-5 lg:hidden flex items-center space-x-2">
        <img
          src="/logowhite.png"
          alt="Logo"
          className="w-auto h-20 md:w-36 md:h-28"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="h-[calc(100%-100px)] flex flex-col xl:justify-center max-sm:gap-4 w-full p-10">
        <div className="flex flex-col h-[calc(100%-120px)] max-sm:h-full w-full justify-start gap-4">
          {/* Main Content */}
          <div className="w-full text-white max-lg:h-auto h-auto max-w-3xl mx-auto flex flex-col md:flex-row gap-2 overflow-x-visible sm:mt-5 md:mt-24 xl:mt-0">
            {/* Left Section */}
            <div className="relative w-full md:w-2/3 text-left space-y-0">
              <div className="cursor-pointer absolute -left-44 max-lg:hidden flex items-center space-x-2">
                <img
                  src="/logowhite.png"
                  alt="Logo"
                  className="w-20 h-16 md:w-36 md:h-28"
                  onClick={() => navigate("/")}
                />
              </div>
              {/* First Row */}
              <div className="flex justify-between w-full">
                {/* Text (1/2) */}
                <div className="w-1/2 flex flex-col items-end justify-start pr-2">
                  <h1 className="text-right text-[45px] sm:text-[55px] md:text-[70px] font-bricolage font-condensed !leading-none">
                    CRAFTING BRANDS
                  </h1>
                  <h2 className="text-right text-[45px] sm:text-[55px] md:text-[70px] font-bricolage font-condensed !leading-none">
                    <span className="font-alice sm:text-[40px] text-4xl md:text-7xl">
                      &
                    </span>
                  </h2>
                </div>

                {/* Square (1/2) */}
                <div className="w-1/2 flex justify-center items-center">
                  <div className="w-full md:w-[calc(100%-5px)] h-36 md:h-[15.5rem]">
                    <img
                      src={First}
                      alt="HomeAbout"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex items-center space-x-4">
                {/* Square (1/2) */}
                <div className="w-2/5 flex justify-center items-center">
                  <div className="w-40 md:w-60 h-20 md:h-40">
                    <img
                      src={Second}
                      alt="HomeAbout"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Text (1/2) */}
                <div className="w-3/5">
                  <h1 className="text-[45px] sm:text-[55px] md:text-[70px] font-bricolage font-condensed !leading-none">
                    NARRATING STORIES
                  </h1>
                </div>
              </div>
            </div>

            {/* Right Section (Tall Rectangle) */}
            <div
              className="cursor-pointer w-full md:w-1/3 h-[calc(100%-13px)] max-sm:h-16 max-h-[440px] flex flex-col items-start justify-between border border-pink-500 px-6 py-6 relative hover:bg-[#EC1459] group"
              onClick={() => navigate("/socialprojects")}
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

          {/* Categories */}
          <div className="flex flex-wrap justify-center text-white text-lg md:text-xl font-arapey font-light gap-1 md:gap-6">
            {[
              "Brand Identity",
              "Content Creation",
              "Packaging",
              "Websites",
              "Spatial Experiences",
            ].map((category, index) => (
              <React.Fragment key={category}>
                <span className="italic text-[16px] md:text-lg">
                  {category}
                </span>
                {index < 4 && (
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

export default SocialPage;
