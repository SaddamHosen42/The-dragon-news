import React from "react";
import { Link } from "react-router";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-100px)] bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10">
        <h1 className="text-3xl font-bold text-center py-4">Login your account</h1>
        <div className="card-body px-8">
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label text-lg">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
            />
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

            <button className="btn btn-neutral mt-4 text-lg">Login</button>
            <div className="mt-4 text-center text-lg">
              <p>
                Don't have an account?{" "}
                <span>
                  <Link to="/auth/register" className="text-blue-500">
                    Register Now
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

export default Login;
