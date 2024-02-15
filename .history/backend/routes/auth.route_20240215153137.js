import express from "express";

const authRouter = express.Router();

authRouter.get("/login", (res, req) => {
  console.log("login");
});

export default authRouter;
