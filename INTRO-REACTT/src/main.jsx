import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HolaMundo } from './components/helloWorld.jsx'
import { Navbar } from './components/navbarComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <HolaMundo/>
  </React.StrictMode>,
)
