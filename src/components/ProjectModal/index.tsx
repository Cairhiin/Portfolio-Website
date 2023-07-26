import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../../types";
import "./index.css";

interface Props {
  image: string;
  title: string;
  children: ReactNode;
  links: Link[];
  isShowing: boolean;
}

export default function CardModal({
  image,
  title,
  children,
  links,
  isShowing,
}: Props): JSX.Element {
  return (
    <div className={isShowing ? "card-modal active" : "card-modal"}>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <div className="card-modal-content">{children}</div>
      <div className="card-modal-links">
        {links.map(
          ({ url, icon }: Link): JSX.Element => (
            <a href={url}>
              <FontAwesomeIcon icon={icon} />
            </a>
          )
        )}
      </div>
    </div>
  );
}
