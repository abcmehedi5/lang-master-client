/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { AiFillMessage } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
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
          to="/about-us"
          title="Our Classs"
          className={({ isActive }) => (isActive ? " underline-cus" : "")}
        >
          <p className="px-4 py-4">About Us</p>
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
      <div></div>

      {/* this is toggle for notification bar */}

      <div className="relative dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <button
            onClick={() => setOpen(open)}
            className="btn btn-ghost btn-circle"
          >
            <div className="indicator">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item">
                {notifications.length}
              </span>
            </div>
          </button>
        </label>
        <ul className="menu menu-sm dropdown-content mt-3 z-10 shadow bg-base-100 rounded-box w-72 absolute right-0">
          {notifications.map((_notification) => (
            <li
              onClick={() => setOpen(false)}
              className="text-green-500 flex font-serif"
              key={_notification._id}
            >
              <div className="flex gap-4 ">
                <img className="w-4 bg-red-300  " src={bell} alt="" />
                <span className="justify-between">{_notification.title}</span>
              </div>
              <a className="ml-8" href="">
                <small>{_notification.date}</small>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <span className="custom-divider"></span>
    </div>
  );

  // ----------- get started button --------
  const Getstarted = () => (
    <div>
      <Link to="/user-dashboard/learning">

        <button className="defaultBtn">GET STARTED</button>
      </Link>
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
