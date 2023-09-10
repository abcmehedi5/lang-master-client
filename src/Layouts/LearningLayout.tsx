import { NavLink, Outlet } from "react-router-dom";
import {
  FcHome,
  FcReadingEbook,
  FcBusinessman,
  FcReading,
  FcTodoList,
  FcIdea,
} from "react-icons/fc";
import DashboardTop from "../Pages/Shared/DashboardTop/DashboardTop";
import { HiOutlineMenu } from "react-icons/hi";

const LearningLayout = () => {
  return (
    <div className="drawer lg:drawer-open ">
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
      <div className="drawer-content m-4 ">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <HiOutlineMenu style={{ fontSize: "20px" }} />
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        {/* <ul className="w-64 bg-gradient-to-b h-screen  from-[#0A4D68] to-[#088395] text-white py-3"> */}
        {/* <ul className="w-64 bg-gradient-to-b h-screen  from-[#0A4D68] to-[#088395] text-white py-3"> */}
        <ul className="w-64 bg-gradient-to-b h-screen text-black bg-gray-100 ">
          <DashboardTop></DashboardTop>
          <li className="px-5 py-1 hover:bg-[#43A7AB] transition duration-300 mt-2">
            <NavLink
              to="/user-dashboard/learning"
              className="hover:text-white flex gap-2 items-center"
            >
              <FcReading
                style={{
                  fontSize: "35px",
                  background: "white",
                  padding: "5px",
                  borderRadius: "50%",
                }}
              />
              শিখুন
            </NavLink>
          </li>

          <li className="px-5 py-1 hover:bg-[#43A7AB] transition duration-300 mt-2">
            <NavLink
              to="/user-dashboard/quiz"
              className="hover:text-white flex gap-2 items-center"
            >
              <FcIdea
                style={{
                  fontSize: "35px",
                  background: "white",
                  padding: "5px",
                  borderRadius: "50%",
                }}
              />
              কুইজ
            </NavLink>
          </li>
          <li className="px-5 py-1 hover:bg-[#43A7AB] transition duration-300 mt-2">
            <NavLink
              to="/user-dashboard/grammar"
              className="hover:text-white flex gap-2 items-center"
            >
              <FcReadingEbook
                style={{
                  fontSize: "35px",
                  background: "white",
                  padding: "5px",
                  borderRadius: "50%",
                }}
              />
              গ্রামার
            </NavLink>
          </li>

          <li className="px-5 py-1 hover:bg-[#43A7AB] transition duration-300 mt-2">
            <NavLink
              to="/user-dashboard/books"
              className="hover:text-white flex gap-2 items-center"
            >
              <FcReadingEbook
                style={{
                  fontSize: "35px",
                  background: "white",
                  padding: "5px",
                  borderRadius: "50%",
                }}
              />
              বই কিনুন
            </NavLink>
          </li>
          <li className="px-5 py-1 hover:bg-[#43A7AB] transition duration-300 mt-2">
            <NavLink
              to="/user-dashboard/leader-board"
              className="hover:text-white flex gap-2 items-center"
            >
              <FcTodoList
                style={{
                  fontSize: "35px",
                  background: "white",
                  padding: "5px",
                  borderRadius: "50%",
                }}
              />
              লিডারবোর্ড
            </NavLink>
          </li>

          <li className="px-5 py-1 hover:bg-[#43A7AB] transition duration-300 mt-2">
            <NavLink
              to="/user-dashboard/shop"
              className="hover:text-white flex gap-2 items-center"
            >
              <FcReadingEbook style={{ fontSize: "30px" }} />
              শপ
            </NavLink>
          </li>
          <li className="px-5 py-1 hover:bg-[#43A7AB] transition duration-300 mt-4">
            <NavLink
              to="/user-dashboard/profile"
              className="hover:text-white flex gap-2 items-center"
            >
              <FcBusinessman
                style={{
                  fontSize: "35px",
                  background: "white",
                  padding: "5px",
                  borderRadius: "50%",
                }}
              />
              প্রোফাইল
            </NavLink>
          </li>

          <li className="px-5 py-1 hover:bg-[#43A7AB] transition duration-300 mt-2">
            <NavLink
              to="/"
              className="hover:text-white flex gap-2 items-center"
            >
              <FcHome
                style={{
                  fontSize: "35px",
                  background: "white",
                  padding: "5px",
                  borderRadius: "50%",
                }}
              />
              হোম পেজ
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LearningLayout;
