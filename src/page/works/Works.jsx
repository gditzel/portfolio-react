import "../../index.css";
import Community from "../../assests/imgs/community.jpg";
import Broker from "../../assests/imgs/broker.jpg";
import Ecommerce from "../../assests/imgs/ecommerce.jpg";
import Instapins from "../../assests/imgs/instapins.jpg";

const Works = ({ switchLen }) => {
  return (
    <section className="fade-in absolute top-[710px] bg-[#31313b] font-poppins lg:relative lg:top-0 lg:mt-28 lg:h-[500px] lg:w-[700px] lg:rounded-r-xl">
      <div>
        <div className="circle absolute h-7 w-7 translate-y-6 translate-x-3 rounded-full opacity-50"></div>
        <h1 className="py-4 pl-6 text-3xl text-orange-500">
          W<span className="text-white">orks and Projects</span>
        </h1>
        <div className="line"></div>
      </div>

      <div className="justify-around text-white lg:flex">
        <div>
          <h1>Works</h1>
          <div>
            <a
              href="https://alecaglia.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Community}
                alt="Community Manager Page"
                className="h-40 w-60 object-cover"
              />
            </a>
            <div>
              <a
                href="https://github.com/gditzel/community-manager"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </div>

          <div>
            <a
              href="https://broker-app-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Broker}
                alt="Community Manager Page"
                className="h-40 w-60 object-cover"
              />
            </a>
            <div>
              <a
                href="https://github.com/gditzel/broker-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </div>
        </div>

        <div>
          <h1>Projects</h1>
          <div className="line"></div>
          <div>
            <a
              href="https://ecommerce-ditzel-alkemy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Ecommerce}
                alt="Community Manager Page"
                className="h-40 w-60 object-cover"
              />
            </a>
            <div>
              <a
                href="https://github.com/gditzel/ecommerce-ditzel-alkemy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </div>

          <div>
            <a
              href="https://instapins.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Instapins}
                alt="Community Manager Page"
                className="h-40 w-60 object-cover"
              />
            </a>
            <div>
              <a
                href="https://github.com/gditzel/shareme_frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
