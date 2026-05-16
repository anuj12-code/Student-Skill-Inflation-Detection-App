import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  username: String,
  score: Number,
  skills: [String],
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Result", resultSchema);