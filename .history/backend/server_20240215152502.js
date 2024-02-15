import express from "express";
import dotenv from "dotenv";
const app = express();

//add env file infor to process.env can be accessed
dotenv.config();
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  //root server
  res.send("hello root server");
});

app.get("/api/auth/signup",(res,req))

app.listen(PORT, () => {
  console.log(`running in port ${PORT}`);
});
