import React from "react";
import portfolioImg1 from "@/public/portfolio1.png";
import portfolioImg02 from "@/public/portfolio2.png";
import portfolioImg03 from "@/public/portfolio3.png";
import portfolioImg04 from "@/public/portfolio4.png";
import portfolioImg05 from "@/public/portfolio5.png";
import portfolioImg06 from "@/public/portfolio6.png";
import portfolioImg07 from "@/public/portfolio7.png";
import portfolioImg08 from "@/public/portfolio8.png";
import portfolioImg09 from "@/public/portfolio9.png";
import { SiPrisma } from "react-icons/si";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { BiLinkAlt } from "react-icons/bi";
import { TbCertificate } from "react-icons/tb";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiPostgresql,
  SiReactquery,
  SiStyledcomponents,
  SiSupabase,
  SiPostman,
} from "react-icons/si";
import { FaSass, FaNodeJs, FaFigma, FaYarn } from "react-icons/fa";
import {
  TbBrandFramerMotion,
  TbBrandNextjs,
  TbBrandVscode,
} from "react-icons/tb";
import { BsGithub, BsGit } from "react-icons/bs";
import { DiNpm } from "react-icons/di";

//! Navbar links
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

//! Experience
export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Berlin, Germany",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

//! Projects
export const projectsData = [
  {
    id: 1,
    imgUrl: portfolioImg1,
    category: "Landing Page",
    title: "Küchen Trend",
    description:
      "Crafting a responsive landing page utilizing REACT and TAILWIND. The outcome is a refined, user-friendly interface that seamlessly adapts to diverse screen sizes. This design guarantees a smooth and accessible user experience across all devices, emphasizing its responsiveness and accessibility.",
    technologies: [
      {
        icon: React.createElement(FaReact),
        color: "#61DAFB",
      },
      {
        icon: React.createElement(SiTailwindcss),
        color: "#3490dc",
      },
    ],
    githubUrl: "https://github.com/walid1921/kuchen.git",
    liveUrl: "https://kuechentrendkayu.vercel.app/",
  },
  {
    id: 2,
    imgUrl: portfolioImg04,
    category: "App",
    title: "ResonNex",
    description:
      "A full-stack task management application built with React, Tailwind css, Node.js, Express.js, and MongoDB. ResoNex is designed to simplify task management by providing a user-friendly interface for creating, deleting, and sorting tasks. It calculates the percentage of tasks completed and ensures a smooth task management experience.",
    technologies: [
      {
        icon: React.createElement(FaReact),
        color: "#61DAFB",
      },
      {
        icon: React.createElement(SiTailwindcss),
        color: "#3490dc",
      },
      {
        icon: React.createElement(FaNodeJs),
        color: "#8CC84B",
      },
      {
        icon: React.createElement(SiExpress),
        color: "#000",
      },
      {
        icon: React.createElement(SiMongodb),
        color: "#3FA037",
      },
    ],
    githubUrl: "https://github.com/walid1921/ResoNex.git",
    liveUrl: "https://reso-nex.vercel.app/",
  },

  {
    id: 3,
    imgUrl: portfolioImg08,
    category: "App",
    title: "CookSaver",
    description:
      "A recipe app built using React and Tailwind CSS, leveraging API integration with robust handling of loading and error states. It empowers users to effortlessly search and view recipes, contribute their own creations, and bookmark their favorites. The app boasts a user-friendly interface tailored for food enthusiasts!",
    technologies: [
      {
        icon: React.createElement(FaReact),
        color: "#61DAFB",
      },
      {
        icon: React.createElement(SiTailwindcss),
        color: "#3490dc",
      },
    ],
    githubUrl: "https://github.com/walid1921/CookSaver.git",
    liveUrl: "https://cook-saver-walid.netlify.app/",
  },
  {
    id: 4,
    imgUrl: portfolioImg09,
    category: "App",
    title: "iMovie App",
    description:
      "A Web App built using REACT, CSS. leveraging API integration with robust handling of loading and error states. It lets users search, save and rate their favorites movies.",
    technologies: [
      {
        icon: React.createElement(FaReact),
        color: "#61DAFB",
      },
      {
        icon: React.createElement(SiCss3),
        color: "#1E90FF",
      },
    ],
    githubUrl: "https://github.com/walid1921/iMovie.git",
    liveUrl: "https://imovie-walid.netlify.app/",
  },
  {
    id: 5,
    imgUrl: portfolioImg02,
    category: "Landing Page",
    title: "Swipe",
    description:
      "Crafted a expansive, responsive landing page using HTML and SASS, demonstrating proficiency in cross-device compatibility. The result is a polished, user-friendly interface that adapts seamlessly to various screen sizes.",
    technologies: [
      {
        icon: React.createElement(SiHtml5),
        color: "#FF4400",
      },
      {
        icon: React.createElement(FaSass),
        color: "#CD6799",
      },
    ],
    githubUrl: "https://github.com/walid1921/Swipe.git",
    liveUrl: "https://swipe-walid.netlify.app/",
  },
  {
    id: 6,
    imgUrl: portfolioImg03,
    category: "App",
    title: "My Travel List",
    description:
      "A full-stack travel planning application built with React, CSS, Node.js, Express.js, and MongoDB. My Travel List is designed to simplify trip planning by providing a user-friendly interface for creating, deleting, and sorting items. It calculates the percentage of items packed and ensures a smooth travel preparation experience.",
    technologies: [
      {
        icon: React.createElement(FaReact),
        color: "#61DAFB",
      },
      {
        icon: React.createElement(SiCss3),
        color: "#1E90FF",
      },
      {
        icon: React.createElement(FaNodeJs),
        color: "#8CC84B",
      },
      {
        icon: React.createElement(SiExpress),
        color: "#000",
      },
      {
        icon: React.createElement(SiMongodb),
        color: "#3FA037",
      },
    ],
    githubUrl: "https://github.com/walid1921/My-Travel-List.git",
    liveUrl: "https://my-travellist.netlify.app/",
  },

  {
    id: 7,
    imgUrl: portfolioImg06,
    category: "Landing Page",
    title: "Nike website",
    description:
      "Responsive landing page using REACT and TAILWIND, demonstrating proficiency in cross-device compatibility. The result is a polished, user-friendly interface that adapts seamlessly to various screen sizes.",
    technologies: [
      {
        icon: React.createElement(FaReact),
        color: "#61DAFB",
      },
      {
        icon: React.createElement(SiTailwindcss),
        color: "#3490dc",
      },
    ],
    githubUrl: "https://github.com/walid1921/nike.git",
    liveUrl: "https://nike-walid.netlify.app/",
  },
  {
    id: 8,
    imgUrl: portfolioImg07,
    category: "App",
    title: "Mapty App",
    description:
      "Fitness Tracking Web App Created with HTML, CSS, and Vanilla JAVASCRIPT. This app helps users easily keep track of their workouts and organizing their fitness routine. It smoothly loads maps from Leaflet api to show workout routes. It also uses location information for accurate tracking of runs and bike rides.",
    technologies: [
      {
        icon: React.createElement(SiHtml5),
        color: "#FF4400",
      },
      {
        icon: React.createElement(SiCss3),
        color: "#1E90FF",
      },
      {
        icon: React.createElement(SiJavascript),
        color: "#F7DF1E",
      },
    ],
    githubUrl: "https://github.com/walid1921/Mapty-App.git",
    liveUrl: "https://mapty-walid.netlify.app/",
  },
  {
    id: 9,
    imgUrl: portfolioImg05,
    category: "App",
    title: "Bankist",
    description:
      "A dynamic banking application using HTML, SASS, and Vanilla JAVASCRIPT. This user-friendly platform enables secure login, hassle-free money transfers between users, loan requests from the bank, and smooth account closure. Additionally, a timed logout feature enhances security. Explore this intuitive banking solution, showcasing the power of modern web technologies. (Account 1: (owner: js, pin: 1111) / Account 2: (owner: jd, pin: 2222)) ",
    technologies: [
      {
        icon: React.createElement(SiHtml5),
        color: "#FF4400",
      },
      {
        icon: React.createElement(FaSass),
        color: "#CD6799",
      },
      {
        icon: React.createElement(SiJavascript),
        color: "#F7DF1E",
      },
    ],
    githubUrl: "https://github.com/walid1921/Bank-web.git",
    liveUrl: "https://bankist-walid.netlify.app/",
  },
] as const;

//! Skills
export const skillsData = [
  {
    id: "html",
    name: "HTML",
    icon: React.createElement(SiHtml5),
    color: "#E34F26",
    borderColor: "#E34F26",
    bgColor: "#E34F26",
    value: 80,
    percentage: "80%",
  },

  {
    id: "postman",
    name: "Postman",
    icon: React.createElement(SiPostman),
    color: "#E34F26",
    borderColor: "#E34F26",
    bgColor: "#E34F26",
    value: 80,
    percentage: "80%",
  },

  {
    id: "css",
    name: "CSS",
    icon: React.createElement(SiCss3),
    color: "#1E90FF",
    borderColor: "#1E90FF",
    bgColor: "#1E90FF",
    value: 80,
    percentage: "80%",
  },

  {
    id: "js",
    name: "JavaScript",
    icon: React.createElement(SiJavascript),
    color: "#F7DF1E",
    borderColor: "#F7DF1E",
    bgColor: "#CDB600",
    value: 70,
    percentage: "70%",
  },

  {
    id: "github",
    name: "GitHub",
    icon: React.createElement(BsGithub),
    color: "#000",
    borderColor: "#000",
    bgColor: "#000",
    value: 80,
    percentage: "90%",
  },

  {
    id: "react",
    name: "React",
    icon: React.createElement(FaReact),
    color: "#61DAFB",
    borderColor: "#61DAFB",
    bgColor: "#61DAFB",
    value: 80,
    percentage: "80%",
  },

  {
    id: "reactQuery",
    name: "React Query",
    icon: React.createElement(SiReactquery),
    color: "#F7DF1E",
    borderColor: "#F7DF1E",
    bgColor: "#CDB600",
    value: 80,
    percentage: "80%",
  },

  {
    id: "sass",
    name: "SASS",
    icon: React.createElement(FaSass),
    color: "#CD6799",
    borderColor: "#CD6799",
    bgColor: "#892556",
    value: 70,
    percentage: "70%",
  },

  {
    id: "bootstrap",
    name: "Bootstrap",
    icon: React.createElement(SiBootstrap),
    color: "#6f42c1",
    borderColor: "#6f42c1",
    bgColor: "#3D00AC",
    value: 70,
    percentage: "70%",
  },

  {
    id: "framerMotion",
    name: "Framer Motion",
    icon: React.createElement(TbBrandFramerMotion),
    color: "#6f42c1",
    borderColor: "#6f42c1",
    bgColor: "#3D00AC",
    value: 50,
    percentage: "50%",
  },

  {
    id: "tailwind",
    name: "Tailwindcss",
    icon: React.createElement(SiTailwindcss),
    color: "#3490dc",
    borderColor: "#3490dc",
    bgColor: "#1E90FF",
    value: 90,
    percentage: "90%",
  },

  {
    id: "styledComponents",
    name: "Styled Components",
    icon: React.createElement(SiStyledcomponents),
    color: "#FD9E86",
    borderColor: "#CD6799",
    bgColor: "#892556",
    value: 80,
    percentage: "80%",
  },

  {
    id: "mongodb",
    name: "MongoDB",
    icon: React.createElement(SiMongodb),
    color: "#3FA037",
    borderColor: "#3FA037",
    bgColor: "#096701",
    value: 70,
    percentage: "70%",
  },

  {
    id: "supabase",
    name: "Supabase",
    icon: React.createElement(SiSupabase),
    color: "#3FA037",
    borderColor: "#3FA037",
    bgColor: "#096701",
    value: 70,
    percentage: "70%",
  },

  {
    id: "express",
    name: "Express.js",
    icon: React.createElement(SiExpress),
    color: "#000",
    borderColor: "#000",
    bgColor: "#000",
    value: 50,
    percentage: "50%",
  },

  {
    id: "node",
    name: "Node.js",
    icon: React.createElement(FaNodeJs),
    color: "#8CC84B",
    borderColor: "#8CC84B",
    bgColor: "#096701",
    value: 50,
    percentage: "50%",
  },

  {
    id: "next",
    name: "Next.js",
    icon: React.createElement(TbBrandNextjs),
    color: "#000",
    borderColor: "#000",
    bgColor: "#000",
    value: 70,
    percentage: "70%",
  },

  {
    id: "typescript",
    name: "TypeScript",
    icon: React.createElement(SiTypescript),
    color: "#007ACC",
    borderColor: "#007ACC",
    bgColor: "#1E90FF",
    value: 80,
    percentage: "80%",
  },

  {
    id: "figma",
    name: "Figma",
    icon: React.createElement(FaFigma),
    color: "#FD9E86",
    borderColor: "#6f42c1",
    bgColor: "#6f42c1",
    value: 50,
    percentage: "50%",
  },

  {
    id: "vsCode",
    name: "VS Code",
    icon: React.createElement(TbBrandVscode),
    color: "#3490dc",
    borderColor: "#1E90FF",
    bgColor: "#1E90FF",
    value: 100,
    percentage: "100%",
  },

  {
    id: "npm",
    name: "Npm",
    icon: React.createElement(DiNpm),
    color: "#55b955",
    borderColor: "#55b955",
    bgColor: "#096701",
    value: 100,
    percentage: "100%",
  },

  {
    id: "yarn",
    name: "Yarn",
    icon: React.createElement(FaYarn),
    color: "#3490dc",
    borderColor: "#1E90FF",
    bgColor: "#1E90FF",
    value: 100,
    percentage: "100%",
  },

  {
    id: "git",
    name: "Git",
    icon: React.createElement(BsGit),
    color: "#FF9900",
    borderColor: "#FF9900",
    bgColor: "#B53E1D",
    value: 100,
    percentage: "100%",
  },
  {
    id: "sql",
    name: "Mysql",
    icon: React.createElement(SiPostgresql),
    color: "#3490dc",
    borderColor: "#3490dc",
    bgColor: "#3490dc",
    value: 70,
    percentage: "70%",
  },
  {
    id: "prisma",
    name: "Prisma",
    icon: React.createElement(SiPrisma),
    color: "#fff",
    borderColor: "#fff",
    bgColor: "#000",
    value: 70,
    percentage: "70%",
  },
] as const;

//! Soft Skills
export const SoftSkills = [
  {
    id: "01",
    category: "Soft Skills",

    title: "Languages",
    subtitle: "(English, Arabic, French, German)",
  },
  {
    id: "02",
    title: "Design",
  },
  {
    id: "03",
    title: "Editing",
  },
  {
    id: "04",
    title: "Content Creation",
  },
] as const;

//! Online Courses
export const OnlineCourses = [
  {
    id: "01",
    category: "Online Courses",

    title: "The Web Developer BootCamp 2022",
    subtitle: "(64 total hours)",
    certificateIcon: React.createElement(TbCertificate),
    linkIcon: React.createElement(BiLinkAlt),
    certificationPdf:
      "https://www.udemy.com/certificate/UC-62196ef4-3625-40ea-b910-2e4685896e40",
    linkUrl: "https://www.udemy.com/course/the-web-developer-bootcamp/",
  },
  {
    id: "02",
    title: "Advances CSS and Sass",
    subtitle: "(28 total hours)",
    certificateIcon: React.createElement(TbCertificate),
    linkIcon: React.createElement(BiLinkAlt),
    certificationPdf:
      "https://www.udemy.com/certificate/UC-d5ff2f1a-21db-46d9-bdb8-ae6cc61e5282/",

    linkUrl: "https://www.udemy.com/course/advanced-css-and-sass/",
  },
  {
    id: "03",
    title: "The Complete JavaScript Course 2023: From Zero to Expert!",
    subtitle: "(69 total hours)",
    certificateIcon: React.createElement(TbCertificate),
    linkIcon: React.createElement(BiLinkAlt),
    certificationPdf:
      "https://www.udemy.com/certificate/UC-cd978779-734d-4368-bc59-169c6a0f7e71",
    linkUrl: "https://www.udemy.com/course/the-complete-javascript-course/",
  },
  {
    id: "04",
    title: "The HTML & CSS Bootcamp 2023 Edition",
    subtitle: "(37 total hours)",
    certificateIcon: React.createElement(TbCertificate),
    certificationPdf:
      "https://www.udemy.com/certificate/UC-f617e13e-86b4-498e-a389-7a3e5c92d246",
    linkUrl: "https://www.udemy.com/course/html-and-css-bootcamp/",
  },
  {
    id: "05",
    title: "Google Digital Garage",
    subtitle: "(The Fundamentals of Digital Marketing)",
    linkIcon: React.createElement(BiLinkAlt),
    certificationPdf: "https://learndigital.withgoogle.com/link/1qsdpcedm9s",
    linkUrl:
      "https://learndigital-staging.withgoogle.com/digitalgarage/course/digital-marketing",
  },
] as const;
