import express from "express";
import dotenv from "dotenv";
const app = express();
import connectToMongoDB from "./database/connectToMongoDB.js";
import authRoutes from "./routes/auth.route.js";

//add env file infor to process.env can be accessed
dotenv.config();
const PORT = process.env.PORT || 8000;

//middleware
app.use("/api/auth", authRoutes);
//parse to json result
app.use(express.json());

app.get("/", (req, res) => {
  //root server
  res.send("hello root server");
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`running in port ${PORT}`);
});
