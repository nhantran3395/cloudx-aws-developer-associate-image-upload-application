import { Request, Response } from "express";
import { Logger } from "../logger";
import { imagesService } from "../services";
import { API_MESSAGES } from "../shared/messages";

const { uploadImage } = imagesService;

export const imagesController = {
  uploadImage(req: Request, res: Response) {
    const image = req.file;
    Logger.debug(image);

    try {
      if (!image) {
        throw new Error("Image data not exists");
      }
      uploadImage(image);
      Logger.info(API_MESSAGES.UPLOAD_IMAGE_SUCCESS);
      res.status(201).json({ message: API_MESSAGES.UPLOAD_IMAGE_SUCCESS });
    } catch (err: any) {
      Logger.error(err.message);
      res.status(500).json({ message: err.message });
    }
  },
};
