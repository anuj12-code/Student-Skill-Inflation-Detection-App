import express from "express";
import Teacher from "../models/Teacher.js";

const router = express.Router();

// ✅ SIGNUP
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existing = await Teacher.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newTeacher = new Teacher({ name, email, password });
    await newTeacher.save();

    res.json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const teacher = await Teacher.findOne({ email });

    if (!teacher) {
      return res.status(400).json({ message: "User not found" });
    }

    if (teacher.password !== password) {
      return res.status(400).json({ message: "Wrong password" });
    }

    res.json({
      message: "Login successful",
      user: {
        id: teacher._id,
        email: teacher.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;