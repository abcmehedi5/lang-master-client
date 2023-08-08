import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className='bg-blue-200'>
      <nav className="lg:py-0 md:py-5 py-3 relative flex flex-wrap items-center px-2 mb-3 md:items-center md:justify-between max-w-screen-xl mx-auto lg:px-10">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start pt-2 lg:pt-0 md:pt-0">
            <Link to="/" className="text-md leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-black">
              <span className='font-bold'>Lang </span>Master
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  to="#"
                  className="px-3 pt-5 flex items-center text-md uppercase leading-snug text-black hover:opacity-75"
                >
                  <span className="ml-2">Features</span>
                </Link>
              </li>
              {/* Other list items */}
              <li className="nav-item">
                <Link
                  to="#"
                  className="px-3 lg:pt-5 lg:pe-10 md:py-5 py-5 flex items-center text-md uppercase leading-snug text-black hover:opacity-75"
                >
                  <span className="ml-2">Resources</span>
                </Link>
              </li>
              <button className='bg-blue-600 hover:bg-blue-700 py-4 px-12 text-md text-white'>
                LOG IN
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
