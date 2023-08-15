import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
const GoogleFb = () => {
  const { logingoogle } = useContext(AuthContext);

  const handleGoogle = () => {
    logingoogle()
      .then((result) => {
        const userlogin = result.user;
        console.log(userlogin);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="flex items-center gap-3 justify-center mt-2 mb-4">
      <button onClick={handleGoogle} className="btn btn-circle">
        <FcGoogle className="text-2xl" />
      </button>
      <button className="btn btn-circle">
        <FaFacebookF className="text-2xl text-[#1877f2]" />
      </button>
    </div>
  );
};

export default GoogleFb;
