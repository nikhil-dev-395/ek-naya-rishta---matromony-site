import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import { Strategy as LocalStrategy } from "passport-local";
import "dotenv/config";
import User from "../models/user.models.js";

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// Google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        process.env.GOOGLE_CALLBACK_URL ||
        "http://localhost:3000/auth/google/callback",
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = new User({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value, // Use email instead of username
            accessToken,
            refreshToken,
          });
          await user.save();
        } else {
          user.accessToken = accessToken;
          user.refreshToken = refreshToken;
          await user.save();
        }
        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

// Local strategy
passport.use(
  new LocalStrategy(async (email, password, done) => {
    try {
      const user = await User.findOne({ email }); // Use email instead of username
      if (!user) return done(null, false);
      if (user.password !== password) return done(null, false);
      return done(null, user);
    } catch (error) {
      console.log(error);
      return done(error, false);
    }
  })
);

export default passport;
