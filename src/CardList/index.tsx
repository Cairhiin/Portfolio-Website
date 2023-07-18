import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";
import Card from "../components/Card";
import "./index.css";
import { faCss3, faDev } from "@fortawesome/free-brands-svg-icons";

interface CardListData {
  backend: { icon: IconProp; data: Array<string> };
  frontend: { icon: IconProp; data: Array<string> };
  other: { icon: IconProp; data: Array<string> };
}

export default function CardList(): JSX.Element {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const cardListData: CardListData = {
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
  return (
    <div className="flex-container">
      {Object.keys(cardListData).map(
        (name: string): JSX.Element => (
          <Card
            title={name.charAt(0).toUpperCase() + name.slice(1)}
            icon={(cardListData as any)[name].icon}
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={list}
              transition={{ duration: 0.5 }}
            >
              {(cardListData as any)[name].data.map(
                (item: string, index: number): JSX.Element => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -100, filter: "blur(20px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 * index,
                    }}
                  >
                    {item}
                  </motion.li>
                )
              )}
            </motion.ul>
          </Card>
        )
      )}
    </div>
  );
}
