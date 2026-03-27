import './styles/App.css'
import { motion } from 'framer-motion';
import { useTheme } from '../commonSrc/ThemeContext.tsx';
import { GradualSpacing } from '../commonSrc/fonts/font-motions.tsx';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import LaunchIcon from '@mui/icons-material/Launch';

interface Certification {
  title: string;
  issuer: string;
  logoUrl: string;
  link: string;
}

const myCerts: Certification[] = [
  {
    title: "Oracle SQL Databases",
    issuer: "LearnQuest",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3-zlgn9KhPuEAK5kYFECzbGvtmQf1DVT4g&s",
    link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~HC13GS4V59XD/CERTIFICATE_LANDING_PAGE~HC13GS4V59XD.jpeg",
  },
  {
    title: "Google Advanced Data Analytics",
    issuer: "Google",
    logoUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png?auto=format%2Ccompress&dpr=1&w=80&h=80",
    link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~1PGS2FQQ7SN8/CERTIFICATE_LANDING_PAGE~1PGS2FQQ7SN8.jpeg",
  },
  {
    title: "Tableau Specialization",
    issuer: "Packt",
    logoUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/fa/3b9b5304c24cf4aa64054631ee946c/360-360-square.png?auto=format%2Ccompress&dpr=1&w=64&h=64",
    link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~1PGS2FQQ7SN8/CERTIFICATE_LANDING_PAGE~1PGS2FQQ7SN8.jpeg",
  },
  {
    title: "BI Essentials for Finance Analysts",
    issuer: "Corporate Finance Institute",
    logoUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/15/359c4869c549c79537f3059b5d025a/Union-Mark_navy-large.png?auto=format%2Ccompress&dpr=1&w=64&h=64",
    link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~MBUSXD5ZUV00/CERTIFICATE_LANDING_PAGE~MBUSXD5ZUV00.jpeg",
  },
];

function EducationPage() {
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
          <GradualSpacing text="Education & Certifications" />
        </div>

        <div className="flex flex-col items-center justify-center px-6 md:px-15 pb-15 gap-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ width: '100%', maxWidth: 900 }}
          >
            <Box sx={container}>
              <Typography variant="h6" fontWeight="bold" sx={{ color: isDark ? '#c0caf5' : '#2c3e50', mb: 3 }}>
                Education
              </Typography>

              <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                <Avatar
                  src="https://media.licdn.com/dms/image/v2/C4D0BAQEu_Aa76fcmPw/company-logo_200_200/company-logo_200_200/0/1630998679745/universidad_europea_de_madrid_logo?e=1776297600&v=beta&t=vMk7rLrl5Vgy_VVkJC4QYBPWk6ndjBMgH0GtlG3NKbk"
                  variant="rounded"
                  sx={{
                    width: 64,
                    height: 64,
                    bgcolor: 'primary.light',
                    border: '2px solid',
                    borderColor: isDark ? 'rgba(46, 49, 72, 0.5)' : 'rgba(216, 220, 230, 0.6)',
                  }}
                />
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ color: isDark ? '#c0caf5' : '#2c3e50' }}>
                      Degree in Data Science
                    </Typography>
                    <Link
                      href="https://www.linkedin.com/school/universidad-europea-de-madrid/posts/?feedView=all"
                      target="_blank"
                      rel="noopener"
                      sx={{
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        color: isDark ? '#4a90d9' : '#3b82f6',
                        '&:hover': { textDecoration: 'underline' },
                      }}
                    >
                      @Universidad Europea
                    </Link>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      gap: 4,
                      mt: 2,
                      pt: 2,
                      borderTop: '1px dashed',
                      borderColor: isDark ? 'rgba(46, 49, 72, 0.5)' : 'rgba(216, 220, 230, 0.6)',
                      flexWrap: 'wrap',
                    }}
                  >
                    <Box>
                      <Typography variant="caption" display="block" sx={{ textTransform: 'uppercase', fontWeight: 'bold', color: isDark ? '#8b95c9' : '#5a6a7e', mb: 0.5 }}>
                        Period
                      </Typography>
                      <Typography variant="body2" fontWeight="medium" sx={{ color: isDark ? '#c0caf5' : '#2c3e50' }}>
                        August 2024 — June 2026 (Expected)
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" display="block" sx={{ textTransform: 'uppercase', fontWeight: 'bold', color: isDark ? '#8b95c9' : '#5a6a7e', mb: 0.5 }}>
                        Status
                      </Typography>
                      <Chip
                        label="In Progress"
                        size="small"
                        sx={{
                          bgcolor: isDark ? 'rgba(74, 144, 217, 0.12)' : 'rgba(59, 130, 246, 0.08)',
                          color: isDark ? '#4a90d9' : '#3b82f6',
                          fontWeight: 600,
                          borderRadius: '10px',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            style={{ width: '100%', maxWidth: 900 }}
          >
            <Box sx={container}>
              <Typography variant="h6" fontWeight="bold" sx={{ color: isDark ? '#c0caf5' : '#2c3e50', mb: 3 }}>
                Certifications
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {myCerts.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.85 + i * 0.1 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2,
                        borderRadius: '16px',
                        bgcolor: isDark ? 'rgba(30, 32, 48, 0.4)' : 'rgba(240, 242, 245, 0.4)',
                        border: '1px solid',
                        borderColor: isDark ? 'rgba(46, 49, 72, 0.3)' : 'rgba(216, 220, 230, 0.4)',
                        transition: 'all 0.2s',
                        '&:hover': {
                          bgcolor: isDark ? 'rgba(30, 32, 48, 0.6)' : 'rgba(240, 242, 245, 0.7)',
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      <Avatar
                        src={cert.logoUrl}
                        variant="rounded"
                        sx={{ width: 44, height: 44 }}
                      />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" fontWeight="bold" sx={{ color: isDark ? '#c0caf5' : '#2c3e50' }}>
                          {cert.title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: isDark ? '#8b95c9' : '#5a6a7e' }}>
                          Issued by {cert.issuer}
                        </Typography>
                      </Box>
                      <IconButton
                        component={Link}
                        href={cert.link}
                        target="_blank"
                        size="small"
                        sx={{ color: isDark ? '#4a90d9' : '#3b82f6' }}
                      >
                        <LaunchIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default EducationPage
