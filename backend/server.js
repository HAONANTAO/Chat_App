import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToMongoDB from "./database/connectToMongoDB.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();
//add env file infor to process.env can be accessed
dotenv.config();
const PORT = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(bodyParser.json());
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
