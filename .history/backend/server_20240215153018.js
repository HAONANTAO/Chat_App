import express from "express";
import dotenv from "dotenv";
const app = express();

import authRouter from "./routes/auth.route";
//add env file infor to process.env can be accessed
dotenv.config();
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  //root server
  res.send("hello root server");
});

//middleware
app.use("/api/auth", authRouter);
app.listen(PORT, () => {
  console.log(`running in port ${PORT}`);
});
