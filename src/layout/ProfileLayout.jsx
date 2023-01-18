import "../index.css";

import banner from "../assests/imgs/banner.jpg";
import profile from "../assests/imgs/Profile.jpg";
import { SocialIcon } from "react-social-icons";

const ProfileLayout = () => {
  return (
    <section className="h-screen font-poppins lg:w-[500px] lg:pt-20">
      <div>
        <img
          src={banner}
          alt="Banner del perfil"
          className="h-80 w-full object-cover lg:rounded-t-xl"
        />
      </div>
      <div className="h-64 -skew-y-12 bg-[#31313b]"></div>
      <div className="absolute top-[390px] right-0 left-0 h-64 skew-y-12 bg-[#31313b] md:relative md:-top-64"></div>
      <div className="absolute top-72 right-0 left-0 md:relative md:-top-[600px]">
        <img
          src={profile}
          alt="Profile"
          className="mx-auto h-40 w-40 rounded-full object-cover"
        />
        <div className="mt-4 text-center text-white">
          <h1 className="text-3xl">Gonzalo Ditzel</h1>
          <h3 className="text mt-2 text-orange-500">Web Development</h3>
          <div className="mt-2 flex justify-center gap-4">
            <SocialIcon
              url="https://www.linkedin.com/in/gonzaloditzel/"
              bgColor="transparent"
              fgColor="white"
              target="_blank"
              rel="noopener noreferrer"
            />
            <SocialIcon
              url="https://github.com/gditzel"
              bgColor="transparent"
              fgColor="white"
              target="_blank"
              rel="noopener noreferrer"
            />
            <a href="mailto:gonza.ditzel5@gmail.com">
              <SocialIcon
                bgColor="transparent"
                fgColor="white"
                target="_blank"
                rel="noopener noreferrer"
              />
            </a>
          </div>
        </div>
        <div className="mt-12 h-28 bg-[#31313b] text-center text-white lg:rounded-b-xl">
          <div className="line"></div>
          <button className="mr-6 mt-7 py-2 px-4 uppercase hover:text-orange-500">
            <a href="#das" download="Gonzalo Ditzel CV">
              Download cv
            </a>
          </button>
          <button className="py-2 px-4 uppercase hover:text-orange-500">
            <a href="#Contact">Contact me</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileLayout;
