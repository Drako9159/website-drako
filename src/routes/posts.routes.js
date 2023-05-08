import { Router } from "express";
import authMiddleware from "../middlewares/session.js";
import { getPosts, getContentPost } from "../controllers/posts.controller.js";
import path from "path";

const router = Router();

router.get("/posts", authMiddleware, getPosts);

router.get("/posts/:id", authMiddleware, getContentPost);



export default router;
