import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from "./components/Nav/Nav.jsx"
import Aside from "./components/Aside/Aside.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Aside />
  </StrictMode>,
)
