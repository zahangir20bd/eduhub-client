import Heading from "../Common/Heading/Heading";
import "./Hero.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO EDUHUB"
              title="Choose your desired College."
            />
            <p className="w-96 ml-2 md:ml-40 text-xl">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="button ml-2 md:ml-40">
              <button className=" primary-btn flex items-center justify-center gap-2">
                GET STARTED NOW <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
