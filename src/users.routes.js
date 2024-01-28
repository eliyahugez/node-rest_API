import express from "express";
import { StatusCodes } from "http-status-codes";

import routerRoutes from "./users.routes";
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

router.get("/all", (req, res) => {
  const users = userService.getAllUsers();

  if (users.length > 0) {
    return res.status(StatusCodes.OK).send(users);
  }

  return res.status(StatusCodes.NOT_FOUND).send({
    status: STATUS.failure,
    massege: `USERS not found `,
  });
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  const user = userService.getUser(id);

  if (user) {
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      user,
    });
  }

  return res.status(StatusCodes.NOT_FOUND).send({
    status: STATUS.failure,
    massege: `USER ${id} not found `,
  });
});

router.post("/", (req, res) => {
  res.send("hello you are");
});

router.post("/add", (req, res) => {
  const user = req.body;

  const addedUser = userService.addUser(user);
  console.log("from users.routers", addedUser, user);
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
      updatedUser,
    });
  } else {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      massege: `USER ${id} not found `,
    });
  }
});

export default router;
