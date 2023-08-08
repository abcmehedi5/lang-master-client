import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { AiFillMessage } from "react-icons/ai";
import { BiSolidBellRing } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const Navigation = () => (
    <>
      <p className="relative mx-4 hover:bg-[#33333345]  rounded-xl">
        <NavLink
          to="/"
          title="home"
          className={({ isActive }) => (isActive ? " underline-cus" : "")}
        >
          <p className="px-4 py-4">Home</p>
        </NavLink>
      </p>
      <p className="relative mx-4 hover:bg-[#33333345]   rounded-xl">
        <NavLink
          to="/service"
          title="service"
          className={({ isActive }) => (isActive ? " underline-cus" : "")}
        >
          <p className="px-4 py-4">Service</p>
        </NavLink>
      </p>
      <p className="relative mx-4 hover:bg-[#33333345]   rounded-xl">
        <NavLink
          to="/contact"
          title="contact us"
          className={({ isActive }) => (isActive ? " underline-cus" : "")}
        >
          <p className="px-4 py-4">Contact us</p>
        </NavLink>
      </p>
      <p className="relative mx-4 hover:bg-[#33333345]   rounded-xl">
        <NavLink
          to="/projects"
          title="Our Projects"
          className={({ isActive }) => (isActive ? " underline-cus" : "")}
        >
          <p className="px-4 py-4">Our Project</p>
        </NavLink>
      </p>
    </>
  );

  // -------- navbar end--------
  const ResponsiveIconsSection = () => (
    <div className="flex">
      <button>
        <AiFillMessage className="text-4xl " />
      </button>
      <span className="custom-divider"></span>
      <button>
        <BiSolidBellRing className="text-4xl " />
      </button>
      <span className="custom-divider"></span>
    </div>
  );

  // ----------- get started button --------
  const Getstarted = () => (
    <div>
      <button className="defaultBtn">GET STARTED</button>
    </div>
  );

  return (
    <div className="navbar justify-between py-0 bg-gradient-to-r from-[#5e50ad] to-[#73539e] px-5">
      <div className="navbar-start flex">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <p className="text-3xl text-white">
              <GiHamburgerMenu />
            </p>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm flex items-center dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-52"
          >
            <Navigation />

            <div className="ml-5 my-2">
              <ResponsiveIconsSection />
            </div>

            <Getstarted />
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
          MOCKUPS FOR FREE
        </Link>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <Navigation />
          </ul>
        </div>
      </div>

      <div className="md:navbar-end flex items-center md:pb-0 ml-4 pb-2">
        <div className="hidden lg:flex text-white">
          <ResponsiveIconsSection />
        </div>

        {/* -------- user profile */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.ibb.co/23dGSyY/images.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>

        {/* get started button */}
        <div className="hidden lg:flex">
          <span className="custom-divider pb-14"></span>
          <Getstarted />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
