import EmployeeCard from './EmployeeCard.jsx'
import './TeamSection.css'

// BLOCO 4: cabeçalho da seção + grade de EmployeeCard vinda do JSON.
function TeamSection({ titulo, dica, membros, onSelecionar }) {
    return (
        <section className="team-container" id="equipe">
            <header className="team-heading">
                <div>
                    <p className="section-label">Diretório da filial</p>
                    <h2>{titulo}</h2>
                </div>
                {dica && <p className="team-dica">{dica}</p>}
            </header>
            <div className="card-grid">
                {membros.map((membro, index) => (
                    <EmployeeCard
                        key={membro.id}
                        membro={membro}
                        numero={String(index + 1).padStart(2, '0')}
                        onClick={() => onSelecionar(membro)}
                    />
                ))}
            </div>
        </section>
    )
}

export default TeamSection
