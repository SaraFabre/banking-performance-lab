import { check } from "k6";

export function paymentChecks(res) {
  const body = res.json();

  check(body, {
    "pagamento possui ID": b => b.paymentId !== undefined,
    "status do pagamento válido": b =>
      ["COMPLETED", "PENDING"].includes(b.status)
  });
}
