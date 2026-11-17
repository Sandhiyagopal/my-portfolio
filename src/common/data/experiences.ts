import { IExperienceItem } from "@/common/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Senior Software Engineer",
    company: "Ubona Technologies Pvt. Ltd.",
    startDate: "Sep 2025",
    isCurrentJob: true,
    location: "Bangalore, India",
    description: [
      "Architected the frontend of a SaaS contact-center platform for 60+ tenants using React 19, TypeScript, and Vite, shortening feature delivery by 28%.",
      "Integrated a SIP-based WebRTC calling client with auto-reconnection and health monitoring, streaming live call status over WebSockets and SSE to 500+ concurrent agents.",
      "Built campaign and reporting dashboards handling 100K+ records per view with server-side pagination and secure JWT-based authentication.",
      "Expanded automated test coverage to 80% with Vitest, React Testing Library, and Playwright, while establishing CI/CD pipelines for Docker deployments to AWS ECS.",
      "Led code reviews, mentored developers, and aligned REST API contracts with Java/Spring Boot teams to improve cross-functional delivery.",
    ],
  },
  {
    designation: "Software Development Engineer II",
    company: "Trukker Technologies Pvt. Ltd",
    startDate: "Sep 2024",
    endDate: "Jul 2025",
    isCurrentJob: false,
    location: "Bangalore, India",
    description: [
      "Develop new user-facing features with React or Angular, translating UI/UX wireframes into high-performance production code.",
      "Build reusable front-end components and libraries to support future use cases.",
      "Optimize applications for maximum speed, scalability, and SEO using techniques like SSR, lazy loading, and prefetching.",
      "Validate all user inputs before backend submission and ensure cross-browser compatibility using HTML5, CSS3, LESS/SASS and JavaScript.",
      "Collaborate closely with designers and backend engineers to integrate RESTful APIs and maintain design consistency.",
    ],
  },
  {
    designation: "Associate Software Engineer",
    company: "Brigosha Technologies Pvt. Ltd",
    startDate: "Sep 2022",
    endDate: "Jul 2024",
    isCurrentJob: false,
    location: "Bangalore, India",
    description: [
      "Engineered interactive modules for web and mobile using React.js, integrating features like geofencing via Google Maps API.",
      "Implemented full-stack MERN solutions, handling frontend React and backend Node.js/Express for seamless data flow.",
      "Optimized rendering performance by ~20% using MVC patterns, efficient state management, and component memoization.",
      "Conducted bug detection and resolution to boost efficiency, writing well-tested, maintainable code in JavaScript, HTML, and CSS.",
    ],
  },
  {
    designation: "Software Engineer",
    company: "GMA Technologies",
    startDate: "Oct 2021",
    endDate: "May 2022",
    isCurrentJob: false,
    location: "Bangalore, India",
    description: [
      "Built responsive SPA using React.js, creating reusable UI components adhering to WCAG accessibility standards.",
      "Integrated RESTful APIs and managed asynchronous workflows via AJAX/fetch for smooth user experiences.",
      "Participated in full SDLC—requirements, development, testing, and deployment—within agile teams.",
    ],
  },
  {
    designation: "Junior Software Engineer",
    company: "Quess Corp Ltd",
    startDate: "Oct 2020",
    endDate: "Jul 2021",
    isCurrentJob: false,
    location: "Bangalore, India",
    description: [
      "Developed dynamic onboarding and KYC UIs using React, HTML5, CSS3, and JavaScript.",
      "Collaborated on scalable frontend architectures, with state management and modular components.",
      "Enhanced performance and UX by debugging, client-side optimization, and validating API-driven inputs.",
    ],
  },
];

export default experiences;

