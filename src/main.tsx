import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './commonSrc/ThemeContext.tsx'
import Loader from './commonSrc/Loader.tsx'
import Navbar from './zobjectsSrc/Navbar.tsx'
import SideBar from './zobjectsSrc/Sidebar.tsx'
import Background from "./zobjectsSrc/Background.tsx"
import App from './homePage/App.tsx'

function Root() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StrictMode>
      <ThemeProvider>
        <Loader isLoading={isLoading} />
        <Navbar />
        <SideBar />
        <App />
        <Background />
      </ThemeProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);
