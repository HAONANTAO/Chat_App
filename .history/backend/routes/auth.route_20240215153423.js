import express from "express";

const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
  console.log("login");

  res.send("hello login");
});

export default authRouter;
