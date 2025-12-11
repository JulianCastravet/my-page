import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  azure,
  invision,
  postman,
  bookstore,
  stewart,
  brizy,
  alvysLogo,
  alvys,
  brizyLogo,
  julian,
  angular,
  dcc,
  mars
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Rest API",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Agile Development",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "InVision",
    icon: invision,
  },

  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Non Web Developement Related",
    company_name: "Different Companies",
    icon: dcc,
    iconBg: "#333333",
    date: "up to Feb 2021",
  },
  {
    title: "Junior Front-End Developer",
    company_name: "Brizy",
    icon: brizyLogo,
    iconBg: "#333333",
    date: "Apr 2021 - Jun 2022",
  },
  {
    title: "Front-End Developer",
    company_name: "Alvys",
    icon: alvysLogo,
    iconBg: "#333333",
    date: "Jul 2022 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Alvys TMS",
    description:
      "A Trucking Management System(TMS) for the United States market.",
    tags: [
      {
        name: "angular",
        color: "#0ea5e9",
      },
      {
        name: "react",
        color: "#22c55e",
      },
      {
        name: "tailwind",
        color: "#f97316",
      },
    ],
    image: alvys,
    demo: "https://alvys.com/",
  },
  {
    id: "project-2",
    name: "Brizy",
    description: "A CMS and component library plugin for Wordpress users.",
    tags: [
      {
        name: "react",
        color: "#0ea5e9",
      },
      {
        name: "git",
        color: "#22c55e",
      },
      {
        name: "typescript",
        color: "#f97316",
      },
    ],
    image: brizy,
    demo: "https://www.brizy.io/",
  },
  {
    id: "project-3",
    name: "The Wings Academy",
    description:
      "An academy to train new personnel as crew members for airlines.",
    tags: [
      {
        name: "react",
        color: "#0ea5e9",
      },
      {
        name: "scss",
        color: "#f97316",
      },
    ],
    image: stewart,
    repo: "https://github.com/JulianCastravet/theWingsAcademy",
    demo: "https://juliancastravet.github.io/the-wings-academy/",
  },
  {
    id: "project-4",
    name: "Julian",
    description: "My personal page.",
    tags: [
      {
        name: "react",
        color: "#0ea5e9",
      },
      {
        name: "Typescipt",
        color: "#22c55e",
      },
      {
        name: "tailwind",
        color: "#f97316",
      },
    ],
    image: julian,
    repo: "https://github.com/JulianCastravet/my-page",
    demo: "https://juliancastravet.github.io/my-page/",
  },
  {
    id: "project-5",
    name: "BookStore",
    description: "A bookstore created with Angular and SCSS.",
    tags: [
      {
        name: "angular",
        color: "#0ea5e9",
      },
      {
        name: "TypeScript",
        color: "#22c55e",
      },
      {
        name: "tailwind",
        color: "#f97316",
      },
    ],
    image: bookstore,
    repo: "https://github.com/JulianCastravet/BookStore",
    demo: "https://github.com/JulianCastravet/BookStore",
  },
    {
    id: "project-6",
    name: "Mars Hospital",
    description: "A hospital for patients on planet Mars",
    tags: [
      {
        name: "ReactJS",
        color: "#0ea5e9",
      },
      {
        name: "TypeScript",
        color: "#22c55e",
      },
      {
        name: "tailwind",
        color: "#f97316",
      },
    ],
    image: mars,
    repo: "https://github.com/JulianCastravet/hospital",
    demo: "https://hospital-puce-kappa.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
