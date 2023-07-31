import { faDatabase, faFile } from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faDev,
  faFigma,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import type { CardListData, ProjectsData } from "../types";
import DungeonAndCats from "../assets/dungeonAndCats.png";
import Reimari from "../assets/reimari.png";
import Bookrater from "../assets/bookrater.png";
import Gloomhaven from "../assets/gloomhaven.png";
import AnimatedBorder from "../assets/animatedBorderComponent.png";
import CharCreator from "../assets/dndCharCreator.png";

export const projectsData: ProjectsData[] = [
  {
    id: 1,
    name: "Dungeon and Cats",
    content:
      "A topdown RPG roguelike made in C++ with SDL2. The game features a light weight entity component system.",
    img: DungeonAndCats,
    links: [
      {
        url: "https://version.aalto.fi/gitlab/vandef2/dungeon-and-cats",
        icon: faGitlab,
      },
    ],
    tech: ["SDL2", "SDL Image", "SDL Mixer", "SDL TTF"],
  },
  {
    id: 2,
    name: "Animated Border Component",
    content: "A React HOC to add an animated border to a card component.",
    img: AnimatedBorder,
    links: [
      {
        url: "https://github.com/Cairhiin/Animated-Border",
        icon: faGithub,
      },
    ],
    tech: ["React", "TypeScript"],
  },

  {
    id: 3,
    name: "Bookrater",
    content:
      "A MEAN stack project for rating books. Browse through books, rate them and see how others rate the books you enjoy.",
    img: Bookrater,
    links: [
      {
        url: "https://github.com/Cairhiin/Full-stack-MEAN-course/tree/main/fullstack-MEAN-project",
        icon: faGithub,
      },
      {
        url: "https://bookrater.onrender.com/",
        icon: faFile,
      },
      {
        url: "https://www.figma.com/file/Gkwm5lgahuRNLaLP99gC9d/Bookrater?node-id=51822%3A4901&t=fGpC3XpZb1yst3j0-1",
        icon: faFigma,
      },
    ],
    tech: ["ExpressJS", "Mongoose", "Angular", "TypeScript", "Sass"],
  },
  {
    id: 4,
    name: "Gloomhaven",
    content:
      "A Flutter UI design project to create a website for an offline activity.",
    img: Gloomhaven,
    links: [
      {
        url: "https://github.com/Cairhiin/gloomhaven",
        icon: faGithub,
      },
      {
        url: "https://www.figma.com/file/gdLJWY1u3gSzvL13QJ5k5h/Gloomhaven-UI-project?node-id=51396%3A5246&t=fvSw0TaZqEFVgdni-1",
        icon: faFigma,
      },
    ],
    tech: ["Dart", "Flutter"],
  },
  {
    id: 5,
    name: "Reimari",
    content:
      "A wordpress website for a local newspaper that is distributed weekly.",
    img: Reimari,
    links: [
      {
        url: "https://reimari.fi",
        icon: faFile,
      },
    ],
    tech: ["PHP", "Wordpress", "JavaScript"],
  },
  {
    id: 6,
    name: "Dungeons and Dragons Character Creator",
    content: "Create, save and manage D&D 5e characters.",
    img: CharCreator,
    links: [
      {
        url: "https://github.com/Cairhiin/DnD-Character-Creator",
        icon: faGithub,
      },
    ],
    tech: ["NextJS", "Mongoose", "ExpressJS", "Passport"],
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
