/* ============================================================
   Portfolio Data — Central place to edit content
   ============================================================ */

export const personalInfo = {
  name: 'Charan N',
  roles: ['Full Stack Developer'],
  tagline: 'Building intelligent, scalable web experiences with AI and modern technologies.',
  email: 'charann.dev@email.com',
  github: 'https://github.com/charan-N23',
  linkedin: 'https://linkedin.com/in/charan-n23 ',
  resumeUrl: '/resume.pdf',
  photoUrl: 'https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg',
  available: true,
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '3+', label: 'Projects Built' },
  { value: '4+', label: 'Technologies' },
  { value: '1', label: 'Live Client Project' },
]

export const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'JavaScript (ES6+)', icon: 'js' },
      { name: 'HTML5', icon: 'html' },
      { name: 'CSS3', icon: 'css' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'node' },
      { name: 'Express', icon: 'express' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'new', icon: '' },
      { name: 'VS Code', icon: 'vscode' },
    ],
  },
  {
    title: 'Other',
    skills: [
      { name: 'REST APIs', icon: 'api' },
      { name: 'Responsive Design', icon: 'responsive' },
      { name: 'Drag-and-Drop UI', icon: 'drag' },
    ],
  },
]

export const projects = [
  {
    title: 'AI-Based Fake Product Detection System',
    description:
      'Built an AI-powered counterfeit product detection web app using Flask, Python, and Google Gemini Vision API, classifying products into 3 authenticity tiers with confidence scoring',
    tech: [ 'Flask', 'Python','Google Gemini Vision API'],
    liveDemo: null,
    github: 'https://github.com/',
  },
  {
    title: 'Explainable AI-Based Anemia Prediction System ',
    description:
      'Developed and trained an ML-based anemia prediction model on 1,000+ clinical records, achieving 85%+ accuracy.',
    tech: ['React', 'JavaScript', 'Python'],
    liveDemo: '',
    github: 'https://github.com',
  },
  {
    title: 'EduSmart – AI-Powered Learning Platform ',
    description:
      'Engineered a full-stack AI-powered learning platform (React + Django) serving 2 user roles (learners/teachers), with NLP-based quiz generation cutting manual quiz-creation time by 50%.',
    tech: ['Python','React', 'JavaScript','FastAPI',],
    liveDemo: null,
    github: null,
  },
  
]

export const education = [
  
  {
    degree: "Bachelor's Degree",
    institution: 'ACS College of Engineering',
    period: 'Completed',
    description: 'Completed my Bachelor of Engineering  in Computer Science at ACS College of Engineering.',
  },
]

export const experience = [
  {
    role: 'Web Developer Intern',
    company: 'SOLVIMATE',
    period: 'Feb 2026 - June 2026',
    bullets: [
      'Developed and deployed 3+ responsive web pages tested across Chrome, Firefox, and Edge, achieving consistent UI rendering with zero critical cross-browser bugs at handoff.',
      'Collaborated on live client projects, translating requirements into responsive, production-ready UI',
      'Worked with modern responsive UI patterns including flexbox/grid layouts and component-driven design',
      'Collaborated with design and backend teams to integrate 4+ RESTful API endpoints, delivering 2 feature releases ahead of the sprint deadline. in code reviews and maintained clean, reusable component architecture',
    ],
  },
]
