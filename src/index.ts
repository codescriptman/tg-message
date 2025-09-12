import express from "express";
import { getRouter } from "./routers/routers.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "https://codescriptman.github.io", // твой фронтенд
    methods: ["GET", "POST", "OPTIONS"], // какие методы разрешены
    allowedHeaders: ["Content-Type"], // какие заголовки можно слать
  })
);

app.use(express.json());

app.use("/text", getRouter());

const PORT = process.env.PORT || 3003;

app.listen(PORT, (err) => {
  if (err) {
    console.log("error");
  }
  console.log(`server listening on port ${PORT}`);
});
