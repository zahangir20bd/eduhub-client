import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const Profile = () => {
  // const { email } = useParams();
  const { user } = useContext(AuthContext);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("https://edu-hub-server-liart.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data);
      });
  }, []);

  const myProfile = profiles.find(
    (profile) => profile.user_email === user?.email
  );
  console.log(myProfile);

  return (
    <section>
      <Helmet>
        <title>EduHub | Profile</title>
      </Helmet>
      <div className=" w-full flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl mb-10 font-semibold text-center text-[#1eb2a6] uppercase">
            My Profile
          </h1>
          <div className="w-full text-right">
            <Link to={{ pathname: `/editprofile/${myProfile?._id}` }}>
              <button className="outline-btn shadow-none p-2">
                Edit Profile
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <img
                className="w-44 h-48 rounded-lg"
                src={myProfile?.user_image}
                alt=""
              />
            </div>
            <div className="my-8">
              <h2 className="text-xl font-bold text-gray-600">
                Name: {myProfile?.user_name}
              </h2>
              <h3 className="text-lg font-semibold text-gray-600 mt-2">
                Email: {myProfile?.user_email}
              </h3>

              <p className="text-lg mt-5">Role: {myProfile?.user_role}</p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 md:px-10 md:mt-5">
              <p>Gender: {myProfile?.gender}</p>
              <p>Date of Birth: {myProfile?.date_of_birth}</p>
            </div>
            <div className="grid grid-cols-2 md:px-10 md:mt-5">
              <p>Phone: {myProfile?.phone_number}</p>
              <p>Address: {myProfile?.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
