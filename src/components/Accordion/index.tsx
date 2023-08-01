import { Children, ReactNode, useState } from "react";
import "./index.css";

interface Props {
  title: string;
  children: ReactNode;
}
const Accordion: ({ children, title }: Props) => JSX.Element = ({
  children,
  title,
}) => {
  const panels = Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div className="accordion">
      {panels.map(
        (panel: ReactNode, index: number): JSX.Element => (
          <div className={activeIndex === index ? "panel" : "panel active"}>
            <h3 id={`panel${index}__heading`}>
              <button
                type="button"
                aria-expanded="true"
                className="accordion__trigger"
                aria-controls={`panel${index}__content`}
              >
                <span className="accordion__title">
                  {title}
                  <span className="accordion__icon"></span>
                </span>
              </button>
            </h3>
            <div
              id={`panel${index}__content`}
              aria-labelledby={`panel${index}__heading`}
              aria-hidden="false"
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
