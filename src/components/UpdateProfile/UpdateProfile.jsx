import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { id } = useParams();
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch("https://edu-hub-server-liart.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data);
      });
  }, []);
  const myProfile = profiles.find((profile) => profile._id === id);

  //   console.log(myProfile);

  const handleUpdate = (data) => {
    // console.log(data);
    const updateProfile = {
      user_image: data.user_image,
      user_role: data.user_role,
      gender: data.gender,
      date_of_birth: data.date_of_birth,
      phone_number: data.phone_number,
      address: data.address,
    };
    console.log(updateProfile);

    fetch(`https://edu-hub-server-liart.vercel.app/users/${myProfile?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProfile),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Profile Update Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
          navigate("/profile");
        }
      });
  };

  return (
    <section className="my-10">
      <Helmet>
        <title>EduHub | Profile</title>
      </Helmet>
      <div className=" w-full flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl mb-10 font-semibold text-center text-[#1eb2a6] uppercase">
            Update Profile
          </h1>
          <div>
            <h2 className="text-xl font-bold text-gray-600">
              Name: {myProfile?.user_name}
            </h2>

            <h3 className="text-lg font-semibold text-gray-600 mt-2">
              Email: {myProfile?.user_email}
            </h3>
          </div>
          <div>
            <form onSubmit={handleSubmit(handleUpdate)} className="mt-10">
              <div className="mb-2">
                <label className="block text-sm font-semibold text-[#1eb2a6]">
                  Photo Url*
                </label>
                <input
                  type="text"
                  name="user_image"
                  placeholder="Photo Url"
                  defaultValue={myProfile?.user_image}
                  {...register("user_image")}
                  className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-[#1eb2a6]">
                  User Role
                </label>
                <input
                  type="text"
                  placeholder="User Role"
                  defaultValue={myProfile?.user_role}
                  {...register("user_role")}
                  className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2 relative w-full grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#1eb2a6]">
                    Gender
                  </label>
                  <select
                    type="text"
                    name="gender"
                    {...register("gender")}
                    defaultValue={myProfile?.gender}
                    className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    <option value="">Select One</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div>
                  <label className=" block text-sm font-semibold text-[#1eb2a6]">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="date_of_birth"
                    defaultValue={myProfile?.date_of_birth}
                    {...register("date_of_birth")}
                    id=""
                    className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-[#1eb2a6]">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone_number"
                  {...register("phone_number")}
                  placeholder="+8801xxxxxxxx"
                  defaultValue={myProfile?.phone_number}
                  className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-[#1eb2a6]">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  {...register("address")}
                  placeholder="Your Address"
                  defaultValue={myProfile?.address}
                  className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide shadow-none text-white transition-colors duration-200 transform rounded-md  focus:outline-none btn primary-btn"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateProfile;
