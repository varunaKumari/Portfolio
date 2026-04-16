export const personalInfo = {
  name: "Your Name",
  title: "A University Student | Full Stack Software Engineer | Competitive Programmer",
  subtitle: "Full stack software engineer and competitive programmer",
  bio: [
    "Full-stack developer and competitive programmer — Codeforces Expert and 5★ on CodeChef. Passionate about Generative AI and DevOps, building scalable and intelligent systems.",
    "I'm a results-driven full-stack developer skilled in React, TypeScript, and Node.js. With a strong foundation in algorithms and problem-solving, I focus on creating fast, efficient, and maintainable applications. My blend of competitive programming experience and modern engineering practices helps me build solutions that are both intelligent and robust.",
  ],
  location: "Your City, Country",
  email: "youremail@gmail.com",
  timezone: "IST",
  profileImage: "/images/profile.jpg",
};

export const socialLinks = {
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourprofile",
  leetcode: "https://leetcode.com/yourprofile",
  codeforces: "https://codeforces.com/profile/yourprofile",
  codechef: "https://codechef.com/users/yourprofile",
  resume: "/resume.pdf",
};

export const languages = [
  { name: "Hindi (Native)", level: "Advanced" },
  { name: "English", level: "Advanced" },
  { name: "Punjabi", level: "Moderate" },
];

export const workExperience = [
  {
    company: "Screenera",
    role: "Intern",
    logo: "/images/screenera.png",
    period: "June 2025 - July 2025",
    responsibilities: [
      {
        task: "Worked on backend and frontend development using Spring Boot and Next.js, ensuring a robust and responsive platform.",
        impact: "Delivered seamless full-stack functionality across the platform",
      },
      {
        task: "Enhanced the platform UI and implemented secure online interview scheduling, providing a smooth experience for users and recruiters.",
        impact: "Improved user experience and streamlined interview process",
      },
      {
        task: "Assisted in developing a chatbot for automated user assistance and engagement.",
        impact: "Increased user engagement and support efficiency",
      },
      {
        task: "Contributed to the development of an Offer Management System, allowing better tracking and handling of job offers.",
        impact: "Improved offer tracking and management",
      },
      {
        task: "Helped design and implement an onboarding process for new users, ensuring a smooth platform adoption.",
        impact: "Reduced onboarding time and enhanced user experience",
      },
      {
        task: "Developed reporting and analytics tools to provide actionable insights for the platform's operations and decision-making.",
        impact: "Enabled data-driven decisions and better operational insights",
      },
    ],
    techStack: ["TypeScript", "Docker", "React", "SpringBoot", "PostgreSQL", "Redis"],
  },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "C++", icon: "cpp" },
    ],
  },
  {
    title: "Frontend Frameworks",
    skills: [
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Redux", icon: "redux" },
      { name: "TailwindCSS", icon: "tailwind" },
    ],
  },
  {
    title: "Backend Frameworks",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Redis", icon: "redis" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "SpringBoot", icon: "springboot" },
    ],
  },
  {
    title: "Gen AI",
    skills: [
      { name: "Langchain", icon: "langchain" },
      { name: "Langgraph", icon: "langgraph" },
    ],
  },
  {
    title: "Devops",
    skills: [
      { name: "Github", icon: "github" },
      { name: "Docker", icon: "docker" },
    ],
  },
];

export const projects = [
  {
    name: "MarcelPearl",
    description:
      "A no-code platform to build smart, agentic workflows using intuitive drag-and-drop nodes. Think Zapier meets autonomous AI agents",
    image: "/images/projects/marcelpearl.png",
    link: "#",
  },
  {
    name: "PearlPost",
    description:
      "PearlPost, a full-fledged social media platform for teenagers and developers, combining modern design, scalable backend systems, and real-time communication with a touch of AI.",
    image: "/images/projects/pearlpost.png",
    link: "#",
  },
  {
    name: "Jivika AI",
    description:
      "Jivika AI is an end-to-end AI-powered healthcare assistant designed to bridge the gap between patients and doctors through secure, intelligent diagnostics, automated scheduling, and real-time health updates.",
    image: "/images/projects/jivika.png",
    link: "#",
  },
];

export const achievements = {
  codingProfiles: [
    {
      platform: "Codeforces",
      description:
        "Codeforces Expert with a peak rating of 1647, showcasing strong problem-solving skills and algorithmic thinking.",
      link: "https://codeforces.com",
    },
    {
      platform: "LeetCode",
      description:
        "LeetCode enthusiast with a peak rating of 1840, demonstrating proficiency in coding challenges and algorithmic solutions.",
      link: "https://leetcode.com",
    },
    {
      platform: "CodeChef",
      description:
        "CodeChef 5-star coder with a peak rating of 2000, reflecting advanced competitive programming abilities and consistent performance in contests.",
      link: "https://codechef.com",
    },
  ],
  contestRanks: [
    {
      name: "ICPC Preliminary Online Round",
      description:
        "Achieved All India Rank 21 and Institute Rank 1 at IIIT Allahabad with team '-Level', topping the leaderboard across all years as sophomores.",
    },
    {
      name: "CodePlus Long Contest",
      description: "Secured 1st place in the CodePlus Long Contest among the entire 2028 batch.",
    },
    {
      name: "GDG & Geekhaven Trials",
      description: "Achieved 2nd position in the GDG & Geekhaven Selection Trials.",
    },
    {
      name: "AlgoRush IIITA Freshers Contest",
      description: "Ranked 1st in the prestigious AlgoRush IIITA Freshers Contest.",
    },
  ],
  positions: [
    {
      role: "Member (Web-Dev), Club Of Professionals IIITA",
      description:
        "Empowering innovation by managing cutting-edge technology projects for the college and government initiatives.",
    },
    {
      role: "Member (CC-Wing), Geekhaven IIITA",
      description:
        "Demonstrating strong aptitude in competitive programming. Actively involved in organizing coding contests at IIITA.",
    },
  ],
};

export const sidebarItems = [
  { icon: "👤", label: "About Me", id: "about-me", color: "#4fc1ff" },
  { icon: "💻", label: "Work Experience", id: "work-experience", color: "#cccccc" },
  { icon: "🔧", label: "Skills", id: "skills", color: "#e5a000" },
  { icon: "💡", label: "My Work", id: "my-work", color: "#e5a000" },
  { icon: "🏆", label: "Achievements", id: "achievements", color: "#e5a000" },
  { icon: "📧", label: "Contact Me", id: "contact-me", color: "#4fc1ff" },
  { icon: "🔍", label: "Explore More", id: "explore-more", color: "#4ec9b0" },
];

export const explorerTree = {
  folders: [
    { name: ".next", icon: "⚫", collapsed: true },
    { name: "node_modules", icon: "📦", collapsed: true },
    {
      name: "public",
      icon: "📁",
      collapsed: false,
      files: [{ name: "about_me.ts", icon: "⭐", active: true }],
    },
    {
      name: "src",
      icon: "📦",
      collapsed: false,
      subFolders: [
        {
          name: "my_work",
          icon: "📊",
          collapsed: false,
          files: [
            { name: "MarcelPearl.tsx", icon: "⚙️" },
            { name: "PearlPost.tsx", icon: "⚙️" },
            { name: "Jivika", icon: "⚙️" },
          ],
        },
        {
          name: "your_work",
          icon: "📊",
          collapsed: false,
          files: [{ name: "Readme.md", icon: "📄" }],
        },
      ],
    },
  ],
  rootFiles: [
    { name: ".eslintrc.json", icon: "⚙️" },
    { name: ".gitignore", icon: "🔴" },
    { name: "next.config.js", icon: "⚫" },
    { name: "package-lock.json", icon: "📦" },
    { name: "package.json", icon: "📦" },
    { name: "tailwind.config.ts", icon: "🌊" },
    { name: "tsconfig.json", icon: "📘" },
  ],
};