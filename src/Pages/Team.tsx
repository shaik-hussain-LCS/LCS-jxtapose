import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

const TeamPage = () => {
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
            {/* Box and Text Section */}
            <div className="relative w-full text-left space-y-0">
              <div className="cursor-pointer absolute -left-44 max-lg:hidden flex items-center space-x-2">
                <img
                  src="/logowhite.png"
                  alt="Logo"
                  className="w-20 h-16 md:w-36 md:h-28"
                  onClick={() => navigate("/")}
                />
              </div>
              {/* Box */}
              <div className="w-full md:w-full h-44 md:h-70 border border-white"></div>
              {/* Text */}
              <h1 className="text-center text-[45px] sm:text-[55px] md:text-[70px] font-bricolage font-condensed !leading-none">
                A&nbsp; COLLECTIVE &nbsp; OF &nbsp;SKILL CREATIVITY
                &nbsp;&nbsp;&nbsp;
                <span className="font-alice sm:text-[40px] text-4xl md:text-7xl">
                  &
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp; VISION
              </h1>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center text-white text-lg md:text-xl font-arapey font-light gap-1 md:gap-6 md:pt-24">
            {["Founders", "Build", "Social", "Staff", "Zuri"].map(
              (category, index) => (
                <React.Fragment key={category}>
                  <span className="italic text-[16px] md:text-lg">
                    {category}
                  </span>{" "}
                  {index < 4 && (
                    <span className="text-yellow-500 text-xl md:text-3xl">
                      *
                    </span>
                  )}
                </React.Fragment>
              )
            )}
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

export default TeamPage;
