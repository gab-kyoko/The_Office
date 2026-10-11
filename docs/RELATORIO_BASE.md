# Relatorio de Implantacao em Nuvem

## Portal da Filial de Scranton

**Estudante:** Gabrielle Kyoko Alves Abe

**Data:** 10/10/2026

## Objetivo

Implantar uma aplicacao web full-stack inspirada em *The Office*, com interface React e backend Node.js. O backend fornece dados em tempo real sobre o servidor e gera memorandos internos, demonstrando que a hospedagem executa codigo e nao apenas arquivos estaticos.

## Comparacao das plataformas

| Criterio | Render | Railway | Google Cloud Run |
| --- | --- | --- | --- |
| Execucao de backend | Node, Python, Docker e outros | Node, Docker e deteccao automatica | Conteiner ou implantacao pelo codigo-fonte |
| Inicio gratuito | Web Service Free | Plano Free com credito mensal e teste inicial | Franquia gratuita por uso |
| Forma de deploy | Repositorio Git ou imagem Docker | GitHub, CLI ou imagem Docker | Console ou CLI `gcloud` |
| URL publica | Subdominio `onrender.com` | Dominio gerado no servico | Subdominio `run.app` |
| Limitacao relevante | Suspende apos inatividade | Creditos e limites do plano | Exige mais configuracao de projeto e permissoes |
| Complexidade para iniciante | Baixa | Baixa | Media a alta |

## Escolha da plataforma

Escolhi o Render por dois criterios. Primeiro, o fluxo pelo painel e curto e permite configurar build, inicializacao e health check em uma unica tela. Segundo, o Web Service Free executa Node.js e entrega uma URL publica sem exigir pagamento para esta demonstracao. A suspensao por inatividade e aceitavel em uma atividade academica.

## Tutorial e aplicacao

Tutorial seguido: [Deploy a Node Express App on Render](https://render.com/docs/deploy-node-express-app)

Aplicacao: Portal da Filial de Scranton

## Passos executados

1. Preparei a interface React e removi os modulos pessoais do projeto de origem.
2. Criei o servidor Express e os endpoints `/api/status`, `/api/message` e `/health`.
3. Configurei o processo para usar a variavel `PORT` e o host `0.0.0.0`.
4. Executei os testes automatizados e gerei o bundle com `npm run build`.
5. Publiquei o codigo em um repositorio Git.
6. Criei um Web Service no Render e selecionei o plano Free.
7. Configurei o build como `npm ci && npm run build` e a inicializacao como `npm start`.
8. Defini `/health` como caminho de verificacao.
9. Aguardei o status Live e testei a URL publica.

O tutorial precisou de um ajuste: alem de iniciar o Express, este projeto compila o React com Vite e o servidor entrega a pasta `dist`.

## Resultado

**URL publica:** [INSERIR URL DO RENDER]

A pagina inicial, o portal e a central de ajuda responderam corretamente. No portal, o horario e o tempo de atividade mudam quando o botao de atualizacao consulta o backend.

## Capturas obrigatorias

**Figura 1 Painel do Render com implantacao concluida**

[INSERIR CAPTURA DO PAINEL E DESTACAR O STATUS LIVE]

**Figura 2 Aplicacao na URL publica**

[INSERIR CAPTURA DO PORTAL E DESTACAR A URL E O PAINEL ESTADO DO SERVIDOR]

## Ajuda e documentacao

A aplicacao inclui uma central pesquisavel, perguntas frequentes, instrucoes em passos e dicas ao lado dos campos. Esses recursos reduzem a necessidade de explicacao externa e apresentam a ajuda no momento em que o usuario precisa dela.

## Referencias

- Render. [Deploy a Node Express App on Render](https://render.com/docs/deploy-node-express-app).
- Render. [Deploy for Free](https://render.com/docs/free).
- Railway. [Pricing Plans](https://docs.railway.com/pricing/plans).
- Google Cloud. [Build and deploy a Node.js web app to Cloud Run](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service).
- Nielsen Norman Group. [Help and Documentation](https://www.nngroup.com/articles/help-and-documentation/).
