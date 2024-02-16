import express from "express";
import dotenv from "dotenv";

import connectToMongoDB from "./database/connectToMongoDB.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import cookieParser from "cookie-parser";
const app = express();
//add env file infor to process.env can be accessed
dotenv.config();
const PORT = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
//parse to json result
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  //root server
  res.send("hello root server");
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`running in port ${PORT}`);
});
