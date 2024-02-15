import express from "express";

const authRouter = express.Router();

authRouter.get("/signup");
authRouter.get("/login");
authRouter.get("/logout");

export default authRouter;
