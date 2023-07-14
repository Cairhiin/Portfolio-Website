import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

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
        <div className="card-title">{title}</div>
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
}
