import express from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import errorHandler from "./src/middleware/errorHandling.middleware.js";
 import { AuthRouter } from "./src/routes/auth.routes.js";
import "./src/utils/auth.utils.js"; // Initialize Passport.js
 
const app = express();

/* MIDDLEWARE */
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure express-session middleware
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

/* ERROR HANDLER */
app.use(errorHandler);


/* ROUTES */
 app.use("/auth", AuthRouter); //we added here google auth


export default app;
