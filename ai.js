import express from "express";
const router = express.Router();

router.post("/generate", (req, res) => {
  res.json({
    questions: [
      {
        question: "What is Java?",
        options: ["Language", "OS", "Browser", "IDE"],
        answer: "Language"
      },
      {
        question: "What is Python?",
        options: ["Snake", "Language", "Game", "Browser"],
        answer: "Language"
      }
    ]
  });
});

export default router;