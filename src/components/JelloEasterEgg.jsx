import { useEffect } from 'react'
import './JelloEasterEgg.css'

// EASTER EGG (Dwight): antes de abrir a página pessoal dele, mostra o
// grampeador preso na gelatina. Tudo desenhado em SVG, sem imagem externa.
function JelloEasterEgg({ onContinuar }) {
    useEffect(() => {
        const onKeyDown = (event) => event.key === 'Escape' && onContinuar()
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [onContinuar])

    return (
        <div className="jello-overlay" role="presentation">
            <div className="jello-card" role="dialog" aria-modal="true" aria-labelledby="jello-title">
                <p className="jello-classified">Ocorrência #0002 · Propriedade de D. Schrute</p>
                <svg viewBox="0 0 200 160" className="jello-svg">
                    <ellipse cx="100" cy="145" rx="70" ry="10" fill="#00000022" />
                    <path
                        d="M40 60 Q40 20 100 20 Q160 20 160 60 L150 130 Q150 145 100 145 Q50 145 50 130 Z"
                        fill="#ef9f29"
                        opacity="0.75"
                    />
                    <path
                        d="M40 60 Q100 80 160 60"
                        fill="none"
                        stroke="#ffffff55"
                        strokeWidth="3"
                    />
                    <g transform="translate(85 45) rotate(18)">
                        <rect x="0" y="0" width="14" height="55" rx="2" fill="#2b2b2b" />
                        <rect x="-4" y="0" width="22" height="10" rx="2" fill="#111" />
                    </g>
                </svg>
                <h2 id="jello-title">Seu grampeador está na gelatina. De novo.</h2>
                <p className="jello-title">Uma inspeção de segurança concluiu que o objeto está delicioso, porém indisponível para uso.</p>
                <button className="jello-btn" onClick={onContinuar}>
                    Remover a gelatina e abrir o arquivo
                </button>
            </div>
        </div>
    )
}

export default JelloEasterEgg
