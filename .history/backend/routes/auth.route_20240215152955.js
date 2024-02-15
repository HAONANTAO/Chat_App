import express from "express";

const authrouter = express.Router();

router.get("/login", (res, req) => {
  console.log("login");
});

export default router;
