// Configuration file for your portfolio
// Edit this file to easily customize your portfolio content

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: 'Gurpinder Singh',
    title: 'Frontend Developer',
    email: 'sragagan9856@gmail.com',
    phone: '+1 (XXX) XXX-XXXX',
    location: 'San Francisco Bay Area, CA',
    bio: 'A skilled Frontend Developer with extensive experience in building responsive web applications and crafting beautiful user interfaces.',
  },

  // Hero Section
  hero: {
    mainTitle: 'Gurpinder Singh',
    subtitle: 'Frontend Developer & Tech Enthusiast',
    roles: ['Developer', 'Designer', 'Problem Solver'],
    description: 'Crafting beautiful, responsive web applications with React, modern CSS, and cutting-edge technologies. Let\'s build something amazing together!',
  },

  // About Section
  about: {
    title: 'Frontend Developer & Tech Enthusiast',
    paragraphs: [
      'I\'m a skilled Frontend Developer with 8+ years of experience building responsive web applications and user-friendly interfaces. I specialize in modern web technologies and love creating elegant solutions to complex problems.',
      'My expertise spans React, Redux, HTML5, CSS3, and JavaScript, combined with a deep understanding of responsive design principles. I\'m proficient in Object-Oriented programming and have extensive experience with cloud services like AWS, Azure, and GCP.',
      'When I\'m not coding, I\'m exploring new technologies, contributing to open-source projects, or mentoring junior developers. I\'m passionate about clean code, performance optimization, and creating delightful user experiences.',
    ],
  },

  // Social Links
  socials: [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/singhgurpinder09/',
      icon: 'FaLinkedin',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: 'FaGithub',
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/yourhandle',
      icon: 'FaTwitter',
    },
  ],

  // Stats
  stats: [
    { icon: 'FaClock', value: 8, label: 'Years Experience' },
    { icon: 'FaUsers', value: 8, label: 'Happy Clients' },
    { icon: 'FaGlobe', value: 5, label: 'Websites Made' },
    { icon: 'FaMobileAlt', value: 2, label: 'Mobile Apps' },
  ],

  // Skills
  skills: [
    {
      category: 'Frontend',
      items: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      category: 'Backend & Tools',
      items: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Redux', level: 88 },
        { name: 'Git', level: 92 },
      ],
    },
    {
      category: 'Database & Cloud',
      items: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'AWS', level: 85 },
        { name: 'PostgreSQL', level: 83 },
      ],
    },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: 'Project Title',
      description: 'Project description goes here',
      image: '/img/building.jpg',
      category: 'react',
      technologies: ['React', 'Node.js'],
      links: {
        github: '#',
        live: '#',
      },
    },
    // Add more projects
  ],

  // Testimonials
  testimonials: [
    {
      name: 'Client Name',
      role: 'Position at Company',
      text: 'Testimonial text here',
      rating: 5,
      image: '/img/mypic.JPG',
    },
    // Add more testimonials
  ],

  // Experience
  experiences: [
    {
      company: 'Company Name',
      position: 'Job Title',
      period: 'MM/YYYY - MM/YYYY',
      location: 'City, State',
      description: 'Job description',
      achievements: [
        'Achievement 1',
        'Achievement 2',
      ],
    },
    // Add more experiences
  ],
};

export default portfolioConfig;
