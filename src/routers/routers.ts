import { Router } from "express";
import type { Request, Response } from "express";
import bodyParser from "body-parser";
import { sendMessage } from "../telegram/send.js";

export const getRouter = () => {
  const router = Router();

  router.post(
    "/",
    bodyParser.json(),
    async (
      req: Request<{}, {}, { tel: string; text: string }>,
      res: Response
    ) => {
      sendMessage(req.body);
      await res.send(200);
    }
  );

  return router;
};
// ? body = {"tel":"","text":""}
