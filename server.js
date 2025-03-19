//SERVER.JS IS ONLY FOR THE LOCAL SETUP TO EMULATE LAMBDA ENVIRONMENT.

import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { handler } from "./index.js";

dotenv.config();
const PORT = 5000;
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/", (req, res) => {
  const event = {
    queryStringParameters: req?.query,
    body: JSON.stringify(req?.body || {}),
    httpMethod: req.method,
  };

  handler(event).then((response) => {
    res.set(response?.headers);
    res.status(response?.statusCode).json(JSON.parse(response?.body || "{}"));
  });
});

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(`Express Error in localhost:${PORT}`);
  console.error(err);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.info(`Server listening at port ${PORT}`);
});
