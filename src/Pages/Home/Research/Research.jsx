import { useState } from "react";
import SectionTitle from "../../../components/Common/SectionTitle/SectionTitle";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Research = () => {
  const [researches, setResearches] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useState(() => {
    fetch("https://edu-hub-server-liart.vercel.app/journals")
      .then((res) => res.json())
      .then((data) => setResearches(data));
  }, []);

  const handleShowCollege = () => {
    setShowAll((prev) => !prev);
  };

  const displayedResearch = showAll ? researches : researches.slice(0, 4);

  // console.log(displayedResearch);

  return (
    <section className="mx-2 md:mx-4">
      <SectionTitle section_title="Important Research Links" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {displayedResearch.map((val) => (
          <div key={val._id} className="bg-[#fff] p-10 ">
            <div className="flex flex-col items-center justify-between h-full">
              <div>
                <p className="text-xl text-center uppercase font-bold mb-5">
                  {val.type}
                </p>
                <div className="flex gap-2 items-center justify-center text-3xl mb-3">
                  <FaEye />{" "}
                  <span className="text-[#1eb2a6] font-bold">{val.views}</span>
                </div>

                <p className="text-xl text-center">{val.title}</p>
              </div>
              <div>
                <Link to={val.links}>
                  <button className=" outline-btn">View Journal</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        {!showAll && (
          <button onClick={handleShowCollege} className="primary-btn">
            View All
          </button>
        )}
      </div>
      {/* <div className="grid grid-cols-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Card Title</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi .
          </p>
          <div className="mt-auto">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Card Title</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi olor
            sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>
          <div className="mb-0">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Research;
