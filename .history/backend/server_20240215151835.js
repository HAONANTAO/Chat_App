import express from "express";

const app = express();

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  //root server
  res.send("hello root server");
});

app.listen(PORT, () => {
  console.log(`running in port ${PORT}`);
});
