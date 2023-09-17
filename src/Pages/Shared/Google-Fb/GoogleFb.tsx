import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useToast from "../../../hooks/useToast";
const GoogleFb = () => {
  const { logingoogle }: any = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  const [successAlert] = useToast();
  const from = location.state?.pathname || "/";

  const handleGoogle = () => {
    logingoogle()
      .then((result: any) => {
        const loggedInUser = result.user;

        // send user data on mongodb start.................
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          phoneNumber: "",
          image: loggedInUser.photoURL,
          score: 0,
          role: "user",
          unit: ["1"],
        };
        axiosSecure
          .post("/users/user", saveUser)
          .then(() => {
            successAlert("login successfull");
          })
          .catch(() => {});

        // send user data on mongodb end.................

        navigate(from, { replace: true });
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  };

  return (
    <div className="mt-2 mb-4 w-full">
      <div className="w-full mb-3">
        <button
          onClick={handleGoogle}
          className="w-full btn transition-all duration-200 border-1 border-gray-800 hover:border-1 hover:border-gray-800 hover:ring-2 ring-offset-1 ring-gray-200"
        >
          <p className="flex items-center gap-2">
            <FcGoogle className="text-2xl" />{" "}
            <span className="text-base normal-case font-semibold">Google</span>
          </p>
        </button>
      </div>
      <div className="w-full">
        <button className="w-full btn transition-all duration-200 border-1 border-gray-800 hover:border-1 hover:border-gray-800 hover:ring-2 ring-offset-1 ring-gray-200">
          <p className="flex items-center gap-2">
            <FaFacebookF className="text-2xl text-[#1877f2]" />
            <span className="text-base normal-case font-semibold">
              Facebook
            </span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default GoogleFb;
