import { useEffect, useState } from "react";
import SectionBanner from "../../components/SectionBanner/SectionBanner";
import { Link } from "react-router-dom";

const AllColleges = () => {
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
      <SectionBanner heading="Colleges" subHeading="Top Range Colleges" />
      <div className="w-full my-24 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colleges.map((college, index) => (
          <div key={index} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img src={college.college_image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{college.college_name}</h2>
              <p>
                <span className="font-semibold">Admission Dates: </span>
                {college.admission_dates}
              </p>
              <div className="grid grid-cols-2 gap-3">
                <p>
                  <span className="font-semibold">Events:</span>
                  {college.events.map((val, index) => (
                    <li className="list-decimal" key={index}>
                      {val.event_name}
                    </li>
                  ))}
                </p>
                <p>
                  <span className="font-semibold">Researches:</span>
                  {college.researches.map((val, index) => (
                    <li className="list-decimal" key={index}>
                      {val.research_name}
                    </li>
                  ))}
                </p>
              </div>
              <p className="flex gap-3">
                <span className="font-semibold">Sports: </span>
                {college.sports.map((val, index) => (
                  <span className="list-decimal" key={index}>
                    {val.sports_name},
                  </span>
                ))}
              </p>

              <div className="card-actions justify-between">
                <Link to="/admission-form">
                  <button className="btn primary-btn">Get Admission</button>
                </Link>
                <button className="btn primary-btn">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllColleges;
