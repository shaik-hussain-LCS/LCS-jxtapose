import React from "react";
// for desktop
import Buckspeak1_D1 from "../assets/Buckspeak/Desktop/1-Desktop.avif";
import Buckspeak2_D1 from "../assets/Buckspeak/Desktop/2-Desktop.gif";
import Buckspeak3_D1 from "../assets/Buckspeak/Desktop/3-Desktop.gif";
import Buckspeak4_D1 from "../assets/Buckspeak/Desktop/4-Desktop.gif";
import Buckspeak5_D1 from "../assets/Buckspeak/Desktop/5-Desktop.avif";
import Buckspeak6_D1 from "../assets/Buckspeak/Desktop/6-Desktop.avif";
import Buckspeak7_D1 from "../assets/Buckspeak/Desktop/7-Desktop.gif";
import Buckspeak8_D1 from "../assets/Buckspeak/Desktop/8-Desktop.avif";
import Buckspeak9_D1 from "../assets/Buckspeak/Desktop/9-Desktop.gif";
//for tab
import Buckspeak1_D2 from "../assets/Buckspeak/Tab/1-Tab.avif";
import Buckspeak2_D2 from "../assets/Buckspeak/Tab/2-Tab.gif";
import Buckspeak3_D2 from "../assets/Buckspeak/Tab/3-Tab.avif";
import Buckspeak4_D2 from "../assets/Buckspeak/Tab/4-Tab.gif";
import Buckspeak5_D2 from "../assets/Buckspeak/Tab/5-Tab.avif";
import Buckspeak6_D2 from "../assets/Buckspeak/Tab/6-Tab.avif";
import Buckspeak7_D2 from "../assets/Buckspeak/Tab/7-Tab.gif";
import Buckspeak8_D2 from "../assets/Buckspeak/Tab/8-Tab.avif";
import Buckspeak9_D2 from "../assets/Buckspeak/Tab/9-Tab.gif";
//mobile
import Buckspeak1_M from "../assets/Buckspeak/Phone/1-Mobile.avif";
import Buckspeak2_M from "../assets/Buckspeak/Phone/2-Mobile.gif";
import Buckspeak3_M from "../assets/Buckspeak/Phone/3-Mobile.gif";
import Buckspeak4_M from "../assets/Buckspeak/Phone/4-Mobile.gif";
import Buckspeak5_M from "../assets/Buckspeak/Phone/5-Mobile.avif";
import Buckspeak6_M from "../assets/Buckspeak/Phone/6-Mobile.avif";
import Buckspeak7_M from "../assets/Buckspeak/Phone/7-Mobile.gif";
import Buckspeak8_M from "../assets/Buckspeak/Phone/8-Mobile.avif";
import Buckspeak9_M from "../assets/Buckspeak/Phone/9-Mobile.gif";
const BuckSpeak = () => {
  return (
    <div className="w-screen h-screen hide overflow-y-scroll relative">
      <div className=" sticky z-20 top-0 left-10">
        <a
          href="/social"
          className=" absolute top-10 left-10   w-20 text-center bg-blend-luminosity transition-all duration-200 hover:scale-105 bg-white hover:font-bold cursor-pointer px-3 py-2 rounded-full shadow shadow-black"
        >
          {" "}
          HOME{" "}
        </a>
      </div>
      <div className=" w-full hidden flex-col lg:flex  ">
        <img loading="eager" src={Buckspeak1_D1} alt="" />
        <img loading="eager" src={Buckspeak2_D1} alt="" />
        <img loading="eager" src={Buckspeak3_D1} alt="" />
        <img loading="eager" src={Buckspeak4_D1} alt="" />
        <img loading="eager" src={Buckspeak5_D1} alt="" />
        <img loading="eager" src={Buckspeak6_D1} alt="" />
        <img loading="eager" src={Buckspeak7_D1} alt="" />
        <img loading="eager" src={Buckspeak8_D1} alt="" />
        <img loading="eager" src={Buckspeak9_D1} alt="" />
      </div>
      <div className=" w-full lg:hidden flex-col sm:flex hidden ">
        <img loading="eager" src={Buckspeak1_D2} alt="" />
        <img loading="eager" src={Buckspeak2_D2} alt="" />
        <img loading="eager" src={Buckspeak3_D2} alt="" />
        <img loading="eager" src={Buckspeak4_D2} alt="" />
        <img loading="eager" src={Buckspeak5_D2} alt="" />
        <img loading="eager" src={Buckspeak6_D2} alt="" />
        <img loading="eager" src={Buckspeak7_D2} alt="" />
        <img loading="eager" src={Buckspeak8_D2} alt="" />
        <img loading="eager" src={Buckspeak9_D2} alt="" />
      </div>
      <div className=" w-full hidden flex-col max-sm:flex  ">
        <img loading="eager" src={Buckspeak1_M} alt="" />
        <img loading="eager" src={Buckspeak2_M} alt="" />
        <img loading="eager" src={Buckspeak3_M} alt="" />
        <img loading="eager" src={Buckspeak4_M} alt="" />
        <img loading="eager" src={Buckspeak5_M} alt="" />
        <img loading="eager" src={Buckspeak6_M} alt="" />
        <img loading="eager" src={Buckspeak7_M} alt="" />
        <img loading="eager" src={Buckspeak8_M} alt="" />
        <img loading="eager" src={Buckspeak9_M} alt="" />
      </div>
    </div>
  );
};

export default BuckSpeak;
