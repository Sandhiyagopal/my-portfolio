import { IExperienceItem } from "@/common/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Senior Frontend Developer",
    company: "Trukker Technologies Pvt. Ltd",
    startDate: "Sep 2024",
    isCurrentJob: true,
    location: "Bangalore, India",
    description: [
      "Develop new user-facing features with React or Angular, translating UI/UX wireframes into high-performance production code.",
      "Build reusable front-end components and libraries to support future use cases.",
      "Optimize applications for maximum speed, scalability, and SEO using techniques like SSR, lazy loading, and prefetching.",
      "Validate all user inputs before backend submission and ensure cross-browser compatibility using HTML5, CSS3, LESS/SASS and JavaScript :contentReference[oaicite:1]{index=1}.",
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
      "Engineered interactive modules for web and mobile using React.js, integrating features like geofencing via Google Maps API :contentReference[oaicite:2]{index=2}.",
      "Implemented full-stack MERN solutions, handling frontend React and backend Node.js/Express for seamless data flow.",
      "Optimized rendering performance by ~20% using MVC patterns, efficient state management, and component memoization :contentReference[oaicite:3]{index=3}.",
      "Conducted bug detection and resolution to boost efficiency, writing well-tested, maintainable code in JavaScript, HTML, and CSS :contentReference[oaicite:4]{index=4}.",
    ],
  },
  {
    designation: "Software Engineer (Contract)",
    company: "GMA Technologies",
    startDate: "Oct 2021",
    endDate: "May 2022",
    isCurrentJob: false,
    location: "Bangalore, India",
    description: [
      "Built responsive SPA using React.js, creating reusable UI components adhering to WCAG accessibility standards :contentReference[oaicite:5]{index=5}.",
      "Integrated RESTful APIs and managed asynchronous workflows via AJAX/fetch for smooth user experiences.",
      "Participated in full SDLC—requirements, development, testing, and deployment—within agile teams :contentReference[oaicite:6]{index=6}.",
    ],
  },
  {
    designation: "Junior Software Engineer (Contract)",
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
  {
    designation: "Software Support Engineer (Contract)",
    company: "Motherson Group",
    startDate: "May 2019",
    endDate: "Nov 2019",
    isCurrentJob: false,
    location: "Bangalore, India",
    description: [
      "Redesigned factory dashboard UI to deliver real-time data using HTML, CSS, and JavaScript.",
      "Customized SAP UI and optimized forms to reduce manual errors and improve usability.",
      "Applied responsive and mobile-first design strategies to enhance accessibility across devices.",
    ],
  },
];

export default experiences;

