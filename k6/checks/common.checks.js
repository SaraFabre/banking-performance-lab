import { check } from "k6";

export function commonChecks(res) {
  check(res, {
    "status é 2xx": r => r.status >= 200 && r.status < 300,
    "tempo de resposta aceitável": r => r.timings.duration < 1000
  });
}
