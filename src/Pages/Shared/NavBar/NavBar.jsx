import { Link } from "react-router-dom";

const NavBar = () => {
  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/colleges">Colleges</Link>
      </li>
      <li>
        <Link>Admission</Link>
      </li>
      <li>
        <Link>My College</Link>
      </li>
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
            src="logo.png"
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
        <Link className="btn btn-ghost primary-btn">Login</Link>
      </div>
    </nav>
  );
};

export default NavBar;
