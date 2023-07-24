/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddReview = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddReview = (data) => {
    console.log(data);
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Review Add Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <section className="pt-1 mb-20">
      <Helmet>
        <title>EduHub | Add Review</title>
      </Helmet>
      <div className="relative mt-20 flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-[#1eb2a6] uppercase">
            Add Review Form
          </h1>
          <form onSubmit={handleSubmit(handleAddReview)} className="mt-6">
            <div className="mb-2">
              <label className="block text-sm font-semibold text-[#1eb2a6]">
                Reviewer Name*
              </label>
              <input
                type="text"
                placeholder="Your Name"
                defaultValue={user?.displayName}
                {...register("reviewer_name", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {errors.reviewer_name && (
              <span className="text-red-500">Reviewer Name is required.</span>
            )}
            <div className="mb-2">
              <label className="block text-sm font-semibold text-[#1eb2a6]">
                Reviewer Image*
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo Url"
                defaultValue={user?.photoURL}
                {...register("reviewer_image", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {errors.reviewer_image && (
              <span className="text-red-500">Reviewer Image is required</span>
            )}
            <div className="mb-2">
              <label className="block text-sm font-semibold text-[#1eb2a6]">
                Reviewer Role*
              </label>
              <input
                type="text"
                name="photo"
                {...register("reviewer_role", { required: true })}
                placeholder="Role"
                defaultValue="Student"
                className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {errors.reviewer_role && (
              <span className="text-red-500">Reviewer Role is required</span>
            )}
            <div className="mb-2">
              <label className="block text-sm font-semibold text-[#1eb2a6]">
                Ratings*
              </label>
              <input
                type="number"
                name="ratings"
                {...register("ratings", { required: true })}
                placeholder="out of 5"
                className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-[#1eb2a6]">
                Review*
              </label>
              <textarea
                type="text"
                name="address"
                {...register("review", { required: true })}
                placeholder="Your Address"
                className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md shadow-none focus:outline-none btn primary-btn"
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

export default AddReview;
