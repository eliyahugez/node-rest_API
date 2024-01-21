import express from "express";
import { StatusCodes } from "http-status-codes";

const port = 3000;
const app = express();

const STATUS = {
  SUCCESS: "OK",
  FAILURE: "NO",
};

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello you are");
  res.status(StatusCodes.OK);
});

app.post("/", (req, res) => {
  res.send("hello you are");
});

app.post("/add", (req, res) => {
  const data = [];
  data.push(req.body);
  const { body } = req;

  if (!body.name) {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.FAILURE,
      massege: "name is required",
    });
  }
  return res.status(StatusCodes.CREATED).send({
    status: STATUS.SUCCESS,
    massege: data,
  });
});

app.listen(port, () => {
  console.log(`hey go to local host: ${port}); `);
});
