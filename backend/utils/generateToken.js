import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  //protected method
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //ms 15days
    httpOnly: true, //prevent XSS attack cross-site script attacks
    sameSite: "strict", //CSRF attacks cross site request forgery attack
    secure: process.env.NODE_ENV !== "development",
  });
};
export default generateTokenAndSetCookie;
