import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const messageRoutes = express.Router();
//protectRoute 会返回你现在登录状态中的user对象
messageRoutes.post("/send/:id", protectRoute, sendMessage);
messageRoutes.get("/:id", protectRoute, getMessages);

export default messageRoutes;
