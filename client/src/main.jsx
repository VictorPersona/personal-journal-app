import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { JournalProvider } from './context/JournalProvider.jsx'

createRoot(document.getElementById('root')).render(
  <JournalProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </JournalProvider>
)
