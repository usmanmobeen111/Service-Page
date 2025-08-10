import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Services from './pages/Services.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Services/>
  </StrictMode>,
)
