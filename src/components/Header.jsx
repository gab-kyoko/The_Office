import { useState } from 'react'
import './Header.css'

function Header({ titulo, subtitulo }) {
    const [canecaAtiva, setCanecaAtiva] = useState(false)

    return (
        <header className="site-header" id="inicio">
            <div className="utility-bar">
                <span>Filial de Scranton, Pennsylvania</span>
                <span className="office-status"><i aria-hidden="true" /> Escritório aberto · 8h–17h</span>
            </div>

            <nav className="main-nav" aria-label="Navegação principal">
                <a className="brand" href="#inicio" aria-label="Dunder Mifflin — início">
                    <img src="/assets/dunder-mifflin-logo.png" alt={titulo} />
                </a>
                <div className="nav-links">
                    <a href="#sobre">A empresa</a>
                    <a href="#equipe">Equipe</a>
                    <a href="#mural">Mural</a>
                    <a href="#intranet">Portal interno</a>
                    <a href="#ajuda">Ajuda</a>
                </div>
                <a className="sales-link" href="mailto:vendas@dundermifflin.com">Pedir orçamento <span>↗</span></a>
            </nav>

            <div className="hero-shell">
                <div className="hero-copy">
                    <p className="eyebrow">Papel local. Atendimento de verdade.</p>
                    <h1>Papel é o que fazemos.<br /><em>Pessoas são o porquê.</em></h1>
                    <p className="hero-lede">{subtitulo}. Da primeira resma à reposição de emergência, nosso time atende empresas da Pensilvânia como se cada pedido fosse o único do dia.</p>
                    <div className="hero-actions">
                        <a className="button button-primary" href="#equipe">Conheça o time</a>
                        <a className="text-link" href="#sobre">Por que comprar local? <span>→</span></a>
                    </div>
                    <dl className="hero-stats" aria-label="Destaques da filial">
                        <div><dt>1969</dt><dd>Desde</dd></div>
                        <div><dt>24h</dt><dd>Entrega local</dd></div>
                        <div><dt>∞</dt><dd>Reuniões que poderiam ser e-mails</dd></div>
                    </dl>
                </div>

                <div className="hero-photo" aria-label="Michael Scott, gerente regional">
                    <img src="/assets/michael-scott.png" alt="Michael Scott fazendo sinal positivo" />
                    <div className="manager-tag">
                        <span className="tag-kicker">Uma mensagem do gerente</span>
                        <strong>“A melhor filial. Provavelmente.”</strong>
                        <span>Michael G. Scott · Gerente Regional</span>
                        <button className={`mug-button ${canecaAtiva ? 'is-active' : ''}`} onClick={() => setCanecaAtiva((ativo) => !ativo)}>
                            <span aria-hidden="true">☕</span> {canecaAtiva ? 'WORLD’S BEST BOSS — certificado pelo proprietário da caneca.' : 'Inspecionar credencial do gerente'}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
