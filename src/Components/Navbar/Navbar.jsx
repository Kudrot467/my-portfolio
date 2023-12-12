import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks=<>
    <li className="mr-2">
        {" "}
        <NavLink
          className="text-lg "
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              background: isActive ? "white" : "#fd670a",
              textDecoration: isActive ? "underline" : "",
              color: isActive ? "#fd670a" : "white",
            };
          }}
          to="/"
        >
          Home
        </NavLink>{" "}
      </li>
    <li className="mr-2">
        {" "}
        <NavLink
          className="text-lg "
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              background: isActive ? "white" : "#fd670a",
              textDecoration: isActive ? "underline" : "",
              color: isActive ? "#fd670a" : "white",
            };
          }}
          to="/about"
        >
         About Me
        </NavLink>{" "}
      </li>
    
    </>

  return (
    <div className="max-w-5xl mx-auto">
      <div>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <h1 className="text-[#181818] font-extrabold text-2xl">K<span className="text-[#fd670a]">u</span>d<span className="text-[#fd670a]">r</span>ot </h1>
          </div>
          
          <div className="navbar-end ">
            <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navLinks}
            </ul>
            </div>
            <a className="btn bg-[#fd670a] text-white text-lg font-semibold hover:bg-white hover:text-[#fd670a] hover:font-bold">Hire Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
