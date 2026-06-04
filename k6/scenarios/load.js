import { paymentFlow } from "../flows/payment.flow.js";
import { thresholds } from "../config/thresholds.js";

export const options = {
  vus: 20,
  duration: "1m",
  thresholds
};

export default function () {
  paymentFlow("http://localhost:8080");
}
