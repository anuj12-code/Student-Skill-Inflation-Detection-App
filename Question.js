import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  skill: String,
  question: String,
  options: [String],
  answer: String,
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    default: "easy",
  },
});

export default mongoose.model("Question", questionSchema);