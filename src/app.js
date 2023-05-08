import express from "express";
//import * as dotenv from "dotenv";
import {} from "dotenv/config";
import path from "path";
import morgan from "morgan";
import cors from "cors";
import postsRoute from "./routes/posts.routes.js";
import loginRoute from "./routes/login.routes.js";
import authMiddleware from "./middlewares/session.js";

//dotenv.config();
const app = express();

// settings
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(express.json());

// cors configuration+
app.use(
  cors({
    origin: [
      process.env.DOMINIO,
      "http://localhost:5000",
      "http://" + process.env.IP + ":5000",
    ],
    exposedHeaders: ["authorization"],
    credentials: true,
  })
);

// static files
app.use(
  "/api/images",
  authMiddleware,
  express.static(path.join(process.cwd(), "./public/posts/images"))
);

app.use(express.static(path.join(process.cwd(), "./client/dist")));

// add control cache
let setCache = function (req, res, next) {
  const period = 60 * 5;
  const cacheTime = 60 * 60 * 24; // 1 day
  if (req.method == "GET") {
    res.set("Cache-control", `public, max-age=${cacheTime}`);
  } else {
    res.set("Cache-control", `no-store`);
  }
  next();
};

//app.use(setCache);

// routes
app.use("/api", postsRoute);
app.use("/api", loginRoute);

// classic error 404
/*
app.use((req, res, next) => {
  res
    .status(404)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({ message: "404 Not Found" });
});*/

app.use("*", (req, res, next) => {
  //res.status(404).send({ message: "NOT FOUND" });
  const indexFile = path.resolve(process.cwd() + "/client/dist/", "index.html");
  console.log(indexFile)
  res.sendFile(indexFile);
});

export default app;
