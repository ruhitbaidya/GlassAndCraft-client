import { Link, NavLink } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { FaMoon } from "react-icons/fa6";
import { GoSun } from "react-icons/go";
import "./style.css";
import { useContext, useState } from "react";
import { UserContext } from "../../AuthContext/AuthContext";
const Navbar = () => {
  const [themeCha, setThemeCha] = useState(true);
  const { user, logout } = useContext(UserContext);
  console.log(user);
  const handelLogout = () => {
    logout().then(() => {
      console.log("logout");
    });
  };
  const link = (
    <>
      <li>
        {" "}
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/allcraft">All Art & craft </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/addcraft"> Add Craft </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/mycraft"> My Art&Craft List</NavLink>{" "}
      </li>
    </>
  );

  const tagfind = document.getElementsByTagName("html")[0];
  if (themeCha) {
    tagfind.setAttribute("data-theme", "light");
  }
  if (!themeCha) {
    tagfind.setAttribute("data-theme", "dark");
  }

  return (
    <div className="navbar bg-blue-950 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box z-10 bg-blue-950"
          >
            {link}

            <div className="flex items-center">
          <div className="mr-[20px] text-[25px]">
            {themeCha ? (
              <button onClick={() => setThemeCha(!themeCha)}>
                {" "}
                <GoSun />
              </button>
            ) : (
              <button onClick={() => setThemeCha(!themeCha)}>
                <FaMoon />
              </button>
            )}
          </div>

          {user ? (
            <>
              <div className="mr-[20px]">
                <ReactTooltip
                  className="z-10"
                  id="my-tooltip-2"
                  place="bottom"
                  variant="warning"
                  content={user.displayName}
                />
                <img
                  data-tooltip-id="my-tooltip-2"
                  className="bg-white w-[40px] h-[40px] rounded-full my-anchor-element"
                  src={user.photoURL}
                  alt=""
                />
              </div>
              <Link to="/login">
                <button
                  onClick={handelLogout}
                  className="border border-gray-300 px-[25px] py-[6px] rounded-lg"
                >
                  Logout
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="border border-gray-300 px-[25px] py-[6px] rounded-lg">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="border border-gray-300 px-[25px] py-[6px] ml-[5px] rounded-lg">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Glory G&P</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">


  












        <div className="flex-row items-center hidden lg:flex">
          <div className="mr-[20px] text-[25px]">
            {themeCha ? (
              <button onClick={() => setThemeCha(!themeCha)}>
                {" "}
                <GoSun />
              </button>
            ) : (
              <button onClick={() => setThemeCha(!themeCha)}>
                <FaMoon />
              </button>
            )}
          </div>

          {user ? (
            <>
              <div className="mr-[20px]">
                <ReactTooltip
                  className="z-10"
                  id="my-tooltip-2"
                  place="bottom"
                  variant="warning"
                  content={user.displayName}
                />
                <img
                  data-tooltip-id="my-tooltip-2"
                  className="bg-white w-[40px] h-[40px] rounded-full my-anchor-element"
                  src={user.photoURL}
                  alt=""
                />
              </div>
              <Link to="/login">
                <button
                  onClick={handelLogout}
                  className="border border-gray-300 px-[25px] py-[6px] rounded-lg"
                >
                  Logout
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="border border-gray-300 px-[25px] py-[6px] rounded-lg">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="border border-gray-300 px-[25px] py-[6px] ml-[5px] rounded-lg">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
