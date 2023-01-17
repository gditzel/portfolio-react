import links from "../../utils/json/links.json";

const Navbar = () => {
  return (
    <header>
      <nav className="rounded-xl bg-gray-700 md:w-20">
        <ul className="flex justify-evenly md:inline">
          {links.map(({ label, route, icon }) => (
            <li
              key={label}
              className="py-2 text-center md:border-b md:border-white"
            >
              <a href={route} className="text-xs uppercase text-white">
                <img src={icon} alt="Icons" className="mx-auto h-8" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
