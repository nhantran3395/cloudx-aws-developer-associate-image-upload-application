import { Request, Response } from "express";
import { Logger } from "../logger";
import { API_MESSAGES } from "../shared/messages";

export const imagesController = {
  uploadImage(req: Request, res: Response) {
    res.status(201).json({ message: API_MESSAGES.UPLOAD_IMAGE_SUCCESS });
    Logger.info(API_MESSAGES.UPLOAD_IMAGE_SUCCESS);
  },
};
