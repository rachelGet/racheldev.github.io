import './styles/App.css'
import { motion } from 'framer-motion';
import { useTheme } from '../commonSrc/ThemeContext.tsx';
import { GradualSpacing } from '../commonSrc/fonts/font-motions.tsx';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import LaunchIcon from '@mui/icons-material/Launch';

interface Project {
  title: string;
  description: string;
  mainImage: string;
  userImage: string;
  userName: string;
  publishedDate: string;
  video: string;
  link: string;
  tags: string[];
}

const getYouTubeId = (url: string | undefined): string | null => {
  if (!url) return null;
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w-]{11})/);
  return match ? match[1] : null;
};

const myProjects: Project[] = [
  {
    title: "Hackathon Dapr: ZAIDriver",
    description: "An AI-powered driving assistant built with Dapr microservices architecture. Features real-time object detection and voice-guided navigation using distributed cloud components.",
    mainImage: "",
    userImage: "https://avatars.githubusercontent.com/u/66224544?v=4",
    userName: "rachelDev",
    publishedDate: "Mar 2024",
    video: "https://www.youtube.com/watch?v=YfDT1425pZw",
    link: "https://github.com/tu-usuario/proyecto",
    tags: ["Dapr", "Docker", "Python", "AI"],
  },
  {
    title: "AI Semantic Search",
    description: "Built a vector search engine using Qdrant and HuggingFace during the Winter Hackathon. Enables semantic querying over large document collections with high recall.",
    mainImage: "https://media.licdn.com/dms/image/v2/D4E05AQGSXlbWnrfG5Q/videocover-low/videocover-low/0/1727114872008?e=1775152800&v=beta&t=l-rUG2fRqB5pYqcsNa-SbzwiVw7nDETW11_TU8pv6_A&quot",
    userImage: "https://avatars.githubusercontent.com/u/66224544?v=4",
    userName: "rachelDev",
    publishedDate: "Mar 2024",
    video: "",
    link: "https://github.com/tu-usuario/proyecto",
    tags: ["Qdrant", "HuggingFace", "Python", "Vector DB"],
  },
  {
    title: "Trading Qt Interface",
    description: "A desktop trading interface built with Qt framework featuring real-time market data visualization, portfolio tracking, and algorithmic trading strategy backtesting.",
    mainImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    userImage: "https://avatars.githubusercontent.com/u/66224544?v=4",
    userName: "rachelDev",
    publishedDate: "Mar 2024",
    video: "https://www.youtube.com/watch?v=tyAyS40lZlc",
    link: "https://github.com/rachelGet/trading_Qtinterface",
    tags: ["C++", "Qt", "Finance", "Data Viz"],
  },
];

function ProjecsPage() {
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
          <GradualSpacing text="Projects" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.98 }}
            className="mt-4 text-sm md:text-lg text-gray-500 font-medium"
          >
            A showcase of solutions built for hackathons and personal development sprints.
          </motion.p>
        </div>

        <div className="flex flex-col items-center justify-center px-6 md:px-15 pb-15 gap-6">
          {myProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
              style={{ width: '100%', maxWidth: 900 }}
            >
              <Box sx={container}>
                <Card
                  sx={{
                    bgcolor: 'transparent',
                    boxShadow: 'none',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 3,
                    backgroundImage: 'none',
                  }}
                >
                  {/* Media */}
                  <Box
                    sx={{
                      width: { xs: '100%', md: 380 },
                      minHeight: 220,
                      borderRadius: '16px',
                      overflow: 'hidden',
                      flexShrink: 0,
                    }}
                  >
                    {project.video ? (
                      <CardMedia
                        component="iframe"
                        src={`https://www.youtube.com/embed/${getYouTubeId(project.video)}?autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&playlist=${getYouTubeId(project.video)}&start=200&end=380`}
                        sx={{
                          border: 'none',
                          width: '100%',
                          height: '100%',
                          minHeight: 220,
                          pointerEvents: 'none',
                          transform: 'scale(2.15)',
                        }}
                        allow="autoplay; encrypted-media"
                      />
                    ) : (
                      <CardMedia
                        component="img"
                        image={project.mainImage}
                        alt={project.title}
                        sx={{ height: '100%', minHeight: 220, objectFit: 'cover' }}
                      />
                    )}
                  </Box>

                  {/* Content */}
                  <CardContent sx={{ p: 0, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                        <Typography variant="h5" fontWeight="bold" sx={{ color: isDark ? '#c0caf5' : '#2c3e50' }}>
                          {project.title}
                        </Typography>
                        <IconButton
                          component={Link}
                          href={project.link}
                          target="_blank"
                          size="small"
                          sx={{ color: isDark ? '#4a90d9' : '#3b82f6' }}
                        >
                          <LaunchIcon fontSize="small" />
                        </IconButton>
                      </Box>

                      <Typography variant="body2" sx={{ color: isDark ? '#8b95c9' : '#5a6a7e', mb: 2, lineHeight: 1.7 }}>
                        {project.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {project.tags.map((tag) => (
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

                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        pt: 2,
                        borderTop: '1px solid',
                        borderColor: isDark ? 'rgba(46, 49, 72, 0.5)' : 'rgba(216, 220, 230, 0.6)',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar
                          src={project.userImage}
                          alt={project.userName}
                          sx={{ width: 28, height: 28, border: '2px solid', borderColor: isDark ? '#4a90d9' : '#3b82f6' }}
                        />
                        <Typography variant="subtitle2" fontWeight="medium" sx={{ color: isDark ? '#c0caf5' : '#2c3e50' }}>
                          {project.userName}
                        </Typography>
                      </Box>
                      <Typography variant="caption" fontWeight="bold" sx={{ color: isDark ? '#8b95c9' : '#5a6a7e' }}>
                        {project.publishedDate.toUpperCase()}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default ProjecsPage
