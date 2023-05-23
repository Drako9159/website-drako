import { Router } from "express";
import {
  loginController,
  criptController,
  dashboardController
} from "../controllers/login.controller.js";

const router = Router();

router.post("/auth", loginController);

router.post("/dashboard", dashboardController)

router.post("/cript", criptController);

export default router;
