import { useLocation } from "react-router-dom";
import { Navbar } from "./components/navbar";
import PortfolioLayout from "./layout/PortfolioLayout";
import ProfileLayout from "./layout/ProfileLayout";

function App() {
  const location = useLocation().hash;

  return (
    <div className="bg-gray-800 lg:flex">
      <Navbar />
      <ProfileLayout />
      <PortfolioLayout path={location} />
    </div>
  );
}

export default App;
