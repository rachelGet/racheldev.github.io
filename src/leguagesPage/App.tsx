import './styles/App.css'
import { motion } from 'framer-motion';
import { useTheme } from '../commonSrc/ThemeContext.tsx';
import { GradualSpacing } from '../commonSrc/fonts/font-motions.tsx';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import {languages} from '../commonSrc/Data.tsx';

function LenguagesPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const container = {
    bgcolor: isDark ? 'rgba(26, 27, 38, 0.55)' : 'rgba(255, 255, 255, 0.45)',
    backdropFilter: 'blur(16px)',
    borderRadius: '24px',
    border: '1px solid',
    borderColor: isDark ? 'rgba(46, 49, 72, 0.5)' : 'rgba(216, 220, 230, 0.6)',
    boxShadow: isDark
      ? '0 8px 40px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(46, 49, 72, 0.2)'
      : '0 8px 40px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(216, 220, 230, 0.3)',
    p: 4,
  };

  return (
    <div
      className="absolute flex-col min-h-screen w-full h-full top-0 left-0 start-0 z-10 p-0 m-0"
      style={{ overflowY: 'auto', scrollBehavior: 'smooth' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex-grow flex flex-col md:h-auto w-full"
      >
        <div className="flex mt-10 flex-col items-center justify-center text-center" style={{ height: '30vh' }}>
          <GradualSpacing text="Languages" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.98 }}
            className="mt-4 text-sm md:text-lg text-gray-500 font-medium"
          >
            Programming languages I use to bring ideas to life.
          </motion.p>
        </div>

        <div className="flex flex-col items-center justify-center px-6 md:px-15 pb-15 gap-4">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.12 }}
              style={{ width: '100%', maxWidth: 900 }}
            >
              <Box sx={container}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        bgcolor: lang.color,
                        boxShadow: `0 0 8px ${lang.color}60`,
                      }}
                    />
                    <Typography variant="h6" fontWeight="bold" sx={{ color: isDark ? '#c0caf5' : '#2c3e50' }}>
                      {lang.name}
                    </Typography>
                  </Box>
                  <Typography variant="caption" fontWeight="bold" sx={{ color: isDark ? '#8b95c9' : '#5a6a7e' }}>
                    {lang.experience}
                  </Typography>
                </Box>

                <Typography variant="body2" sx={{ color: isDark ? '#8b95c9' : '#5a6a7e', mb: 2, lineHeight: 1.7 }}>
                  {lang.description}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={lang.level}
                    sx={{
                      flex: 1,
                      height: 8,
                      borderRadius: '8px',
                      bgcolor: isDark ? 'rgba(46, 49, 72, 0.5)' : 'rgba(216, 220, 230, 0.5)',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: '8px',
                        bgcolor: lang.color,
                      },
                    }}
                  />
                  <Typography variant="caption" fontWeight="bold" sx={{ color: isDark ? '#8b95c9' : '#5a6a7e', minWidth: 35 }}>
                    {lang.level}%
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default LenguagesPage
