import { Router } from "express";
import type { Request, Response } from "express";
import bodyParser from "body-parser";
import { sendMessage } from "../telegram/send.js";

export const getRouter = () => {
  const router = Router();

  router.post(
    "/",
    bodyParser.json(),
    async (req: Request<{}, {}, { text: string }>, res: Response) => {
      const text = req.body.text;
      sendMessage(text);
      await res.status(200).json({ ok: true, text: req.body.text });
    }
  );

  return router;
};
// ? body = {"tel":"","text":""}
