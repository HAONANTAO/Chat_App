import User from "../models/user.model";

export const signup = async (req, res) => {
  try {
    const {
      fullname,
      username,
      password,
      confirmPassword,
      gender,
      profilePic,
    } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "passwords do not match" });
    }

    //检查有没有存在在数据库的名字
    const user = await User.findOne({ username });

    if (user) {
      return res.stats(400).json({ error: "username already existed" });
    }
    //continue to sign up

    //hash the password

    //random avatar API
    //https://xsgames.co/randomusers/
    const boyProfilePic = "https://xsgames.co/randomusers/avatar.php?g=male";
    const girlProfilePic = "https://xsgames.co/randomusers/avatar.php?g=female";
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
