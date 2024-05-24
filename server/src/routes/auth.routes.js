import express from "express";
import passport from "../utils/auth.utils.js";

const router = express.Router();
/* this route is used for sign in and signup routes in google auth */  
router.get(
  "/callback",
  passport.authenticate("google", { scope: ["profile", "email"] }),
  (req, res) => {
    res.redirect("/home");
  }
);



export { router as AuthRouter };
