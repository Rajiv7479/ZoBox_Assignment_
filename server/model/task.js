import mongoose from "mongoose";

const Todo = new mongoose.Schema({
  task: String,
});

export default mongoose.model("Todo", Todo);
