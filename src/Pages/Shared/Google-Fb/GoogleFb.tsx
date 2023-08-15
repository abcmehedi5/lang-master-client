import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const GoogleFb = () => {
    return (
        <div className="flex items-center gap-3 justify-center mt-2 mb-4">
          <button className="btn btn-circle">
            <FcGoogle className="text-2xl" />
          </button>
          <button className="btn btn-circle">
            <FaFacebookF className="text-2xl text-[#1877f2]" />
          </button>
          </div>
    );
};

export default GoogleFb;