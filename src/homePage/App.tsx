import './styles/App.css'
import { motion } from 'framer-motion';
import { useTheme } from '../commonSrc/ThemeContext.tsx';

function App() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <div className="flex fixed flex-col w-full z-full h-full top-0 left-0 start-0 z-10">
        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`w-full h-[8.5%] md:h-[9%] min-h-20 transition-all duration-300
            ${isDark
              ? 'bg-gradient-to-r from-[#1a1b26] via-[#1e2030] to-[#16213e] shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
              : 'bg-gradient-to-r from-white via-[#f5f7fa] to-[#e8ecf1] shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
            }`}
          id="Top div"
        />
        {/* Main section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`flex-grow md:h-auto w-full transition-all duration-300
            ${isDark
              ? 'bg-[#0f1117]/50'
              : 'bg-[#f5f7fa]/50'
            }`}
          id="Main div"
        />
        {/* Footer section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`w-full h-[5%] md:h-[6%] transition-all duration-300
            ${isDark
              ? 'bg-gradient-to-r from-[#16213e] via-[#1e2030] to-[#1a1b26] shadow-[0_-4px_20px_rgba(0,0,0,0.3)]'
              : 'bg-gradient-to-r from-[#e8ecf1] via-[#f0f2f5] to-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)]'
            }`}
          id="footer div"
        />
      </div>
    </>
  )
}

export default App
