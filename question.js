import express from "express";
import Question from "../models/Question.js";

const router = express.Router();


// ✅ Teacher adds question
router.post("/add", async (req, res) => {
  try {
    const { skill, question, options, answer } = req.body;

    const newQ = new Question({
      skill,
      question,
      options,
      answer,
    });

    await newQ.save();

    res.json({ message: "Question added" });
  } catch (err) {
    res.status(500).json({ message: "Error adding question" });
  }
});


// ✅ Get questions based on skills + level (MERGED VERSION)
router.post("/get", async (req, res) => {
  try {
    const { skills, level } = req.body;

    // Default difficulty
    let difficulty;

    if (level) {
      if (level === "Intermediate") difficulty = "medium";
      else if (level === "Advanced") difficulty = "hard";
      else difficulty = "easy";
    }

    // Build query dynamically
    let query = {
      skill: { $in: skills },
    };

    if (difficulty) {
      query.difficulty = difficulty;
    }

    const questions = await Question.find(query).limit(10);

    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: "Error fetching questions" });
  }
});

export default router;