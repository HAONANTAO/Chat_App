import express from "express";

const authRouter = express.Router();

authRouter.get("/signup", (req, res) => {
  console.log("signup");

  //testing
  res.send("hello signup");
});
authRouter.get("/login",
});
authRouter.get("/logout", (req, res) => {
  console.log("logout");

  //testing
  res.send("hello logout");
});

export default authRouter;
