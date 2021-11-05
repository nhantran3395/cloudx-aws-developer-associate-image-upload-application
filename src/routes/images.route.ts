import express from "express";
import { imagesUploadProcessor } from "../middlewares";
import { imagesController } from "../controllers";

const router = express.Router();
const { uploadImage } = imagesController;

router.post("/", imagesUploadProcessor.single("image"), uploadImage);

export default router;
