// gitprofile.config.js

const config = {
  github: {
    username: 'boswojm03', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/josh-bosworth-a6b82920b/',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://faber.ecu.edu/intra/bosworthj21/Project1/home.html',
    phone: '',
    email: 'boswojm03@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Cisco Packet Tracer',
    'ISC2 Certified in Cyber Security',
    'C#',
    'SQL',
    'HTML',
    'CSS',
    'PHP',
  ],
  experiences: [
    {
      company: 'Hobart Service',
      position: 'Service Advisor',
      from: 'April 2021',
      to: 'Present',
      companyLink: 'https://www.hobartservice.com/',
    },
    {
      company: 'Hobart Service',
      position: 'Service Technician',
      from: 'June 2019',
      to: 'April 2021',
      companyLink: 'https://example.com',
    },
  ],
   certifications: [
    {
      name: 'Certified in Cyber Security',
      body: 'ISC2',
      year: 'March 2023',
      link: 'https://www.credly.com/earner/earned/badge/e149da43-ce0e-4539-a5ed-d9895ec454b9'
    },
  ], 
  education: [
    {
      institution: 'East Carolina University',
      degree: 'BSBA in Management Information Systems',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'Central Piedmont Community College',
      degree: 'Associate of Arts - AA, Business Administration and Management, General',
      from: '2019',
      to: '2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
