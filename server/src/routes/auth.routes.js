import express from "express";
import passport from "../utils/auth.utils.js";
import { registerUser, loginUser } from "../controllers/auth.controller.js";

const router = express.Router();

/* This route is used for sign-in and sign-up routes in Google auth */
router.get(
  "/callback",
  passport.authenticate("google", { scope: ["profile", "email"] }),
  (req, res) => {
    res.redirect("/home");
  }
);

// Local registration route
router.post("/register", registerUser);

// Local login route
router.post("/login", loginUser);

export { router as AuthRouter };
