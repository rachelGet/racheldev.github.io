import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './zobjectsSrc/Navbar.tsx'
import SideBar from './zobjectsSrc/Sidebar.tsx'
import Background from "./zobjectsSrc/Background.tsx";
import App from './homePage/App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <Navbar />
        <SideBar />
        <App/>
        <Background/>

  </StrictMode>,
)
