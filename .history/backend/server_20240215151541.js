import express from "express";

const app = express();

app.get("/", (req, res) => {
  //root server
  res.send("hello root server");
});

app.listen(5001, () => {
  console.log("running in port 5001!");
});
