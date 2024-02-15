import express from "express";

const authRouter = express.Router();

router.get("/login", (res, req) => {
  console.log("login");
});

export default authRouter;
