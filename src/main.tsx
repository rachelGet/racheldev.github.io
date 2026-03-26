import { useState, useEffect, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, useTheme } from './commonSrc/ThemeContext.tsx'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
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

function MuiThemeBridge({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const muiTheme = useMemo(() => createTheme({
    palette: {
      mode: theme === 'dark' ? 'dark' : 'light',
      ...(theme === 'dark' ? {
        background: {
          default: '#0f1117',
          paper: '#1e2030',
        },
        text: {
          primary: '#c0caf5',
          secondary: '#8b95c9',
        },
        divider: '#2e3148',
        primary: {
          main: '#4a90d9',
        },
      } : {
        background: {
          default: '#f5f7fa',
          paper: '#ffffff',
        },
        text: {
          primary: '#2c3e50',
          secondary: '#5a6a7e',
        },
        divider: '#d8dce6',
        primary: {
          main: '#3b82f6',
        },
      }),
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  }), [theme]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline enableColorScheme />
      {children}
    </MuiThemeProvider>
  );
}

function Root() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Router basename="/racheldev.github.io">
      <ThemeProvider>
        <MuiThemeBridge>
          <Background></Background>
          <Loader isLoading={isLoading} />
          <Navbar />
          <SideBar />
          <Routes>
            <Route path="/home" element={<App />} id='home' />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/about" element={<AboutMePage />} id='About me'/>
            <Route path="/languages" element={<LenguagesPage />} id='Lenguages'/>
            <Route path="/skills" element={<SkillsPage />} id='Skills'/>
            <Route path="/projects" element={<ProjecsPage />} id='Projects'/>
            <Route path="/articles" element={<ArtPage />} id='Articles'/>
            <Route path="/education" element={<EducationPage />} id='Certifications & Education'/>
          </Routes>
        </MuiThemeBridge>
      </ThemeProvider>
    </Router>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);
