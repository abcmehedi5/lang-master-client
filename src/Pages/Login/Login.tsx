import { useForm } from "react-hook-form";
// import login from "../../../public/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserCredential } from "firebase/auth";
import GoogleFb from "../Shared/Google-Fb/GoogleFb";
import { Helmet } from "react-helmet-async";
import useToast from "../../hooks/useToast";
import { Toaster } from "react-hot-toast";
import loginAni from "./../../../public/loginAni.json";
import Lottie from "lottie-react-web";
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
        <div className="hero-content flex-col-reverse lg:flex-row">
          {/* <img className="md:w-1/2" src={login} alt="" /> */}
          <div className="lg:w-1/2">
            <Lottie
              options={{ animationData: loginAni, loop: true, autoplay: true }}
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-4xl font-bold pb-0 mb-0 fontKalam">
              Log in to your account
            </h1>
            <GoogleFb />
            <div className="divider">Or with your email password</div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body p-0 w-full"
            >
              <div className="form-control mt-0 pt-0">
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
                <button type="submit" className="defaultBtn w-full">
                  Login
                </button>
              </div>
              <p className="font-semibold mt-4">
                Don't Have an Account?
                <Link
                  to="/signup"
                  className="text-[#407bff] ml-1 hover:underline"
                >
                  SignUp
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
