import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// ✅ FIX: prevent overwrite error
const Teacher = mongoose.models.Teacher || mongoose.model("Teacher", teacherSchema);

export default Teacher;