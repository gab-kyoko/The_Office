import './BulletinBoard.css'

function BulletinBoard({ titulo, subtitulo, avisos }) {
    return (
        <section className="bulletin-section" id="mural">
            <header className="bulletin-heading">
                <div>
                    <p className="section-label section-label-light">Comunicação interna</p>
                    <h2>{titulo}</h2>
                </div>
                <p>{subtitulo}</p>
            </header>
            <div className="bulletin-board">
                {avisos.map((aviso, index) => (
                    <article className={`notice notice-${aviso.tipo}`} key={aviso.id} style={{ '--tilt': `${index % 2 ? 1.2 : -1.4}deg` }}>
                        <span className="pushpin" aria-hidden="true" />
                        <p className="notice-meta">{aviso.categoria} · {aviso.data}</p>
                        <h3>{aviso.titulo}</h3>
                        <p>{aviso.texto}</p>
                        <small>{aviso.assinatura}</small>
                    </article>
                ))}
                <div className="board-doodle" aria-hidden="true">
                    <span>D</span><span>M</span>
                    <small>inc.</small>
                </div>
            </div>
        </section>
    )
}

export default BulletinBoard
