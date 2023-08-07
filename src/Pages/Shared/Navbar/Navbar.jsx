import { useState } from 'react';
import {FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className='bg-blue-200'>
      <nav className="lg:py-0 md:py-5 sm:py-6 relative flex flex-wrap items-center justify-between px-2 mb-3 md:items-center md:justify-between max-w-screen-xl mx-auto lg:px-10">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-black"
              href="#pablo"
            >
              slate Tailwind Starter Kit
            </Link>
            <button
              className="bg-transparent cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {/* Apply "text-black" class to change the icon color to black */}
              <FaBars></FaBars>
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
                  className="px-3 pt-5 flex items-center text-md uppercase leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-md leading-lg text-black opacity-75"></i><span className="ml-2">Features</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 pt-5 flex items-center text-md uppercase leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-md leading-lg text-black opacity-75"></i><span className="ml-2">Solutions</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 pt-5 flex items-center text-md uppercase leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-md leading-lg text-black opacity-75"></i><span className="ml-2">Plans</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 pt-5 flex items-center text-md uppercase leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  {/* Apply "text-black" class to change the icon color to black */}
                  <i className="fab fa-twitter text-md leading-lg text-black opacity-75"></i><span className="ml-2">Pricing</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 lg:pt-5 lg:pe-10 md:py-3 sm:py-3 flex items-center text-md uppercase leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  {/* Apply "text-black" class to change the icon color to black */}
                  <i className="fab fa-pinterest text-md leading-lg text-black opacity-75"></i><span className="ml-2">Resources</span>
                </Link>
              </li>
              <button className='bg-blue-600 hover:bg-blue-700 py-5 px-10 text-md text-white'>
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
