# Selo de Risco de IA

Site estático (HTML, CSS e JavaScript, sem etapa de build) do Selo de Risco de IA do Observatório. Origem: protótipo publicado como artefato do Claude, em 24/11/2026.

## Rodar localmente

```
python3 -m http.server 8080
```

Abra http://localhost:8080. Abrir o `index.html` direto pelo arquivo não carrega o acervo inicial.

## Estrutura

- `index.html`: as três telas (Início, Acervo, Avaliar), navegadas por âncora (`#inicio`, `#acervo`, `#avaliar`).
- `style.css` e `app.js`: estilo e lógica (critérios, selo, relatório, acervo).
- `storage.js`: camada de armazenamento. Hoje o acervo fica no `localStorage` de cada navegador, com os registros de partida de `dados/acervo-inicial.json`. Para um acervo compartilhado, troque só a função `criarBanco()`, mantendo a interface descrita no topo do arquivo.
- `dados/acervo-inicial.json`: 7 registros de partida (GatomIa, Letrus, Matific).
- `logos/`: logos usados na página.

## Publicação na Vercel

Projeto estático: framework "Other", sem comando de build, diretório de saída na raiz desta pasta (Root Directory: `matriz-risco/selo-de-risco-ia`). Fontes carregadas do Google Fonts.
