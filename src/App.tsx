import CardList from "./components/CardList";
import Hero from "./components/Hero";
import Nav from "./components/nav";
import ProjectsGrid from "./components/ProjectsGrid";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <section id="skills">
          <h2>Skills</h2>
          <div className="flex-container">
            <CardList />
          </div>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ProjectsGrid />
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
