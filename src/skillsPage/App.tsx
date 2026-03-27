import './styles/App.css'
import { motion } from 'framer-motion';
import { useTheme } from '../commonSrc/ThemeContext.tsx';
import { GradualSpacing } from '../commonSrc/fonts/font-motions.tsx';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud & Architecture',
    icon: '☁️',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Dapr', level: 80 },
      { name: 'Redis', level: 75 },
    ],
  },
  {
    title: 'AI & Data',
    icon: '🧠',
    skills: [
      { name: 'Qdrant (Vector DB)', level: 80 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'HuggingFace', level: 75 },
      { name: 'Scikit-learn', level: 80 },
    ],
  },
  {
    title: 'Frameworks',
    icon: '⚙️',
    skills: [
      { name: 'Django', level: 80 },
      { name: 'Qt', level: 75 },
      { name: 'React', level: 70 },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Linux / CLI', level: 85 },
      { name: 'Tableau', level: 75 },
      { name: 'Vite', level: 70 },
    ],
  },
];

function SkillsPage() {
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
          <GradualSpacing text="Skills" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.98 }}
            className="mt-4 text-sm md:text-lg text-gray-500 font-medium"
          >
            Technologies and tools I work with daily.
          </motion.p>
        </div>

        <div className="flex flex-col items-center justify-center px-6 md:px-15 pb-15">
          <Box
            sx={{
              width: '100%',
              maxWidth: 1000,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 3,
            }}
          >
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              >
                <Box sx={container}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                    <Box sx={{ fontSize: '1.5rem' }}>{category.icon}</Box>
                    <Typography variant="h6" fontWeight="bold" sx={{ color: isDark ? '#c0caf5' : '#2c3e50' }}>
                      {category.title}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    {category.skills.map((skill) => (
                      <Box key={skill.name}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography variant="body2" fontWeight={500} sx={{ color: isDark ? '#c0caf5' : '#2c3e50' }}>
                            {skill.name}
                          </Typography>
                          <Typography variant="caption" sx={{ color: isDark ? '#8b95c9' : '#5a6a7e' }}>
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 6,
                            borderRadius: '6px',
                            bgcolor: isDark ? 'rgba(46, 49, 72, 0.5)' : 'rgba(216, 220, 230, 0.5)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: '6px',
                              bgcolor: isDark ? '#4a90d9' : '#3b82f6',
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </div>
      </motion.div>
    </div>
  );
}

export default SkillsPage
