import { useState } from 'react'
import './Footer.css'

function Footer({ copyright }) {
    const [cliques, setCliques] = useState(0)
    const segredoAtivo = cliques >= 3

    return (
        <footer className="footer-container">
            <div className="footer-main">
                <div>
                    <button className="footer-wordmark" onClick={() => setCliques((valor) => Math.min(valor + 1, 3))} aria-label="Dunder Mifflin">
                        DUNDER<br />MIFFLIN <small>INC.</small>
                    </button>
                    <p>Limitless paper in a paperless world.</p>
                </div>
                <div className="footer-office">
                    <span>Filial de Scranton</span>
                    <strong>1725 Slough Avenue</strong>
                    <p>Scranton, PA 18505 · (570) 555-0147</p>
                </div>
                <nav aria-label="Links do rodapé">
                    <a href="#inicio">Início</a>
                    <a href="#sobre">A empresa</a>
                    <a href="#equipe">Equipe</a>
                    <a href="#mural">Mural</a>
                    <a href="#intranet">Portal interno</a>
                    <a href="#ajuda">Ajuda</a>
                </nav>
            </div>
            {segredoAtivo && <p className="threat-level" role="status">Arquivo confidencial desbloqueado: Threat Level Midnight · Agente Michael Scarn</p>}
            <div className="footer-bottom">
                <p>{copyright}</p>
                <p>Projeto educacional de fã · Sem vínculo com NBCUniversal.</p>
            </div>
        </footer>
    )
}

export default Footer
