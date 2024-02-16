import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    //不等于当前用户的所有其他，登陆的人不需要再列表里
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("sidebar user error: ", error.message);
    res.stats(400).json({ error: "Internal server error" });
  }
};
