import links from "../../utils/json/links.json";
import "../../index.css";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-[#31313b] font-poppins lg:mt-28 lg:w-20 lg:rounded-xl">
        <ul className="flex justify-evenly lg:inline">
          {links.map(({ label, route, icon }) => (
            <li key={label} className="py-2 text-center">
              <a href={route} className="text-xs uppercase text-white">
                <img src={icon} alt="Icons" className="mx-auto h-8" />
                {label}
              </a>
              <div className="line"></div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
