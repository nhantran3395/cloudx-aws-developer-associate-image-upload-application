import AWS from "aws-sdk";
import { Logger } from "../logger";

AWS.config.update({ region: process.env.AWS_REGION ?? "" });

const sqs = new AWS.SQS({ apiVersion: "2012-11-05" });
const queue_url = process.env.AWS_QUEUE_URL ?? "";

export const imagesService = {
  uploadImage(file: Express.Multer.File) {
    const params = {
      MessageBody: JSON.stringify({
        uploadedAt: new Date().toISOString(),
        image: {
          fileName: file.filename,
          mimeType: file.mimetype,
          destination: file.destination,
          path: file.path,
          size: file.size,
          encoding: file.encoding,
        },
      }),
      QueueUrl: queue_url,
    };

    sqs.sendMessage(params, (err, data) => {
      if (err) {
        Logger.error(err.message);
      } else {
        Logger.info(`Successfully add message to queue ${data.MessageId}`);
      }
    });
  },
};
