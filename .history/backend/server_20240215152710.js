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

app.get("/api/auth/signup", (res, req) => {
  console.log("signup route");
});
app.get("/api/auth/login", (res, req) => {
  console.log("login route");
});
app.get("/api/auth/logout", (res, req) => {
  console.log("logout route");
});

app.use()
app.listen(PORT, () => {
  console.log(`running in port ${PORT}`);
});
