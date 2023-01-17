import React from "react";
import { About } from "../page/about";
import { Resume } from "../page/resume";
import { Works } from "../page/works";
import { Contact } from "../page/contact";

const PortfolioLayout = ({ path }) => {
  if (path === "#About") return <About />;
  else if (path === "#Resume") return <Resume />;
  else if (path === "#Works") return <Works />;
  else if (path === "#Contact") return <Contact />;
  else return <About />;
};

export default PortfolioLayout;
