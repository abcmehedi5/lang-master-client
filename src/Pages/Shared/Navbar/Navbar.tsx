import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FiLogIn } from "react-icons/fi";
import Notification from "../../Home/notification/Notification";
import useAdmin from "../../../hooks/useAdmin";

const Navbar: React.FC = () => {
  // check admin

  const [isAdmin] = useAdmin();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { user, logOut }: any = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  };

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
          to="/blog"
          title="blog"
          className={({ isActive }) => (isActive ? " underline-cus" : "")}
        >
          <p className="px-4 py-4">Blog</p>
        </NavLink>
      </p>
      <p className="relative mx-4 hover:bg-[#33333345]   rounded-xl">
        <NavLink
          to="/"
          title="contact us"
          className={({ isActive }) => (isActive ? " underline-cus" : "")}
        >
          <p className="px-4 py-4">Contact us</p>
        </NavLink>
      </p>
      <p className="relative mx-4 hover:bg-[#33333345]   rounded-xl">
        <NavLink
          to="/about-us"
          title="Our Classs"
          className={({ isActive }) => (isActive ? " underline-cus" : "")}
        >
          <p className="px-4 py-4">About Us</p>
        </NavLink>
      </p>
      {user && isAdmin && (
        <p className="relative mx-4 hover:bg-[#33333345]   rounded-xl">
          <NavLink
            to="/admin-dashboard"
            title="Our Classs"
            className={({ isActive }) => (isActive ? " underline-cus" : "")}
          >
            <p className="px-4 py-4">Admin</p>
          </NavLink>
        </p>
      )}
    </>
  );

  // -------- navbar end--------
  const ResponsiveIconsSection = () => (
    <div className="flex">{/* message icon */}</div>
  );

  // ----------- get started button --------
  const Getstarted = () => (
    <div>
      <Link to="/user-dashboard/learning">
        {" "}
        <button className="defaultBtn btn-md">GET STARTED</button>
      </Link>
    </div>
  );

  return (
    <div className="navbar sticky top-0 z-10 justify-between py-0 bg-gradient-to-r from-[#376E84] to-[#376E84] px-5">
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
          LANG-MASTER
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

        <Notification></Notification>
        {/* -------- user profile */}
        {user ? (
          <div className="dropdown dropdown-end z-10">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
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
              <button onClick={handleLogout}>
                <li>
                  <a>Logout</a>
                </li>
              </button>
            </ul>
          </div>
        ) : (
          <Link title="login" to="/login">
            <button>
              <FiLogIn className="text-4xl text-white" />
            </button>
          </Link>
        )}

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
