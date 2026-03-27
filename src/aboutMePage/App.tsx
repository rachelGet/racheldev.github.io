import './styles/App.css'
import { motion } from 'framer-motion';
import { useTheme } from '../commonSrc/ThemeContext.tsx';
import { GradualSpacing } from '../commonSrc/fonts/font-motions.tsx';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function AboutMePage() {
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

  const interests = ['Machine Learning', 'Cloud Architecture', 'Hackathons', 'Open Source', 'Data Visualization', 'Vector Databases'];

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
          <GradualSpacing text="About Me" />
        </div>

        <div className="flex flex-col items-center justify-center px-6 md:px-15 pb-15 gap-6">
          {/* Profile Header */}
          <Box sx={{ ...container, width: '100%', maxWidth: 900 }}>
            <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 }, alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, textAlign: { xs: 'center', md: 'left' } }}>
              <Avatar
                src="https://avatars.githubusercontent.com/u/66224544?v=4"
                sx={{
                  width: { xs: 80, md: 120 },
                  height: { xs: 80, md: 120 },
                  border: '3px solid',
                  borderColor: isDark ? 'rgba(74, 144, 217, 0.5)' : 'rgba(59, 130, 246, 0.4)',
                  boxShadow: isDark
                    ? '0 4px 20px rgba(74, 144, 217, 0.2)'
                    : '0 4px 20px rgba(59, 130, 246, 0.15)',
                }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography variant="h4" fontWeight="bold" sx={{ color: isDark ? '#c0caf5' : '#2c3e50', fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
                  Raquel Valentina Herrera
                </Typography>
                <Typography variant="body1" sx={{ color: isDark ? '#8b95c9' : '#5a6a7e', mt: 0.5 }}>
                  Data Science & AI Student
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Link href="https://github.com/rachelGet" target="_blank" sx={{ color: isDark ? '#8b95c9' : '#5a6a7e', '&:hover': { color: isDark ? '#4a90d9' : '#3b82f6' } }}>
                    <GitHubIcon />
                  </Link>
                  <Link href="https://www.linkedin.com" target="_blank" sx={{ color: isDark ? '#8b95c9' : '#5a6a7e', '&:hover': { color: isDark ? '#4a90d9' : '#3b82f6' } }}>
                    <LinkedInIcon />
                  </Link>
                  <Link href="mailto:raquelvalentinaherrera@gmail.com" sx={{ color: isDark ? '#8b95c9' : '#5a6a7e', '&:hover': { color: isDark ? '#4a90d9' : '#3b82f6' } }}>
                    <EmailIcon />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Bio */}
          <Box sx={{ ...container, width: '100%', maxWidth: 900 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ color: isDark ? '#c0caf5' : '#2c3e50', mb: 2 }}>
              Who am I?
            </Typography>
            <Typography variant="body1" sx={{ color: isDark ? '#8b95c9' : '#5a6a7e', lineHeight: 1.8 }}>
              I'm a Data Science student at Universidad Europea de Madrid, passionate about building intelligent systems
              and solving real-world problems with AI. I love participating in hackathons, where I've built projects
              ranging from vector search engines to AI-powered driving assistants. My tech stack spans Python, Go, and C++,
              with experience in cloud architectures using Docker, Dapr, and Redis.
            </Typography>
            <Typography variant="body1" sx={{ color: isDark ? '#8b95c9' : '#5a6a7e', lineHeight: 1.8, mt: 2 }}>
              When I'm not coding, you'll find me exploring the latest in machine learning research,
              contributing to open source, or experimenting with new data visualization techniques.
            </Typography>
          </Box>

          {/* Interests */}
          <Box sx={{ ...container, width: '100%', maxWidth: 900 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ color: isDark ? '#c0caf5' : '#2c3e50', mb: 2 }}>
              Interests
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              {interests.map((interest) => (
                <Chip
                  key={interest}
                  label={interest}
                  sx={{
                    bgcolor: isDark ? 'rgba(74, 144, 217, 0.12)' : 'rgba(59, 130, 246, 0.08)',
                    color: isDark ? '#4a90d9' : '#3b82f6',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(74, 144, 217, 0.25)' : 'rgba(59, 130, 246, 0.2)',
                    fontWeight: 500,
                    borderRadius: '12px',
                    px: 1,
                  }}
                />
              ))}
            </Box>
          </Box>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutMePage
