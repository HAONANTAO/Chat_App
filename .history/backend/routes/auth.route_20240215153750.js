import express from "express";

const authRouter = express.Router();

authRouter.get("/sigup", (req, res) => {
  console.log("login");

  //testing
  res.send("hello login");
});
authRouter.get("/login", (req, res) => {
  console.log("login");

  //testing
  res.send("hello login");
});
authRouter.get("/login", (req, res) => {
  console.log("login");

  //testing
  res.send("hello login");
});

export default authRouter;
