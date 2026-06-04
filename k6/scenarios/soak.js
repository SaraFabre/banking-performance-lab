import { paymentFlow } from "../flows/payment.flow.js";

export const options = {
  vus: 10,
  duration: "10m"
};

export default function () {
  paymentFlow("http://localhost:8080");
}
