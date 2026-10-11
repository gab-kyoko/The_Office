import { useState } from 'react'
import './EmployeePortal.css'

const ACCESS_CODE = 'SCRANTON1725'

const quickDocuments = [
  ['Pedido de ferias', 'Formulario enviado ao RH. Toby promete responder em algum momento.'],
  ['Relatorio de incidente', 'Ocorrencia registrada. Dwight ja abriu uma investigacao paralela.'],
  ['Reserva da sala', 'Sala de reuniao reservada por 15 minutos. Michael solicitou 3 horas.'],
]

function formatServerTime(isoDate) {
  if (!isoDate) return 'Aguardando o servidor'
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'medium',
  }).format(new Date(isoDate))
}

function EmployeePortal({ serverStatus, serverError, onRefreshStatus, onToast }) {
  const [code, setCode] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [accessError, setAccessError] = useState('')
  const [message, setMessage] = useState(null)
  const [loadingMessage, setLoadingMessage] = useState(false)

  function submitAccess(event) {
    event.preventDefault()

    if (code.trim().toUpperCase() !== ACCESS_CODE) {
      setAccessError('Codigo incorreto. Use a dica exibida logo abaixo do campo.')
      return
    }

    setAccessError('')
    setUnlocked(true)
  }

  async function requestMessage() {
    setLoadingMessage(true)
    try {
      const response = await fetch('/api/message')
      if (!response.ok) throw new Error('falha na requisicao')
      setMessage(await response.json())
    } catch {
      onToast('Nao foi possivel consultar o backend agora. Tente novamente.')
    } finally {
      setLoadingMessage(false)
    }
  }

  if (!unlocked) {
    return (
      <section className="portal-section" id="intranet">
        <div className="portal-login">
          <div className="portal-login-copy">
            <p className="section-label section-label-light">DM Connect</p>
            <h2>Portal interno da filial</h2>
            <p>Consulte o estado do servidor, gere comunicados e acesse formularios do escritorio.</p>
            <ol>
              <li>Digite o codigo do cracha.</li>
              <li>Selecione “Entrar no portal”.</li>
              <li>Use os paineis para testar o backend.</li>
            </ol>
          </div>

          <form className="access-card" onSubmit={submitAccess}>
            <label htmlFor="office-code">Codigo de acesso</label>
            <input
              id="office-code"
              value={code}
              onChange={(event) => setCode(event.target.value)}
              autoComplete="off"
              placeholder="Ex.: SCRANTON0000"
              aria-describedby="code-hint code-error"
            />
            <p className="access-hint" id="code-hint">
              Dica contextual: cidade da filial + numero do predio. Para a demonstracao, use <strong>{ACCESS_CODE}</strong>.
            </p>
            {accessError && <p className="access-error" id="code-error" role="alert">{accessError}</p>}
            <button type="submit">Entrar no portal</button>
          </form>
        </div>
      </section>
    )
  }

  return (
    <section className="portal-section portal-open" id="intranet">
      <div className="portal-app">
        <header className="portal-toolbar">
          <div className="portal-identity">
            <span className="portal-mark">DM</span>
            <div><small>DM CONNECT</small><strong>Filial de Scranton</strong></div>
          </div>
          <button className="logout-button" onClick={() => setUnlocked(false)}>Sair</button>
        </header>

        <div className="portal-titlebar">
          <div>
            <p>Area interna · Recursos Humanos</p>
            <h2>Bom dia, Scranton.</h2>
          </div>
          <span title="Este horario e calculado pelo processo Node no servidor.">
            {formatServerTime(serverStatus?.serverTime)}
          </span>
        </div>

        <div className="portal-grid">
          <article className="server-card">
            <div className="card-heading">
              <div>
                <p>Comprovacao de backend</p>
                <h3>Estado do servidor</h3>
              </div>
              <span className={serverStatus ? 'online' : 'offline'}>
                {serverStatus ? 'Online' : 'Indisponivel'}
              </span>
            </div>

            {serverStatus ? (
              <dl className="status-list">
                <div><dt>Aplicacao</dt><dd>{serverStatus.application}</dd></div>
                <div><dt>Runtime</dt><dd>{serverStatus.runtime}</dd></div>
                <div><dt>Horario</dt><dd>{formatServerTime(serverStatus.serverTime)}</dd></div>
                <div><dt>Ativo ha</dt><dd>{serverStatus.uptimeSeconds} segundos</dd></div>
              </dl>
            ) : (
              <p className="server-error">{serverError || 'Consultando a API...'}</p>
            )}

            <button className="secondary-button" onClick={onRefreshStatus}>Atualizar dados do servidor</button>
          </article>

          <article className="message-card">
            <div className="card-heading">
              <div>
                <p>Comunicacao interna</p>
                <h3>Gerador de memorandos</h3>
              </div>
              <span title="Cada clique chama GET /api/message no backend.">API</span>
            </div>

            <div className="memo-paper" aria-live="polite">
              {message ? (
                <>
                  <small>DEPARTAMENTO: {message.department.toUpperCase()}</small>
                  <p>{message.text}</p>
                </>
              ) : (
                <p>Solicite um comunicado para testar a resposta dinamica.</p>
              )}
            </div>
            <button className="primary-button" onClick={requestMessage} disabled={loadingMessage}>
              {loadingMessage ? 'Consultando servidor...' : 'Gerar novo memorando'}
            </button>
          </article>
        </div>

        <section className="document-shelf" aria-labelledby="documents-title">
          <div className="card-heading">
            <div><p>Central de documentos</p><h3 id="documents-title">Acoes rapidas</h3></div>
          </div>
          <div className="document-grid">
            {quickDocuments.map(([name, feedback]) => (
              <button key={name} onClick={() => onToast(feedback)}>
                <span aria-hidden="true">▤</span>
                <strong>{name}</strong>
                <small>Selecionar e receber confirmacao</small>
              </button>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default EmployeePortal
