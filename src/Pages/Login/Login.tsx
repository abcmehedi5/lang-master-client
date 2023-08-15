import login from "../../../public/login.svg";
const Login = () => {
  return (
    <div className="md:flex my-10 items-center">
      <div className="md:w-1/2 mx-auto">
        <img className="w-full" src={login} alt="" />
      </div>
        <div className="md:w-1/2 mx-auto">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
        </div>
     
    </div>
  );
};

export default Login;
