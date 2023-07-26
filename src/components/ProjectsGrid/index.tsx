import { useRef, useState } from "react";
import { projectsData } from "../../constants";
import { Link, ProjectsData } from "../../types";
import ProjectModal from "../ProjectModal";
import "./index.css";

export default function ProjectsGrid(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const projectsSlide1 = useRef<HTMLDivElement>(null);
  const projectsSlide2 = useRef<HTMLDivElement>(null);

  const moveToNextSlide: () => void = () => {
    if (activeIndex < 2) {
      setActiveIndex((activeIndex) => activeIndex + 1);
    }
    projectsSlide2.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const moveToPrevSlide: () => void = () => {
    if (activeIndex > 0) {
      setActiveIndex((activeIndex) => activeIndex - 1);
    }
    projectsSlide1.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const Project: ({
    image,
    name,
    content,
    links,
  }: {
    image: string;
    name: string;
    content: string;
    links: Link[];
  }) => JSX.Element = ({ image, name, content, links }) => {
    const [isShowing, setIsShowing] = useState<boolean>(false);
    return (
      <div
        className="project"
        onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => setIsShowing(false)}
      >
        <div className="project-image">
          <img src="./src/assets/hero-bg.jpg" />
        </div>
        <ProjectModal
          image={image}
          title={name}
          links={links}
          isShowing={isShowing}
        >
          {content}
        </ProjectModal>
      </div>
    );
  };

  return (
    <>
      <div className="projects-wrapper">
        <div className="projects-scroller">
          <div className="projects" ref={projectsSlide1}>
            {projectsData.map(
              (project: ProjectsData): JSX.Element => (
                <Project
                  image={project.img}
                  content={project.content}
                  title={project.name}
                  links={project.links}
                />
              )
            )}
            <div
              className={activeIndex === 1 ? "next flex" : "next"}
              aria-label="next"
              onClick={moveToNextSlide}
            >
              <svg>
                <use href="#next"></use>
              </svg>
            </div>
            <div
              className={activeIndex === 2 ? "previous flex" : "previous"}
              aria-label="previous"
              onClick={moveToPrevSlide}
            >
              <svg>
                <use href="#previous"></use>
              </svg>
            </div>
          </div>
          <div className="projects" ref={projectsSlide2}>
            <div className="project">
              <div className="project-image">
                <img src="./src/assets/hero-bg.jpg" />
              </div>
              <div className="project-header"></div>
              <div className="project-content"></div>
              <div className="project-links"></div>
            </div>
            <div className="project">
              <div className="project-image">
                <img src="./src/assets/hero-bg.jpg" />
              </div>
              <div className="project-header"></div>
              <div className="project-content"></div>
              <div className="project-links"></div>
            </div>
            <div className="project">
              <div className="project-image">
                <img src="./src/assets/hero-bg.jpg" />
              </div>
              <div className="project-header"></div>
              <div className="project-content"></div>
              <div className="project-links"></div>
            </div>
            <div className="project">
              <div className="project-image">
                <img src="./src/assets/hero-bg.jpg" />
              </div>
              <div className="project-header"></div>
              <div className="project-content"></div>
              <div className="project-links"></div>
            </div>
          </div>
          <div className="projects-navigation">
            <div className={activeIndex === 1 ? "active" : ""}></div>
            <div className={activeIndex === 2 ? "active" : ""}></div>
          </div>
        </div>
      </div>
      <svg>
        <symbol id="next" viewBox="0 0 256 512">
          <path
            fill="white"
            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
          />
        </symbol>

        <symbol id="previous" viewBox="0 0 256 512">
          <path
            fill="white"
            d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
          />
        </symbol>
      </svg>
    </>
  );
}
