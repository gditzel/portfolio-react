import "../../index.css";

import suitcase from "../../assests/imgs/icons2/suitcase.svg";
import build from "../../assests/imgs/icons2/build.svg";

const Resume = () => {
  return (
    <section className="fade-in absolute top-[700px] bg-[#31313b] font-poppins lg:relative lg:top-0 lg:mt-28 lg:h-[600px] lg:w-[700px] lg:rounded-r-xl">
      <div>
        <div className="circle absolute h-7 w-7 translate-y-6 translate-x-3 rounded-full opacity-50"></div>
        <h1 className="py-4 pl-6 text-3xl text-orange-500">
          R<span className="text-white">esume</span>
        </h1>
        <div className="line"></div>
      </div>

      <div className="flex justify-around p-6 uppercase text-white">
        <div>
          <div className="flex w-72 gap-2">
            <img src={suitcase} alt="experience icon" className="h-8 w-10" />
            <h1 className="my-auto">Experience</h1>
          </div>
          <div className="line mt-6"></div>
        </div>

        <div>
          <div className="flex w-72 gap-2">
            <img src={build} alt="education icon" className="h-8 w-10" />
            <h1 className="my-auto">Education</h1>
          </div>
          <div className="line mt-6"></div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
