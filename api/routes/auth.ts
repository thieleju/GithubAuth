import express from "express";
const router = express.Router();

import cb from "./auth/cb";
import login from "./auth/login";

router.use("/login", login);
router.use("/cb", cb);

export default router;
