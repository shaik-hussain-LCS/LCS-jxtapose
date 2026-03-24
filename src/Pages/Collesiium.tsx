import React from "react";
import Collesiium1_D1 from "../assets/Creatives and Videos/Web/1-Cover.mp4";
import Collesiium2_D1 from "../assets/Creatives and Videos/Web/2- Reel.mp4";
import Collesiium3_D1 from "../assets/Creatives and Videos/Web/3-Text.avif";
import Collesiium4_D1 from "../assets/Creatives and Videos/Web/4- Carousel-Web.mp4";
import Collesiium5_D1 from "../assets/Creatives and Videos/Web/5- Slow Pan video Web.mp4";
import Collesiium6_D1 from "../assets/Creatives and Videos/Web/6- Styling Web.avif";
import Collesiium7_D1 from "../assets/Creatives and Videos/Web/7-Styling.mp4";
import Collesiium8_D1 from "../assets/Creatives and Videos/Web/8- Styling.mp4";
import Collesiium9_D1 from "../assets/Creatives and Videos/Web/9- Styling.gif";
import Collesiium10_D1 from "../assets/Creatives and Videos/Web/10- Curtain Closer Web.mp4";

// Mobile;
import Collesiium1_M from "../assets/Creatives and Videos/Mobile/1-Cover.mp4";
import Collesiium2_M from "../assets/Creatives and Videos/Mobile/2-Reels.mp4";
import Collesiium3_M from "../assets/Creatives and Videos/Mobile/3-Text.avif";
import Collesiium4_M from "../assets/Creatives and Videos/Mobile/4- Carousel- Mobile.mp4";
import Collesiium5_M from "../assets/Creatives and Videos/Mobile/5- Slow Pan video Mobile.mp4";
import Collesiium6_M from "../assets/Creatives and Videos/Mobile/6- Styling Mobile.avif";
import Collesiium7_M from "../assets/Creatives and Videos/Mobile/7-Styling.mp4";
import Collesiium8_M from "../assets/Creatives and Videos/Mobile/8- Styling.mp4";
import Collesiium9_M from "../assets/Creatives and Videos/Mobile/9- Styling.gif";
import Collesiium10_M from "../assets/Creatives and Videos/Mobile/10- Curtain Closer Mobile.mp4";
const Collesiium = () => {
  return (
    <div className="w-screen  h-screen hide overflow-y-scroll relative">
      <div className=" sticky top-0 z-20 left-10">
        <a
          href="/"
          className=" absolute  top-10 left-10   w-20 text-center bg-blend-luminosity transition-all duration-200 hover:scale-105 bg-white hover:font-bold cursor-pointer px-3 py-2 rounded-full"
        >
          {" "}
          HOME{" "}
        </a>
      </div>
      <div className=" w-full hidden flex-col sm:flex  ">
        <video src={Collesiium1_D1} loop autoPlay />
        <video src={Collesiium2_D1} loop autoPlay />
        <img loading="eager" src={Collesiium3_D1} />
        <video src={Collesiium4_D1} loop autoPlay />
        <video src={Collesiium5_D1} loop autoPlay />
        <img loading="eager" src={Collesiium6_D1} />
        <video src={Collesiium7_D1} loop autoPlay />
        <video src={Collesiium8_D1} loop autoPlay />
        <img loading="eager" src={Collesiium9_D1} />
        <video src={Collesiium10_D1} loop autoPlay />
      </div>

      <div className=" w-full hidden flex-col max-sm:flex  ">
        <video src={Collesiium1_M} loop autoPlay />
        <video src={Collesiium2_M} loop autoPlay />
        <img loading="eager" src={Collesiium3_M} />
        <video src={Collesiium4_M} loop autoPlay />
        <video src={Collesiium5_M} loop autoPlay />
        <img loading="eager" src={Collesiium6_M} />
        <video src={Collesiium7_M} loop autoPlay />
        <video src={Collesiium8_M} loop autoPlay />
        <img loading="eager" src={Collesiium9_M} />
        <video src={Collesiium10_M} loop autoPlay />

      </div>
    </div>
  );
};

export default Collesiium;
