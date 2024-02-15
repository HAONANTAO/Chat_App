import express from "express";

const authRouter = express.Router();

authRouter.get("/login", (res, req) => {
  console.log("login");
  res.send("login");
  res.send("hello root server");
});

export default authRouter;
