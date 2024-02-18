import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSideBar } from "../controllers/user.controller.js";
const userRoute = express.Router();

userRoute.get("/users", protectRoute, getUsersForSideBar);

export default userRoute;
