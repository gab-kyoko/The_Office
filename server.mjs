import express from 'express'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distPath = path.join(__dirname, 'dist')

/**
 * Mensagens originais inspiradas no humor de The Office. Elas ficam no servidor
 * para demonstrar que a pagina nao e apenas um conjunto de arquivos estaticos.
 */
const officeMessages = [
  { department: 'Vendas', text: 'Meta do dia: vender papel antes que o cliente descubra o PDF.' },
  { department: 'RH', text: 'Lembrete: gritar "falencia" nao inicia um processo juridico.' },
  { department: 'Gerencia', text: 'A reuniao foi adiada para um horario em que todos fingirao estar livres.' },
  { department: 'Contabilidade', text: 'O orcamento para festas continua maior que o de seguranca.' },
  { department: 'Qualidade', text: 'Inspecao concluida: nenhuma resma foi encontrada dentro de gelatina.' },
]

export const app = express()

// Evita expor o cabecalho padrao do Express e adiciona um identificador didatico.
app.disable('x-powered-by')
app.use((request, response, next) => {
  response.setHeader('X-Application', 'Scranton-Branch-Portal')
  next()
})

/** Endpoint simples usado pelo Render para verificar se o processo esta ativo. */
app.get('/health', (_request, response) => {
  response.status(200).json({ status: 'ok' })
})

/**
 * Retorna dados calculados no momento da requisicao. A data e o tempo de
 * atividade comprovam, durante a apresentacao, que existe codigo no servidor.
 */
app.get('/api/status', (_request, response) => {
  response.json({
    ok: true,
    application: 'Portal da Filial de Scranton',
    runtime: `Node.js ${process.version}`,
    serverTime: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
  })
})

/** A cada chamada o backend escolhe um novo comunicado interno. */
app.get('/api/message', (_request, response) => {
  const index = Math.floor(Math.random() * officeMessages.length)
  response.json(officeMessages[index])
})

// Em producao o mesmo processo Node entrega o bundle React gerado pelo Vite.
app.use(express.static(distPath, { extensions: ['html'] }))

// Rotas desconhecidas da API recebem JSON; as demais voltam para o React.
app.use((request, response) => {
  if (request.path.startsWith('/api/')) {
    return response.status(404).json({ error: 'Endpoint nao encontrado.' })
  }

  return response.sendFile(path.join(distPath, 'index.html'))
})

const isMainModule = process.argv[1]
  && import.meta.url === pathToFileURL(process.argv[1]).href

if (isMainModule) {
  const port = Number(process.env.PORT) || 3000
  app.listen(port, '0.0.0.0', () => {
    console.log(`Portal de Scranton ativo na porta ${port}.`)
  })
}
