import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  SpaceCategories,
  BuildCategories,
  buildprojects,
  SpaceProjects,
} from "@/utils/constansts";
import "animate.css";
import ToggleButton from "@/components/toggle";

import arrow from "@/../public/Arrow.svg";
const SpacePage: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [categorey, setCategorey] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([] as any);
  const [showCategorey, setShowCategorey] = useState(false);
  let timeoutId: NodeJS.Timeout;
  const Location = useNavigate();

  useEffect(() => {
    const projects = SpaceProjects;
    const filtered = projects.filter((project) =>
      project.category.includes(categorey)
    );
    {
      categorey !== ""
        ? setFilteredProjects(filtered)
        : setFilteredProjects(projects);
    }
  }, [categorey, filteredProjects]);

  useEffect(() => {
    const project = filteredProjects[currentProjectIndex];
    if (screen.width > 1024) {
      if (project?.Web1Url?.toLowerCase().endsWith(".mp4")) {
        const video = document.createElement("video");
        video.src = project.Web1Url;
        video.onloadedmetadata = () => {
          setVideoDuration(video.duration * 1000); // Convert to milliseconds
        };
      } else {
        setVideoDuration(0);
      }

      timeoutId = setTimeout(
        () => {
          setCurrentProjectIndex(
            (prevIndex) => (prevIndex + 1) % filteredProjects?.length
          );
        },
        videoDuration == 0 ? 2500 : videoDuration
      ); // Use video duration if available, else default to 2000ms
    }
    if (screen.width < 1024 && screen.width > 500) {
      if (project?.Web2Url.toLowerCase().endsWith(".mp4")) {
        const video = document.createElement("video");
        video.src = project?.Web2Url;
        video.onloadedmetadata = () => {
          setVideoDuration(video.duration * 1000); // Convert to milliseconds
        };
      } else {
        setVideoDuration(0);
      }

      timeoutId = setTimeout(
        () => {
          setCurrentProjectIndex(
            (prevIndex) => (prevIndex + 1) % filteredProjects?.length
          );
        },
        videoDuration == 0 ? 3000 : videoDuration
      ); // Use video duration if available, else default to 2000ms
    }
    if (screen.width < 500) {
      if (project?.MobileUrl?.toLowerCase().endsWith(".mp4")) {
        const video = document.createElement("video");
        video.src = project.MobileUrl;
        video.onloadedmetadata = () => {
          setVideoDuration(video.duration * 1000); // Convert to milliseconds
        };
      } else {
        setVideoDuration(0);
      }

      timeoutId = setTimeout(
        () => {
          setCurrentProjectIndex(
            (prevIndex) => (prevIndex + 1) % filteredProjects?.length
          );
        },
        videoDuration == 0 ? 3000 : videoDuration
      ); // Use video duration if available, else default to 2000ms
    }

    return () => clearTimeout(timeoutId);
  }, [currentProjectIndex, filteredProjects]);

  const handleProjectClick = (prop: string) => {
    Location(prop);
    clearTimeout(timeoutId);
    console.log(prop);
  };

  const isVideo = (url: string) => {
    console.log(url, "URL");
    console.log(url?.endsWith(".mp4"), "is video");
    return url?.endsWith(".mp4");
  };
  const handleToggle = () => {
    Location("/buildprojects");
    setShowCategorey(false);
  };

  useEffect(() => {
    {
      !showCategorey && window.screen.height < 600 ? setCategorey("") : null;
    }
  }, [showCategorey]);

  useEffect(() => {
    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.load();
      videoElement.play();
    }
  }, [currentProjectIndex]);

  return (
    <div className="w-full h-[100vh] overflow-none">
      <div
        className="fixed top-0 left-0 w-full h-8 z-50 bg-white cursor-pointer"
        onClick={handleToggle}
      >
        <div className="flex items-center justify-end h-full w-full px-10">
          <div className="font-FuturaStdBook">Build</div>
          <div className="font-FuturaStdBook my-auto  px-2">→</div>
        </div>
      </div>

      <div
        onClick={() => Location("/")}
        className="absolute top-16 sm:left-24 z-40 left-10 font-bold text-white text-2xl cursor-pointer flex gap-4 items-center "
      >
        <img
          loading="eager"
          src="/SocialLogo.png"
          alt=""
          className="md:h-[74px] h-16 "
        />
      </div>
      {/* <div className="  md:hidden absolute sm:top-20 top-40  sm:right-24 z-20  right-6 font-bold text-white text-lg  ">
        <ToggleButton value={"/build"} toggleChange={handleToggle} />
      </div> */}

      <div
        className={`" absolute w-64 z-20 b cursor-left h-2/3 top-0 text-center flex items-center flex-end animate__animated   ${
          showCategorey ? "cursor-e-resize " : "cursor-w-resize "
        }`}
        onClick={() =>
          showCategorey
            ? (setCategorey(""), setShowCategorey(!showCategorey))
            : setShowCategorey(!showCategorey)
        }
      >
        <div className=" sm:px-5 px-3 max-sm:hidden  ">
          <img
            loading="eager"
            src={arrow}
            alt=""
            className={`h-5 transition-all duration-300 ${
              showCategorey ? " rotate-180" : " "
            }`}
          />
        </div>
        <div className=" sm:px-5 px-3 sm:hidden  ">
          <img
            loading="eager"
            src={arrow}
            alt=""
            className={`h-5 transition-all duration-300 ${
              showCategorey || categorey !== "" ? " rotate-180" : " "
            }`}
          />
        </div>
      </div>
      <div className="absolute md:top-48  top-40  left-10 z-40 w-2/3  h-[calc(100vh-200px)] flex font-QuicksandMedium ">
        {showCategorey ? (
          <>
            <div
              className={`md:w-32 max-sm:h-0 max-sm:overflow-hidden hidden   bg-gray-700  z-40 overflow-y-scroll hide h-full transition-all cursor-w-resize  ${
                showCategorey
                  ? "animate__animated animate__fadeIn"
                  : "animate__animated "
              }`}
              onClick={() => {
                // setShowCategorey(!showCategorey);
              }}
            >
              {SpaceCategories?.map((cat: any, index) => (
                <div
                  key={index}
                  className={`cursor-pointer py-0.5  tracking-widest text-right text-sm hover:underline underline-offset-4  ${
                    cat === categorey
                      ? "bg-blue-500 text-[#E21A56]"
                      : "text-white"
                  }`}
                  onClick={() => {
                    setCategorey(cat);
                    setCurrentProjectIndex(0);
                    // setShowCategorey(!showCategorey);
                  }}
                >
                  {cat}
                </div>
              ))}
            </div>
            <div
              className={`md:w-32 bg-gray-700  sm:overflow-hidden z-40 overflow-y-scroll hide h-full transition-all cursor-w-resize  ${
                showCategorey
                  ? "animate__animated animate__fadeIn"
                  : "animate__animated "
              }`}
              onClick={() => {
                // setShowCategorey(!showCategorey);
              }}
            >
              {SpaceCategories?.map((cat: any, index) => (
                <>
                  <div
                    key={index}
                    className={`cursor-pointer py-0.5  tracking-widest text-right text-sm hover:underline underline-offset-4  sm:block hidden  ${
                      cat === categorey
                        ? "bg-blue-500 text-[#E21A56]"
                        : "text-white"
                    }`}
                    onClick={() => {
                      setCategorey(cat);
                      setCurrentProjectIndex(0);
                      // setShowCategorey(!showCategorey);
                    }}
                  >
                    {cat}
                  </div>
                  <div
                    key={index + 10}
                    className={`cursor-pointer py-0.5  tracking-widest text-right text-sm hover:underline underline-offset-4  max-sm:block hidden  ${
                      cat === categorey
                        ? "bg-blue-500 text-[#E21A56]"
                        : "text-white"
                    }`}
                    onClick={() => {
                      setCategorey(cat);
                      setCurrentProjectIndex(0);
                      console.log("CAT", cat);
                      setShowCategorey(!showCategorey);
                    }}
                  >
                    {cat}
                  </div>
                </>
              ))}
            </div>
          </>
        ) : (
          <div
            className={`w-64 bg-gray-700  overflow-y-scroll  hide block sm:hidden lg:left-40 md:left-10 left-10 animate__animated  ${
              showCategorey ? " animate__fade" : "  animate__fadeIn "
            }`}
          >
            {filteredProjects?.map((project: any, index) => (
              <div
                key={index}
                className={`cursor-pointer py-0.5 text-sm tracking-widest
									${
                    index === currentProjectIndex
                      ? "bg-blue-500 text-[#E21A56] underline  underline-offset-4  "
                      : "text-white"
                  }
								`}
                onClick={() => handleProjectClick(project.link)}
              >
                <span
                  onMouseEnter={() => (
                    setCurrentProjectIndex(index),
                    clearTimeout(timeoutId),
                    console.log("Entered ")
                  )}
                >
                  {project.name}
                </span>
              </div>
            ))}
          </div>
        )}
        <div
          className={`md:w-1/3 bg-gray-700 overflow-y-scroll hide max-sm:hidden max-sm:h-0  lg:left-40 md:left-10 left-10 animate__animated  ${
            showCategorey ? " animate__fade" : "  animate__fadeIn "
          }`}
        >
          {filteredProjects?.map((project: any, index) => (
            <div
              key={index}
              className={`cursor-pointer py-0.5 pl-12 text-sm tracking-widest ${
                index === currentProjectIndex
                  ? "bg-blue-500 text-[#E21A56] underline underline-offset-4  "
                  : "text-white"
              }`}
              onClick={() => handleProjectClick(project.link)}
            >
              <span
                onMouseEnter={() => (
                  setCurrentProjectIndex(index),
                  clearTimeout(timeoutId),
                  console.log("entered ")
                )}
              >
                {project.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full lg:block hidden ">
        {isVideo(filteredProjects[currentProjectIndex]?.Web1Url) ? (
          <video
            key={currentProjectIndex}
            loop
            muted
            playsInline
            className="h-full w-full object-cover left-0 transition-opacity duration-1000"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              zIndex: "0",
            }}
          >
            <source
              src={filteredProjects[currentProjectIndex]?.Web1Url}
              type="video/mp4"
            />
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center  transition-opacity duration-1000 "
            style={{
              backgroundImage: `url("${filteredProjects[currentProjectIndex]?.Web1Url}")`,
            }}
          ></div>
        )}
      </div>

      <div className="w-full h-[calc(100vh-32px)] z-0 md:block  lg:hidden hidden">
        {isVideo(filteredProjects[currentProjectIndex]?.Web2Url) ? (
          <video
            key={currentProjectIndex}
            autoPlay
            loop
            muted
            playsInline
            className=" h-[calc(100vh-32px)] w-full object-cover absolute z-0 top-0 left-0 transition-opacity duration-1000"
            style={{ objectFit: "cover", objectPosition: "center" }}
          >
            <source
              src={filteredProjects[currentProjectIndex]?.Web2Url}
              type="video/mp4"
            />
          </video>
        ) : (
          <div
            className="w-full h-[calc(100vh-32px)] bg-cover bg-center transition-opacity duration-1000 z-10 "
            style={{
              backgroundImage: `url("${filteredProjects[currentProjectIndex]?.Web2Url}")`,
            }}
          ></div>
        )}
      </div>
      <div className="w-full  h-full z-0 block md:hidden">
        {isVideo(filteredProjects[currentProjectIndex]?.MobileUrl) ? (
          <video
            key={currentProjectIndex}
            autoPlay
            loop
            muted
            playsInline
            className=" h-[calc(100vh-32px)] w-full object-cover absolute z-0 top-0 left-0 transition-opacity duration-1000"
            style={{ objectFit: "cover", objectPosition: "center" }}
          >
            <source
              src={filteredProjects[currentProjectIndex]?.MobileUrl}
              type="video/mp4"
            />
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center transition-opacity duration-1000 z-10 "
            style={{
              backgroundImage: `url("${filteredProjects[currentProjectIndex]?.MobileUrl}")`,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default SpacePage;
