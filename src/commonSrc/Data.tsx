
// Data type
export interface Project {
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

export interface Certification {
  title: string;
  issuer: string; 
  logoUrl: string; 
  link: string;
}

export interface Language {
  name: string;
  level: number;
  experience: string;
  description: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export interface Article {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  readTime: string;
  link: string;
}


// Info 

export const articles: Article[] = [
  {
    title: 'Reinforcement Learning (RL) Algorithms for Reasoning in Large Language Models',
    summary: 'An introduction to the use of RL algorithms integration with LLMs and the boost resutls of the technologies mix',
    date: 'Sep 12, 2025',
    tags: ['Rl Algorithms', 'AI', 'Ai Agent Development'],
    readTime: '8 min read',
    link: 'https://medium.com/@raquelvalentinaherrera/reinforcement-learning-rl-algorithms-for-reasoning-in-large-language-models-19f0810d2b6e'
  },
];
export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud & Architecture',
    icon: '',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Dapr', level: 80 },
      { name: 'Redis', level: 75 },
    ],
  },
  {
    title: 'AI & Data',
    icon: '',
    skills: [
      { name: 'Qdrant (Vector DB)', level: 80 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'HuggingFace', level: 75 },
      { name: 'Scikit-learn', level: 80 },
    ],
  },
  {
    title: 'Frameworks',
    icon: '',
    skills: [
      { name: 'Django', level: 80 },
      { name: 'Qt', level: 75 },
      { name: 'React', level: 70 },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: '',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Linux / CLI', level: 85 },
      { name: 'Tableau', level: 75 },
      { name: 'Vite', level: 70 },
    ],
  },
];

export const languages: Language[] = [
  {
    name: 'Python',
    level: 90,
    experience: '3+ years',
    description: 'Primary language for data science, ML pipelines, backend APIs with Django, and scripting.',
    color: '#3776ab',
  },
  {
    name: 'Go',
    level: 75,
    experience: '2+ years',
    description: 'Used for building microservices, CLI tools, and high-performance concurrent systems.',
    color: '#00add8',
  },
  {
    name: 'C++',
    level: 70,
    experience: '2+ years',
    description: 'Desktop applications with Qt framework, algorithmic challenges, and performance-critical code.',
    color: '#659ad2',
  },
  {
    name: 'SQL',
    level: 80,
    experience: '2+ years',
    description: 'Database design, complex queries, and analytics with PostgreSQL and Oracle.',
    color: '#f29111',
  },
  {
    name: 'TypeScript',
    level: 65,
    experience: '1+ year',
    description: 'Frontend development with React, building this portfolio and interactive web apps.',
    color: '#3178c6',
  },
];

export const myCerts: Certification[] = [
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

export const myProjects: Project[] = [
  {
    title: "Hackathon Dapr: ZAIDriver",
    description: "An AI-powered driving assistant built with Dapr microservices architecture. Features real-time object detection and voice-guided navigation using distributed cloud components.",
    mainImage: "",
    userImage: "https://avatars.githubusercontent.com/u/66224544?v=4",
    userName: "rachelDev",
    publishedDate: "Aug 2025",
    video: "https://www.youtube.com/watch?v=YfDT1425pZw",
    link: "https://drive.google.com/file/d/1qKWgrH1p_oNuww1TdzIZh0pxWslbxp9j/view?usp=sharing",
    tags: ["Dapr", "Docker", "Python", "AI", "Privite Repo"],
  },
  {
    title: "BackOffice Dashboard",
    description: "A Django-based back-office dashboard for managing crypto news scraping, processing, and publishing workflows",
    mainImage: "https://media.licdn.com/dms/image/v2/D4E22AQGCxi1m58OgiA/feedshare-shrink_800/B4EZ0_VuscGkAg-/0/1774884154784?e=1776297600&v=beta&t=_RqaNC07qzPTswm10KSg5jYjah5Su-aBELZnqOcYAx0",
    userImage: "https://avatars.githubusercontent.com/u/66224544?v=4",
    userName: "rachelDev",
    publishedDate: "Mar 2024",
    video: "",
    link: "https://github.com/rachelGet/django_dashboard.git",
    tags: ["Django 4", "PostgreSQL", "Redis", "Chart.js"],
  },
  {
    title: "Trading Qt Interface",
    description: "A desktop trading interface built with Qt framework featuring real-time market data visualization, portfolio tracking, and algorithmic trading strategy backtesting.",
    mainImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    userImage: "https://avatars.githubusercontent.com/u/66224544?v=4",
    userName: "rachelDev",
    publishedDate: "May 2025",
    video: "https://www.youtube.com/watch?v=tyAyS40lZlc",
    link: "https://github.com/rachelGet/trading_Qtinterface",
    tags: ["C++", "Qt", "Finance", "Data Viz"],
  },
];

export const cards = [
  {
    id: 'lenguages_card',
    title: 'Languages',
    description: 'Python, Go, C++',
  },
  {
    id: 'skills_card',
    title: 'Skills',
    description: 'Cloud & Architecture: Docker, Dapr, Redis. | AI & Data: Qdrant (Vector DB), PostgreSQL, HuggingFace, Scikit-learn. | Frameworks: Django & Qt.',
  },
  {
    id: 'certifications_card',
    title: 'Certifications',
    description: 'Technical expertise through credentials from different institutions.',
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

