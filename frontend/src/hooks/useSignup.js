import { sign } from "jsonwebtoken";
import { useState } from "react";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const signup = async ({
    fullname,
    username,
    password,
    confirmedPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullname,
      username,
      password,
      confirmedPassword,
      gender,
    });
    if (!success) {
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmedPassword,
          gender,
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  fullname,
  username,
  password,
  confirmedPassword,
  gender,
}) {
  if (!fullname || !username || password || !confirmedPassword || !gender) {
    toast.error("Please fill all the fields");
    return false;
  }
  if (password !== confirmedPassword) {
    toast.error("Password do not match. please double check");
    return false;
  }
  if (password.length < 5) {
    toast.error("Password need at least has 6 characters");
    return false;
  }
  return true;
}
