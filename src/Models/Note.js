import mongoose from "mongoose";

export const Note = mongoose.model("Note", {
  title: String,
  author: String,
  message: String,
  createdAt: String,
});
