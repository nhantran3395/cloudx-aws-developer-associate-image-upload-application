import express from "express";
import { imagesController } from "../controllers";

const router = express.Router();
const { uploadImage } = imagesController;

router.post("/", uploadImage);

export default router;
