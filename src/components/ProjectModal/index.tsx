import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../../types";
import "./index.css";

interface Props {
  image: string;
  title: string;
  children: ReactNode;
  links: Link[];
  data: { xPos: number; width: number };
  isShowing: boolean;
}

export default function CardModal({
  image,
  title,
  children,
  links,
  data,
  isShowing,
}: Props): JSX.Element {
  return (
    <div
      className={isShowing ? "card-modal active" : "card-modal"}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      aria-labelledby="dialog-label"
      aria-describedby="dialog-desc"
      style={
        {
          "--_xPos": `${data.xPos}px`,
          "--_width": `${data.width}px`,
        } as React.CSSProperties
      }
    >
      <img src={image} alt={title} />
      <div className="card-modal-main">
        <div className="card-modal-content" id="dialog-desc">
          <h3 id="dialog-label">{title}</h3>
          {children}
        </div>
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
    </div>
  );
}
