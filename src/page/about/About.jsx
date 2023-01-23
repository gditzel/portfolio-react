import "../../index.css";

const About = ({ switchLen }) => {
  return (
    <section className="fade-in absolute top-[700px] bg-[#31313b] pb-4 font-poppins shadow-inner lg:relative lg:top-0 lg:mt-28 lg:h-[500px] lg:w-[700px] lg:rounded-r-xl">
      <div>
        <div className="circle absolute h-7 w-7 translate-y-6 translate-x-3 rounded-full opacity-50"></div>
        <h1 className="py-4 pl-6 text-3xl text-orange-500">
          {switchLen ? (
            <>
              A<span className="text-white">bout Me</span>
            </>
          ) : (
            <>
              A<span className="text-white">cerca de Mi</span>
            </>
          )}
        </h1>
        <div className="line"></div>
      </div>
      {switchLen ? (
        <>
          <p className="p-6 text-white">
            My course of studies at university is Computer Science. At present,
            I am looking for my first professional job in the IT industry, where
            I can apply my programming skills. I consider myself a
            detail-oriented person, who is extremely proactive and has great
            problem-solving traits. I am always willing to learn new things.
          </p>
        </>
      ) : (
        <>
          <p className="p-6 text-white">
            Soy estudiante en la carrera de licenciatura en informática. Me
            encuentro en búsqueda de mi primer experiencia laboral en la
            industria de la tecnología, dónde se me permita aplicar mis
            conocimientos en programación. Me considero detallista, resolutivo,
            proactivo y dispuesto a adquirir nuevos conocimientos. Siempre estoy
            dispuesta a aprender cosas nuevas.
          </p>
        </>
      )}

      <div className="gap-20 pl-6 text-white lg:flex">
        {switchLen ? (
          <>
            <div>
              <p>AGE ............. 26</p>
              <p>FREELANCE ............. Available</p>
            </div>
            <div>
              <p>RESIDENCE ............. Argentina</p>
              <p>LOCATION ............. Merlo, Bs.As.</p>
            </div>
          </>
        ) : (
          <>
            <div>
              <p>EDAD ............. 26</p>
              <p>FREELANCE ............. Disponible</p>
            </div>
            <div>
              <p>RESIDENCIA ............. Argentina</p>
              <p>LOCALIDAD ............. Merlo, Bs.As.</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default About;
