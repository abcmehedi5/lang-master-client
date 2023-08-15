import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserCredential } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import login from "../../../public/login.svg";
import GoogleFb from "../Shared/Google-Fb/GoogleFb";

const Singup = () => {
  interface FormData {
    email: string;
    password: string;
    createUserEmail: any;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUserEmail } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data: FormData) => {
    console.log(data);
    createUserEmail(data?.email, data?.password)
      .then((result: UserCredential) => {
        const signedup = result.user;
        console.log(signedup);
        navigate(from, { replace: true });
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="my-10">
      <div className="hero-content flex-col md:flex-row-reverse">
        <img className="md:w-1/2" src={login} alt="" />
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
            <h1 className="text-4xl font-semibold">Please Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button
                type="submit"
                className="btn bg-[#0b4e69] text-white hover:bg-[#187296]"
              >
                Sign up
              </button>
              {error && <span className="text-red-500 text-xs">{error}</span>}
            </div>
            <Link to="/login">
              <p className="text-[#407bff] text-sm underline">
                already have an account? login
              </p>
            </Link>
          </form>

          <div className="divider">or</div>
          <GoogleFb></GoogleFb>
        </div>
      </div>
    </div>
  );
};

export default Singup;
