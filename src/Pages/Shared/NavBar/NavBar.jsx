import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaSignOutAlt, FaUser, FaUserAlt } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isProfileVisible, setProfileVisible] = useState(false);

  const view = () => {
    setProfileVisible(true);
  };

  const hide = () => {
    setProfileVisible(false);
  };

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/colleges">Colleges</Link>
      </li>
      <li>
        <Link to="/admission">Admission</Link>
      </li>
      {user && (
        <li>
          <Link>My College</Link>
        </li>
      )}
    </>
  );
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm z-20 bg-base-100 bg-opacity-50 dropdown-content mt-3  p-2 shadow rounded-box w-52"
          >
            {navMenu}
          </ul>
        </div>
        <div>
          <img
            className="btn btn-ghost normal-case text-xl w-36 p-1"
            src={logo}
            alt="Logo"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>

      <div className="navbar-end">
        <div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto mr-2"
            />
          </div>
        </div>
        {user ? (
          <div className="relative">
            <div
              type="button"
              onMouseEnter={view}
              onMouseLeave={hide}
              className="flex items-center justify-center w-14 h-10 rounded-full focus:outline-none"
            >
              {user?.photoURL ? (
                <img
                  className="w-14 h-14 rounded-full border-2 border-gray-400 shadow-lg"
                  src={user?.photoURL}
                  alt="User Image"
                />
              ) : (
                <FaUserAlt className="text-6xl" />
              )}
            </div>

            {isProfileVisible && (
              <div
                onMouseEnter={view}
                onMouseLeave={hide}
                className="absolute z-20 -right-2 top-12 bg-white  py-2 w-52 rounded shadow-lg transition-opacity duration-1000"
              >
                <h1 className="ps-4 pr-2 py-2 font-bold">
                  {user?.displayName}
                </h1>
                <div className="px-4 py-2 w-full text-left block">
                  <NavLink>
                    <div className="flex items-center hover:text-[#1eb2a6] gap-2">
                      <FaUser className="text-lg" /> <span>View Profile</span>
                    </div>
                  </NavLink>
                </div>

                <div
                  onClick={handleSignOut}
                  className="block px-4 w-full text-left"
                >
                  <div className="flex items-center hover:text-[#1eb2a6] gap-2 cursor-pointer">
                    <FaSignOutAlt className="text-lg" /> <span>Sign Out</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="">
            <NavLink to="/signin" className="btn primary-btn">
              Sign In
            </NavLink>
          </div>
        )}
        {/* {user ? (
          <div onClick={handleSignOut} className="btn btn-ghost primary-btn">
            Sign Out
          </div>
        ) : (
          <Link to="/signin" className="btn btn-ghost primary-btn">
            Sign In
          </Link>
        )} */}
      </div>
    </nav>
  );
};

export default NavBar;
