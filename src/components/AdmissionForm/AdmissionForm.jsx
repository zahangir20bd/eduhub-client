const AdmissionForm = () => {
  return (
    <section>
      <div className="relative my-20 flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-[#1eb2a6] uppercase">
            Admission Form
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label className="block text-sm font-semibold text-[#1eb2a6]">
                College Name*
              </label>
              <input
                type="text"
                placeholder="College Name"
                className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-[#1eb2a6]">
                Name*
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mb-2">
              <label className="block text-sm font-semibold text-[#1eb2a6]">
                Email*
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mb-2 relative">
              <label className="block text-sm font-semibold text-[#1eb2a6]">
                Subject*
              </label>
              <input
                name="text"
                placeholder="Subject"
                className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-[#1eb2a6]">
                Photo Url*
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo Url"
                className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mb-2 relative w-full grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-[#1eb2a6]">
                  Gender*
                </label>
                <select
                  type="text"
                  name="gender"
                  defaultValue="Select One"
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
                placeholder="+8801xxxxxxxx"
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
                className="block w-full px-4 py-2 mt-2 text-[#0f776e] bg-white border rounded-md focus:border-[#1eb2a6] focus:ring-[#1eb2a6] focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
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
