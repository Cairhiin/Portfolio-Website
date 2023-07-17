import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import "./index.css";

interface Props {
  icon: IconProp;
  title: string;
  children: ReactNode;
}

export default function Card({ icon, title, children }: Props): JSX.Element {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
}
