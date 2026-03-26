import './styles/App.css'
import { GradualSpacing } from '../commonSrc/fonts/font-motions.tsx'
import { motion } from 'framer-motion';
import { useTheme } from '../commonSrc/ThemeContext.tsx';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import * as React from 'react';
import { Button, Popover, Avatar, IconButton, Link, CardMedia } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

interface Project {
  title: string;
  description: string;
  mainImage: string;    // Imagen grande del proyecto
  userImage: string;    // Avatar del creador
  userName: string;
  publishedDate: string;
  video: string;
  link: string;
}
interface Certification {
  title: string;
  issuer: string; // Ejemplo: 'Google', 'Meta', 'AWS'
  logoUrl: string; // URL del logo
  link: string; // URL de la credencial
}
interface CertProps {
  cert: Certification;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const getYouTubeId = (url: string | undefined): string | null => {
  if (!url) return null;
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w-]{11})/);
  return match ? match[1] : null;
  };
  return (
    <Card 
      sx={{ 
        width: '100%', 
        borderRadius: '16px', 
        overflow: 'hidden',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6
        }
      }}
    >
      {/* Imagen Grande de Visualización */}
      <Box sx= {{height: '494', 
      width: '100%',
      overflow: 'hidden',
      position: 'relative',
      borderRadius: '12px 12px 0 0',}}
      >
        {project.video ? (
          <CardMedia
            height="294"
            component="iframe"
            src={`https://www.youtube.com/embed/${getYouTubeId(project.video)}?autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&playlist=${getYouTubeId(project.video)}&start=200&end=380&modestbranding=1`}          
            title={project.title}
            sx={{ border: 'none', width: '100%', pointerEvents: 'none', userSelect:'none', transform: 'scale(2.15)', overflow: 'hidden', }}
            allow="autoplay; encrypted-media"
          />
        ) : (

          <CardMedia
            component="img"
            height="294"
            image={project.mainImage}
            alt={project.title}
            sx={{ objectFit: 'cover', border: 'none', width: '100%', pointerEvents: 'none', }}
          />
        )}
      </Box>
      <CardContent sx={{ p: 3 }}>
        {/* Encabezado: Título y Link */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Typography variant="h5" fontWeight="bold" component="div">
            {project.title}
          </Typography>
          <IconButton 
            component={Link} 
            href={project.link} 
            target="_blank" 
            size="small" 
            color="primary"
          >
            <LaunchIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Descripción */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, minHeight: '40px' }}>
          {project.description}
        </Typography>

        {/* Footer: Usuario y Fecha */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            pt: 2,
            borderTop: '1px solid',
            borderColor: 'divider'
          }}
        >
          {/* Creador (Imagen Pequeña y Nombre) */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar 
              src={project.userImage} 
              alt={project.userName}
              sx={{ width: 32, height: 32, border: '2px solid', borderColor: 'primary.main' }}
            />
            <Typography variant="subtitle2" fontWeight="medium">
              {project.userName}
            </Typography>
          </Box>

          {/* Fecha de Publicación */}
          <Typography variant="caption" color="text.disabled" fontWeight="bold">
            {project.publishedDate.toUpperCase()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

function CertificationButton({ cert }: CertProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'cert-popover' : undefined;

  return (
    <Box>
      <Button
        aria-describedby={id}
        variant="outlined"
        onClick={handleClick}
        startIcon={<Avatar src={cert.logoUrl} sx={{ width: 24, height: 24 }} />}
        sx={{
          borderRadius: '12px',
          textTransform: 'none',
          borderColor: 'divider',
          color: 'text.primary',
          '&:hover': { backgroundColor: 'action.hover' },
          marginTop: "4px"
        }}
      >
        {cert.title}
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          sx: { p: 2, mt: 1, borderRadius: '12px', boxShadow: 3 }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box>
            <Typography variant="subtitle2" fontWeight="bold">
              {cert.title}
            </Typography>
            <Typography variant="caption" color="text.secondary" display="block">
              Emitido por {cert.issuer}
            </Typography>
          </Box>
          
          <IconButton 
            component={Link} 
            href={cert.link} 
            target="_blank" 
            size="small"
            color="primary"
          >
            <LaunchIcon fontSize="small" />
          </IconButton>
        </Box>
      </Popover>
    </Box>
  );
}


const myCerts: Certification[] = [
  {
    title: "Oracle SQL Databases",
    issuer: "LearnQuest",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3-zlgn9KhPuEAK5kYFECzbGvtmQf1DVT4g&s",
    link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~HC13GS4V59XD/CERTIFICATE_LANDING_PAGE~HC13GS4V59XD.jpeg"
  },
  {
    title: "Google Advanced Data Analytics",
    issuer: "Google",
    logoUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png?auto=format%2Ccompress&dpr=1&w=80&h=80",
    link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~1PGS2FQQ7SN8/CERTIFICATE_LANDING_PAGE~1PGS2FQQ7SN8.jpeg"
  },
  {
    title: "Tableau Specialization",
    issuer: "Packt",
    logoUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/fa/3b9b5304c24cf4aa64054631ee946c/360-360-square.png?auto=format%2Ccompress&dpr=1&w=64&h=64",
    link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~1PGS2FQQ7SN8/CERTIFICATE_LANDING_PAGE~1PGS2FQQ7SN8.jpeg"
  },
  {
    title: "BI Essentials for Finance Analysts Specialization",
    issuer: "Corporate Finance Institute",
    logoUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/15/359c4869c549c79537f3059b5d025a/Union-Mark_navy-large.png?auto=format%2Ccompress&dpr=1&w=64&h=64",
    link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~MBUSXD5ZUV00/CERTIFICATE_LANDING_PAGE~MBUSXD5ZUV00.jpeg"
  }
];

const myProjects: Project[] = [
  {
    title: "Hackthon Dapr: ZAIDriver",
    description: "Built a vector search engine using Qdrant and HuggingFace during the Winter Hackathon.",
    mainImage: "", // Imagen de IA
    userImage: "https://avatars.githubusercontent.com/u/66224544?v=4", // Tu avatar
    userName: "rachelDev",
    publishedDate: "Mar 2024",
    video:"https://www.youtube.com/watch?v=YfDT1425pZw",
    link: "https://github.com/tu-usuario/proyecto",
  },
    {
    title: "AI Semantic Search",
    description: "Built a vector search engine using Qdrant and HuggingFace during the Winter Hackathon.",
    mainImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995", // Imagen de IA
    userImage: "https://avatars.githubusercontent.com/u/66224544?v=4", // Tu avatar
    userName: "rachelDev",
    publishedDate: "Mar 2024",
    video:"",
    link: "https://github.com/tu-usuario/proyecto"
  },
    {
    title: "AI Semantic Search",
    description: "Built a vector search engine using Qdrant and HuggingFace during the Winter Hackathon.",
    mainImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995", // Imagen de IA
    userImage: "https://avatars.githubusercontent.com/u/66224544?v=4", // Tu avatar
    userName: "rachelDev",
    publishedDate: "Mar 2024",
    video:"",
    link: "https://github.com/tu-usuario/proyecto"
  }
];

const cards = [
  {
    id: 'lenguages_card',
    title: 'Languages',
    description: 'Python, Go, C++',
  },
  {
    id: 'skills_card',
    title: 'Skills',
    description: 'Cloud & Architecture: Docker, Dapr, Redis. | AI & Data: Qdrant (Vector DB), HuggingFace, Scikit-learn. | Frameworks: Django.',
  },
  {
    id: 'certifications_card',
    title: 'Certifications',
    description: 'Technical expertise through credentials from different instituions.',
  },
    {
    id: "projects_card",
    title: 'Projects',
    description: 'A showcase of solutions built for hackathons and personal development sprints.',
  },
    {
    id: 'education_card',
    title: 'Education',
    description: 'Currently pursuing degree',
  },

];

function InfoCard({ w, h, index, selectedCard, setSelectedCard, children }: { w: number | string; h: number | string; index: number; selectedCard: number; setSelectedCard: (val: number) => void; children?: React.ReactNode}) {
  const card = cards[index];
  
  if (!card) return null;

  return (
    <Card 
      key={card.id} 
      sx={{ 
        height: h, 
        width: w, 
        transition: 'transform 0.2s',
        '&:hover': { transform: 'scale(1.02)' } 
      }}
    >
      <CardActionArea
        onClick={() => setSelectedCard(index)} 
        data-active={selectedCard === index ? '' : undefined}
        sx={{
          height: '100%',
          '&[data-active]': {
            backgroundColor: 'action.selected',
            borderColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'action.selectedHover',
            },
          },
        }}
      >
        <CardContent sx={{ height: '100%' }}>
          <Typography variant="h5" component="div" fontWeight="bold">
            {card.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {card.description}
          </Typography>
          {children}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
function App() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <>
      <div className="absolute flex-col min-h-screen w-full z-full h-full top-0 left-0 start-0 z-10 p-0 m-0">
        {/* Main section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`flex-grow flex flex-col md:h-auto w-full transition-all duration-300
            ${isDark
              ? 'bg-transparent'
              : 'bg-[#f5f7fa]/50'
            }`}
          id="Main div">
          <div className="flex mt-10 flex-col items-center justify-center h-[60vh] text-center">
            <GradualSpacing 
              text="Welcome to rachelDev.io" 
            />
              <motion.div 
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.98 }}
              className="mt-4 flex flex-wrap justify-center items-center gap-2 text-sm md:text-lg text-gray-500 font-medium"
            >
              <span>Student</span>
              <span className="h-1 w-1 rounded-full bg-gray-400" />
              <span>Developer</span>
              <span className="h-1 w-1 rounded-full bg-gray-400" />
              <span className="text-primary/80">Hackathon Enthusiast</span>
            </motion.div>
          </div>
          <div className='flex flex-col items-center justify-center p-15'>
            <Box
              sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '0.5fr minmax(300px, 1.5fr)',
                gap: 1.5,
                alignItems: 'start',
                marginBottom:'12px'
              }}
            >
              {/* Lenguage Card*/}              
              <InfoCard 
                w="100%" h="100%" 
                index={0} 
                selectedCard={selectedCard} 
                setSelectedCard={setSelectedCard} 
              />
              {/* Skills Card*/}              
              <InfoCard 
                w="100%" h="100%" 
                index={1} 
                selectedCard={selectedCard} 
                setSelectedCard={setSelectedCard} 
              />         
              {/* Certification Card*/}              
              <InfoCard 
                w="100%" h="100%" 
                index={2} 
                selectedCard={selectedCard} 
                setSelectedCard={setSelectedCard}>
                <Box sx={{ 
                      display: 'inline', 
                      flexWrap: 'wrap', 
                      gap: 2, 
                      mt: 'auto',

                    }}>
                      {myCerts.map((c, i) => (
                        <CertificationButton key={i} cert={c} />
                      ))}
                </Box>


                </InfoCard>
              {/* Projects Card*/}              
              <InfoCard 
                w="100%" h="100%" 
                index={3} 
                selectedCard={selectedCard} 
                setSelectedCard={setSelectedCard} 
              >
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
                  {myProjects.map((proj, i) => (
                    <ProjectCard key={i} project={proj} />
                  ))}
                </Box>
              </InfoCard>
              {/* Education Card*/}              
              </Box>
              <InfoCard 
                w="100%" h="100%" 
                index={4} 
                selectedCard={selectedCard} 
                setSelectedCard={setSelectedCard}>
                  <Box 
                    sx={{ 
                      width: '100%', 
                      p: 3, 
                      borderRadius: '16px', 
                      border: '1px solid',
                      borderColor: 'divider',
                      bgcolor: 'background.paper'
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      
                      {/* 1. Icono o Logo de la Institución */}
                      <Avatar 
                        src="https://media.licdn.com/dms/image/v2/C4D0BAQEu_Aa76fcmPw/company-logo_200_200/company-logo_200_200/0/1630998679745/universidad_europea_de_madrid_logo?e=1776297600&v=beta&t=vMk7rLrl5Vgy_VVkJC4QYBPWk6ndjBMgH0GtlG3NKbk" // Cambia por el logo de tu uni
                        variant="rounded"
                        sx={{ width: 56, height: 56, bgcolor: 'primary.light' }}
                      />

                      <Box sx={{ flexGrow: 1 }}>
                        {/* 2. Título de Carrera y Link a la Institución */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1.2 }}>
                            Degree in Data Science
                          </Typography>
                          
                          {/* Etiqueta 'A' (Link) con estilo de botón pequeño */}
                          <Link 
                            href="https://www.linkedin.com/school/universidad-europea-de-madrid/posts/?feedView=all" 
                            target="_blank" 
                            rel="noopener"
                            sx={{ 
                              fontSize: '0.75rem', 
                              textTransform: 'uppercase', 
                              fontWeight: 'bold',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                              textDecoration: 'none',
                              '&:hover': { textDecoration: 'underline' }
                            }}
                          >
                            @Europe University
                          </Link>
                        </Box>

                        {/* 3. Fechas y GPA */}
                        <Box 
                          sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            mt: 2, 
                            pt: 2, 
                            borderTop: '1px dashed', 
                            borderColor: 'divider' 
                          }}
                        >
                          <Box>
                            <Typography variant="caption" display="block" color="text.disabled" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                              Periodo
                            </Typography>
                            <Typography variant="body2" fontWeight="medium">
                              Agosto 2022 — Junio 2026 (Esperado)
                            </Typography>
                          </Box>
                        </Box>

                      </Box>
                    </Box>
                  </Box>

                </InfoCard>
          </div>
        </motion.div>

        {/* Footer section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`h-[160px] flex w-full transition-all duration-300  items-center
            ${isDark
              ? 'bg-transparent shadow-[0_-4px_20px_rgba(0,0,0,0.3)]'
              : 'bg-gradient-to-r from-[#e8ecf1] via-[#f0f2f5] to-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)]'
            }`}
          id="footer div">
                    <motion.div 
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 flex flex-col items-center gap-2 text-gray-400 text-[15px]"
          >
            {/* Línea 1: Estudiante & Universidad */}
            <div className="flex items-center gap-2">
              <span>Data Science & AI Student   -</span>
              <a 
                href="https://www.linkedin.com/school/universidad-europea-de-madrid/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-magenta-300 font-semibold hover:text-magenta-400 hover:underline transition-all duration-300 cursor-pointer"
              >
                @EuropeUniversity
              </a>
            </div>

            {/* Línea 2: Developer & Hackathons */}
            <div className="flex items-center gap-2">
              <span className="text-white/90">Backend</span>
              <span className="text-magenta-500 font-bold uppercase tracking-wider">Developer</span>
              <span className="text-white/40">&</span>
              <span className="italic">Hackathon Enthusiast</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default App
