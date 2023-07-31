import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./index.css";

export default function Nav(): JSX.Element {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrollPosition > 60 ? "nav backdrop" : "nav"}>
      <motion.div className="progress-bar" style={{ scaleX: scaleX }} />
      <h1>
        <span>{"<h1>"}</span>Frank van de Voorde<span>{"</h1>"}</span>
      </h1>
      <ul>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
