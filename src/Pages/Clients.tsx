import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

// Importing client logos explicitly
import adika from "../assets/Clients/adika.png";
import alekhya from "../assets/Clients/alekhya.png";
import bdubs from "../assets/Clients/bdubs.png";
import beacon from "../assets/Clients/beacon.png";
import cie from "../assets/Clients/cie.png";
import colosseum from "../assets/Clients/colosseum.png";
import concu from "../assets/Clients/concu.png";
import dsr from "../assets/Clients/dsr.png";
import gullak from "../assets/Clients/gullak.png";
import hashi from "../assets/Clients/hashi.png";
import hiin from "../assets/Clients/hiin.png";
import hps from "../assets/Clients/hps.png";
import hydra from "../assets/Clients/hydra.png";
import hysea from "../assets/Clients/hysea.png";
import indukuri from "../assets/Clients/indukuri.png";
import jeeva from "../assets/Clients/jeeva.png";
import metroinfrasys from "../assets/Clients/metroinfrasys.png";
import microsoft from "../assets/Clients/microsoft.png";
import mrunalinirao from "../assets/Clients/mrunalinirao.png";
import myscape from "../assets/Clients/myscape.png";
import rwp from "../assets/Clients/rwp.png";
import samashti from "../assets/Clients/samashti.png";
import spicyvenue from "../assets/Clients/spicyvenue.png";
import star from "../assets/Clients/star.png";
import tarikita from "../assets/Clients/tarikita.png";
import tedx from "../assets/Clients/tedx.png";
import tworks from "../assets/Clients/tworks.png";

const ClientsPage = () => {
  const navigate = useNavigate();

  const clientLogos = [
    adika,
    alekhya,
    bdubs,
    beacon,
    cie,
    colosseum,
    concu,
    dsr,
    gullak,
    hashi,
    hiin,
    hps,
    hydra,
    hysea,
    indukuri,
    jeeva,
    metroinfrasys,
    microsoft,
    mrunalinirao,
    myscape,
    rwp,
    samashti,
    spicyvenue,
    star,
    tarikita,
    tedx,
    tworks,
  ];

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
          <div className="w-full max-lg:h-auto h-auto max-w-3xl mx-auto flex flex-col md:flex-row gap-2 overflow-x-scroll no-scrollbar md:overflow-x-visible sm:mt-5 md:mt-24 xl:mt-0">
            {/* Center Section */}
            <div className="relative w-full text-left space-y-0">
              <div className="cursor-pointer absolute -left-44 max-lg:hidden flex items-center space-x-2">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-20 h-16 md:w-36 md:h-28"
                  onClick={() => navigate("/")}
                />
              </div>
              {/* Logo Grid */}
              <div className="flex justify-between w-full">
                <div className="w-full h-80 sm:h-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
                  {clientLogos.map((logo, index) => (
                    <div
                      key={index}
                      className="w-15 md:w-24 aspect-square flex items-center justify-center p-4"
                    >
                      <img
                        src={logo}
                        alt={`Client Logo ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          {/* <div className="flex flex-wrap justify-center text-black text-lg md:text-xl font-arapey font-light gap-1 md:gap-6">
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
                {index < 3 && (
                  <span className="text-yellow-500 text-xl md:text-3xl">*</span>
                )}
              </React.Fragment>
            ))}
          </div> */}
        </div>
        {/* Navigation Bar */}
        <div className="w-full space-x-3">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
