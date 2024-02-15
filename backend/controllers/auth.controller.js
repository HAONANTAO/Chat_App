import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const { fullname, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "passwords do not match" });
    }

    //检查有没有存在在数据库的名字
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "username already existed" });
    }
    //continue to sign up

    //hash the password

    //random avatar API
    //https://avatar-placeholder.iran.liara.run/
    const profilePic = `https://avatar.iran.liara.run/username?username=${username}`;

    const newUser = new User({
      fullname,
      username,
      password,

      gender,
      profilePic,
    });
    await newUser.save();

    //finally
    res.status(201).json({
      _id: newUser._id,
      fullname: newUser.fullname,
      username: newUser.username,
      gender: newUser.gender,
      profilePic: newUser.profilePic,
    });
  } catch (err) {
    console.error("Error type:", err.constructor.name);
    console.error("Sign up error:", err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
};
export const logout = (req, res) => {
  console.log("logoutUser");
  res.send("logoutUser");
};
export const login = (req, res) => {
  console.log("login");
  res.send("login");
};
