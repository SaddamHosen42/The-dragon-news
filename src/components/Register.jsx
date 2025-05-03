import React from "react";
import { Link } from "react-router";
const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="flex justify-center items-center  bg-base-200 mb-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10">
        <h1 className="text-3xl font-bold text-center py-4">
          Register your account
        </h1>
        <div className="card-body px-8">
          <form onSubmit={handleSubmit} className="fieldset">
            {/* name */}
            <label className="label text-lg">Name</label>
            <input
              type="text"
              className="input"
              name="email"
              placeholder="Your Name"
            />
            {/* photo url */}
            <label className="label text-lg">Photo</label>
            <input
              type="text"
              className="input"
              name="email"
              placeholder="Photo URL"
            />
            {/* email */}
            <label className="label text-lg">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
            />
            {/* password */}
            <label className="label text-lg">Password</label>
            <div className="relative">
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
              />
              {/* <button
                  className="btn btn-xs absolute right-5 top-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button> */}
            </div>
            <div>
              <a className="link link-hover text-lg">Forgot password?</a>
            </div>

            <button className="btn btn-neutral mt-4 text-lg">Register</button>
            <div className="mt-4 text-center text-lg">
              <p>
                Allreday have an account?{" "}
                <span>
                  <Link to="/auth/login" className="text-blue-500">
                    Login
                  </Link>
                </span>
              </p>
            </div>
          </form>
          {/* {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500 text-center">Login successful!</p>
            )} */}
        </div>
      </div>
    </div>
  );
};

export default Register;
