# Portal da Filial de Scranton

Aplicacao full-stack educacional inspirada em *The Office*. O projeto preserva somente referencias a serie e nao contem fotos, textos, rotas ou componentes pessoais do projeto que serviu como ponto de partida.

## O que a aplicacao faz

- apresenta a filial, o mural e o diretorio de personagens;
- protege o portal interno com o codigo de demonstracao `SCRANTON1725`;
- consulta `GET /api/status` para exibir horario e tempo de atividade do servidor;
- consulta `GET /api/message` para gerar memorandos no backend;
- inclui ajuda pesquisavel, dicas no contexto e instrucoes em passos;
- oferece `GET /health` para a verificacao automatica da hospedagem.

## Tecnologias

- React e Vite na interface;
- Node.js e Express no servidor;
- testes com o modulo nativo `node:test`;
- Render como plataforma de implantacao indicada.

## Executar localmente

Use Node.js 20 ou 22.

```bash
npm ci
npm run build
npm start
```

A aplicacao abre em `http://localhost:3000`. Para trabalhar com recarga automatica, use dois terminais:

```bash
npm run dev:api
```

```bash
npm run dev:web
```

## Validacao

```bash
npm test
npm run build
```

## Implantar no Render

1. Publique esta pasta em um repositorio proprio do GitHub.
2. No painel do Render, selecione **New** e **Web Service**.
3. Conecte o repositorio.
4. Confirme o plano **Free**.
5. Use `npm ci && npm run build` como Build Command.
6. Use `npm start` como Start Command.
7. Defina `/health` como Health Check Path.
8. Inicie a implantacao e aguarde o status **Live**.
9. Abra a URL `onrender.com` e teste o portal e o gerador de memorandos.

O arquivo `render.yaml` registra a mesma configuracao. Servicos gratuitos podem suspender depois de um periodo sem trafego e demorar para responder na primeira abertura.

Tutorial utilizado: [Deploy a Node Express App on Render](https://render.com/docs/deploy-node-express-app).

## Estrutura principal

```text
server.mjs                 servidor Express e APIs
src/App.jsx                composicao da interface
src/components             secoes e interacoes React
src/data/conteudo.json     personagens e conteudo tematico
test/server.test.mjs       testes do backend
render.yaml                configuracao da hospedagem
docs                       relatorio e arquitetura
```

## Observacao de uso

Este e um projeto conceitual de fa para finalidade educacional, sem vinculo com NBCUniversal. As imagens tematicas ja faziam parte do material fornecido pela autora do projeto.
