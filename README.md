# Cypress vs Selenium — Benchmark de Performance ⚡🧪

Este projeto compara o tempo de execução entre **Cypress** e **Selenium (Python)** em um cenário simples de automação E2E.

O teste realiza as ações:

* Acessar `https://example.cypress.io`
* Validar o texto **"Kitchen Sink"**
* Medir o tempo total de execução

O objetivo é demonstrar, de forma prática e transparente, o desempenho de cada ferramenta em um caso básico.

---

## 📂 Estrutura do Projeto

```
cypress-vs-selenium/
├── cypress/              # Teste Cypress
├── selenium/             # Teste Selenium (Python)
├── docker/               # Dockerfiles
├── docs/                 # GitHub Pages (gráfico)
├── results.json          # Resultados atualizados
├── docker-compose.yml
└── .github/workflows/    # Pipeline CI
```

---

## 🛠️ Tecnologias

| Tecnologia        | Função                             |
| ----------------- | ---------------------------------- |
| Cypress           | Automação E2E                      |
| Selenium + Python | Automação E2E                      |
| Docker            | Containers                         |
| Docker Compose    | Orquestração                       |
| GitHub Actions    | Execução CI e benchmark automático |
| Chart.js          | Gráfico no GitHub Pages            |

---

## 🐳 Executando localmente com Docker

```bash
docker compose up --build
```

O comando irá:

✅ Construir as imagens
✅ Rodar Selenium e Cypress
✅ Exibir os tempos no terminal

---

## 📈 Resultados esperados

Exemplo aproximado:

```
Cypress: 300–600ms
Selenium: 800–2000ms
```

> Os valores variam conforme hardware, rede e ambiente.

---

## 🤖 CI Automatizado

O projeto conta com pipeline no **GitHub Actions** que:

* Executa os testes periodicamente
* Atualiza o arquivo `results.json`
* Publica o gráfico automaticamente no GitHub Pages

---

## 🌐 Dashboard (GitHub Pages)

O gráfico com os resultados pode ser visualizado em:

```
https://jonas-oliveira-coder.github.io/cypress-vs-selenium
```

---

## 🎯 Objetivo

Este projeto tem fins educacionais e serve para demonstrar:

* Diferenças no tempo de execução
* Simplicidade de configuração
* Fluxo básico de automação em cada stack

> Não é uma disputa para definir “qual é melhor”, e sim uma comparação prática.

---

## 👤 Autor

Projeto criado para estudo e referência em automação E2E e CI.

---