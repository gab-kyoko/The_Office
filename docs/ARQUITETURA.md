# Arquitetura do Portal da Filial de Scranton

## Fluxo da requisicao

1. O navegador solicita a pagina ao processo Node.js.
2. O Express entrega os arquivos gerados pelo Vite na pasta `dist`.
3. A interface React solicita informacoes dinamicas em `/api/status` e `/api/message`.
4. O servidor processa a requisicao e devolve JSON.
5. O React atualiza somente o painel relacionado, sem recarregar a pagina.

## Endpoints

| Metodo | Rota | Finalidade |
| --- | --- | --- |
| GET | `/health` | Confirma que o processo esta ativo |
| GET | `/api/status` | Retorna runtime, horario e tempo de atividade |
| GET | `/api/message` | Escolhe um memorando no servidor |

## Decisoes de projeto

- O mesmo processo serve frontend e API para simplificar a implantacao gratuita.
- O servidor le a porta da variavel `PORT`, exigida pelas plataformas de nuvem.
- O acesso ao portal e demonstrativo; nao ha dados sensiveis nem autenticacao real.
- A central de ajuda aplica busca, instrucoes curtas e ajuda no contexto.
- O health check permite diagnosticar se uma falha esta no servidor ou na interface.

## Privacidade

A copia foi criada com uma lista permitida de arquivos. Somente os modulos tematicos de The Office e os recursos tecnicos necessarios foram copiados. Uma verificacao automatizada da pagina de producao tambem procura referencias fora desse escopo antes da entrega.
