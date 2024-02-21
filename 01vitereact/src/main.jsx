import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //how to configure 
  //to tailwind we can do very easily 
  <React.StrictMode>
    <App />
    <Chai />

  </React.StrictMode>,
)
