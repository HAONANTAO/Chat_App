import express from "express";
import { login, logout, signup } from "../controllers/auth.controller";
const authRouter = express.Router();

authRouter.get("/signup");
authRouter.get("/login");
authRouter.get("/logout");

export default authRouter;
