// import { useContext } from "react";
// import { AuthContext } from "../../../Providers/AuthProvider";

// const DashboardTop = () => {
//   const { user }: any = useContext(AuthContext);
//   return (
//     <div className="bg-[#088395] text-white p-3 border-b-4 border-[#05BFDB] flex justify-center items-center gap-4 shadow-lg">
//       <img className="rounded-full w-11" src={user.photoURL} alt="" />
//       <div>
//         <h1>{user?.displayName}</h1>
//         <small>{user?.email}</small>
//       </div>
//     </div>
//   );
// };

// export default DashboardTop;

const DashboardTop = () => {
  return (
    <div className=" h-10 md:h-24 bg-gradient-to-r from-[#95d3a2] to-[#359fac] md:py-0 pt-0 pb-16 sticky top-0">
      <img
        className="md:w-24 w-16 mx-auto"
        src="https://i.ibb.co/bgbkbc2/logo.png"
        alt="Logo"
      />
    </div>
  );
};

export default DashboardTop;
