import './styles/App.css'
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../commonSrc/ThemeContext.tsx';
import { SunIcon, MoonIcon } from "../commonSrc/icons/iconsFunc.tsx";
import { HashLink } from 'react-router-hash-link';


type Item = {
  section: string;
};

function ItemNavBar({ item, isDark }: { item: Item; isDark: boolean }) {
    return (
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`block py-2 px-3 rounded transition-colors duration-200
            ${isDark
              ? 'text-gray-300 hover:text-blue-400'
              : 'text-gray-600 hover:text-blue-600'
            } md:p-0`}
        >
            {item.section}
        </motion.a>
    );
}

function Navbar() {
    const navItems: Item[] = [
      { section: "Projects" },
      { section: "About" },
    ];
    const { theme, toggleTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const isDark = theme === 'dark';

    return (
      <>
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`fixed w-full z-20 top-1.5 start-0 transition-colors duration-300`}
        >
          <div
            className={`max-w-8x flex flex-wrap items-center justify-between mx-auto pr-1.5 pl-10 py-1 rounded-xl mx-4 backdrop-blur-md transition-all duration-300
              ${isDark
                ? 'bg-[#1a1b26]/80 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-0 border-[#2e3148]/50'
                : 'bg-white/80 shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-gray-200/50'
              }`}
          >
            {/*  Home Link */}
            <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
                
                <HashLink 
                  className={`self-center font-semibold whitespace-nowrap text-lg
                  ${isDark ? 'text-gray-100' : 'text-gray-800'}`}
                  smooth 
                  to={`home`} 
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Home
              </HashLink>

            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-1 rtl:space-x-reverse gap-5 items-center">
                {/*  Other Nav Items */}
                <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-sticky">
                    <ul className="flex p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        {navItems.map((item, i) => (
                            <ItemNavBar key={i} item={item} isDark={isDark} />
                        ))}
                    </ul>
                </div>

                {/*  Get in touch Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  className={` h- flex items-center gap-2 bg-transparent focus:ring-4 border-0 border-transparent font-medium leading-5 rounded-full text-sm px-2 py-1 focus:outline-none cursor-pointer transition-all duration-200
                    ${isDark
                      ? 'focus:ring-blue-500/30 shadow-[0_2px_10px_rgba(0,0,0,0.2)]'
                      : 'focus:ring-blue-300/30 shadow-[0_2px_10px_rgba(0,0,0,0.06)]'
                    }`}
                >
                    <span className={`self-center font-light whitespace-nowrap px-5
                      ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      Get in touch
                    </span>
                        <div className="w-[40px] h-[40px] rounded-full overflow-hidden shadow-lg">
                        <img className="w-full h-full object-cover scale-120 transition-transform duration-300 hover:scale-180" src="https://media.licdn.com/dms/image/v2/D4E03AQEFBKLEoiODAA/profile-displayphoto-scale_400_400/B4EZm.udcDGYAk-/0/1759841476126?e=1776297600&v=beta&t=Q-gIN8bXgRSUJqzxMmLTZos-jB7tF0NMrhVbggHv8Aw" alt=""/>
                    </div>
                </motion.button>
                <button onClick={() => setOpen((v) => !v)} type="button"
                        className={`inline-flex items-center p-15 w-10 h-10 justify-center text-sm rounded-full md:hidden focus:outline-none focus:ring-2 transition-colors duration-200
                          ${isDark
                            ? 'text-gray-400 hover:bg-white/10 hover:text-gray-200 focus:ring-gray-600'
                            : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:ring-gray-300'
                          }`}
                        aria-controls="navbar-sticky"
                        aria-expanded={open}
                        aria-label="Toggle navigation">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 6l12 12M6 18L18 6" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>
                      )}
                </button>
                <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ delay: 0.25 }}
                          className="px-0"
                        >
                          <button
                            onClick={toggleTheme}
                            className={`flex items-center gap-0 w-full px-4 py-3 rounded-xl cursor-pointer transition-all duration-300
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
                              {isDark ? <SunIcon size={15} /> : <MoonIcon size={15} />}
                            </motion.div>
                          </button>
                        </motion.div>
                    </AnimatePresence>
            </div>
          </div>
        </motion.nav>
      </>
  )
}

export default Navbar
