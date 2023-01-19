import "../../index.css";

import { useState } from "react";

import { IconContext } from "react-icons";

import { links } from "../../utils/links/links";
import { linksES } from "../../utils/links/linksES";

const Navbar = ({ switchLen }) => {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (label) => {
    setActiveLink(label);
  };
  return (
    <header>
      <nav className="bg-[#31313b] font-poppins lg:mt-28 lg:w-20 lg:rounded-l-xl">
        <ul className="flex justify-evenly lg:inline">
          {switchLen ? (
            <>
              {links.map(({ label, route, icon }) => (
                <li key={label} className="py-2 text-center">
                  <a
                    href={route}
                    className="text-xs uppercase text-white"
                    style={{ color: activeLink === label ? "orange" : "white" }}
                    onClick={() => handleClick(label)}
                  >
                    <IconContext.Provider
                      value={{
                        color: activeLink === label ? "orange" : "white",
                        size: "1.5rem",
                        style: { margin: "auto" },
                      }}
                    >
                      {icon}
                    </IconContext.Provider>
                    {label}
                  </a>
                  <div className="line"></div>
                </li>
              ))}
            </>
          ) : (
            <>
              {linksES.map(({ label, route, icon }) => (
                <li key={label} className="py-2 text-center">
                  <a
                    href={route}
                    className="text-xs uppercase text-white"
                    style={{ color: activeLink === label ? "orange" : "white" }}
                    onClick={() => handleClick(label)}
                  >
                    <IconContext.Provider
                      value={{
                        color: activeLink === label ? "orange" : "white",
                        size: "1.5rem",
                        style: { margin: "auto" },
                      }}
                    >
                      {icon}
                    </IconContext.Provider>
                    {label}
                  </a>
                  <div className="line"></div>
                </li>
              ))}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
