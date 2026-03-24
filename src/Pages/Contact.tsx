import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-black">
      {/* Logo Section (Mobile) */}
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
          <div className="w-full text-white max-lg:h-auto h-auto max-w-3xl mx-auto flex flex-col gap-2 overflow-x-visible sm:mt-5 md:mt-24 xl:mt-0">
            {/* Left Section - Heading & Box */}
            <div className="relative w-full text-left space-y-0">
              {/* Floating Logo (Desktop) */}
              <div className="cursor-pointer absolute -left-44 max-lg:hidden flex items-center space-x-2">
                <img
                  src="/logowhite.png"
                  alt="Logo"
                  className="w-20 h-16 md:w-36 md:h-28"
                  onClick={() => navigate("/")}
                />
              </div>

              {/* Heading */}
              <h1 className="text-left text-[45px] sm:text-[55px] md:text-[70px] font-bricolage font-condensed !leading-none">
                GET
                <br />
                &nbsp;&nbsp;&nbsp; IN TOUCH,
              </h1>
            </div>
            <div className="w-full flex flex-row items-start justify-start space-x-4">
              {/* Decorative Box */}
              <div className="w-full md:w-2/3 h-32 max-md:h-20 border border-white"></div>
              {/* Right Section - Additional Text */}
              <div className="w-1/3 md:w-1/3 flex flex-col items-left max-sm:items-center md:justify-center">
                <h1 className="text-left text-[45px] sm:text-[55px] md:text-[70px] font-bricolage font-condensed !leading-none">
                  WITH
                  <br />
                  &nbsp; US
                </h1>
              </div>
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="flex flex-wrap justify-center text-white text-lg md:text-xl font-arapey font-light gap-1 xl:gap-6 xl:pt-14">
            {[
              "Phone:  +91 93461 03050",
              "EMAIL:  social@jxtapose.com, build@jxtapose.com",
              "ADDRESS:  Plot no 545, 3rd floor, Ista Elevate building, Kakatiya Hills, Hyderabad, Telangana - 500033",
            ].map((info, index) => (
              <React.Fragment key={info}>
                <span className="w-full italic text-[16px] md:text-lg max-xl:flex max-xl:border-b max-xl:border-gray-700 max-xl:py-1 max-xl:last:border-b-0 xl:w-60">
                  {info}
                </span>
                {index < 2 && (
                  <span className="text-yellow-500 text-xl md:text-3xl max-xl:hidden">
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

export default ContactPage;
