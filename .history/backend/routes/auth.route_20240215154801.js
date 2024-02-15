import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
const authRoutes = express.Router();

authRoutes.get("/signup", signup);
authRoutes.get("/login", login);
authRoutes.get("/logout", logout);

export default authRoutes;
