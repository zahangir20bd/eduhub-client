/* eslint-disable react/prop-types */

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div className="w-10/12 md:w-7/12" id="heading">
        <h3 className="text-2xl ml-2 md:ml-40">{subtitle} </h3>
        <h1 className="text-4xl md:text-6xl ml-2 md:ml-40 font-bold my-2">
          {title}{" "}
        </h1>
      </div>
    </>
  );
};

export default Heading;
