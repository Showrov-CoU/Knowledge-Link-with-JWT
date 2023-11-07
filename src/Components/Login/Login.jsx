import { useContext } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  //   console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login successful! Welcome back.");
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(`Invalid Login Attempt
        Please double-check your email and password and try again`);
      });
  };
  const handleGoogleLogIn = (googleLogin) => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className=" min-h-screen bg-ltBgSecondary">
      <div className="hero-content flex-col pt-0">
        <div className="text-center pt-2">
          {/* <h1 className="text-3xl text-center font-bold text-brandPrimary">
            Login now...!
          </h1> */}
          <p className=""></p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-ltWhite text-ltBlueDeep">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered text-ltBlueDeep"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered text-ltBlueDeep"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btnlt">Login</button>
            </div>
            <label className="label">
              <Link
                to="/register"
                href="#"
                className="label-text-alt link link-hover"
              >
                Do not have any account? please{" "}
                <span className="text-ltBlueDeep font-bold text-base">
                  Register
                </span>
              </Link>
            </label>
          </form>
          <div className="px-8 pb-6">
            <button
              onClick={() => handleGoogleLogIn(googleLogin)}
              className="btn w-full capitalize btn-outline text-color-secondary text-base"
            >
              <FcGoogle></FcGoogle>
              <span>Login with google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
