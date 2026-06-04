import http from "k6/http";

export function authenticate(baseUrl) {
  const res = http.post(`${baseUrl}/oauth/token`, {});
  return res.json().access_token;
}
