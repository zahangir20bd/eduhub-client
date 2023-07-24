import SectionTitle from "../../components/Common/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import useColleges from "../../hooks/useColleges";
import useMyAdmission from "../../hooks/useMyAdmission";
import { Link } from "react-router-dom";

const MyCollege = () => {
  const [colleges] = useColleges();
  const [myAdmission] = useMyAdmission();

  const myCollege = colleges.find(
    (college) => college._id === myAdmission.college_id
  );

  return (
    <section className="mx-2 md:mx-4 mb-20">
      <SectionTitle section_title="Where I got Admission" />
      <Helmet>
        <title>EduHub | My College</title>
      </Helmet>
      <div
        key={myCollege?._id}
        className="card w-full md:w-3/4 mx-auto bg-base-100 shadow-xl"
      >
        <figure>
          <img src={myCollege?.college_image} alt="College" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{myCollege?.college_name}</h2>
          <p>
            <span className="font-semibold">Admission Dates: </span>
            {myCollege?.admission_dates}
          </p>
          <p>
            <span className="font-semibold">Admission Process: </span>
            {myCollege?.admission_process}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <p>
              <span className="font-semibold">Events:</span>
              {myCollege?.events.map((val, index) => (
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
              {myCollege?.researches.map((val, index) => (
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
            {myCollege?.sports.map((val, index) => (
              <span className="list-decimal" key={index}>
                {val.sports_name},
              </span>
            ))}
          </p>
          <div className="card-actions justify-end">
            <Link to={{ pathname: `/addreview/${myCollege?._id}` }}>
              <button className="btn primary-btn">Make Review</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCollege;
