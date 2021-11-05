import express from "express";
import { Logger } from "./logger";
import { morganMiddleware } from "./middlewares";
import { API_MESSAGES } from "./shared/messages";

const app = express();
const port = process.env.APPLICATION_PORT ?? 3000;

app.use(morganMiddleware);

app.get("/", function (req, res) {
  res.json({ message: API_MESSAGES.APPLICATION_RUNNING });
  Logger.info(API_MESSAGES.APPLICATION_RUNNING);
});

app.listen(port, () => {
  Logger.info(`server started at http://localhost:${port}`);
});
