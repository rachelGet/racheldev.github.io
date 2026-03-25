import './styles/App.css'
import {IarrowLeft, IarrowRight} from "../commonSrc/icons/iconsFunc.tsx";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../commonSrc/ThemeContext.tsx';

function SunIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const wValue = 350;
  const wClosed = 16;
  const top = 20;
  const h = 95;

  const isDark = theme === 'dark';

  return (
    <>
      <motion.div
        style={{
          width: isOpen ? `${wValue}px` : `${wClosed}px`,
          top: `${top}px`,
          height: `${h}%`
        }}
        className={`fixed left-0 z-[9999] rounded-r-2xl transition-all duration-300 flex overflow-hidden
          ${isDark
            ? 'bg-gradient-to-b from-[#1a1b26] to-[#16213e] shadow-[4px_0_24px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-b from-white to-[#f0f2f5] shadow-[4px_0_24px_rgba(0,0,0,0.1)]'
          }`}
      >

        {/* Content */}
        <div
          style={{ width: isOpen ? `${wValue - wClosed}px` : '0px' }}
          className="h-full transition-all duration-300 overflow-hidden"
        >
          <div className="p-10 w-full">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className={`text-2xl font-bold mb-6 whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-gray-800'}`}
            >
              Menu
            </motion.h2>

            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={isDark ? 'text-gray-300' : 'text-gray-600'}
                >
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className={`py-2 cursor-pointer whitespace-nowrap ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
                  >
                    Configuracion
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`py-2 cursor-pointer whitespace-nowrap ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
                  >
                    Perfil
                  </motion.li>
                </motion.ul>
              )}
            </AnimatePresence>

            {/* Theme Toggle */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.25 }}
                  className="mt-8"
                >
                  <p className={`text-xs uppercase tracking-widest mb-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    Tema
                  </p>
                  <button
                    onClick={toggleTheme}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl cursor-pointer transition-all duration-300
                      ${isDark
                        ? 'bg-[#2e3148]/50 hover:bg-[#2e3148] text-gray-300 shadow-inner'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700 shadow-sm'
                      }`}
                  >
                    <motion.div
                      key={theme}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isDark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
                    </motion.div>
                    <span className="text-sm">
                      {isDark ? 'Modo Claro' : 'Modo Oscuro'}
                    </span>
                    {/* Toggle pill */}
                    <div className={`ml-auto w-10 h-5 rounded-full relative transition-colors duration-300
                      ${isDark ? 'bg-blue-500/30' : 'bg-gray-300'}`}
                    >
                      <motion.div
                        className={`absolute top-0.5 w-4 h-4 rounded-full ${isDark ? 'bg-blue-400' : 'bg-white shadow-sm'}`}
                        animate={{ left: isDark ? '2px' : '22px' }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    </div>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Handle (arrow) */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{ width: `${wClosed}px` }}
          className={`h-full cursor-pointer flex items-center justify-center transition-colors duration-300
            ${isDark
              ? 'hover:bg-white/10 border-l border-white/5'
              : 'hover:bg-gray-200/60 border-l border-gray-200'
            }`}
        >
          <div className={isDark ? 'text-white' : 'text-gray-600'}>
            {isOpen ? <IarrowLeft size={9} /> : <IarrowRight size={9} />}
          </div>
        </div>

      </motion.div>

      {/* OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className={`fixed inset-0 z-[9998] ${isDark ? 'bg-black/50' : 'bg-black/20'}`}
          />
        )}
      </AnimatePresence>
    </>
  );
}
