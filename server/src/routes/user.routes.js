import express from "express";
import { createUserDetails } from "../controllers/userDetails.controller.js";

const router = express.Router();

// Define your routes here
router.post("/createUserDetails", createUserDetails);

export const userDetailsRouter = router;
