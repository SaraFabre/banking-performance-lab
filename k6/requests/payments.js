import http from "k6/http";

export function createPayment(baseUrl, token) {
  return http.post(
    `${baseUrl}/payments`,
    JSON.stringify({
      amount: 250,
      currency: "BRL"
    }),
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
}
