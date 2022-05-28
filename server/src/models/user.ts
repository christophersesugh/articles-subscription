import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    min: 6,
    required: true,
  },
});

export default mongoose.model("User", userSchema);
