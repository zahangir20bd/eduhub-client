import { Link, useParams } from "react-router-dom";
import useColleges from "../../hooks/useColleges";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../Common/SectionTitle/SectionTitle";

const CollegeDetails = () => {
  const { id } = useParams();
  const [colleges] = useColleges();
  const college = colleges.find((singleCollege) => singleCollege?._id === id);
  return (
    <section className="mx-2 md:mx-4 mb-20">
      <SectionTitle section_title="About your Select College" />
      <Helmet>
        <title>EduHub | College</title>
      </Helmet>
      <div
        key={college?._id}
        className="card w-full md:w-3/4 mx-auto bg-base-100 shadow-xl"
      >
        <figure>
          <img src={college?.college_image} alt="College" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{college?.college_name}</h2>
          <p>
            <span className="font-semibold">Admission Dates: </span>
            {college?.admission_dates}
          </p>
          <p>
            <span className="font-semibold">Admission Process: </span>
            {college?.admission_process}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <p>
              <span className="font-semibold">Events:</span>
              {college?.events.map((val, index) => (
                <li className="list-decimal" key={index}>
                  <span className="text-xl font-semibold">
                    {val.event_name} <br />
                  </span>
                  <p className="pl-4 mb-2">{val.event_details}</p>
                </li>
              ))}
            </p>
            <p>
              <span className="font-semibold">Researches:</span>
              {college?.researches.map((val, index) => (
                <li className="list-decimal" key={index}>
                  <span className="text-xl font-semibold">
                    {val.research_name}
                  </span>
                  <br />
                  <p className="pl-4 mb-2">{val.research_details}</p>
                </li>
              ))}
            </p>
          </div>
          <p className="flex gap-3">
            <span className="font-semibold">Sports: </span>
            {college?.sports.map((val, index) => (
              <span className="list-decimal" key={index}>
                {val.sports_name},
              </span>
            ))}
          </p>
          <div className="card-actions justify-end">
            <Link to={{ pathname: `/admission-form/${college?._id}` }}>
              <button className="btn primary-btn">Get Admission</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeDetails;
