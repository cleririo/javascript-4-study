import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppRoutes } from './routes/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>
)
