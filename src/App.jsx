import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./components/navbar";
import PortfolioLayout from "./layout/PortfolioLayout";
import ProfileLayout from "./layout/ProfileLayout";

function App() {
  const location = useLocation().hash;

  const [active, setActive] = useState(true);

  const toggleClick = () => {
    setActive(!active);
  };

  return (
    <div className="justify-center bg-[#1d1c22] lg:flex">
      <div className="top-0 left-0 pt-2 lg:absolute lg:-mt-4 lg:pl-6 lg:pt-10">
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            value=""
            className="peer sr-only"
            onClick={toggleClick}
          />
          <div className="peer h-6 w-11 rounded-full bg-gray-600 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-500 peer-checked:after:translate-x-full peer-checked:after:border-white "></div>
          <span className="ml-3 text-sm font-medium text-white">EN / ES</span>
        </label>
      </div>
      <Navbar switchLen={active} />
      <ProfileLayout switchLen={active} />
      <PortfolioLayout path={location} switchLen={active} />
    </div>
  );
}

export default App;
