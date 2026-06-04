export const thresholds = {
  http_req_duration: ["p(95)<600"],
  http_req_failed: ["rate<0.005"],
  checks: ["rate>0.99"]
};
