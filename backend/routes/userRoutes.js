import express from "express";
import { protect } from "../middleware/authMiddleware.js";
//import ROLES from "../config/permissions.js";
import {
  authUser,
  authRefreshToken,
  logoutUser
} from "../controllers/userController.js";
const router = express.Router();

router.post("/auth", authUser); 
router.post("/auth/refresh", protect, authRefreshToken);
router.post("/logout", logoutUser);

export default router;
