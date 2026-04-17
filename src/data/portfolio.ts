export const personalInfo = {
  name: "Varuna Kumari",
  title:
    "A IIIT Raichur Student | Full Stack Developer | Competitive Programmer",
  subtitle: "Full stack developer and competitive programmer",
  bio: [
    "Full-stack developer and competitive programmer — Codeforces Expert with 1400+ rating, 3★ on CodeChef with 1600+ rating, and 350+ problems solved on LeetCode. Passionate about AI, GenAI, and building scalable web applications.",
    "I'm a results-driven full-stack developer skilled in React, Next.js, TypeScript, and Node.js. Pursuing B.Tech in Artificial Intelligence and Data Science at IIIT Raichur with a CGPA of 7.94. I focus on creating fast, efficient, and maintainable applications with real-time capabilities and modern architectures.",
  ],
  location: "Raichur, India",
  email: "varunakumari2102@gmail.com",
  phone: "+91-7903498540",
  timezone: "IST",
  profileImage: "/images/profile.jpg",
  college: "Indian Institute of Information Technology, Raichur",
  degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
  cgpa: "7.94",
  collegeStart: "Aug 2024",
  collegeEnd: "Present",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/varunakumari/",
  github: "https://github.com/varunaKumari",
  leetcode: "https://leetcode.com/u/varuna_kumari/",
  codeforces: "https://codeforces.com/profile/kaizopearl",
  codechef: "https://www.codechef.com/users/varuna_16",
  resume: "/resume.pdf",
};

export const languages = [
  { name: "Hindi (Native)", level: "Advanced" },
  { name: "English", level: "Advanced" },
  { name: "Bhojpuri", level: "Moderate" },
];

export const workExperience: {
  company: string;
  role: string;
  logo: string;
  period: string;
  responsibilities: { task: string; impact: string }[];
  techStack: string[];
}[] = [];
// No work experience yet

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "SQL", icon: "sql" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
    ],
  },
  {
    title: "Backend & API",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "GraphQL", icon: "graphql" },
      { name: "REST APIs", icon: "api" },
    ],
  },
  {
    title: "Databases & Debugging",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    title: "Testing & Automation",
    skills: [
      { name: "Selenium", icon: "selenium" },
      { name: "Cypress", icon: "cypress" },
      { name: "Postman", icon: "postman" },
    ],
  },
  {
    title: "AI & GenAI",
    skills: [
      { name: "OpenAI API", icon: "openai" },
      { name: "LangChain", icon: "langchain" },
      { name: "Prompt Eng.", icon: "ai" },
    ],
  },
  {
    title: "CI/CD & DevOps",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Docker", icon: "docker" },
      { name: "Jenkins", icon: "jenkins" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "VS Code", icon: "vscode" },
      { name: "JIRA", icon: "jira" },
      { name: "Postman", icon: "postman" },
      { name: "Prometheus", icon: "prometheus" },
      { name: "Grafana", icon: "grafana" },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "STLC", icon: "concept" },
      { name: "Agile/Scrum", icon: "concept" },
      { name: "OOP", icon: "concept" },
      { name: "DSA", icon: "concept" },
    ],
  },
];

export const projects = [
  {
    name: "Multi-User Real-Time Whiteboard",
    description:
      "Engineered a real-time collaborative whiteboard application using Next.js, GraphQL, WebSockets, and HTML Canvas, enabling multiple concurrent users to draw, write, and interact on a shared canvas with instant state synchronization. Implemented GraphQL subscriptions over WebSockets to broadcast drawing events in real time, achieving low-latency updates and consistent rendering across all connected clients.",
    techStack: [
      "Next.js",
      "GraphQL",
      "WebSockets",
      "HTML Canvas",
      "JavaScript",
      "TypeScript",
    ],
    image: "/images/projects/whiteboard.png",
    link: "#",
    highlights: [
      "Real-time collaborative drawing with instant state sync",
      "GraphQL subscriptions over WebSockets for low-latency updates",
      "Scalable full-stack architecture with structured GraphQL API",
      "High-performance Next.js frontend for smooth rendering",
    ],
  },
  {
    name: "SocialMedia",
    description:
      "Developed a full-fledged social media platform for teenagers and developers, combining modern UI design, scalable backend architecture, and real-time communication to deliver a dynamic and engaging user experience. Built a modular and scalable backend with AI-driven features to enhance personalization and user engagement, using a monorepo-based architecture for maintainability and performance.",
    techStack: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "WebSockets",
      "AI/ML",
      "TypeScript",
    ],
    image: "/images/projects/socialmedia.png",
    link: "#",
    highlights: [
      "Seamless content sharing, instant updates, smooth multi-user interactions",
      "AI-driven features for personalization and user engagement",
      "Monorepo-based architecture for maintainability",
      "Full-stack development with real-time systems",
    ],
  },
];

export const achievements = {
  codingProfiles: [
    {
      platform: "Codeforces",
      handle: "kaizopearl",
      description:
        "Attained Expert on Codeforces — 200+ problems in graphs, 1400+ Rating.",
      link: "https://codeforces.com/profile/kaizopearl",
    },
    {
      platform: "CodeChef",
      handle: "VarunaKumari",
      description: "Earned 3★ on CodeChef (VarunaKumari) — 1600+ Rating.",
      link: "https://codechef.com/users/VarunaKumari",
    },
    {
      platform: "LeetCode",
      handle: "varuna_kumari",
      description:
        "Solved 350+ LeetCode problems (varuna_kumari) — 1400+ Rating.",
      link: "https://leetcode.com/u/varuna_kumari/",
    },
  ],
  contestRanks: [] as { name: string; description: string }[],
  mentorship: [
    {
      name: "Amazon Foundation for Excellence Scholar 2025",
      period: "May 2025 - Feb 2026",
      description:
        "Selected among the top 500+ candidates, nationwide for the FFE and Amazon scholarship and mentorship program.",
    },
    {
      name: "Pragati: Path To Future COHORT 6",
      period: "Aug 2025 - Oct 2025",
      description:
        'A free, 12-week skilling program by Infosys Springboard for women (18+) in India, focusing on personal development, career readiness, and tech skills like AI/ML, featuring online learning with a final offline session.',
    },
  ],
  positions: [] as { role: string; description: string }[],
};

export const sidebarItems = [
  { icon: "👤", label: "About Me", id: "about-me", color: "#4fc1ff" },
  {
    icon: "💻",
    label: "Work Experience",
    id: "work-experience",
    color: "#cccccc",
  },
  { icon: "🔧", label: "Skills", id: "skills", color: "#e5a000" },
  { icon: "💡", label: "My Work", id: "my-work", color: "#e5a000" },
  { icon: "🏆", label: "Achievements", id: "achievements", color: "#e5a000" },
  { icon: "📧", label: "Contact Me", id: "contact-me", color: "#4fc1ff" },
  { icon: "✅", label: "Explore More", id: "explore-more", color: "#4ec9b0" },
];