import { useEffect, useState } from "react";
import SectionTitle from "../../components/Common/SectionTitle/SectionTitle";
import SectionBanner from "../../components/SectionBanner/SectionBanner";
import { Link } from "react-router-dom";

const Admissions = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("colleges.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setColleges(data);
      });
  }, []);

  return (
    <section>
      <SectionBanner
        heading="Admission"
        subHeading="Choose your desire College"
      />
      <SectionTitle section_title="Select college where you want to get admission" />
      <ul>
        {colleges.map((college, index) => (
          <li
            className="text-3xl md:text-5xl text-primary-focus mb-8 text-center font-bold"
            key={index}
          >
            <Link to="/admission-form">{college.college_name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Admissions;
