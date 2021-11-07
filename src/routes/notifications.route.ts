import express from "express";
import { notificationsController } from "../controllers";

const router = express.Router();
const { addSubscription, removeSubscription } = notificationsController;

router.post("/subscriptions/:email", addSubscription);
router.delete("/subscriptions", removeSubscription);

export default router;
