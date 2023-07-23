import { Helmet } from "react-helmet-async";
import Colleges from "../../../components/Colleges/Colleges";
import Hero from "../../../components/Hero/Hero";
import Gallery from "../Gallery/Gallery";
import Research from "../Research/Research";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EduHub | Home</title>
      </Helmet>
      <Hero />
      <Colleges />
      <Gallery />
      <Research />
      <Reviews />
    </div>
  );
};

export default Home;
