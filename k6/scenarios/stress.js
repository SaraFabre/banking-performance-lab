import { paymentFlow } from "../flows/payment.flow.js";

export const options = {
  stages: [
    { duration: "30s", target: 20 },
    { duration: "30s", target: 50 },
    { duration: "30s", target: 100 }
  ]
};

export default function () {
  paymentFlow("http://localhost:8080");
}
