import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

export const UserModel = mongoose.model("User", UserSchema);
