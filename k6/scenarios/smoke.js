import { paymentFlow } from "../flows/payment.flow.js";
import { thresholds } from "../config/thresholds.js";

export const options = {
  vus: 1,
  duration: "10s",
  thresholds
};

export default function () {
  paymentFlow("http://localhost:8080");
}
