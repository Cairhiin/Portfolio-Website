import { useState } from "react";
import { projectsData } from "../../constants";
import "./index.css";
import { ProjectsData } from "../../types";

export default function ProjectsGrid(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const moveToNextSlide: () => void = () => {
    if (activeIndex < 2) {
      setActiveIndex((activeIndex) => activeIndex + 1);
    }
    console.log(activeIndex);
  };

  const moveToPrevSlide: () => void = () => {
    if (activeIndex > 0) {
      setActiveIndex((activeIndex) => activeIndex - 1);
    }
    console.log(activeIndex);
  };

  return (
    <div className="projects-wrapper">
      <div className="projects-scroller">
        <div
          className={activeIndex === 1 ? "projects active" : "projects"}
          id="group-1"
        >
          {projectsData.map(
            (project: ProjectsData): JSX.Element => (
              <div className="project">
                <div className="project-image">
                  <img src="./src/assets/hero-bg.jpg" />
                </div>
                <div className="project-header"></div>
                <div className="project-content"></div>
                <div className="project-links"></div>
              </div>
            )
          )}
          <a
            className="next"
            href="#group-2"
            aria-label="next"
            onClick={moveToNextSlide}
          >
            <svg>
              <use href="#next"></use>
            </svg>
          </a>
        </div>
        <div
          className={activeIndex === 2 ? "projects active" : "projects"}
          id="group-2"
        >
          <a
            className="previous"
            href="#group-1"
            aria-label="previous"
            onClick={moveToPrevSlide}
          >
            <svg>
              <use href="#previous"></use>
            </svg>
          </a>
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

          <div className="projects-navigation">
            <div></div>
            <div></div>
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
    </div>
  );
}
