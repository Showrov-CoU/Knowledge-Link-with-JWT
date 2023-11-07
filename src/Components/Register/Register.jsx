import { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoUrl = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photoUrl, email, password);

    if (password.length < 6) {
      toast.error("Password should be at least 6 charecter");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Your Password should have at least one capital letter");
      return;
    } else if (!/[!@#$%^&*()_+{}\\[\]:;<>,.?~]/.test(password)) {
      toast.error("Your Password should have at least one Special character");
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            console.log("profile Update");
            toast.success("Registration successful! You can now log in");
            e.target.reset();
            // navigate("/login");
            location.reload();
          })
          .catch((error) => {
            console.log(error.message);
            toast.success("Something is wrong! Please try again");
          });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.message);
      });
  };

  return (
    <div className=" min-h-screen bg-ltBgSecondary pb-10">
      <div className="hero-content flex-col pt-0">
        <div className="text-center pt-2">
          {/* <h1 className="text-3xl text-center font-bold text-brandPrimary">
            Register Now...!
          </h1> */}
          <p className="">
            {/* Please log in to access your event planning and management tools. */}
            {/* Whether you&apos;re arranging a conference, seminar, product launch,
        or team-building event, our platform streamlines the process for
        you. */}
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-ltWhite">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered text-ltBlueDeep"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Your photo url"
                className="input input-bordered text-ltBlueDeep"
                required
              />
            </div>

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
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <button className="btnlt">Register</button>
            </div>
            <label className="label">
              <Link
                to="/login"
                href="#"
                className="label-text-alt link link-hover"
              >
                Already have an account? Go to{" "}
                <span className="text-ltBlueDeep font-bold text-base">
                  Login
                </span>
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
