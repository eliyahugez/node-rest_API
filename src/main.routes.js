import express from "express";

import { StatusCodes } from "http-status-codes";

const router = express.Router();

const STATUS = {
  success: "OK",
  failure: "NO",
};

router.get("/ping", (req, res) => {
  res.send("O.K. Ping");
  res.status(StatusCodes.OK);
});

export default router;
