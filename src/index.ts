import express from "express";
import "./configs";
import { Logger } from "./logger";
import { morganMiddleware } from "./middlewares";
import { API_MESSAGES } from "./shared/messages";
import { imagesRouter, notificationsRouter } from "./routes";

const app = express();
const port = process.env.APPLICATION_PORT ?? 3000;

app.use(morganMiddleware);

app.get("/", function (req, res) {
  res.json({ message: API_MESSAGES.APPLICATION_RUNNING });
  Logger.info(API_MESSAGES.APPLICATION_RUNNING);
});

app.use("/images", imagesRouter);
app.use("/notifications", notificationsRouter);

app.listen(port, () => {
  Logger.info(`server started at http://localhost:${port}`);
});
