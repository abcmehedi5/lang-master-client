import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const DashboardTop = () => {
  const { user }: any = useContext(AuthContext);
  return (
    <div className="bg-[#088395] text-white p-3 border-b-4 border-[#05BFDB] flex justify-center items-center gap-4 shadow-lg">
      <img className="rounded-full w-11" src={user.photoURL} alt="" />
      <div>
        <h1>{user?.displayName}</h1>
        <small>{user?.email}</small>
      </div>
    </div>
  );
};

export default DashboardTop;
