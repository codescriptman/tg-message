import { Router } from "express";
import type { Request, Response } from "express";
import bodyParser from "body-parser";

export const getRouter = () => {
  const router = Router();

  router.post("/", bodyParser.json(), async (req: Request, res: Response) => {
    //   const newMessage = {
    //     // from: req.body.from,
    //     // text: req.body.text,
    //       // lel: req.body.tel,
    //   };
    res.send(req.body);
  });

  return router;
};
