import { BrowserRouter, Route, Routes } from 'react-router/internal/react-server-client'
import './App.css'
import Niveau from './presentation/pages/niveau'
import type { NiveauEnum } from './domain/models/Question'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Introduction/>} /> */}
        <Route path="/Niveau" element={<Niveau setPlayerLevel={(level:NiveauEnum) => {}}/>} />
        {/* <Route path="/Questionnaire" element={<Questionnaire/>} /> */}
        {/* <Route path="/Resultats" element={<Resultats/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App