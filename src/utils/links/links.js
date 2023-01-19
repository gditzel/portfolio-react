import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";

export const links = [
    {
      label: "About",
      route: "#About",
      icon: <AiOutlineUser />,
    },
    {
      label: "Resume",
      route: "#Resume",
      icon: <HiOutlineDocumentText />,
    },
    {
      label: "Works",
      route: "#Works",
      icon: <MdWorkOutline />,
    },
    {
      label: "Contact",
      route: "#Contact",
      icon: <AiOutlineMail />,
    },
  ];