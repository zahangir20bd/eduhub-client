/* eslint-disable react/prop-types */
const SectionTitle = ({ section_title }) => {
  return (
    <div>
      <h2 className="text-5xl mx-auto w-8/12 md:w-1/2 font-bold text-center mt-32 mb-24 text-[#1eb2a6]">
        {section_title}
      </h2>
    </div>
  );
};

export default SectionTitle;
