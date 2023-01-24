import React from "react";
import { About } from "../page/about";
import { Resume } from "../page/resume";
import { Works } from "../page/works";
import { Contact } from "../page/contact";

const PortfolioLayout = ({ path, switchLen }) => {
  if (path === "#About") return <About switchLen={switchLen} />;
  else if (path === "#Resume") return <Resume switchLen={switchLen} />;
  else if (path === "#Works") return <Works switchLen={switchLen} />;
  else if (path === "#Contact") return <Contact switchLen={switchLen} />;
};

export default PortfolioLayout;
