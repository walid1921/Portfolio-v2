import React from "react";
import portfolioImg1 from "@/public/portfolio1.png";
import portfolioImg02 from "@/public/portfolio2.png";
import portfolioImg03 from "@/public/portfolio3.png";
import portfolioImg04 from "@/public/portfolio4.png";
import portfolioImg10 from "@/public/portfolio10.png";
import portfolioImg05 from "@/public/portfolio5.png";
import portfolioImg06 from "@/public/portfolio6.png";
import portfolioImg07 from "@/public/portfolio7.png";
import portfolioImg08 from "@/public/portfolio8.png";
import portfolioImg09 from "@/public/portfolio9.png";
import portfolioImg12 from "@/public/portfolio12.png";
import portfolioImg11 from "@/public/portfolio11.png";
import portfolioImg13 from "@/public/portfolio13.jpeg";
import { SiPrisma } from "react-icons/si";
import { CgWorkAlt } from "react-icons/cg";
import { FaLinkedin, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
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
import { BsGithub, BsGit, BsFillTelephoneFill } from "react-icons/bs";
import { DiNpm } from "react-icons/di";
import { StaticImageData } from "next/image";
import { FiInstagram } from "react-icons/fi";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  {
    name: "Freelance",
    hash: "/freelance",
  },
] as const;

//! Projects
type Project = {
  id: number;
  imgUrl: StaticImageData;
  category: string;
  tag: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
};

export const projectsData: Project[] = [
  {
    id: 1,
    imgUrl: portfolioImg1,
    category: "Landing Page",
    tag: "Real Project",
    title: "Küchen Trend",
    description:
      "A responsive landing page for a kitchen design and installation company, showcasing their services and products, and providing a contact form for inquiries. The outcome is a refined, user-friendly interface that seamlessly adapts to diverse screen sizes.",
    technologies: ["React", "Tailwindcss"],
    githubUrl: "https://github.com/walid1921/kuchen.git",
    liveUrl: "https://www.kuechentrend-kayu.de/",
  },
  // {
  //   id: 2,
  //   imgUrl: portfolioImg04,
  //   category: "App",
  //   tag: "Real Project",
  //   title: "ResoNex",
  //   description:
  //     "A Full-Stack task management application. ResoNex is designed to simplify task management by providing a user-friendly interface for creating, deleting, and sorting tasks. It calculates the percentage of tasks completed and ensures a smooth task management experience.",
  //   technologies: ["React", "Tailwindcss", "Node.js", "Express.js", "MongoDB"],
  //   githubUrl: "https://github.com/walid1921/ResoNex.git",
  //   liveUrl: "https://reso-nex.vercel.app/",
  // },
  {
    id: 2,
    imgUrl: portfolioImg13,
    category: "App",
    tag: "Real Project",
    title: "GroomGrid",
    description:
      "Its an Internal task management Application to manage everything in the Barbershop : bookings,  clients (check clients as they arrive)",
    technologies: [
      "React",
      "React Query",
      "Typescript",
      "Supabase",
      "Tailwindcss",
      "Zod",
    ],
    githubUrl: "https://github.com/walid1921/GroomGrid.git",
    liveUrl: "https://www.groomgrid.de",
  },
  {
    id: 3,
    imgUrl: portfolioImg04,
    category: "App",
    tag: "Side Project",
    title: "ResoNex",
    description:
      "A Full-Stack task management application. ResoNex is designed to simplify task management by providing a user-friendly interface for creating, deleting, and sorting tasks. It calculates the percentage of tasks completed and ensures a smooth task management experience.",
    technologies: ["React", "Tailwindcss", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/walid1921/ResoNex.git",
    liveUrl: "https://reso-nex.vercel.app/",
  },
  {
    id: 4,
    imgUrl: portfolioImg09,
    category: "App",
    tag: "Side Project",
    title: "iMovie App",
    description:
      "A Movie App with API integration. It lets users search, save and rate their favorites movies.",
    technologies: ["React", "CSS"],
    githubUrl: "https://github.com/walid1921/iMovie.git",
    liveUrl: "https://imovie-walid.netlify.app/",
  },
  {
    id: 5,
    imgUrl: portfolioImg02,
    category: "Landing Page",
    tag: "Side Project",
    title: "Swipe",
    description:
      "A Responsive landing page using HTML and SASS, demonstrating proficiency in cross-device compatibility. The result is a polished, user-friendly interface that adapts seamlessly to various screen sizes.",
    technologies: ["HTML", "SASS"],
    githubUrl: "https://github.com/walid1921/Swipe.git",
    liveUrl: "https://swipe-walid.netlify.app/",
  },
  // {
  //   id: 6,
  //   imgUrl: portfolioImg03,
  //   category: "App",
  //   tag: "Side Project",
  //   title: "My Travel List",
  //   description:
  //     "A Full-Stack travel planning application. It's designed to simplify trip planning by providing a user-friendly interface for creating, deleting, and sorting items. It calculates the percentage of items packed and ensures a smooth travel preparation experience.",
  //   technologies: ["React", "CSS", "Node.js", "Express.js", "MongoDB"],
  //   githubUrl: "https://github.com/walid1921/My-Travel-List.git",
  //   liveUrl: "https://my-travellist.netlify.app/",
  // },
  {
    id: 6,
    imgUrl: portfolioImg08,
    category: "App",
    tag: "Side Project",

    title: "CookSaver",
    description:
      "A Recipe app with API integration with robust handling of loading and error states. It empowers users to effortlessly search and view recipes, contribute their own creations, and bookmark their favorites. The app boasts a user-friendly interface tailored for food enthusiasts!",
    technologies: ["React", "Tailwindcss"],
    githubUrl: "https://github.com/walid1921/CookSaver.git",
    liveUrl: "https://cook-saver-walid.netlify.app/",
  },

  {
    id: 7,
    imgUrl: portfolioImg07,
    category: "App",
    tag: "Side Project",
    title: "Mapty App",
    description:
      "Fitness Tracking Web App Created with HTML, CSS, and Vanilla JAVASCRIPT. This app helps users easily keep track of their workouts and organizing their fitness routine. It smoothly loads maps from Leaflet api to show workout routes. It also uses location information for accurate tracking of runs and bike rides.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/walid1921/Mapty-App.git",
    liveUrl: "https://mapty-walid.netlify.app/",
  },
  // {
  //   id: 8,
  //   imgUrl: portfolioImg05,
  //   category: "App",
  //   tag: "Side Project",
  //   title: "Bankist",
  //   description:
  //     "A dynamic banking application using HTML, SASS, and Vanilla JAVASCRIPT. This user-friendly platform enables secure login, hassle-free money transfers between users, loan requests from the bank, and smooth account closure. Additionally, a timed logout feature enhances security. Explore this intuitive banking solution, showcasing the power of modern web technologies. (Account 1: (owner: js, pin: 1111) / Account 2: (owner: jd, pin: 2222)) ",
  //   technologies: ["HTML", "SASS", "JavaScript"],
  //   githubUrl: "https://github.com/walid1921/Bank-web.git",
  //   liveUrl: "https://bankist-walid.netlify.app/",
  // },
];

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

//! Online Courses

type EducationDataProps = {
  id: number;
  category: string;
  colorful: boolean;
  content: {
    title: string;
    subtitle?: string;
    linkUrl?: string;
    certificationPdf?: string;
    status?: string;
  }[];
};

export const EducationData: EducationDataProps[] = [
  {
    id: 1,
    category: "Certifications",
    colorful: true,
    content: [
      {
        title: "Web & App Development Bootcamp",
        subtitle: "(2024 - WBS coding school - Berlin)",
        certificationPdf: "/wbsCertificate.pdf",
        status: "completed",
      },
      {
        title: "B2 German Certificate",
        subtitle: "(2024 - Paritätisches Bildungswerk - Bremen)",
        status: "completed",
      },
      {
        title: "Master : Environmental Process Engineering",
        subtitle: "(2021)",
        status: "completed",
      },
      {
        title: "Bachelor : Process Engineering",
        subtitle: "(2018)",
        status: "completed",
      },
    ],
  },
  {
    id: 2,
    category: "Online Courses",
    colorful: false,
    content: [
      {
        title: "The Web Developer BootCamp 2022",
        status: "completed",
        subtitle: "(64 total hours)",
        certificationPdf:
          "https://www.udemy.com/certificate/UC-62196ef4-3625-40ea-b910-2e4685896e40",
        linkUrl: "https://www.udemy.com/course/the-web-developer-bootcamp/",
      },
      {
        title: "Advances CSS and Sass",
        status: "completed",
        subtitle: "(28 total hours)",
        certificationPdf:
          "https://www.udemy.com/certificate/UC-d5ff2f1a-21db-46d9-bdb8-ae6cc61e5282/",
        linkUrl: "https://www.udemy.com/course/advanced-css-and-sass/",
      },
      {
        title: "The Complete JavaScript Course 2023: From Zero to Expert!",
        status: "completed",
        subtitle: "(69 total hours)",
        certificationPdf:
          "https://www.udemy.com/certificate/UC-cd978779-734d-4368-bc59-169c6a0f7e71",
        linkUrl: "https://www.udemy.com/course/the-complete-javascript-course/",
      },
      {
        title: "The HTML & CSS Bootcamp 2023 Edition",
        status: "completed",
        subtitle: "(37 total hours)",
        certificationPdf:
          "https://www.udemy.com/certificate/UC-f617e13e-86b4-498e-a389-7a3e5c92d246",
        linkUrl: "https://www.udemy.com/course/html-and-css-bootcamp/",
      },
      {
        title: "The Ultimate React Course: React, Next.js, Redux & More",
        status: "studying",
        subtitle: "(84 total hours)",
        certificationPdf: "",
        linkUrl: "https://www.udemy.com/course/the-ultimate-react-course/",
      },
    ],
  },
  {
    id: 3,
    category: "Soft Skills",
    colorful: false,
    content: [
      {
        title: "Languages : English - German - Arabic - French",
      },
      {
        title: "Design - Picture & Video Editing - Content Creation",
      },
    ],
  },
];

// Freelance Page

export const cardData = [
  {
    title: "Professional Grade Disinfectant",
    description:
      "Reduce cleaning time by about 25% while ensuring a spotless, disinfected environment.",
    longDescription:
      "lLorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem facilis, eveniet culpa veniam voluptas accusantium expedita tenetur fugiat provident magnam",
  },
  {
    title: "Healthy Teams And Social Distance",
    description:
      "Our experts thoroughly trained and use proprietary cleaning and disinfecting systems.",
    longDescription:
      "lLorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem facilis, eveniet culpa veniam voluptas accusantium expedita tenetur fugiat provident magnam",
  },
  {
    title: "Sterilized & Disinfected Cleaning Tools",
    description:
      "We'll familiarize ourselves with your facility and then create a customized cleaning.",
    longDescription:
      "lLorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem facilis, eveniet culpa veniam voluptas accusantium expedita tenetur fugiat provident magnam",
  },
  {
    title: "100% Satisfaction Guarantee",
    description:
      "We offers a wide variety of services that can customized to fit your environment.",
    longDescription:
      "lLorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem facilis, eveniet culpa veniam voluptas accusantium expedita tenetur fugiat provident magnam",
  },
];

//  pricing table

// export const pricingData = [
//   {
//     id: 1,
//     title: "Monthly",
//     description: "A plan that scales with your rapidly growing business.",
//     price: "29€",
//     billingCycle: "/month",
//     features: [
//       { text: "Full Design And Development", included: true },
//       { text: "Lifetime Hosting Included", included: true },
//       { text: "100€ fee Per Page After 5", included: true },
//       { text: "1-hour, dedicated support response time", included: true },
//       { text: "Unlimited Edits", included: true },
//       { text: "Lifetime Updates", included: true },
//       { text: "24/7 support response time", included: true },
//     ],
//     popular: true,
//     buttonVariant: "default",
//     hasGradientStyle: true,
//   },
//   {
//     id: 2,
//     title: "Lump Sum",
//     description: "A one-time payment plan for your long-term needs.",
//     price: "999€",
//     billingCycle: "/one-time",
//     features: [
//       { text: "Full Design And Development", included: true },
//       { text: "25€/mo Hosting", included: true },
//       { text: "100€ fee Per Page After 5", included: true },
//       { text: "Dedicated Support for 1 Year", included: true },
//       { text: "Unlimited Edits for 1 Year", included: true },
//       { text: "Lifetime Updates", included: true },
//       { text: "24/7 support response time", included: false },
//     ],
//     popular: false,
//     buttonVariant: "secondary",
//     hasGradientStyle: false,
//   },
// ];

export const pricingData = [
  {
    id: 1,
    title: "Starter Plan",
    description:
      "Perfect for small businesses looking to establish an online presence.",
    price: "49€",
    billingCycle: "/month",
    features: [
      { text: "Custom Website Design (up to 5 pages)", included: true },
      { text: "Managed Hosting Included", included: true },
      { text: "100€ Per Additional Page", included: true },
      { text: "2-hour Monthly Support", included: true },
      { text: "Basic SEO Optimization", included: true },
      { text: "1 Social Media Integration", included: true },
      { text: "Monthly Website Analytics Report", included: true },
    ],
    popular: false,
   
    hasGradientStyle: false,
  },
  {
    id: 2,
    title: "Growth Plan",
    description: "Ideal for growing businesses with advanced needs.",
    price: "129€",
    billingCycle: "/month",
    features: [
      { text: "Custom Website Design (up to 10 pages)", included: true },
      { text: "Lifetime Hosting Included", included: true },
      { text: "50€ Per Additional Page", included: true },
      { text: "4-hour Monthly Support", included: true },
      { text: "Advanced SEO Optimization", included: true },
      { text: "Social Media Integration (up to 3 platforms)", included: true },
      { text: "Weekly Website Analytics Report", included: true },
    ],
    popular: true,
    
    hasGradientStyle: true,
  },
  {
    id: 3,
    title: "Enterprise Plan",
    description: "Comprehensive services for established businesses.",
    price: "1,499€",
    billingCycle: "/one-time",
    features: [
      { text: "Full Design And Development", included: true },
      { text: "25€/mo Hosting After 1 Year", included: true },
      { text: "Unlimited Pages", included: true },
      { text: "Dedicated Support for 1 Year", included: true },
      { text: "Unlimited Edits for 1 Year", included: true },
      { text: "Lifetime Updates", included: true },
      { text: "24/7 Priority Support", included: true },
    ],
    popular: false,
    hasGradientStyle: false,
  },
];


// Swiper data

export const swiperData = [
  {
    id: 1,
    imgUrl: "/portfolio1.png",
    category: "Landing Page",
  },
  {
    id: 2,
    imgUrl: "/portfolio13.jpeg",
    category: "App",
  },
  {
    id: 3,
    imgUrl: "/portfolio4.png",
    category: "Real Project",
  },
  {
    id: 4,
    imgUrl: "/portfolio8.png",
    category: "Side Project",
  },
];


// footer data

// Navigation Links
export const navigationLinks = [
  { id: "1", title: "About", href: "freelance/about" },
  { id: "2", title: "Services", href: "freelance/services" },
  { id: "3", title: "Pricing", href: "freelance/pricing" },
  { id: "4", title: "Contact", href: "freelance/contact" },
];

// Footer Links
export const footerLinks = [
  { id: "1", title: "Terms & Conditions", href: "freelance/terms&conditions" },
  { id: "2", title: "Privacy Policy", href: "freelance/privacy" },
  { id: "3", title: "Contact", href: "freelance/contact" },
];
