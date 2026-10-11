import { useCallback, useEffect, useState } from 'react'
import conteudo from './data/conteudo.json'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import BulletinBoard from './components/BulletinBoard.jsx'
import TeamSection from './components/TeamSection.jsx'
import EmployeeProfile from './components/EmployeeProfile.jsx'
import JelloEasterEgg from './components/JelloEasterEgg.jsx'
import EmployeePortal from './components/EmployeePortal.jsx'
import HelpCenter from './components/HelpCenter.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null)
  const [showJello, setShowJello] = useState(false)
  const [notification, setNotification] = useState('')
  const [serverStatus, setServerStatus] = useState(null)
  const [serverError, setServerError] = useState('')

  // A notificacao e acessivel (aria-live) e some sozinha para nao bloquear a tela.
  useEffect(() => {
    if (!notification) return undefined
    const timer = window.setTimeout(() => setNotification(''), 4200)
    return () => window.clearTimeout(timer)
  }, [notification])

  const loadServerStatus = useCallback(async () => {
    setServerError('')
    try {
      const response = await fetch('/api/status')
      if (!response.ok) throw new Error('status indisponivel')
      setServerStatus(await response.json())
    } catch {
      setServerError('O servidor nao respondeu. Inicie a API com npm run dev:api.')
    }
  }, [])

  useEffect(() => {
    loadServerStatus()
  }, [loadServerStatus])

  function selectEmployee(employee) {
    setSelectedEmployee(employee)
    setShowJello(employee.easterEgg === 'gelatina')
  }

  return (
    <div className="app-container">
      <Header titulo={conteudo.header.titulo} subtitulo={conteudo.header.subtitulo} />

      <main>
        <About titulo={conteudo.sobre.titulo} texto={conteudo.sobre.texto} />

        <TeamSection
          titulo={conteudo.equipe.titulo}
          dica={conteudo.equipe.dica}
          membros={conteudo.equipe.membros}
          onSelecionar={selectEmployee}
        />

        <BulletinBoard
          titulo={conteudo.avisoMural.titulo}
          subtitulo={conteudo.avisoMural.subtitulo}
          avisos={conteudo.avisoMural.avisos}
        />

        <EmployeePortal
          serverStatus={serverStatus}
          serverError={serverError}
          onRefreshStatus={loadServerStatus}
          onToast={setNotification}
        />

        <HelpCenter />
      </main>

      <Footer copyright={conteudo.rodape.copyright} />

      {selectedEmployee && showJello && (
        <JelloEasterEgg onContinuar={() => setShowJello(false)} />
      )}

      {selectedEmployee && !showJello && (
        <EmployeeProfile
          membro={selectedEmployee}
          onFechar={() => setSelectedEmployee(null)}
        />
      )}

      <div className={`secret-toast ${notification ? 'is-visible' : ''}`} role="status" aria-live="polite">
        <span aria-hidden="true">●</span> {notification}
      </div>
    </div>
  )
}

export default App
