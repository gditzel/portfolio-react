import { useLocation } from "react-router-dom";
import { Navbar } from "./components/navbar";
import PortfolioLayout from "./layout/PortfolioLayout";

function App() {
  const location = useLocation().hash;

  return (
    <>
      <Navbar />
      <PortfolioLayout path={location} />
    </>
  );
}

export default App;
