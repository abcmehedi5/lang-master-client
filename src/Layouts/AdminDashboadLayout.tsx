import { Helmet } from "react-helmet-async";
import {  } from "react-icons/fc";
import { MdPayments } from "react-icons/md";
import { IoMdListBox } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import DashboardTop from "../Pages/Shared/DashboardTop/DashboardTop";
import { FaUserAlt } from "react-icons/fa";
import { AiFillFileAdd, AiFillHome } from "react-icons/ai";
import { IoBookSharp } from "react-icons/io5";
import { BiSolidBookAdd } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
const AdminDashboadLayout = () => {
  return (
    <div className="drawer lg:drawer-open ">
      <Helmet>
        <title> Admin | Lang Master </title>
      </Helmet>
      {/*background blur color */}

      <div className=" -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
        <div
          className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-10 blur-lg filter"
          style={{
            background:
              "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
          }}
        ></div>
      </div>

      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content m-10 ">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <HiOutlineMenu style={{ fontSize: "30px" }}/>
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="w-64 bg-gradient-to-b md:h-screen h-full bg-gray-100  space-y-2">
          {/* dashboard  nav top */}
          <DashboardTop></DashboardTop>
          <li className="px-5 transition duration-300 hover:bg-blue-600 hover:text-white">
            <NavLink
              to="/admin-dashboard/user-manage"
              className=" flex gap-2 items-center"
            >
              <FaUserAlt style={{ fontSize: "30px" }} />
              User Manage
            </NavLink>
          </li>
          <li className="px-5 transition duration-300 hover:bg-blue-600 hover:text-white">
            <NavLink
              to="/admin-dashboard/add-quize"
              className="flex gap-2 items-center"
            >
              <AiFillFileAdd style={{ fontSize: "30px" }} />
              Add Quiz
            </NavLink>
          </li>
          {/* <li className="px-5 transition duration-300 hover:bg-blue-600 hover:text-white">
            <NavLink
              to="/admin-dashboard/add-topics"
              className="flex gap-2 items-center"
            >
              <MdQuiz style={{ fontSize: "30px" }} />
              Add Topics
            </NavLink>
          </li> */}

          <li className="px-5 transition duration-300 hover:bg-blue-600">
            <NavLink
              to="/admin-dashboard/update-question"
              className="flex gap-2 items-center"
            >
              <IoMdListBox style={{ fontSize: "30px" }} />
              All Units
            </NavLink>
          </li>
          <li className="px-5 transition duration-300 hover:bg-blue-600">
            <NavLink
              to="/admin-dashboard/add-unit"
              className="flex gap-2 items-center"
            >
              <BiSolidBookAdd style={{ fontSize: "30px" }} />
              Add Units
            </NavLink>
          </li>
          <li className="px-5 transition duration-300 hover:bg-blue-600">
            <NavLink
              to="/admin-dashboard/allPayment"
              className="flex gap-2 items-center"
            >
              <MdPayments style={{ fontSize: "30px" }} />
              All Payments
            </NavLink>
          </li>
          <li className="px-5 transition duration-300 hover:bg-blue-600">
            <NavLink
              to="/admin-dashboard/allbuybook"
              className="flex gap-2 items-center"
            >
              <IoBookSharp style={{ fontSize: "30px" }} />
              All Buy Books
            </NavLink>
          </li>
          <li className="px-5 transition duration-300 hover:bg-blue-600">
            <NavLink to="/" className="flex gap-2 items-center">
              <AiFillHome style={{ fontSize: "30px" }} />
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboadLayout;
