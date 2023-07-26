import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faCss3, faDev, faGitlab } from "@fortawesome/free-brands-svg-icons";
import type { CardListData, ProjectsData } from "../types";

export const projectsData: ProjectsData[] = [
  {
    name: "Cats",
    img: "./src/assets/hero-bg.jpg",
    content: "A C++ and SDL game",
    links: [{ icon: faGitlab, url: "" }],
  },
  {
    name: "Cats",
    img: "./src/assets/hero-bg.jpg",
    content: "A C++ and SDL game",
    links: [{ icon: faGitlab, url: "" }],
  },
  {
    name: "Cats",
    img: "./src/assets/hero-bg.jpg",
    content: "A C++ and SDL game",
    links: [{ icon: faGitlab, url: "" }],
  },
  {
    name: "Cats",
    img: "./src/assets/hero-bg.jpg",
    content: "A C++ and SDL game",
    links: [{ icon: faGitlab, url: "" }],
  },
];

export const cardListData: CardListData = {
  backend: {
    icon: faDatabase,
    data: ["NodeJS", "ExpressJS", "Mongoose", "PHP", "Laravel", "MySQL"],
  },
  frontend: {
    icon: faCss3,
    data: [
      "React",
      "Angular",
      "HTML",
      "CSS",
      "Sass",
      "TypeScript",
      "NextJS",
      "TailwindCSS",
    ],
  },
  other: { icon: faDev, data: ["C++", "Figma", "WordPress"] },
};
