import React from "react";
import GenderBox from "../../components/GenderBox";
const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label for="fullname" className="p-2 label">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter FullName"
              className="w-full h-10 input-bordered input"
              id="fullname"
            />
          </div>
          <div>
            <label for="username" className="p-2 label">
              <span className="text-base label-text">UserName</span>
            </label>
            <input
              type="text"
              placeholder="Enter UserName"
              className="w-full h-10 input-bordered input"
              id="username"
            />
          </div>
          <div>
            <label for="password" className="p-2 label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full h-10 input-bordered input"
              id="password"
            />
          </div>
          <div>
            <label for="ConfirmedPassword" className="p-2 label">
              <span className="text-base label-text">ConfirmedPassword</span>
            </label>
            <input
              type="password"
              placeholder="RE-Enter Password"
              className="w-full h-10 input-bordered input"
              id="ConfirmedPassword"
            />
          </div>
          {/* gender box check */}
          <GenderBox></GenderBox>
          <a
            href="#"
            className="inline mt-2 text-sm hover:underline hover:text-blue-600-block">
            Already have an account?
          </a>
          <div>
            <button className="mt-2 btn btn-block btn-sm" type="onSubmit">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
