import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HolaMundo } from './components/helloWorld.jsx'
import { Navbar } from './components/navbarComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
  {/*para pasar de un padre a un hijo*/}
  
    <HolaMundo user={{name:'Profe', lastname: 'Doe'}} id='1'/>
    
  </React.StrictMode>,
)
