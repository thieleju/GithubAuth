import express from "express";
const router = express.Router();

import { verifyToken } from "../../scripts/authentication";

const tokenExpire: string = process.env.TOKEN_EXPIRE;

router.get("/", verifyToken, (req: any, res: any) => {
  // send token
  res.status(200).json({
    status: "success",
    decoded: req.decoded,
  });
});

export default router;
