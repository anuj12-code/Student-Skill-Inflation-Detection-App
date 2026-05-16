import Test from "../models/Test.js";

export const getQuestions = async (req, res) => {
  const questions = await Test.find();
  res.json(questions);
};