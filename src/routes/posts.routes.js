import { Router } from "express";
import authMiddleware from "../middlewares/session.js";
import { getPosts, getContentPost, checkPosts } from "../controllers/posts.controller.js";


const router = Router();

router.get("/posts", authMiddleware, getPosts);

router.get("/posts/:id", authMiddleware, getContentPost);

router.get("/sync_drive", authMiddleware, checkPosts)

export default router;
