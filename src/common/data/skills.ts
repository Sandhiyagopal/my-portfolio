import { ISkillListItem, SkillLevel } from "@/common/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Expert,
        icon: "/skills/typescript.svg",
      },
      {
        title: "Python",
        level: SkillLevel.Expert,
        icon: "/skills/python.svg",
      },
      {
        title: "HTML5",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS3",
        level: SkillLevel.Expert,
        icon: "/skills/css.svg",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "React Native",
        level: SkillLevel.Intermediate,
        icon: "/skills/react.svg",
      },
      {
        title: "Angular",
        level: SkillLevel.Intermediate,
      },
      {
        title: "Tailwind CSS",
        level: SkillLevel.Expert,
      },
      {
        title: "Material UI",
        level: SkillLevel.Intermediate,
      },
      {
        title: "Ant Design",
        level: SkillLevel.Intermediate,
      },
      {
        title: "Redux Toolkit",
        level: SkillLevel.Expert,
        icon: "/skills/redux.svg",
      },
      {
        title: "Zustand",
        level: SkillLevel.Expert,
        icon: "/skills/redux.svg",
      },
      {
        title: "TanStack Query",
        level: SkillLevel.Expert,
      },
      {
        title: "GraphQL",
        level: SkillLevel.Intermediate,
      },
      {
        title: "SASS",
        level: SkillLevel.Intermediate,
        icon: "/skills/sass.svg",
      },
    ],
  },
  {
    title: "Architecture & Real-time Systems",
    items: [
      {
        title: "Micro-Frontends",
        level: SkillLevel.Expert,
      },
      {
        title: "Module Federation",
        level: SkillLevel.Expert,
      },
      {
        title: "WebRTC",
        level: SkillLevel.Expert,
      },
      {
        title: "WebSockets",
        level: SkillLevel.Expert,
      },
      {
        title: "Server-Side Rendering",
        level: SkillLevel.Expert,
      },
      {
        title: "Core Web Vitals",
        level: SkillLevel.Expert,
      },
      {
        title: "Accessibility",
        level: SkillLevel.Expert,
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: "/skills/nodejs.svg",
      },
      {
        title: "Express.js",
        level: SkillLevel.Expert,
        icon: "/skills/express.svg",
      },
      {
        title: "REST APIs",
        level: SkillLevel.Expert,
      },
      {
        title: "JWT",
        level: SkillLevel.Expert,
      },
      {
        title: "SAML SSO",
        level: SkillLevel.Intermediate,
      },
      {
        title: "TOTP / 2FA",
        level: SkillLevel.Intermediate,
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Beginner,
        icon: "/skills/mysql.svg",
      },
      {
        title: "Redis",
        level: SkillLevel.Intermediate,
        icon: "/skills/redis.svg",
      },
    ],
  },
  {
    title: "Testing & DevOps",
    items: [
      {
        title: "Docker",
        level: SkillLevel.Expert,
        icon: "/skills/docker.png",
      },
      {
        title: "AWS",
        level: SkillLevel.Intermediate,
        icon: "/skills/aws.svg",
      },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },
      {
        title: "Jest",
        level: SkillLevel.Expert,
      },
      {
        title: "Vitest",
        level: SkillLevel.Expert,
      },
      {
        title: "Playwright",
        level: SkillLevel.Expert,
      },
      {
        title: "Cypress",
        level: SkillLevel.Intermediate,
      },
      {
        title: "Vite",
        level: SkillLevel.Expert,
      },
      {
        title: "Webpack",
        level: SkillLevel.Expert,
      },
    ],
  },
  {
    title: "Miscellaneous",
    items: [
      {
        title: "Firebase",
        level: SkillLevel.Intermediate,
        icon: "/skills/firebase.svg",
      },
      {
        title: "Ubuntu",
        level: SkillLevel.Intermediate,
        icon: "/skills/ubuntu.png",
      },
      {
        title: "PWA",
        level: SkillLevel.Intermediate,
      },
      {
        title: "CI/CD",
        level: SkillLevel.Expert,
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
      {
        title: "Project Leadership",
        level: SkillLevel.Expert,
      },
      {
        title: "Team Management",
        level: SkillLevel.Expert,
      },
    ],
  },
];

export default skills;
