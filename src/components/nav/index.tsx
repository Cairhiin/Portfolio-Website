import { useEffect, useState } from "react";
import "./index.css";

export default function Nav(): JSX.Element {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);
    console.log(scrollPosition);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrollPosition > 60 ? "nav backdrop" : "nav"}>
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
