import express from "express";
import dotenv from "dotenv";
const app = express();

import authRoutes from "./routes/auth.route.js";
//add env file infor to process.env can be accessed
dotenv.config();
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  //root server
  res.send("hello root server");
});

//middleware
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`running in port ${PORT}`);
});
