import express from "express";
// import { getRouter } from "./routers/routers.js";

const app = express();

// app.use(express.json());
// app.use("/message", getRouter());
app.post("*", async (req, res) => {
  console.log(req.body);
  res.send("Hello");
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, (err) => {
  if (err) {
    console.log("error");
  }
  console.log(`server listening on port ${PORT}`);
});
