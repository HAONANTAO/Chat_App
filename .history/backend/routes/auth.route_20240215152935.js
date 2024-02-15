import express from "express";

const router = express.Router();

router.get("/login", (res, req) => {
  console.log("login");
});
