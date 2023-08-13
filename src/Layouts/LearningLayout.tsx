import { Link, Outlet } from "react-router-dom";
import { FcHome, FcReadingEbook, FcBusinessman } from "react-icons/fc";
import { MdLeaderboard } from "react-icons/md";

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
      <div className="drawer-content ">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="w-64 bg-gradient-to-b h-screen  from-[#0A4D68] to-[#088395] text-white py-3">
          <li className="px-5 py-2 hover:bg-blue-600 transition duration-300 mt-4">
            <Link
              to="/user-dashboard/learning"
              className="hover:text-white flex gap-2 items-center"
            >
              <FcHome style={{ fontSize: "30px" }} />
              শিখুন
            </Link>
          </li>
          <li className="px-5 py-2 hover:bg-blue-600 transition duration-300 mt-4">
            <Link
              to="/user-dashboard/leader-board"
              className="hover:text-white flex gap-2 items-center"
            >
              <MdLeaderboard style={{ fontSize: "30px" }} />
              লিডারবোর্ড
            </Link>
          </li>
          <li className="px-5 py-2 hover:bg-blue-600 transition duration-300 mt-4">
            <Link
              to="/user-dashboard/grammar"
              className="hover:text-white flex gap-2 items-center"
            >
              <FcReadingEbook style={{ fontSize: "30px" }} />
              গ্রামার
            </Link>
          </li>
          <li className="px-5 py-2 hover:bg-blue-600 transition duration-300 mt-4">
            <Link
              to="/user-dashboard/profile"
              className="hover:text-white flex gap-2 items-center"
            >
              <FcBusinessman style={{ fontSize: "30px" }} />
              প্রোফাইল
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LearningLayout;
