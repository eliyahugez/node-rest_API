import express from "express";

import userRoutes from "./users.routes";
import mainRoutes from "./main.routes";

const port = 3000;
const app = express();

const STATUS = {
  SUCCESS: "OK",
  FAILURE: "NO",
};

app.use(express.json());

app.use("/v1/", mainRoutes);
app.use("/v1/user", userRoutes);

app.listen(port, () => {
  console.log(`hey go to local host: ${port} `);
});
