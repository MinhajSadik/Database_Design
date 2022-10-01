import { Router } from "express";
import usersController from "../controllers/user.controller.js";

const router = Router();

router.post("/register", usersController.registerUser);
router.post("/login", usersController.loginUser);
router.get("/allUser", usersController.getUsers);

export default router;
