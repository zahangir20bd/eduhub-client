import SectionTitle from "../../components/Common/SectionTitle/SectionTitle";
import SectionBanner from "../../components/SectionBanner/SectionBanner";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useColleges from "../../hooks/useColleges";

const Admissions = () => {
  const [colleges] = useColleges();

  return (
    <section>
      <Helmet>
        <title>EduHub | Admission</title>
      </Helmet>
      <SectionBanner
        heading="Admission"
        subHeading="Choose your desire College"
      />
      <SectionTitle section_title="Select college where you want to get admission" />
      <ul>
        {colleges.map((college) => (
          <li
            className="text-3xl md:text-5xl text-primary-focus mb-8 text-center font-bold"
            key={college._id}
          >
            <Link to={{ pathname: `/admission-form/${college._id}` }}>
              {college.college_name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Admissions;
