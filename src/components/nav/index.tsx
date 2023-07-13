import "./index.css";

export default function Nav(): JSX.Element {
  return (
    <nav className="nav">
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
