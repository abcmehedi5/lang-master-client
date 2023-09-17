import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserCredential } from "firebase/auth";
import registerImg from "../../../public/register.svg";
import GoogleFb from "../Shared/Google-Fb/GoogleFb";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  number: number;
  image: FileList;
  phoneNumber: any;
}

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const { createUserEmail, updateUserProfile }: any = useContext(AuthContext);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [axiosSecure] = useAxiosSecure();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data: FormData) => {
    const { name, email, password, confirmPassword, image, phoneNumber } = data;
    console.log(data);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const formData = new FormData();
    formData.append("image", image[0]);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_API_KEY
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
          console.log(userlogin);
          // send user data on mongodb start.................

          const saveUser = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            image: imageUrl,
            score: 0,
            role: "user",
            unit: ["1"],
          };

          axiosSecure
            .post("/users/user", saveUser)
            .then(() => {
              alert("account create successfull!");
              navigate("/login");
            })
            .catch((error) => {
              alert(error);
            });

          // send user data on mongodb end.................
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
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title> Sign Up | Lang Master </title>
      </Helmet>
      <div className="my-10">
        <div className="hero-content flex-col lg:flex-row gap-5">
          <div>
            <img className="md:pr-10" src={registerImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <h1 className="text-4xl font-bold pb-0 mb-0 fontKalam">
              Create your account
            </h1>
            <p className="font-semibold text-xl fontKalam mb-4">
              Have an Account?
              <Link to="/login" className="text-[#407bff] ml-1 hover:underline">
                Login
              </Link>
            </p>
            <GoogleFb />
            <div className="divider">or</div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body p-0 w-full"
            >
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
                    <span className="label-text">Phone</span>
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
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  placeholder="photo"
                  className="input input-bordered pt-2"
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
                <button type="submit" className="defaultBtn w-full mt-6">
                  Sign up
                </button>
                {error && <span className="text-red-500 text-xs">{error}</span>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
