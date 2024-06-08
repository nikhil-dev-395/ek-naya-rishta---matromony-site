import passport from "../utils/auth.utils.js";
import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export const registerUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Check if the email is already taken
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a unique googleId
    const googleId = `${uuidv4()} + (____passport-local-google-id)`;

    // Create a new user with hashed password and unique googleId
    const newUser = new User({
      email,
      password: hashedPassword,
      googleId,
    });

    // Save the new user
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    next(err);
  }
};

export const loginUser = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.status(200).json({ message: "Login successful", user });
    });
  })(req, res, next);
};
