import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import useColleges from "../../hooks/useColleges";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useMyAdmission from "../../hooks/useMyAdmission";

const AdmissionForm = () => {
  const { id } = useParams();
  const [colleges] = useColleges();
  const [myAdmission] = useMyAdmission();
  const { user } = useContext(AuthContext);

  const gotAdmission = myAdmission?.user_email === user?.email;

  // console.log(myAdmission.user_email);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const selectCollege = colleges.find((college) => college._id === id);
  //   console.log(id);
  //   console.log(selectCollege);
  // console.log(user);

  console.log(gotAdmission);

  const handleAdmission = (data) => {
    const admissionInfo = {
      user_name: data.name,
      user_email: data.user_email,
      user_photo: data.user_photo,
      user_role: "Student",
      college_id: id,
      college_name: data.college_name,
      subject: data.subject,
      birth_date: data.birth_date,
      gender: data.gender,
      phone_number: data.phone_number,
      address: data.address,
    };
    console.log(admissionInfo);

    fetch("https://edu-hub-server-liart.vercel.app/admissions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(admissionInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Admission successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <section>
      <Helmet>
        <title>EduHub | Admission Form</title>
      </Helmet>
      <div className="relative my-20 flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-[#1eb2a6] uppercase">
            Admission Form
          </h1>
          <form onSubmit={handleSubmit(handleAdmission)} className="mt-6">
            <div className="mb-2">
              <label className="block text-sm font-semibold text-[#1eb2a6]">
                College Name*
              </label>
              <input
                type="text"
                defaultValue={selectCollege?.college_name}
                {...register("college_name", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {errors.college_name && (
              <span className="text-red-500">College Name is required.</span>
            )}
            <div className="mb-2">
              <label className="block text-sm font-semibold text-[#1eb2a6]">
                Name*
              </label>
              <input
                type="text"
                placeholder="Your Name"
                defaultValue={user?.displayName}
                {...register("name", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {errors.name && (
              <span className="text-red-500">Name is required.</span>
            )}
            <div className="mb-2">
              <label className="block text-sm font-semibold text-[#1eb2a6]">
                Email*
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                defaultValue={user?.email}
                {...register("user_email", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {errors.user_email && (
              <span className="text-red-500">Email is required.</span>
            )}
            <div className="mb-2 relative">
              <label className="block text-sm font-semibold text-[#1eb2a6]">
                Subject*
              </label>
              <input
                name="text"
                placeholder="Subject"
                {...register("subject", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {errors.subject && (
              <span className="text-red-500">Subject is required.</span>
            )}
            <div className="mb-2">
              <label className="block text-sm font-semibold text-[#1eb2a6]">
                Photo Url*
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo Url"
                defaultValue={user?.photoURL}
                {...register("user_photo", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {errors.user_photo && (
              <span className="text-red-500">User Photo is required.</span>
            )}
            <div className="mb-2 relative w-full grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-[#1eb2a6]">
                  Gender*
                </label>
                <select
                  type="text"
                  name="gender"
                  defaultValue="Select One"
                  {...register("gender", { required: true })}
                  className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option value="">Select One</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              {errors.gender && (
                <span className="text-red-500">User Photo is required.</span>
              )}
              <div>
                <label className=" block text-sm font-semibold text-[#1eb2a6]">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="date_of_birth"
                  id=""
                  {...register("birth_date")}
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
                placeholder="+8801xxxxxxxx"
                {...register("phone_number")}
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
                placeholder="Your Address"
                {...register("address")}
                className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                disabled={gotAdmission}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md  focus:outline-none btn primary-btn"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
