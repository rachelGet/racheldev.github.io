import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './commonSrc/ThemeContext.tsx'
import Loader from './commonSrc/Loader.tsx'
import Navbar from './zobjectsSrc/Navbar.tsx'
import SideBar from './zobjectsSrc/Sidebar.tsx'
import Background from "./zobjectsSrc/Background.tsx"
import App from './homePage/App.tsx'
import LenguagesPage from './leguagesPage/App.tsx'
import SkillsPage from './skillsPage/App.tsx'
import EducationPage from './educationPage/App.tsx'
import ArtPage from './artPage/App.tsx'
import AboutMePage from './aboutMePage/App.tsx'
import ProjecsPage from './projectsPage/App.tsx'

function Root() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Router basename="/racheldev.github.io">
      <ThemeProvider>
        <Background></Background>
        <Loader isLoading={isLoading} />
        <Navbar />
        <SideBar />
        <Routes>
          <Route path="/home" element={<App />} id='' />
          <Route path="/" element={<Navigate to="/home" />} /> 
          <Route path="/about" element={<AboutMePage />} id='About me'/>
          <Route path="/languages" element={<LenguagesPage />} id='Lenguages'/>
          <Route path="/skills" element={<SkillsPage />} id='Skills'/>
          <Route path="/projects" element={<ProjecsPage />} id='Projects'/>
          <Route path="/articles" element={<ArtPage />} id='Articles'/>
          <Route path="/education" element={<EducationPage />} id='Certifications & Education'/>
        </Routes>
        
      </ThemeProvider>
    </Router>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);
