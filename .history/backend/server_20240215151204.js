import express from "express";

const app = express();

app.listen(5001, () => {
  console.log("running in port 5001!");
});
