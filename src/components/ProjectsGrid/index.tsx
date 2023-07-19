import { projectsData } from "../../constants";
import type { ProjectsData } from "../../types";
import "./index.css";

export default function ProjectsGrid(): JSX.Element {
  return (
    <div className="projects">
      <div className="project">
        <div className="project-image"></div>
        <div className="project-header"></div>
        <div className="project-content"></div>
        <div className="project-links"></div>
      </div>
    </div>
  );
}
