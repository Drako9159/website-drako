import { Router } from "express";
import {
  loginController,
  criptController,
} from "../controllers/login.controller.js";

const router = Router();

router.post("/auth", loginController);

router.post("/cript", criptController);

export default router;
