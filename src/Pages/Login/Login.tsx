import { useForm } from "react-hook-form";
import login from "../../../public/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserCredential } from "firebase/auth";
import GoogleFb from "../Shared/Google-Fb/GoogleFb";
import { Helmet } from "react-helmet-async";
import useToast from "../../hooks/useToast";
import { Toaster } from "react-hot-toast";
interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { loginUser }: any = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // toaster message
  const [successAlert, errorAlert] = useToast();
  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const onSubmit = (data: FormData) => {
    loginUser(data.email, data.password)
      .then((result: UserCredential) => {
        const userlogin = result.user;
        console.log(userlogin);
        navigate(from, { replace: true });
        successAlert("login successfull");
      })
      .catch((err: any) => {
        errorAlert(err.message);
      });
  };
  return (
    <>
      <Helmet>
        <title> Login | Lang Master </title>
      </Helmet>
      <div className="my-10">
        <Toaster />
        <div className="hero-content flex-col md:flex-row-reverse">
          <img className="md:w-1/2" src={login} alt="" />
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
              <h1 className="text-4xl font-semibold">Please Login</h1>
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
                  Login
                </button>
              </div>
              <Link to="/signup">
                <p className="text-[#407bff] text-sm underline">
                  Are you new here? signup
                </p>
              </Link>
            </form>

            <div className="divider">or</div>
            <GoogleFb />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
