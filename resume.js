import express from "express";
import multer from "multer";
import { extractSkillsFromResume } from "../utils/resumeParser.js";

const router = express.Router();

// Store file in memory (important)
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    console.log("File received:", req.file.originalname);

    const skills = await extractSkillsFromResume(
  req.file.buffer,
  req.file.mimetype
);

    res.json({
      message: "Resume processed",
      skills: skills || [],
    });

  } catch (error) {
    console.error("Upload error:", error.message);

    res.status(500).json({
      message: "Resume parsing failed",
    });
  }
});

export default router;