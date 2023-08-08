import { NavLink } from "react-router-dom";
import './Navbar.css'
import { AiFillMessage } from 'react-icons/ai';
import { BiSolidBellRing } from 'react-icons/bi';

const Navbar = () => {

    const Navigation = () => (
        <>
          <p className="relative mx-4  rounded-xl">
          <NavLink
            to="/"
            title="home"
            className={({ isActive }) =>
              isActive ? " underline-cus" : ""
            }
          >
            <p className="px-4 py-4">Home</p>
          </NavLink>
        </p>     
        <p className="relative mx-4  rounded-xl">
          <NavLink
            to="/service"
            title="service"
            className={({ isActive }) =>
              isActive ? " underline-cus" : ""
            }
          >
            <p className="px-4 py-4">Service</p>
          </NavLink>
        </p>
        <p className="relative mx-4  rounded-xl">
          <NavLink
            to="/contact"
            title="contact us"
            className={({ isActive }) =>
              isActive ? " underline-cus" : ""
            }
          >
            <p className="px-4 py-4">Contact us</p>
          </NavLink>
        </p>
        <p className="relative mx-4  rounded-xl">
          <NavLink
            to="/projects"
            title="Our Projects"
            className={({ isActive }) =>
              isActive ? " underline-cus" : ""
            }
          >
            <p className="px-4 py-4">Our Project</p>
          </NavLink>
        </p>
        </>
      );


    return (
        <div className="navbar py-0 bg-gradient-to-r from-[#5e50ad] to-[#73539e] px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <Navigation />
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-white">MOCKUPS FOR FREE</a>
          <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
          <Navigation />
          </ul>
        </div>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div> */}
        <div className="navbar-end">
            <p><AiFillMessage className="text-2xl text-white" /></p>
            <span className="custom-divider"></span>
            <p><BiSolidBellRing className="text-2xl text-white" /></p>
            <span className="custom-divider"></span>
          
          {/* -------- user profile */}
           <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.ibb.co/23dGSyY/images.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>

    <span className="custom-divider"></span>

    {/* get started button */}
    <button className="btn border-0 
          rounded-full bg-gradient-to-b text-white text-sm md:text-xl from-[#63a107] to-[#85d905] hover:from-[#85d905] hover:to-[#63a107]">GET STARTED</button>
    </div>
        </div>
     
    );
};

export default Navbar;