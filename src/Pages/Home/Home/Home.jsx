import Colleges from "../../../components/Colleges/Colleges";
import Hero from "../../../components/Hero/Hero";
import Gallery from "../Gallery/Gallery";
import Research from "../Research/Research";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Hero />
      <Colleges />
      <Gallery />
      <Research />
      <Reviews />
    </div>
  );
};

export default Home;
