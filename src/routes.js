import express from "express";
import { StatusCodes } from "http-status-codes";

import routerRoutes from "./routes";
import userService from "./services/user.service";

const router = express.Router();

const STATUS = {
  success: "OK",
  failure: "NO",
};

router.get("/ping", (req, res) => {
  res.send("O.K. Ping");
  res.status(StatusCodes.OK);
});

router.post("/", (req, res) => {
  res.send("hello you are");
});

router.post("/add", (req, res) => {
  const { body: user } = req;

  const addedUser = userService.addUser(user);

  return res.status(StatusCodes.CREATED).send({
    status: STATUS.success,
    massege: addedUser,
  });
});

router.put("/update/:id", (req, res) => {
  const { body: user } = req;

  const id = parseInt(req.params.id, 10);

  const updatedUser = userService.updateUser(id, user);

  if (updatedUser) {
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      massege: updatedUser,
    });
  } else {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      massege: `USER ${id} not found `,
    });
  }
});

export default router;
