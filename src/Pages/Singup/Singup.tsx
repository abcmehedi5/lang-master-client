import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserCredential } from "firebase/auth";
import login from "../../../public/login.svg";
import GoogleFb from "../Shared/Google-Fb/GoogleFb";
import { Helmet } from "react-helmet-async";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  number: number;
  image: FileList;
}

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const { createUserEmail, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data: FormData) => {
    const { name, email, password, confirmPassword, image } = data;
    console.log(data);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const formData = new FormData();
    formData.append("image", image[0]);

    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY
      }`;

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      const imageUrl = result?.data?.display_url;

      createUserEmail(email, password)
        .then((result: UserCredential) => {
          const userlogin = result.user;
          updateUserProfile(name, imageUrl)
            .then(() => {
              navigate(from, { replace: true });
            })
            .catch((err: any) => {
              console.log(err.message);
              setError(err.message);
            });
          setError(null);
          reset();
        })
        .catch((err: any) => {
          setError(err.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title> Lang Master | Sign Up </title>
      </Helmet>
      <div className="my-10">
        <div className="hero-content flex-col md:flex-row gap-5">
          <img className="md:w-[40%]" src={login} alt="" />
          <div className="card flex-shrink-0 md:w-[50%] shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
              <h1 className="text-4xl font-semibold">Please Register</h1>
              {/* -------- full name field ---------- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              {/* -------------- email and phone number */}
              <div className="lg:flex gap-5">
                {/* -------- email field ---------- */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                {/* -------- phone number ----------- */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="input input-bordered"
                    {...register("phoneNumber", { required: true })}
                  />
                  {errors.phoneNumber && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>

              {/* -------- image field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="file"
                  placeholder="photo URL"
                  className="input input-bordered"
                  accept="image/*"
                  {...register("image")}
                />
              </div>
              {/* ------ password filed */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              {/* ------- confirm password------- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && (
                  <span className="text-red-500">This field is required</span>
                )}
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
                  Already have an account? Login
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

export default Signup;
