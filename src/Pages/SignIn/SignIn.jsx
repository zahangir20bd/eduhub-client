/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

// import useAuth from "../../Hooks/useAuth";
import SocialSignIn from "../../components/SocialSignIn/SocialSignIn";
import { AuthContext } from "../../Providers/AuthProvider";

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  // const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const { logIn } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";

  // Password Show and Hide Button Toggle handler
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Sign In Handler
  const handleSignIn = (data) => {
    console.log(data);
    logIn(data.email, data.password)
      .then((result) => {
        setError("");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign In Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <section className="pt-1">
      <Helmet>
        <title>EduHub | Sign In</title>
      </Helmet>
      <div className="relative mt-10 flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-[#1eb2a6] uppercase">
            Sign In
          </h1>
          {/* onSubmit={handleSubmit(handleSignIn)} */}
          <form onSubmit={handleSubmit(handleSignIn)} className="mt-6">
            <div className="mb-2">
              <label className="block text-sm font-semibold text-[#1eb2a6]">
                Email
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
            <div className="mb-2 relative">
              <label className="block text-sm font-semibold text-[#1eb2a6]">
                Password
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute -right-5 -bottom-[5px] text-lg bg-transparent shadow-none"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
            {error && <span className="text-red-500">{error}</span>}
            <div>
              <Link
                title="TODO Need to Implement"
                className="text-xs text-[#1eb2a6] hover:underline cursor-pointer"
              >
                Forget Password? {/*TODO Need To Implemented*/}
              </Link>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md  focus:outline-none btn primary-btn"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="divider">OR</div>
          <SocialSignIn></SocialSignIn>
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-[#1eb2a6] hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
