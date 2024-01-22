import express from "express";

import appRoutes from "./routes";

const port = 3000;
const app = express();

const STATUS = {
  SUCCESS: "OK",
  FAILURE: "NO",
};

app.use(express.json());

app.use("/v1", appRoutes);

app.listen(port, () => {
  console.log(`hey go to local host: ${port} `);
});
