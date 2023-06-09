import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  bl,
  gs,
  iut,
  efrei,
  uqac,
  carrent,
  jobit,
  tripguide,
  threejs,
  exquisitis,
  exquisitisvid,
  alkavid,
  umsivid,
  omdvid,
  statourvid,
  hiredvid
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "resume",
    title: "Resume"
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Unity",
    icon: web,
  },
  {
    title: "Unreal Engine",
    icon: mobile,
  },
  {
    title: "Game Design",
    icon: backend,
  },
  {
    title: "Software Engineering",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fullstack Web Development",
    company_name: "B&L Development - Intership (5 months)",
    icon: bl,
    iconBg: "#FFFFFF",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Web Development",
    company_name: "GS Dance Studio - Intership (2 months)",
    icon: gs,
    iconBg: "#FFF",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];

const educations = [
  {
    title: "Université du Québec à Chicoutimi",
    company_name: "Master's Degree in Computer Science (Video games)",
    icon: uqac,
    iconBg: "#6c8b1b",
    date: "Aug 2022 - Ongoing",
    points: [
      "Master's courses in computer science and mathematics",
      "Specialization in Video Games",
      "GPA : 3.83"
    ],
  },
  {
    title: "EFREI",
    company_name: "Engineer's degree in Information Technology (Imagery & Virtual Reality)",
    icon: efrei,
    iconBg: "#107dc2",
    date: "Aug 2020 - Ongoing",
    points: [
      "Engineering course focused on Computer Science and Software engineering",
      "Specialization in Image processing and Virtual Reality",
      "GPA : 4"
    ],
  },
  {
    title: "IUT de Paris",
    company_name: "2-year University Degree in Technology (Computer Science)",
    icon: iut,
    iconBg: "#8a1538",
    date: "Aug 2020 - Ongoing",
    points: [
      "Fundamentals of computer sciences and mathematics",
      "GPA : 3.7"
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Alka",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "unreal",
        color: "blue-text-gradient",
      },
      {
        name: "fps",
        color: "green-text-gradient",
      },
      {
        name: "multiplayer",
        color: "green-text-gradient",
      },
      {
        name: "C++",
        color: "pink-text-gradient",
      },
    ],
    video: alkavid,
    source_code_link: "https://github.com/",
  },
  {
    name: "Exquisitis",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "platformer",
        color: "green-text-gradient",
      },
      {
        name: "puzzle",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
    ],
    image: exquisitis,
    video: exquisitisvid,
    source_code_link: "https://github.com/",
  },
  {
    name: "One More Day",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "topdownshooter",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
    ],
    video: omdvid,
    source_code_link: "https://github.com/",
  },
  {
    name: "U.M.S.I.",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "towerdefense",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
    ],
    video: umsivid,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hired",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "gamejam",
        color: "green-text-gradient",
      },
      {
        name: "counterinfiltration",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
    ],
    video: hiredvid,
    source_code_link: "https://github.com/",
  },
  {
    name: "StartourVR",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "vr",
        color: "green-text-gradient",
      },
      {
        name: "oculus",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
    ],
    video: statourvid,
    source_code_link: "https://github.com/",
  }
];

export { services, technologies, experiences, educations, testimonials, projects };
