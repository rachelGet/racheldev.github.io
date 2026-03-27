import './styles/App.css'
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../commonSrc/ThemeContext.tsx';
import { SunIcon, MoonIcon } from "../commonSrc/icons/iconsFunc.tsx";
import { HashLink } from 'react-router-hash-link';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


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

function ContactDialog({ open, onClose, isDark }: { open: boolean; onClose: () => void; isDark: boolean }) {
  const [formData, setFormData] = useState({ name: '', email: '', _subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    await fetch(form.action, { method: 'POST', body: new FormData(form) });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', _subject: '', message: '' });
      onClose();
    }, 2000);
  };

  const textFieldSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      backgroundColor: isDark ? 'rgba(30, 32, 48, 0.6)' : 'rgba(240, 242, 245, 0.5)',
      backdropFilter: 'blur(8px)',
      '& fieldset': {
        borderColor: isDark ? '#2e3148' : '#d8dce6',
      },
      '&:hover fieldset': {
        borderColor: isDark ? '#4a90d9' : '#3b82f6',
      },
      '&.Mui-focused fieldset': {
        borderColor: isDark ? '#4a90d9' : '#3b82f6',
      },
    },
    '& .MuiInputLabel-root': {
      color: isDark ? '#8b95c9' : '#5a6a7e',
      fontWeight: 400,
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: isDark ? '#4a90d9' : '#3b82f6',
    },
    '& .MuiInputBase-input': {
      color: isDark ? '#c0caf5' : '#2c3e50',
    },
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: isDark ? 'rgba(15, 17, 23, 0.7)' : 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(6px)',
          },
        },
      }}
      PaperProps={{
        sx: {
          borderRadius: '20px',
          bgcolor: isDark ? 'rgba(26, 27, 38, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid',
          borderColor: isDark ? '#2e3148' : 'rgba(216, 220, 230, 0.5)',
          boxShadow: isDark
            ? '0 24px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(46, 49, 72, 0.3)'
            : '0 24px 80px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(216, 220, 230, 0.3)',
          overflow: 'hidden',
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: 0,
          pt: 3,
          px: 3,
          fontWeight: 600,
          fontSize: '1.25rem',
          color: isDark ? '#c0caf5' : '#2c3e50',
        }}
      >
        Get in Touch
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            color: isDark ? '#8b95c9' : '#5a6a7e',
            bgcolor: isDark ? 'rgba(46, 49, 72, 0.5)' : 'rgba(240, 242, 245, 0.8)',
            borderRadius: '10px',
            width: 32,
            height: 32,
            '&:hover': {
              bgcolor: isDark ? 'rgba(46, 49, 72, 0.8)' : 'rgba(216, 220, 230, 0.8)',
            },
          }}
        >
          <CloseIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </DialogTitle>

      {submitted ? (
        <Box sx={{ py: 6, px: 4, textAlign: 'center' }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              bgcolor: isDark ? 'rgba(74, 144, 217, 0.15)' : 'rgba(59, 130, 246, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 2,
            }}
          >
            <Box sx={{ fontSize: '1.5rem', color: isDark ? '#4a90d9' : '#3b82f6' }}>✓</Box>
          </Box>
          <Box sx={{ fontSize: '1rem', fontWeight: 500, color: isDark ? '#c0caf5' : '#2c3e50' }}>
            Message sent!
          </Box>
          <Box sx={{ fontSize: '0.85rem', color: isDark ? '#8b95c9' : '#5a6a7e', mt: 0.5 }}>
            I'll get back to you soon.
          </Box>
        </Box>
      ) : (
        <form
          action="https://formsubmit.co/raquelvalentinaherrera@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, pt: 2, px: 3 }}>
            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
              <TextField
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
                size="small"
                sx={textFieldSx}
              />
              <TextField
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                fullWidth
                size="small"
                sx={textFieldSx}
              />
            </Box>
            <TextField
              name="_subject"
              label="Subject"
              value={formData._subject}
              onChange={handleChange}
              required
              fullWidth
              size="small"
              sx={textFieldSx}
            />
            <TextField
              name="message"
              label="Message"
              value={formData.message}
              onChange={handleChange}
              required
              fullWidth
              multiline
              rows={4}
              size="small"
              sx={textFieldSx}
            />
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 3, pt: 1, gap: 1 }}>
            <Button
              onClick={onClose}
              sx={{
                borderRadius: '12px',
                textTransform: 'none',
                px: 3,
                fontWeight: 500,
                color: isDark ? '#8b95c9' : '#5a6a7e',
                '&:hover': {
                  bgcolor: isDark ? 'rgba(46, 49, 72, 0.5)' : 'rgba(240, 242, 245, 0.8)',
                },
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              disableElevation
              sx={{
                borderRadius: '12px',
                textTransform: 'none',
                px: 4,
                py: 1,
                fontWeight: 600,
                bgcolor: isDark ? '#4a90d9' : '#3b82f6',
                '&:hover': {
                  bgcolor: isDark ? '#3b7bc4' : '#2563eb',
                },
              }}
            >
              Send Message
            </Button>
          </DialogActions>
        </form>
      )}
    </Dialog>
  );
}

function Navbar() {
    const navItems: Item[] = [
      { section: "Projects" },
      { section: "About" },
    ];
    const { theme, toggleTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
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
            className={`max-w-8x flex flex-wrap items-center justify-between pr-1.5 pl-4 md:pl-10 py-1 rounded-xl mx-2 md:mx-4 backdrop-blur-md transition-all duration-300
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
            <div className="flex md:order-2 space-x-1 md:space-x-1 rtl:space-x-reverse gap-2 md:gap-5 items-center">
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
                  onClick={() => setContactOpen(true)}
                  className={` h- flex items-center gap-2 bg-transparent focus:ring-4 border-0 border-transparent font-medium leading-5 rounded-full text-sm px-2 py-1 focus:outline-none cursor-pointer transition-all duration-200
                    ${isDark
                      ? 'focus:ring-blue-500/30 shadow-[0_2px_10px_rgba(0,0,0,0.2)]'
                      : 'focus:ring-blue-300/30 shadow-[0_2px_10px_rgba(0,0,0,0.06)]'
                    }`}
                >
                    <span className={`self-center font-light whitespace-nowrap px-2 md:px-5 hidden sm:inline
                      ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      Get in touch
                    </span>
                        <div className="w-[40px] h-[40px] rounded-full overflow-hidden shadow-lg">
                        <img className="w-full h-full object-cover scale-120 transition-transform duration-300 hover:scale-180" src="https://media.licdn.com/dms/image/v2/D4E03AQEFBKLEoiODAA/profile-displayphoto-scale_400_400/B4EZm.udcDGYAk-/0/1759841476126?e=1776297600&v=beta&t=Q-gIN8bXgRSUJqzxMmLTZos-jB7tF0NMrhVbggHv8Aw" alt=""/>
                    </div>
                </motion.button>
                <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} isDark={isDark} />
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
