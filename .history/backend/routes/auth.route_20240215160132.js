import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
const authRoutes = express.Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.gpostet("/logout", logout);

export default authRoutes;
