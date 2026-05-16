import express from "express";
import Result from "../models/Result.js";

const router = express.Router();

router.get("/results", async (req, res) => {
  const data = await Result.find();
  res.json(data);
});

export default router;