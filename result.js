import express from "express";
import Result from "../models/Result.js";

const router = express.Router();

router.post("/save", async (req, res) => {
  const { username, score, skills } = req.body;

  const result = new Result({ username, score, skills });
  await result.save();

  res.json({ message: "Result saved" });
});

export default router;