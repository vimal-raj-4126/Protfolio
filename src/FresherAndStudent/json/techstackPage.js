import { FaReact, FaGitAlt, FaDocker, FaFigma } from "react-icons/fa";
import {  SiDjango, SiFlutter, SiPostgresql, SiMongodb } from "react-icons/si";
// import { SiTailwindcss, SiDjango, SiFlutter, SiPostgresql, SiMongodb, SiAdobeXd } from "react-icons/si";

const techstackPage = [
  {
    id: 1,
    category: "Frontend",
    icon: <FaReact />,
    tools: "React, Tailwind CSS",
  },
  {
    id: 2,
    category: "Backend",
    icon: <SiDjango />,
    tools: "Django, Django REST Framework",
  },
  {
    id: 3,
    category: "Mobile",
    icon: <SiFlutter />,
    tools: "Flutter",
  },
  {
    id: 4,
    category: "Database",
    icon: <SiPostgresql />,
    tools: "PostgreSQL, MongoDB",
  },
  {
    id: 5,
    category: "DevOps",
    icon: <FaGitAlt />,
    tools: "Git, Docker",
  },
  {
    id: 6,
    category: "Design",
    icon: <FaFigma />,
    tools: "Figma, Adobe XD",
  },
  {
    id: 7,
    category: "Docker",
    icon: <FaDocker />,
    tools: "Docker ,PostMan",
  },
  {
    id: 8,
    category: "Mongodb",
    icon: <SiMongodb />,
    tools: "Mongodb , Postman",
  },
];

export default techstackPage;
