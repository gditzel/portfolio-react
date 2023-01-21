import "../../index.css";

import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

const Contact = ({ switchLen }) => {
  const [fields, setFields] = useState();

  const clearForm = () => {
    setFields("");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email !== "" && !regexEmail.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Debes escribir una dirección válida",
        timer: 1500,
      });
      return;
    }

    emailjs
      .sendForm(
        "service_hjhmq3t",
        "template_2ezpekb",
        form.current,
        "AIb21sO4WASqiL1oy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    Swal.fire({
      title: "Mensaje enviado con exito",
      icon: "success",
      timer: 1500,
    })
      .then(clearForm)
      .finally(
        // eslint-disable-next-line no-global-assign
        (setTimeout = () => {
          window.location.reload(true);
        }),
        5000
      );
  };

  return (
    <section className="fade-in absolute top-[700px] w-screen bg-[#31313b] font-poppins lg:relative lg:top-0 lg:mt-28 lg:h-[500px] lg:w-[700px] lg:rounded-r-xl">
      <div>
        <div className="circle absolute h-7 w-7 translate-y-6 translate-x-3 rounded-full opacity-50"></div>
        <h1 className="py-4 pl-6 text-3xl text-orange-500">
          G<span className="text-white">et in touch</span>
        </h1>
        <div className="line"></div>
      </div>

      <form className="mt-6 text-white" ref={form} onSubmit={sendEmail}>
        <div className="grid gap-4 py-4 px-8 md:grid-cols-2">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              value={fields}
              className="w-full border-b bg-[#31313b] py-4 outline-none focus:border-orange-500 placeholder:focus:text-white"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={fields}
              className="w-full border-b bg-[#31313b] py-4 outline-none focus:border-orange-500 placeholder:focus:text-white"
            />
          </div>
          <div className="col-span-2">
            <textarea
              type="text"
              name="msg"
              id="msg"
              placeholder="Your Message"
              value={fields}
              className="mt-12 w-full resize-none border-b bg-[#31313b] outline-none focus:border-orange-500 placeholder:focus:text-white"
            ></textarea>
          </div>
          <div className="col-span-2 mt-6 flex w-40 gap-2  text-start text-sm  hover:text-orange-500">
            <button type="submit" className="uppercase">
              Send Message
            </button>
            &#8640;
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
