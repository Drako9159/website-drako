import express from "express";
//import * as dotenv from "dotenv";
import {} from "dotenv/config";
import path from "path";
import morgan from "morgan";
import cors from "cors";
import postsRoute from "./routes/posts.routes.js";
import loginRoute from "./routes/login.routes.js";

//dotenv.config();
const app = express();

// settings
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// static files
app.use(express.static(path.join(process.cwd(), "./public/posts/images/")));

// routes
app.use("/api", postsRoute);
app.use("/api", loginRoute);

// classic error 404
app.use((req, res, next) => {
  res
    .status(404)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({ message: "404 Not Found" });
});

export default app;
