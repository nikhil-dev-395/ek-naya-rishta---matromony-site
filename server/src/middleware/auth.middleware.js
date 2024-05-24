import passport from "../utils/auth.utils.js";

export const authenticateGoogle = passport.authenticate("google", {
  scope: ["profile", "email"],
});

export const googleCallback = passport.authenticate("google", {
  failureRedirect: "/",
  successRedirect: "/dashboard", // Adjust the redirect URL as needed
});
