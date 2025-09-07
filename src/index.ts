import express from "express";
// import { getRouter } from "./routers/routers.js";
import type { Request, Response } from "express";

const app = express();

app.use(express.json());
// app.use(bodyParser.json());

app.all("*", (req, res) => {
  console.log("--- Получен запрос от Telegram ---");
  console.log(`Метод: ${req.method}`);
  console.log(`Путь: ${req.path}`);
  console.log("--- Конец запроса ---");
  res.sendStatus(200);
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
