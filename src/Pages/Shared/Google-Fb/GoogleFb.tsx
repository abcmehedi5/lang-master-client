import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const GoogleFb = () => {
  const { logingoogle }: any = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
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
          score:0,
          role: "user",
        };
        axiosSecure
          .post("/users/user", saveUser)
          .then(() => {
            alert("login successfull");
          })
          .catch((error) => {
            alert(error);
          });

        // send user data on mongodb end.................

        navigate(from, { replace: true });
      })
      .catch((err: any) => {
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
