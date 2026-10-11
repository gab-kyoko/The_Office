import { useMemo, useState } from 'react'
import './HelpCenter.css'

const articles = [
  {
    title: 'Como entrar no portal interno?',
    keywords: 'entrar login codigo cracha acesso',
    steps: ['Abra a secao “Portal interno”.', 'Digite SCRANTON1725.', 'Selecione “Entrar no portal”.'],
  },
  {
    title: 'Como comprovar que existe um backend?',
    keywords: 'backend servidor node api status render',
    steps: ['Entre no portal.', 'Localize “Estado do servidor”.', 'Atualize e observe o horario e o tempo ativo mudarem.'],
  },
  {
    title: 'Como gerar um memorando?',
    keywords: 'memorando mensagem api gerar',
    steps: ['Entre no portal.', 'Selecione “Gerar novo memorando”.', 'Aguarde a resposta de GET /api/message.'],
  },
  {
    title: 'O site demorou para abrir no Render. E agora?',
    keywords: 'render lento hibernacao demora gratuito',
    steps: ['Aguarde cerca de um minuto.', 'Atualize a pagina.', 'Confira /health se o problema continuar.'],
  },
]

function HelpCenter() {
  const [query, setQuery] = useState('')

  const visibleArticles = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase('pt-BR')
    if (!normalized) return articles
    return articles.filter((article) => `${article.title} ${article.keywords}`.toLocaleLowerCase('pt-BR').includes(normalized))
  }, [query])

  return (
    <section className="help-section" id="ajuda">
      <header className="help-heading">
        <div>
          <p className="section-label">Ajuda e documentacao</p>
          <h2>Central de ajuda de Scranton</h2>
        </div>
        <p>Respostas curtas, pesquisaveis e organizadas em passos concretos.</p>
      </header>

      <label className="help-search">
        <span>Pesquisar na ajuda</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ex.: servidor, cracha ou Render"
        />
      </label>

      <div className="help-layout">
        <div className="faq-list">
          {visibleArticles.length ? visibleArticles.map((article, index) => (
            <details key={article.title} open={index === 0 && !query}>
              <summary>{article.title}</summary>
              <ol>
                {article.steps.map((step) => <li key={step}>{step}</li>)}
              </ol>
            </details>
          )) : (
            <p className="empty-help" role="status">Nenhum resultado. Tente “servidor”, “cracha” ou “Render”.</p>
          )}
        </div>

        <aside className="context-help">
          <span className="info-icon" title="Ajuda apresentada no momento da duvida.">i</span>
          <h3>Ajuda no contexto</h3>
          <p>Campos, botoes e indicadores importantes possuem dicas proximas ou ao passar o cursor.</p>
          <a href="#intranet">Ir ao portal e testar <span aria-hidden="true">→</span></a>
        </aside>
      </div>
    </section>
  )
}

export default HelpCenter
