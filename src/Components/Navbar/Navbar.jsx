import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

import userLogo from "../../../src/assets/Banner/user.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error.message));
  };
  const links = (
    <>
      <li>
        <NavLink to="/">
          {({ isActive }) => (
            <span className={isActive ? "text-dkCoral" : ""}>Home</span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/AllBooks">
          {({ isActive }) => (
            <span className={isActive ? "text-dkCoral" : ""}>All Books</span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="AddBooks">
          {({ isActive }) => (
            <span className={isActive ? "text-dkCoral" : ""}>Add Books</span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/BorrowedBooks">
          {({ isActive }) => (
            <span className={isActive ? "text-dkCoral" : ""}>
              Borrowed Books
            </span>
          )}
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-ltBgPrimary text-ltBlueDeep tracking-wide">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="lg:hidden">
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
            className="dropdown-content space-y-1 mt-3 z-[1] p-2 shadow bg-ltBgSecondary rounded-box w-52 pl-3"
          >
            {links}
          </ul>
        </div>

        <a className="text-xl md:text-2xl font-extrabold transform -rotate-90 text-dkCoral">
          KDL
        </a>
        <a className="text-lg md:text-xl font-extrabold">KnowledgeLink</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 space-x-5">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <p className="text-sm font-semibold text-neutralDGrey dark:text-color-secondary mr-1 hidden md:block">
            {user.displayName}
          </p>
        ) : (
          ""
        )}
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full mr-1">
            <img src={user ? user?.photoURL : userLogo} />
          </div>
        </label>
        {user ? (
          <button onClick={handleLogout} className="btnlt px-2">
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btnlt px-2">Login</button>
          </Link>
        )}
        {/* <Link to="/login">
          <button className="signbtn text-neutralSilver">Login</button>
        </Link> */}
        {/* <div className="flex flex-col md:flex-row items-center justify-center  md:gap-2 pl-1 md:px-2">
          {option?.map((opt) => (
            <button
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={` ${theme === opt.text && "text-sky-600 text-lg"}`}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
