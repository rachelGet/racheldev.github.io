import './styles/App.css'
import { motion } from 'framer-motion';
import { useTheme } from '../commonSrc/ThemeContext.tsx';
import { GradualSpacing } from '../commonSrc/fonts/font-motions.tsx';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

interface Article {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  readTime: string;
}

const articles: Article[] = [
  {
    title: 'Getting Started with Vector Databases',
    summary: 'An introduction to vector databases, how they differ from traditional databases, and why they are essential for modern AI applications. Covers Qdrant setup and basic operations.',
    date: 'Feb 2024',
    tags: ['Qdrant', 'AI', 'Databases'],
    readTime: '5 min read',
  },
  {
    title: 'Building Microservices with Dapr',
    summary: 'A deep dive into the Distributed Application Runtime (Dapr) and how it simplifies building resilient, stateful microservices. Includes Docker Compose setup and service invocation patterns.',
    date: 'Jan 2024',
    tags: ['Dapr', 'Docker', 'Cloud'],
    readTime: '8 min read',
  },
  {
    title: 'Data Visualization Best Practices',
    summary: 'Lessons learned from creating dashboards in Tableau and Python. Covers chart selection, color theory for data, and how to tell compelling stories with numbers.',
    date: 'Dec 2023',
    tags: ['Tableau', 'Python', 'Data Viz'],
    readTime: '6 min read',
  },
];

function ArtPage() {
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
    transition: 'all 0.3s',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: isDark
        ? '0 12px 48px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(46, 49, 72, 0.3)'
        : '0 12px 48px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(216, 220, 230, 0.4)',
    },
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
          <GradualSpacing text="Articles" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.98 }}
            className="mt-4 text-sm md:text-lg text-gray-500 font-medium"
          >
            Thoughts, tutorials, and lessons from my journey in tech.
          </motion.p>
        </div>

        <div className="flex flex-col items-center justify-center px-6 md:px-15 pb-15 gap-5">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
              style={{ width: '100%', maxWidth: 900 }}
            >
              <Box sx={container}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="caption" fontWeight="bold" sx={{ color: isDark ? '#8b95c9' : '#5a6a7e' }}>
                    {article.date}
                  </Typography>
                  <Typography variant="caption" sx={{ color: isDark ? '#8b95c9' : '#5a6a7e' }}>
                    {article.readTime}
                  </Typography>
                </Box>

                <Typography variant="h5" fontWeight="bold" sx={{ color: isDark ? '#c0caf5' : '#2c3e50', mb: 1.5 }}>
                  {article.title}
                </Typography>

                <Typography variant="body2" sx={{ color: isDark ? '#8b95c9' : '#5a6a7e', lineHeight: 1.8, mb: 2.5 }}>
                  {article.summary}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {article.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: isDark ? 'rgba(74, 144, 217, 0.12)' : 'rgba(59, 130, 246, 0.08)',
                        color: isDark ? '#4a90d9' : '#3b82f6',
                        border: '1px solid',
                        borderColor: isDark ? 'rgba(74, 144, 217, 0.25)' : 'rgba(59, 130, 246, 0.2)',
                        fontWeight: 500,
                        borderRadius: '10px',
                        fontSize: '0.75rem',
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            style={{ width: '100%', maxWidth: 900 }}
          >
            <Box
              sx={{
                textAlign: 'center',
                py: 4,
                borderRadius: '24px',
                border: '2px dashed',
                borderColor: isDark ? 'rgba(46, 49, 72, 0.5)' : 'rgba(216, 220, 230, 0.6)',
              }}
            >
              <Typography variant="body1" sx={{ color: isDark ? '#8b95c9' : '#5a6a7e' }}>
                More articles coming soon...
              </Typography>
            </Box>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ArtPage
