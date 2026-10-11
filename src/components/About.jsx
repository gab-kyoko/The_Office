import './About.css'

function About({ titulo, texto }) {
    return (
        <section className="about-container" id="sobre">
            <div className="about-copy">
                <p className="section-label">Quem somos</p>
                <h2>{titulo}</h2>
                <p className="about-intro">{texto}</p>
                <blockquote>
                    “Nosso negócio é papel. Nosso diferencial é lembrar o seu nome.”
                    <cite>— Política de atendimento da filial</cite>
                </blockquote>
                <div className="about-points" aria-label="Compromissos da Dunder Mifflin">
                    <div><span>01</span><strong>Atendimento humano</strong><p>Uma pessoa de verdade atende quando você liga.</p></div>
                    <div><span>02</span><strong>Estoque local</strong><p>Seu papel não precisa cruzar o país para chegar.</p></div>
                    <div><span>03</span><strong>Relações duradouras</strong><p>Clientes conhecidos pelo nome, não pelo número.</p></div>
                </div>
            </div>
            <figure className="about-portrait">
                <div className="red-block" aria-hidden="true" />
                <img src="/assets/jim-halpert.png" alt="Jim Halpert no escritório da filial de Scranton" />
                <figcaption>
                    <span>Representante em destaque</span>
                    <strong>Jim Halpert</strong>
                    <small>Ele está trabalhando. Quase certamente.</small>
                </figcaption>
                <div className="paperclip-note" aria-hidden="true">Compra papel?<br /><b>Fale com o Jim.</b></div>
            </figure>
        </section>
    )
}

export default About
