# 🏦 Banking Performance Lab

Projeto de testes de performance utilizando k6, Grafana, InfluxDB e WireMock para simular fluxos bancários e monitorar métricas em tempo real.

---

# 🚀 Objetivo

Simular cenários de carga em APIs bancárias mockadas, validando:

- Performance
- Estabilidade
- Throughput
- Latência
- Taxa de erro
- Observabilidade em tempo real

O projeto foi desenvolvido com foco em:
- aprendizado de engenharia de performance
- arquitetura de testes
- observabilidade
- portfólio QA Pleno/Sênior

---

# 🧱 Arquitetura

```text
k6
 ├── Fluxos de performance
 ├── Checks e validações
 └── Thresholds

        ↓

InfluxDB
 └── Armazenamento de métricas

        ↓

Grafana
 └── Dashboards em tempo real

        ↓

WireMock
 └── Mock da Banking API
```

---

# 🛠️ Stack utilizada

| Ferramenta | Objetivo |
|---|---|
| k6 | Testes de performance |
| Grafana | Visualização das métricas |
| InfluxDB | Persistência das métricas |
| WireMock | Simulação da API bancária |
| Docker | Orquestração do ambiente |

---

# 📁 Estrutura do projeto

```text
banking-performance-lab/
│
├── docker-compose.yml
│
├── grafana/
│   └── dashboards/
│
├── wiremock/
│   ├── mappings/
│   └── __files/
│
├── k6/
│   ├── config/
│   ├── data/
│   ├── flows/
│   ├── requests/
│   ├── scenarios/
│   ├── utils/
│   └── reports/
│
└── README.md
```

---

# 🔥 Fluxos simulados

## 💳 Payment Flow

Fluxo completo de pagamento contendo:

- autenticação OAuth
- consulta de conta
- criação de pagamento
- validação de status
- confirmação de transação

---

# 📊 Métricas monitoradas

O dashboard do Grafana monitora:

- 👥 Virtual Users
- 🚀 Requests por segundo
- 📈 p95 response time
- ❌ Error rate
- 🔥 Total requests

---

# ✅ Checks implementados

```js
check(response, {
  'status é 2xx': (r) => r.status >= 200 && r.status < 300,
  'tempo de resposta aceitável': (r) => r.timings.duration < 500,
  'pagamento possui ID': (r) => r.json('paymentId') !== undefined,
  'status do pagamento válido': (r) => r.json('status') === 'APPROVED',
});
```

---

# 🎯 Thresholds

```js
thresholds: {
  http_req_duration: ['p(95)<500'],
  http_req_failed: ['rate<0.01'],
}
```

---

# 📈 Exemplo de execução

```text
checks_total.......: 12114
checks_succeeded...: 100.00%

http_req_duration..: avg=199ms
p(95)=308ms

http_req_failed....: 0.00%

http_reqs..........: 6057
100 req/s

vus................: 20
```

---

# ▶️ Como executar

## 1️⃣ Subir containers

```bash
docker compose up -d
```

---

## 2️⃣ Executar teste de carga

```bash
k6 run --out influxdb=http://127.0.0.1:8086/k6 k6/scenarios/load.js
```

---

# 📊 Grafana

Acesse:

```text
http://localhost:3000
```

Dashboard:

```text
🏦 Banking Performance Dashboard
```

---

# 🔍 InfluxDB

Porta:

```text
8086
```

Banco utilizado:

```text
k6
```

---

# 🧪 Cenário executado

```js
export const options = {
  vus: 20,
  duration: '1m',
};
```

---

# 🎨 Diferenciais do projeto

✅ Arquitetura organizada  
✅ Observabilidade em tempo real  
✅ API mockada para testes controlados  
✅ Dashboards customizados  
✅ Simulação de fluxo bancário  
✅ Métricas de performance reais  
✅ Estrutura próxima de ambiente corporativo  

---

# 🚀 Evoluções futuras

- Stress Test
- Spike Test
- Testes distribuídos
- CI/CD com GitHub Actions
- Relatórios HTML automáticos
- Comparação entre execuções
- Métricas por endpoint

---

# 👩‍💻 Autor

Projeto desenvolvido com foco em evolução técnica em:

- QA
- Performance Testing
- Observabilidade
- Engenharia de Qualidade
