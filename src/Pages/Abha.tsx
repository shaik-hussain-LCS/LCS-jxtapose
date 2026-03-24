import React from "react";

//for desktop
import Abha1_D1 from "../assets/Abha/DESKTOP ABHA-20241108T125315Z-001/DESKTOP ABHA/1.avif"
import Abha2_D1 from "../assets/Abha/DESKTOP ABHA-20241108T125315Z-001/DESKTOP ABHA/2.avif"
import Abha3_D1 from "../assets/Abha/DESKTOP ABHA-20241108T125315Z-001/DESKTOP ABHA/3.mp4"
import Abha4_D1 from "../assets/Abha/DESKTOP ABHA-20241108T125315Z-001/DESKTOP ABHA/4.avif"
import Abha5_D1 from "../assets/Abha/DESKTOP ABHA-20241108T125315Z-001/DESKTOP ABHA/5.avif"
import Abha6_D1 from "../assets/Abha/DESKTOP ABHA-20241108T125315Z-001/DESKTOP ABHA/6.mp4"
import Abha7_D1 from "../assets/Abha/DESKTOP ABHA-20241108T125315Z-001/DESKTOP ABHA/7.avif"
import Abha8_D1 from "../assets/Abha/DESKTOP ABHA-20241108T125315Z-001/DESKTOP ABHA/8.avif"
import Abha9_D1 from "../assets/Abha/DESKTOP ABHA-20241108T125315Z-001/DESKTOP ABHA/9.avif"
import Abha10_D1 from "../assets/Abha/DESKTOP ABHA-20241108T125315Z-001/DESKTOP ABHA/10.mp4"

//for tab
import Abha1_D2 from "../assets/Abha/TAB ABHA-20241108T125319Z-001/TAB ABHA/1.avif"
import Abha2_D2 from "../assets/Abha/TAB ABHA-20241108T125319Z-001/TAB ABHA/2.avif"
import Abha3_D2 from "../assets/Abha/TAB ABHA-20241108T125319Z-001/TAB ABHA/3.mp4"
import Abha4_D2 from "../assets/Abha/TAB ABHA-20241108T125319Z-001/TAB ABHA/4.avif"
import Abha5_D2 from "../assets/Abha/TAB ABHA-20241108T125319Z-001/TAB ABHA/5.avif"
import Abha6_D2 from "../assets/Abha/TAB ABHA-20241108T125319Z-001/TAB ABHA/6.mp4"
import Abha7_D2 from "../assets/Abha/TAB ABHA-20241108T125319Z-001/TAB ABHA/7.avif"
import Abha8_D2 from "../assets/Abha/TAB ABHA-20241108T125319Z-001/TAB ABHA/8.avif"
import Abha9_D2 from "../assets/Abha/TAB ABHA-20241108T125319Z-001/TAB ABHA/9.avif"
import Abha10_D2 from "../assets/Abha/TAB ABHA-20241108T125319Z-001/TAB ABHA/10.mp4"

//for mobile
import Abha1_D3 from "../assets/Abha/MOBILE ABHA-20241108T125317Z-001/MOBILE ABHA/1.avif"
import Abha2_D3 from "../assets/Abha/MOBILE ABHA-20241108T125317Z-001/MOBILE ABHA/2.avif"
import Abha3_D3 from "../assets/Abha/MOBILE ABHA-20241108T125317Z-001/MOBILE ABHA/3.mp4"
import Abha4_D3 from "../assets/Abha/MOBILE ABHA-20241108T125317Z-001/MOBILE ABHA/4.avif"
import Abha5_D3 from "../assets/Abha/MOBILE ABHA-20241108T125317Z-001/MOBILE ABHA/5.avif"
import Abha6_D3 from "../assets/Abha/MOBILE ABHA-20241108T125317Z-001/MOBILE ABHA/6.mp4"
import Abha7_D3 from "../assets/Abha/MOBILE ABHA-20241108T125317Z-001/MOBILE ABHA/7.avif"
import Abha8_D3 from "../assets/Abha/MOBILE ABHA-20241108T125317Z-001/MOBILE ABHA/8.avif"
import Abha9_D3 from "../assets/Abha/MOBILE ABHA-20241108T125317Z-001/MOBILE ABHA/9.mp4"



const Abha = () => {
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
      {/* for desktop */}
      <div className="w-full flex-col lg:flex hidden">
        <img loading="eager" src={Abha1_D1} alt="" />
        <img loading="eager" src={Abha2_D1} alt="" />
        <video loop autoPlay muted>
           <source src={Abha3_D1} type="video/mp4" />
         </video>    
        <img loading="eager" src={Abha4_D1} alt="" />
        <img loading="eager" src={Abha5_D1} alt="" />
        <video loop autoPlay muted>
           <source src={Abha6_D1} type="video/mp4" />
         </video> 
        <img loading="eager" src={Abha7_D1} alt="" />
        <img loading="eager" src={Abha8_D1} alt="" />
        <img loading="eager" src={Abha9_D1} alt="" />
        <video loop autoPlay muted>
           <source src={Abha10_D1} type="video/mp4" />
         </video> 
        </div>
       {/* for Tab */}
      <div className="w-full flex-col lg:hidden sm:flex hidden">
        <img loading="eager" src={Abha1_D2} alt="" />
        <img loading="eager" src={Abha2_D2} alt="" />
        <video loop autoPlay muted playsInline>
           <source src={Abha3_D2} type="video/mp4" />
         </video> 
        <img loading="eager" src={Abha4_D2} alt="" />
        <img loading="eager" src={Abha5_D2} alt="" />
        <video loop autoPlay muted playsInline>
           <source src={Abha6_D2} type="video/mp4" />
         </video> 
        <img loading="eager" src={Abha7_D2} alt="" />
        <img loading="eager" src={Abha8_D2} alt="" />
        <img loading="eager" src={Abha9_D2} alt="" />
        <video loop autoPlay muted playsInline>
           <source src={Abha10_D2} type="video/mp4" />
         </video> 
      </div>
       {/* for Mobile */}
      <div className="w-full flex-col sm:hidden">
        <img loading="eager" src={Abha1_D3} alt="" />
        <img loading="eager" src={Abha2_D3} alt="" />
        <video loop autoPlay muted playsInline>
           <source src={Abha3_D3} type="video/mp4" />
         </video> 
        <img loading="eager" src={Abha4_D3} alt="" />
        <img loading="eager" src={Abha5_D3} alt="" />
        <video loop autoPlay muted playsInline>
           <source src={Abha6_D3} type="video/mp4" />
         </video> 
        <img loading="eager" src={Abha7_D3} alt="" />
        <img loading="eager" src={Abha8_D3} alt="" />
        <video loop autoPlay muted playsInline>
           <source src={Abha9_D3} type="video/mp4" />
         </video> 
      </div>
    </div>
  );
};

export default Abha;
