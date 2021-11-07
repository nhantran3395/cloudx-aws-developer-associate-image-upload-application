import AWS from "../configs/aws.config";
import { Logger } from "../logger";

const sns = new AWS.SNS({ apiVersion: "2010-03-31" });

export const notificationsService = {
  addSubscription(email: string) {
    const params = {
      Protocol: "EMAIL",
      TopicArn: process.env.AWS_NOTIFICATION_TOPIC_ARN ?? "",
      Endpoint: email ?? "",
    };

    const subscribePromise = sns.subscribe(params).promise();

    subscribePromise
      .then(function (data) {
        Logger.info("Subscription ARN is " + data.SubscriptionArn);
      })
      .catch(function (err) {
        Logger.info(err, err.stack);
      });
  },
};
