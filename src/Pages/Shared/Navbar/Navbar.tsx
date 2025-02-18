import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Notification from "../../Home/notification/Notification";
import useAdmin from "../../../hooks/useAdmin";
import useUser from "../../../hooks/useUser";

const Navbar: React.FC = () => {
  // check admin

  const [isAdmin] = useAdmin();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { user, logOut }: any = useContext(AuthContext);
  const [singleUser] = useUser();
  console.log(singleUser);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
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
      <p className="relative mx-4 hover:bg-[#33333345] rounded-xl">
        <NavLink
          to="/blog"
          title="blog"
          className={({ isActive }) => (isActive ? " underline-cus" : "")}
        >
          <p className="px-4 py-4">Blog</p>
        </NavLink>
      </p>
      <p className="relative mx-4 hover:bg-[#33333345]  rounded-xl">
        <NavLink
          to="/about-us"
          title="Our Classs"
          className={({ isActive }) => (isActive ? " underline-cus" : "")}
        >
          <p className="px-4 py-4">About Us</p>
        </NavLink>
      </p>
      <p className="relative mx-4 hover:bg-[#33333345]   rounded-xl">
        <NavLink
          to="/translator"
          title="Our Classs"
          className={({ isActive }) => (isActive ? " underline-cus" : "")}
        >
          <p className="px-4 py-4">Translator</p>
        </NavLink>
      </p>
      {user && isAdmin && (
        <p className="relative mx-4 hover:bg-[#33333345]   rounded-xl">
          <NavLink
            to="/admin-dashboard/statistics"
            title="Our Class"
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
    <div
      className="navbar sticky top-0 justify-between py-0 bg-gradient-to-r from-[#95d3a2] to-[#359fac] md:px-10"
      style={{ zIndex: 1000 }}
    >
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

        <Link to="/" className="normal-case text-xl text-white">
          {/* LANG-MASTER */}
          <img
            className="md:w-30 md:h-20 h-[50px] w-20 object-cover"
            // src="https://i.ibb.co/bW9Mtdc/0001-7305240235375941366-removebg-preview.png"
            src="https://i.ibb.co/bgbkbc2/logo.png"
            alt=""
          />
        </Link>
      </div>

      <div className="navbar-center">
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

        {user && <Notification></Notification>}
        {/* -------- user profile */}
        {user ? (
          <div className="dropdown dropdown-end z-[1000000]">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full border">
                {singleUser?.image ? (
                  <img
                    src={singleUser?.image}
                    loading="lazy"
                    alt="Profile Image"
                  />
                ) : (
                  <img
                    src="https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png"
                    loading="lazy"
                    alt="Profile Image"
                  />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[10000000] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="user-dashboard/profile" className="justify-between">
                  Profile
                </Link>
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
            <button className=" text-white btn btn-outline border-2 hover:bg-white hover:text-black rounded-md font-semibold flex items-center">
              {/* <FiLogIn className="text-4xl text-white" /> */}
              Login
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
