import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css"
import Nav from "./components/Nav/Nav.jsx"
import Aside from "./components/Aside/Aside.jsx"
import Card from"./components/Cards/Card.jsx"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container-main">
    <Nav />
    <div className="main-cnt">
    <Aside />
    <Card />
    <Card /><Card /><Card /><Card /><Card /><Card /><Card />
    </div>
    </div>
  </StrictMode>,
)
