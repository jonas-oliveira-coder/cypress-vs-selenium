## 📄 README.md

# Cypress vs Selenium — Teste de Performance 🧪⚡

Este projeto tem como objetivo comparar o tempo de execução entre **Cypress** e **Selenium (Python)** em um cenário simples de teste automatizado.

O teste consiste em:
- Acessar `https://example.cypress.io`
- Verificar o texto **"Kitchen Sink"**
- Medir o tempo total do teste

---

## 🏗️ Estrutura do Projeto


```
cypress-vs-selenium/
│── cypress/
│── selenium/
│── docker/
│── docker-compose.yml
└── .github/workflows/ci.yml
````

---

## 🚀 Tecnologias

| Ferramenta | Uso |
|-----------|-----|
| Cypress | Teste E2E |
| Selenium + Python | Teste E2E |
| Docker | Containerização |
| Docker Compose | Orquestração |
| GitHub Actions | CI/CD |

---

## 🐳 Execução com Docker

### Build e execução

```bash
docker compose up --build
````

Isso irá:
✅ Construir as imagens do Cypress e Selenium
✅ Executar ambos os testes
✅ Exibir o tempo de execução no terminal

---

## 🧪 Resultado esperado

Exemplo de saída aproximada:

```
Cypress Execution time: ~300–600ms
Selenium Execution time: ~800–2000ms
```

> Valores variam conforme máquina, rede e ambiente de execução.

---

## ⚙️ CI — GitHub Actions

Este repositório contém pipeline que executa os dois testes automaticamente a cada push.

Arquivo: `.github/workflows/ci.yml`

---

## 🎯 Objetivo

Comparação simples e prática para demonstrar:

* Tempo de execução
* Facilidade de setup
* Diferenças no fluxo de automação

---

## 📌 Observação

Este projeto **não busca definir qual ferramenta é melhor**, pois cada uma possui vantagens.
Foco exclusivo: **tempo e experiência de execução para um teste básico**.

---

## 👨‍💻 Autor

Projeto criado para estudo e comparação de ferramentas de automação E2E.

---
