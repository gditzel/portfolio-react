import "../../index.css";

import { IconContext } from "react-icons";

import suitcase from "../../assests/icons2/suitcase.svg";
import build from "../../assests/icons2/build.svg";
import { BsCodeSlash, BsListCheck, BsCheck } from "react-icons/bs";
import ProgresBar from "../../components/progresBar/ProgresBar";

const list = [
  {
    title: "Figma",
  },
  {
    title: "Git",
  },
  {
    title: "PostresSQL",
  },
  {
    title: "Firebase",
  },
  {
    title: "Docker",
  },
  {
    title: "Kubernetes",
  },
  {
    title: "Linux",
  },
  {
    title: "Redux",
  },
  {
    title: "Salesforce",
  },
];

const Resume = ({ switchLen }) => {
  return (
    <section className="fade-in scroll absolute top-[700px] w-screen bg-[#31313b] font-poppins lg:relative lg:top-0 lg:mt-28 lg:h-[500px] lg:w-[700px] lg:overflow-auto">
      <div>
        <div className="circle absolute h-7 w-7 translate-y-6 translate-x-3 rounded-full opacity-50"></div>
        <h1 className="py-4 pl-6 text-3xl text-orange-500">
          {switchLen ? (
            <>
              R<span className="text-white">esume</span>
            </>
          ) : (
            <>
              R<span className="text-white">esumen</span>
            </>
          )}
        </h1>
        <div className="line"></div>
      </div>

      <div className="justify-around p-6 text-white md:flex">
        <div>
          <div className="flex w-72 gap-2">
            <img src={suitcase} alt="experience icon" className="h-8 w-10" />
            <h1 className="my-auto uppercase">
              {switchLen ? <>Experience</> : <>Experiencia</>}
            </h1>
          </div>
          <div className="line mt-6"></div>
          <div className="p-6">
            <span className="rounded-md border border-orange-500 p-1 text-xs text-orange-500">
              {switchLen ? <> 2022 - Present</> : <> 2022 - Presente</>}
            </span>
            <h1 className="text-md mt-2">
              {switchLen ? <>Web development</> : <>Desarrollador web</>}
            </h1>
            <p className="text-md mt-6 text-gray-400">
              {switchLen ? (
                <>I create custom web pages for clients.</>
              ) : (
                <>Cre?? p??ginas a medida para clientes.</>
              )}
            </p>
          </div>
          <div className="line mt-6"></div>
          <div className="p-6">
            <span className="rounded-md border border-orange-500 p-1 text-xs text-orange-500">
              Sep-2022 - Dec-2022
            </span>
            <h1 className="text-md mt-2">
              {switchLen ? <>React Acceleration</> : <>Aceleraci??n React</>}
            </h1>
            <p className="text-md mt-6 text-gray-400">
              {switchLen ? (
                <>Perform a React acceleration on a platform called Alkemy.</>
              ) : (
                <>
                  Realic?? una Aceleraci??n de React en la plataforma de Alkemy.
                </>
              )}
            </p>
          </div>
        </div>

        <div>
          <div className="flex w-72 gap-2">
            <img src={build} alt="education icon" className="h-8 w-10" />
            <h1 className="my-auto uppercase">
              {switchLen ? <>Education</> : <>Educacion</>}
            </h1>
          </div>
          <div className="line mt-6"></div>
          <div className="p-6">
            <span className="rounded-md border border-orange-500 p-1 text-xs text-orange-500">
              {switchLen ? <> 2022 - Present</> : <> 2022 - Presente</>}
            </span>
            <h1 className="text-md mt-2">
              {switchLen ? (
                <>National West University</>
              ) : (
                <>Universidad Nacional del Oeste</>
              )}
            </h1>
            <p className="text-md mt-6 text-gray-400">
              {switchLen ? (
                <> Bachelor in Computer Science.</>
              ) : (
                <>Licenciatura en Inform??tica.</>
              )}
            </p>
          </div>
          <div className="line mt-6"></div>
          <div className="p-6">
            <span className="rounded-md border border-orange-500 p-1 text-xs text-orange-500">
              Feb-2022 - Ago-2022
            </span>
            <h1 className="text-md mt-2">
              {switchLen ? <>Programming Course</> : <>Curso de programaci??n</>}
            </h1>
            <p className="text-md mt-6 text-gray-400">
              {switchLen ? (
                <>Front-end developer with React in CoderHouse.</>
              ) : (
                <>Desarrollo Front-end con React en CoderHouse.</>
              )}
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="circle absolute h-7 w-7 translate-y-6 translate-x-3 rounded-full opacity-50"></div>
        <h1 className="py-4 pl-6 text-3xl text-orange-500">
          {switchLen ? (
            <>
              M<span className="text-white">y skills</span>
            </>
          ) : (
            <>
              M<span className="text-white">is habilidades</span>
            </>
          )}
        </h1>
        <div className="line"></div>
      </div>

      <div className="justify-around px-6 pt-6 text-white md:flex">
        <div>
          <div className="flex w-72 gap-2">
            <IconContext.Provider
              value={{
                color: "orange",
                size: "1.5rem",
              }}
            >
              <BsCodeSlash />
            </IconContext.Provider>
            <h1 className="my-auto uppercase">
              {switchLen ? <>Coding</> : <>C??digo</>}
            </h1>
          </div>
          <div className="line mt-8"></div>
          <ProgresBar />
          <h2 className="pb-8 pl-6 text-white">
            The progress bars represent the hours invested in each technology.
          </h2>
        </div>

        <div>
          <div className="flex w-72 gap-2">
            <IconContext.Provider
              value={{
                color: "orange",
                size: "1.5rem",
              }}
            >
              <BsListCheck />
            </IconContext.Provider>
            <h1 className="my-auto uppercase">
              {switchLen ? <>Knowledges</> : <>Conocimientos</>}
            </h1>
          </div>
          <div className="line mt-8"></div>
          <ul className="pt-8">
            {list.map((e) => (
              <li className="mb-4 flex gap-2" key={e.title}>
                <IconContext.Provider
                  value={{
                    color: "orange",
                    size: "1.5rem",
                  }}
                >
                  <BsCheck />
                </IconContext.Provider>
                {e.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Resume;
