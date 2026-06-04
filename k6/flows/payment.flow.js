import { authenticate } from "../requests/auth.js";
import { getBalance } from "../requests/accounts.js";
import { createPayment } from "../requests/payments.js";
import { commonChecks } from "../checks/common.checks.js";
import { paymentChecks } from "../checks/business.checks.js";

export function paymentFlow(baseUrl) {
  const token = authenticate(baseUrl);

  const balanceRes = getBalance(baseUrl, "123456", token);
  commonChecks(balanceRes);

  const paymentRes = createPayment(baseUrl, token);
  commonChecks(paymentRes);
  paymentChecks(paymentRes);
}
