import { Router } from "express";
import usersController from "../controllers/usersController.js";

const router = Router();

router.post("/addUser", usersController.createUser);
router.get("/allUser", usersController.getUsers);

export default router;
