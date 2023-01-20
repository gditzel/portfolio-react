import "../index.css";

import { IconContext } from "react-icons";
import { GrLinkedinOption, GrGithub, GrMail } from "react-icons/gr";

import banner from "../assests/imgs/banner.jpg";
import profile from "../assests/imgs/Profile.jpg";

import CV from "../utils/CV/CV-GONZALO-NICOLAS-DITZEL.pdf";

const ProfileLayout = ({ switchLen }) => {
  return (
    <section className="h-screen font-poppins lg:w-[500px] lg:pt-14">
      <div>
        <img
          src={banner}
          alt="Banner del perfil"
          className="h-80 w-full object-cover lg:rounded-t-xl lg:border"
        />
      </div>
      <div className="-mt-10 h-64 -skew-y-12 bg-[#31313b]"></div>
      <div className="absolute top-[390px] right-0 left-0 h-64 skew-y-12 bg-[#31313b] md:relative md:-top-64"></div>
      <div className="absolute top-72 right-0 left-0 md:relative md:-top-[600px] lg:rounded-b-xl lg:border-x lg:border-b">
        <img
          src={profile}
          alt="Profile"
          className="mx-auto h-40 w-40 rounded-full object-cover"
        />
        <div className="mt-4 text-center text-white">
          <h1 className="text-3xl">Gonzalo Ditzel</h1>
          <h3 className="text mt-2 text-orange-500">
            {switchLen ? <>Web Development</> : <>Desarrollador Web</>}
          </h3>
          <div className="mt-4 flex justify-center gap-4">
            <IconContext.Provider
              value={{
                color: "white",
                size: "1.5rem",
                style: { margin: "auto" },
              }}
            >
              <a
                href="https://www.linkedin.com/in/gonzaloditzel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrLinkedinOption />
              </a>
              <a
                href="https://github.com/gditzel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrGithub />
              </a>
              <a
                href="mailto:gonza.ditzel5@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrMail />
              </a>
            </IconContext.Provider>
          </div>
        </div>
        <div className="mt-8 h-28 bg-[#31313b] text-center text-white lg:rounded-b-xl">
          <div className="line"></div>
          <button className="mr-6 mt-7 border border-white py-2 px-2 uppercase hover:border-orange-500 hover:text-orange-500 lg:px-4">
            <a href={CV} download="Gonzalo Ditzel CV">
              {switchLen ? <>Download CV</> : <>Descargar CV</>}
            </a>
          </button>
          <button className="border border-white py-2 px-2 uppercase hover:border-orange-500 hover:text-orange-500 lg:px-4">
            <a href="#Contact">
              {switchLen ? <>Contact me</> : <>Contactame</>}
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileLayout;
