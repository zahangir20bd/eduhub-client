import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Hero from "../components/Hero/Hero";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
