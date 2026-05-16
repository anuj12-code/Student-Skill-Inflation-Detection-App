import Result from "../models/Result.js";

export const submitResult = async (req, res) => {
  const { userId, score } = req.body;

  const result = new Result({ userId, score });
  await result.save();

  res.json({ message: "Result saved" });
};