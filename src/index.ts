import express from "express";
import { getRouter } from "./routers/routers.js";
import type { Request, Response } from "express";

const app = express();

app.use(express.json());
app.use("/", getRouter());
// app.post("*", async (req, res) => {
//   console.log(req.body);
//   res.send("Hello");
// });

app.get("/", async (req: Request, res: Response) => {
  res.send("hello");
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, (err) => {
  if (err) {
    console.log("error");
  }
  console.log(`server listening on port ${PORT}`);
});
