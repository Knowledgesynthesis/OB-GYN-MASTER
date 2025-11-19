import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useStore } from './store/useStore'
import Layout from './components/Layout'
import Home from './pages/Home'
import ModulePage from './pages/ModulePage'
import Assessment from './pages/Assessment'
import Cases from './pages/Cases'
import CaseDetail from './pages/CaseDetail'
import Glossary from './pages/Glossary'
import Settings from './pages/Settings'

function App() {
  const setOfflineStatus = useStore((state) => state.setOfflineStatus)

  useEffect(() => {
    // Set up online/offline event listeners
    const handleOnline = () => setOfflineStatus(false)
    const handleOffline = () => setOfflineStatus(true)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [setOfflineStatus])

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/module/:moduleId" element={<ModulePage />} />
          <Route path="/assessment/:moduleId" element={<Assessment />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/case/:caseId" element={<CaseDetail />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
