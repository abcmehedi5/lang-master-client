import { FcHome } from "react-icons/fc";
import { MdQuiz } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const AdminDashboadLayout = () => {
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
        {/* <ul className="w-64 bg-gradient-to-b h-screen  from-[#0A4D68] to-[#088395] text-white py-3"> */}
        <ul className="w-64 bg-gradient-to-b h-screen  from-[#0A4D68] to-[#088395] text-white py-3 space-y-2">
          <li className="px-5 py-2 transition duration-300 hover:bg-blue-600">
            <Link
              to="/admin-dashboard/user-manage"
              className=" flex gap-2 items-center"
            >
              <FcHome style={{ fontSize: "30px" }} />
              User Manage
            </Link>
          </li>
          <li className="px-5 py-2 transition duration-300 hover:bg-blue-600">
          <Link
              to="/admin-dashboard/add-quize"
              className="flex gap-2 items-center"
            >
              <MdQuiz style={{ fontSize: "30px" }} />
              Add Quiz
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboadLayout;
