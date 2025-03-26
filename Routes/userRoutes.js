import express from "express";
import {
  forgotPassword,
  loginUser,
  registerUser,
  resetPassword,
} from "../Controller/authController.js";
import { authenticateUser } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", authenticateUser, resetPassword);

export default router;
