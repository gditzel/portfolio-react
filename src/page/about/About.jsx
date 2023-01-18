import "../../index.css";

const About = () => {
  return (
    <section className="absolute top-[700px] rounded-r-xl bg-[#31313b] font-poppins lg:relative lg:top-0 lg:mt-28 lg:h-[600px] lg:w-[700px]">
      <div>
        <div className="circle absolute h-7 w-7 translate-y-6 translate-x-3 rounded-full opacity-50"></div>
        <h1 className="py-4 pl-6 text-3xl text-orange-500">
          About <span className="text-white">Me</span>
        </h1>
        <div className="line"></div>
      </div>
      <p className="p-6 text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        iste saepe sunt natus provident itaque sed a, porro nisi numquam fugit
        debitis, architecto minus! Id ad ex impedit praesentium nisi? Qui
        corporis accusantium ea quia obcaecati exercitationem dolore sapiente
        architecto saepe nemo sunt, maiores numquam quae ducimus! Ipsum eum ium
        quia id alias illo iste quasi debitis ex! Temporibus, et necessitatibus
        nesciunt quae vel quam itaque consequuntur doloremque delectus animi
        molestias aperiam tempora facere est deleniti ex laudantium voluptates
        id dolorem ut ipsa. Commodi et quasi accusantium esse!
      </p>

      <div className="gap-20 pl-6 text-white lg:flex">
        <div>
          <p>AGE ............. 24</p>
          <p>FREELANCE ............. Available</p>
        </div>
        <div>
          <p>RESIDENCE ............. Argentina</p>
          <p>LOCATION ............. Merlo, Buenos Aires</p>
        </div>
      </div>
    </section>
  );
};

export default About;
