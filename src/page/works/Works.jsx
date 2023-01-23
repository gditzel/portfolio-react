import "../../index.css";
import Community from "../../assests/imgs/community.jpg";
import Broker from "../../assests/imgs/broker.jpg";
import Ecommerce from "../../assests/imgs/ecommerce.jpg";
import Instapins from "../../assests/imgs/instapins.jpg";

const Works = ({ switchLen }) => {
  return (
    <section className="fade-in scroll absolute top-[700px] w-screen bg-[#31313b] pb-4 font-poppins lg:relative lg:top-0 lg:mt-28 lg:h-[500px] lg:w-[700px] lg:overflow-auto">
      <div>
        <div className="circle absolute h-7 w-7 translate-y-6 translate-x-3 rounded-full opacity-50"></div>
        <h1 className="py-4 pl-6 text-3xl text-orange-500">
          {switchLen ? (
            <>
              W<span className="text-white">orks and Projects</span>
            </>
          ) : (
            <>
              T<span className="text-white">rabajos y Proyectos</span>
            </>
          )}
        </h1>
        <div className="line"></div>
      </div>
      <div className="mt-10 justify-around gap-4 text-white md:flex">
        <div>
          <h1 className="pl-6 text-lg uppercase">
            {switchLen ? "Works" : "Trabajos"}
          </h1>
          <div className="line"></div>
          <div className="my-8">
            <a
              href="https://alecaglia.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
            >
              <h2 className="text-center">Community Manager</h2>
              <img
                src={Community}
                alt="Community Manager Page"
                className="mx-auto h-40 w-80 object-cover"
              />
            </a>
            <div className="mt-4 flex justify-center gap-2 text-sm lg:justify-start">
              <a
                href="https://github.com/gditzel/community-manager"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-orange-500 bg-orange-500 py-1 px-2 hover:bg-white hover:text-orange-500"
              >
                {switchLen ? "Repository" : "Repositorio"}
              </a>
              <a
                href="https://alecaglia.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-orange-500 bg-orange-500 py-1 px-2 hover:bg-white hover:text-orange-500"
              >
                Demo
              </a>
            </div>
          </div>

          <div>
            <a
              href="https://broker-app-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
            >
              <h2 className="text-center">Asseg Seguros</h2>
              <img
                src={Broker}
                alt="Community Manager Page"
                className="mx-auto h-40 w-80 object-cover"
              />
            </a>
            <div className="mt-4 flex justify-center gap-2 text-sm lg:justify-start">
              <a
                href="https://github.com/gditzel/broker-app"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-orange-500 bg-orange-500 py-1 px-2 hover:bg-white hover:text-orange-500"
              >
                {switchLen ? "Repository" : "Repositorio"}
              </a>
              <a
                href="https://broker-app-nine.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-orange-500 bg-orange-500 py-1 px-2 hover:bg-white hover:text-orange-500"
              >
                Demo
              </a>
            </div>
          </div>
        </div>

        <div>
          <h1 className="mt-10 pl-6 text-lg uppercase md:mt-0">
            {" "}
            {switchLen ? "Projects" : "Proyectos"}
          </h1>
          <div className="line"></div>
          <div className="my-8">
            <a
              href="https://ecommerce-ditzel-alkemy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
            >
              <h2 className="text-center">Computer Store</h2>
              <img
                src={Ecommerce}
                alt="Community Manager Page"
                className="mx-auto h-40 w-80 object-cover"
              />
            </a>
            <div className="mt-4 flex justify-center gap-2 text-sm lg:justify-start">
              <a
                href="https://github.com/gditzel/ecommerce-ditzel-alkemy"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-orange-500 bg-orange-500 py-1 px-2 hover:bg-white hover:text-orange-500"
              >
                {switchLen ? "Repository" : "Repositorio"}
              </a>
              <a
                href="https://ecommerce-ditzel-alkemy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-orange-500 bg-orange-500 py-1 px-2 hover:bg-white hover:text-orange-500"
              >
                Demo
              </a>
            </div>
          </div>

          <div>
            <a
              href="https://instapins.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
            >
              <h2 className="text-center">Instapins</h2>
              <img
                src={Instapins}
                alt="Community Manager Page"
                className="mx-auto h-40 w-80 object-cover"
              />
            </a>
            <div className="mt-4 flex justify-center gap-2 text-sm lg:justify-start">
              <a
                href="https://github.com/gditzel/shareme_frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-orange-500 bg-orange-500 py-1 px-2 hover:bg-white hover:text-orange-500"
              >
                {switchLen ? "Repository" : "Repositorio"}
              </a>
              <a
                href="https://instapins.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-orange-500 bg-orange-500 py-1 px-2 hover:bg-white hover:text-orange-500"
              >
                Demo{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
