import express from "express";
// import { getRouter } from "./routers/routers.js";
import type { Request, Response } from "express";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
// app.use(bodyParser.json());

app.post("/", async (req, res) => {
  const data = req.body;
  console.log(data); // <-- Добавьте эту строку
  res.sendStatus(200);
});
app.get("/", bodyParser.json(), async (req, res) => {
  res.send("hello");
});
// app.use("/", getRouter());
// app.post("*", async (req, res) => {
//   console.log(req.body);
//   res.send("Hello");
// });

// app.get("*", async (req: Request, res: Response) => {
//   res.send("hello");
// });

const PORT = process.env.PORT || 3003;

app.listen(PORT, (err) => {
  if (err) {
    console.log("error");
  }
  console.log(`server listening on port ${PORT}`);
});
