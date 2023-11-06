import { NavLink } from "react-router-dom";

const Navbar = () => {
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
        <a className="btnlt">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
