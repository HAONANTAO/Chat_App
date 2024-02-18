import React, { useState, useEffect } from "react";
import GenderBox from "../../components/GenderBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup.js";
const Signup = () => {
  const [loading, signup] = useSignup();
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmedPassword: "",
    gender: "",
  });
  const handleInputChange = (event, fieldName) => {
    setInputs({ ...inputs, [fieldName]: event.target.value });
  };
  const handleGenderChange = (gender) => {
    setInputs({ ...inputs, gender: gender });
  };
  useEffect(() => {
    console.log(inputs); // 在状态更新后打印inputs的值
  }, [inputs]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullname" className="p-2 label">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter FullName"
              className="w-full h-10 input-bordered input"
              id="fullname"
              onChange={(e) => handleInputChange(e, "fullname")}
            />
          </div>
          <div>
            <label htmlFor="username" className="p-2 label">
              <span className="text-base label-text">UserName</span>
            </label>
            <input
              type="text"
              placeholder="Enter UserName"
              className="w-full h-10 input-bordered input"
              id="username"
              onChange={(e) => handleInputChange(e, "username")}
            />
          </div>
          <div>
            <label htmlFor="password" className="p-2 label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full h-10 input-bordered input"
              id="password"
              onChange={(e) => handleInputChange(e, "password")}
            />
          </div>
          <div>
            <label htmlFor="ConfirmedPassword" className="p-2 label">
              <span className="text-base label-text">ConfirmedPassword</span>
            </label>
            <input
              type="password"
              placeholder="RE-Enter Password"
              className="w-full h-10 input-bordered input"
              id="ConfirmedPassword"
              onChange={(e) => handleInputChange(e, "confirmedPassword")}
            />
          </div>
          {/* gender box check */}
          <GenderBox onGenderChange={handleGenderChange}></GenderBox>
          <Link
            to="/login"
            className="inline mt-2 text-sm hover:underline hover:text-blue-600-block">
            Already have an account?
          </Link>
          <div>
            <button
              className="mt-2 btn btn-block btn-sm"
              type="submit"
              disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <span>Signup</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
