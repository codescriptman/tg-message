import express from "express";
// import { getRouter } from "./routers/routers.js";
import type { Request, Response } from "express";

const app = express();

app.use(express.json());
// app.use(bodyParser.json());

app.post("/", async (req, res) => {
  const a = req.body;
  res.send(200);
  res.send(a);
});
app.get("/", async (req, res) => {
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
