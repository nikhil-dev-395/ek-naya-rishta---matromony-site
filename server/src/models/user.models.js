import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // This is the username because we are using passport-local also, that's why we need to use username
    email: {
      type: String,
      required: true,
      unique: true,
    },

    googleId: {
      type: String,
      unique: true,
      sparse: true, // Allows unique values or null
    },
    displayName: {
      type: String,
    },
    password: {
      type: String,
    },
    accessToken: String,
    refreshToken: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
