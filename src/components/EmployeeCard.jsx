import './EmployeeCard.css'

function EmployeeCard({ membro, numero, onClick }) {
    return (
        <button className={`card ${membro.foto ? 'card-with-photo' : ''}`} onClick={onClick} aria-label={`Abrir perfil de ${membro.nome}`}>
            <span className="card-number">{numero}</span>
            <div className="avatar" style={{ '--avatar': membro.corAvatar }}>
                {membro.foto ? <img src={membro.foto} alt="" /> : <span>{membro.iniciais}</span>}
            </div>
            <div className="card-copy">
                <p className="department">{membro.departamento}</p>
                <h3>{membro.nome}</h3>
                <p className="cargo">{membro.cargo}</p>
                <p className="curiosidade">“{membro.curiosidade}”</p>
            </div>
            <span className="card-action">Abrir arquivo <i aria-hidden="true">↗</i></span>
        </button>
    )
}

export default EmployeeCard
