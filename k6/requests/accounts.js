import http from "k6/http";

export function getBalance(baseUrl, accountId, token) {
  return http.get(`${baseUrl}/accounts/${accountId}/balance`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
