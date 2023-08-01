import { Children, ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./index.css";

interface Props {
  title: string;
  icon?: IconProp;
  children: ReactNode;
}
const Accordion: ({ children, title, icon }: Props) => JSX.Element = ({
  children,
  title,
  icon,
}) => {
  const panels = Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick: (index: number) => void = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="accordion">
      {panels.map(
        (panel: ReactNode, index: number): JSX.Element => (
          <div className={activeIndex === index ? "panel active" : "panel"}>
            <h3 id={`panel${index}__heading`}>
              <button
                type="button"
                aria-expanded={activeIndex === index}
                className="accordion__trigger"
                aria-controls={`panel${index}__content`}
                onClick={() => handleClick(index)}
              >
                <span className="accordion__title">{title}</span>
                <span className="accordion__icon">
                  {icon ? (
                    <FontAwesomeIcon icon={icon} />
                  ) : (
                    <FontAwesomeIcon icon={faLayerGroup} />
                  )}
                </span>
              </button>
            </h3>
            <div
              id={`panel${index}__content`}
              className="panel__content"
              aria-labelledby={`panel${index}__heading`}
              aria-hidden={activeIndex !== index}
              role="region"
            >
              {panel}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Accordion;
