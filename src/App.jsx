import { useLocation } from "react-router-dom";
import { Navbar } from "./components/navbar";
import PortfolioLayout from "./layout/PortfolioLayout";
import ProfileLayout from "./layout/ProfileLayout";

function App() {
  const location = useLocation().hash;

  return (
    <div className=" justify-center bg-[#1d1c22] lg:flex">
      <Navbar />
      <ProfileLayout />
      <PortfolioLayout path={location} />
    </div>
  );
}

export default App;
