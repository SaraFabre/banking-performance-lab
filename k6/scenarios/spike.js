import { paymentFlow } from "../flows/payment.flow.js";

export const options = {
  vus: 100,
  duration: "15s"
};

export default function () {
  paymentFlow("http://localhost:8080");
}
