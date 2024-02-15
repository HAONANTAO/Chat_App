export const login = async (req, res) => {
  try {
    const { fullname, username, confirmPassword, gender, profilePic } =
      req.body;
  } catch (err) {
    res.send(err);
  }
};
export const logout = (req, res) => {
  console.log("logoutUser");
  res.send("logoutUser");
};
export const signup = (req, res) => {
  console.log("signup");
  res.send("signup");
};
