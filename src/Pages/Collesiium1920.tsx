import React from "react";
import Collesiium1_D1 from "@/assets/Collesium1920/Desktop copy/1-Cover .avif";
import Collesiium2_D1 from "@/assets/Collesium1920/Desktop copy/2- Reel.avif";
import Collesiium3_D1 from "@/assets/Collesium1920/Desktop copy/3-Text.avif";
import Collesiium4_D1 from "@/assets/Collesium1920/Desktop copy/4.gif";
import Collesiium5_D1 from "@/assets/Collesium1920/Desktop copy/5.avif";
import Collesiium6_D1 from "@/assets/Collesium1920/Desktop copy/6.gif";

// Mobile;
import Collesiium1_M from "@/assets/Collesium1920/Mobile copy/1-Cover.avif";
import Collesiium2_M from "@/assets/Collesium1920/Mobile copy/2-Reels.mp4";
import Collesiium3_M from "@/assets/Collesium1920/Mobile copy/3-Text.avif";
import Collesiium5_M from "@/assets/Collesium1920/Mobile copy/5.avif";
import Collesiium6_M from "@/assets/Collesium1920/Mobile copy/6.gif";
import Collesiium7_M from "@/assets/Collesium1920/Mobile copy/7.gif";

const Colosseum1920 = () => {
  return (
    <div className="w-screen  h-screen hide overflow-y-scroll relative">
      <div className=" sticky top-0 z-20 left-10">
        <a
          href="/social"
          className=" absolute  top-10 left-10   w-20 text-center bg-blend-luminosity transition-all duration-200 hover:scale-105 bg-white hover:font-bold cursor-pointer px-3 py-2 rounded-full"
        >
          {" "}
          HOME{" "}
        </a>
      </div>
      <div className=" w-full hidden flex-col sm:flex  ">
        <img loading="eager" src={Collesiium1_D1} />
        <img loading="eager" src={Collesiium2_D1} />
        <img loading="eager" src={Collesiium3_D1} />
        <img loading="eager" src={Collesiium4_D1} />
        <img loading="eager" src={Collesiium5_D1} />
        <img loading="eager" src={Collesiium6_D1} />
        {/* <img loading="eager" src={Collesiium7_D1} /> */}
      </div>

      <div className=" w-full hidden flex-col max-sm:flex  ">
        <img loading="eager" src={Collesiium1_M} />

        <video src={Collesiium2_M} loop autoPlay />

        <img loading="eager" src={Collesiium3_M} />
        {/* <img loading="eager" src={Collesiium4_M} /> */}
        <img loading="eager" src={Collesiium5_M} />
        <img loading="eager" src={Collesiium6_M} />
        <img loading="eager" src={Collesiium7_M} />
      </div>
    </div>
  );
};

export default Colosseum1920;
