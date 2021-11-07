import { Request, Response } from "express";
import { Logger } from "../logger";
import { API_MESSAGES } from "../shared/messages";
import { notificationsService } from "../services";

const { addSubscription } = notificationsService;

export const notificationsController = {
  addSubscription(req: Request<{ email: string }, {}, {}, {}>, res: Response) {
    const email = req.params.email;
    Logger.debug(email);

    try {
      if (!email) {
        return res
          .status(400)
          .json({ message: API_MESSAGES.SUBSCRIPTION_EMAIL_REQUIRED });
      }

      addSubscription(email);

      Logger.info(API_MESSAGES.ADD_SUBSCRIPTION_SUCCESS);
      res.status(201).json({ message: API_MESSAGES.ADD_SUBSCRIPTION_SUCCESS });
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  },
  removeSubscription(req: Request, res: Response) {
    Logger.info(API_MESSAGES.REMOVE_SUBSCRIPTION_SUCCESS);
    res.status(201).json({ message: API_MESSAGES.REMOVE_SUBSCRIPTION_SUCCESS });
  },
};
