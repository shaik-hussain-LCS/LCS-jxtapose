import React, { useState } from "react";

const ToggleButton = ({ value, toggleChange }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    {
      value == "build" ? toggleChange("space") : toggleChange("build");
    }
  };

  return (
    <div className="grid grid-cols-2  sm:w-52 w-32 border border-white rounded-full transition-all duration-300 items-center h-6 px-0.5 relative">
      <button
        className={`text-center px-2 py-1 sm:text-sm text-xs rounded-full focus:outline-none transition-all duration-200 outline-none z-10 ${
          value == "build" ? "text-black  font-semibold" : "text-gray"
        }`}
        onClick={handleToggle}
      >
        BUILD
      </button>
      <button
        className={`text-center px-2 py-1 sm:text-sm text-xs rounded-full focus:outline-none transition-all duration-200 outline-none z-10 ${
          value == "space" ? "text-black  font-semibold" : "text-gray"
        }`}
        onClick={handleToggle}
      >
        SOCIAL
      </button>
      <div
        className={`absolute bg-white rounded-full h-5 w-1/2 transition-all duration-300 ${
          value == "build"
            ? "left-0.5 transform translate-x-100%"
            : "left-1/2 transform -translate-x-100%"
        }`}
      ></div>
    </div>
  );
};

export default ToggleButton;
