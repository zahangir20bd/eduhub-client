/* eslint-disable react/prop-types */
import "./SectionBanner.css";

const SectionBanner = ({ heading, subHeading }) => {
  return (
    <div className="section-banner">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h2 className="text-3xl  text-[#1d9e93] md:text-6xl text-center font-bold mb=1 z-10">
          {heading}
        </h2>
        <h4 className="text-xl text-[#f7f4f4] mt-3 md:text-2xl text-center font-semibold z-10">
          {subHeading}
        </h4>
      </div>
    </div>
  );
};

export default SectionBanner;
