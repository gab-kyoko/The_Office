import { useEffect, useState } from 'react'
import './EmployeeProfile.css'

function EmployeeProfile({ membro, onFechar }) {
    const [prisonMode, setPrisonMode] = useState(false)
    useEffect(() => {
        const onKeyDown = (event) => event.key === 'Escape' && onFechar()
        document.body.classList.add('modal-open')
        window.addEventListener('keydown', onKeyDown)
        return () => {
            document.body.classList.remove('modal-open')
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [onFechar])

    return (
        <div className="profile-overlay" onClick={onFechar} role="presentation">
            <article className={`profile-card ${prisonMode ? 'prison-mode' : ''}`} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="profile-name">
                <button className="profile-close" onClick={onFechar} aria-label="Fechar">
                    ×
                </button>

                <div className="profile-visual" style={{ '--avatar': membro.corAvatar }}>
                    {membro.foto ? <img src={membro.foto} alt="" /> : <span>{membro.iniciais}</span>}
                    <div className="id-label"><b>DM · SCRANTON</b><small>ID {String(membro.id).padStart(4, '0')}</small></div>
                </div>

                <div className="profile-content">
                    <p className="profile-department">{membro.departamento}</p>
                    <h2 id="profile-name">{prisonMode ? 'Prison Mike' : membro.nome}</h2>
                    <p className="profile-cargo">{prisonMode ? 'Especialista autoproclamado em vida carcerária' : membro.cargo}</p>
                    <div className="profile-rule" />
                    <p className="profile-bio">{prisonMode ? 'Sobreviveu aos Dementadores, ao mingau e à proibição de usar bandanas roxas no escritório. Sua palestra preventiva foi classificada pelo RH como “sem fundamento e estranhamente longa”.' : membro.paginaPessoal.bio}</p>
                    <div className="profile-facts">
                        <span>Nota não oficial</span>
                        <p>{membro.paginaPessoal.curiosidadeExtra}</p>
                    </div>
                    {membro.easterEgg === 'camera' && (
                        <p className="camera-note"><span aria-hidden="true">● REC</span> Sim, ele acabou de olhar para a câmera.</p>
                    )}
                    {membro.id === 1 && (
                        <button className="profile-character" onClick={() => setPrisonMode((ativo) => !ativo)}>{prisonMode ? 'Encerrar palestra da prisão' : 'Abrir alter ego confidencial'}</button>
                    )}
                    <button className="profile-back" onClick={onFechar}>Voltar ao diretório <span>→</span></button>
                </div>
            </article>
        </div>
    )
}

export default EmployeeProfile
