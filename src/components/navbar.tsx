import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const sections = ["HOME", "SOCIAL", "BUILD", "TEAM", "CLIENTS", "CONTACT"];
  const routes = ["/", "/social", "/build", "/team", "/clients", "/contact"];
  const colors = [
    "#48CFAD", // SOCIAL
    "#39BB9D", // BUILD
    "#09935D", // TEAM
    "#236847", // CLIENTS
    "#083F1E", // CONTACT
    "#052411", // CONTACT
  ];

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Set active section based on current route
    const currentPath = location.pathname;
    const sectionIndex = routes.findIndex((route) => route === currentPath);
    if (sectionIndex !== -1) {
      setActiveSection(sections[sectionIndex]);

      // Scroll the selected section into view
      itemRefs.current[sectionIndex]?.scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
    }
  }, [location.pathname]);

  const handleClick = (route: string, index: number) => {
    navigate(route);
    setActiveSection(sections[index]);

    // Scroll the selected section into view
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <nav className="fixed bottom-6 md:bottom-3 xl:bottom-20 left-2 right-2 mx-auto max-w-7xl overflow-x-auto no-scrollbar">
      <div className="w-[1000px] flex space-x-4">
        {sections.map((section, index) => {
          const isActive = activeSection === section;
          const baseColor = colors[index];

          return (
            <div
              key={section}
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => handleClick(routes[index], index)}
              className={`cursor-pointer flex items-start font-bricolage tracking-condensed font-semibold justify-start px-3 py-4 min-w-[30%] h-20 rounded-lg text-left transition-all duration-300`}
              style={{
                backgroundColor: isActive ? "white" : baseColor,
                color: isActive ? "black" : "white",
                border: isActive ? `2px solid ${baseColor}` : "none",
              }}
            >
              <span className="font-condensed leading-tight text-lg">
                {section}
              </span>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
