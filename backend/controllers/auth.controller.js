import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utils/generateToken.js";
export const signup = async (req, res) => {
  try {
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
    // Hash the password
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    //random avatar API
    //https://avatar-placeholder.iran.liara.run/
    const profilePic = `https://avatar.iran.liara.run/username?username=${username}`;

    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,

      gender,
      profilePic,
    });
    if (newUser) {
      //generate JWT token
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      //finally
      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      });
    }
  } catch (err) {
    console.error("Error type:", err.constructor.name);
    console.error("Sign up error:", err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
};
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "can not find the user" });
    }
    //对比密码
    const passwordMatch = await bcrypt.compare(password, user.password);

    console.log(passwordMatch);
    if (!passwordMatch) {
      return res.status(400).json({ error: "the password is not correct" });
    }
    generateTokenAndSetCookie(user._id, res);
    return res.status(200).json({
      result: `you successfully log in to the account with the username   ${username}`,
    });
  } catch (err) {
    res.status(500).json({ error: "server error" });
  }
};
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "log out successfully!" });
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
};
