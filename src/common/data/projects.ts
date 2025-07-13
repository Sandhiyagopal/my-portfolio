import { IProjectItem, ProjectType, RepoType } from "@/common/types";

const projects: IProjectItem[] = [
  {
    id: "social-media-app",
    title: "Social Media App",
    description:
      "A social media mobile application developed using Flutter, GetX, Firebase Notifications and Hive.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    // githubUrl: "https://github.com/Sandhiyagopal/social-media-app-flutter",
    // url: "https://github.com/Sandhiyagopal/social-media-app-flutter/releases",
    tags: ["Flutter", "Dart", "GetX", "Hive"],
  },
  {
    id: "e-commerce-app-mern",
    title: "E-commerce App",
    description:
      "An e-commerce web application developed using React.js, Material UI, Redux, and Stripe.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    // githubUrl: "https://github.com/Sandhiyagopal/ecommerce-web-reactjs",
    // url: "https://sandhiya-shop.vercel.app",
    tags: ["React.js", "Redux", "Material UI", "Stripe"],
  },
  {
    id: "video-calling-app-flutter",
    title: "Video Calling App",
    description:
      "A video calling mobile application developed using Flutter and Agora SDK that allows users to call each other face to face.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    // githubUrl: "https://github.com/Sandhiyagopal/video-calling-app-flutter",
    // url: "https://github.com/Sandhiyagopal/video-calling-app-flutter/releases",
    tags: ["Flutter", "Dart", "GetX", "Agora SDK"],
  },
  {
    id: "social-media-api-nodejs",
    title: "Social Media API",
    description:
      "A RESTful API developed using Node.js, Express.js, and MongoDB to integrate backend and frontend with ease.",
    icon: "/skills/nestjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    // githubUrl: "https://github.com/Sandhiyagopal/social-media-api-nodejs",
    tags: ["Node.js", "Express.js", "MongoDB", "WebSocket"],
  },
  {
    id: "grocery-list-maker-app-flutter",
    title: "Grocery List Maker App",
    description:
      "A grocery list maker mobile application developed using Flutter, BloC, Hive DB, and PDF.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    // githubUrl: "https://github.com/Sandhiyagopal/grocery-list-maker-flutter",
    // url: "https://github.com/Sandhiyagopal/grocery-list-maker-flutter/releases/latest",
    tags: ["Flutter", "Dart", "BLoC", "PDF", "Hive"],
  },
  {
    id: "e-commerce-api-nodejs",
    title: "E-commerce API",
    description:
      "A RESTful API developed using Node.js, Express.js, MongoDB, and Stripe to integrate e-commerce backend.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    // githubUrl: "https://github.com/Sandhiyagopal/ecommerce-api-nodejs",
    tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This repository contains the source code for a portfolio website built using Next.js and Sass.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    // githubUrl: "https://github.com/Sandhiyagopal/portfolio-website",
    url: "https://Sandhiyagopal.dev",
    tags: ["Next.js", "Sass", "Web Development"],
  },
  {
    id: "bus-reservation-system-management",
    title: "Bus Reservation System Management",
    description:
      "This repository contains the Bus Reservation System Management project developed using Object Oriented Programming (OOP) and File Handling concepts in C++.",
    icon: "/skills/cpp.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    // githubUrl: "https://github.com/Sandhiyagopal/bus-reservation-system",
    tags: ["C++", "OOP", "File Handling"],
  },
];
export default projects;
