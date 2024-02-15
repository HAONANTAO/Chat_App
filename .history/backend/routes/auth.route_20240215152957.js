import express from "express";

const authrRouter = express.Router();

router.get("/login", (res, req) => {
  console.log("login");
});

export default router;
