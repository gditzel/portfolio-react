import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";

export const linksES = [
    {
      label: "Acerca de",
      route: "#About",
      icon: <AiOutlineUser />,
    },
    {
      label: "Resumen",
      route: "#Resume",
      icon: <HiOutlineDocumentText />,
    },
    {
      label: "Trabajos",
      route: "#Works",
      icon: <MdWorkOutline />,
    },
    {
      label: "Contacto",
      route: "#Contact",
      icon: <AiOutlineMail />,
    },
  ];
  