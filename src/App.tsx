import CardList from "./components/CardList";
import Hero from "./components/Hero";
import Nav from "./components/nav";
import ProjectsGrid from "./components/ProjectsGrid";
import "./App.css";
import Accordion from "./components/Accordion";

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
          <ProjectsGrid />
        </section>
        <section id="contact">
          <Accordion title="Projects">
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              non!
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              non!
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              non!
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              non!
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              non!
            </div>
          </Accordion>
        </section>
        <section id="contact">
          Aspernatur ad maxime placeat porro ipsam beatae. Provident
          voluptatibus veniam ad, dignissimos alias fuga ducimus tenetur illum
          hic sequi doloremque sint eius esse reiciendis ullam? Amet accusamus
          illo sequi totam molestiae debitis facere aliquid excepturi odit
          dicta! Voluptatem voluptates quos, non voluptatibus tenetur animi unde
          vero maiores nam consectetur numquam dolorem, repellat, debitis culpa
          optio. Alias dignissimos quaerat architecto aliquam amet deserunt
          suscipit. Voluptatem dicta voluptatum quas ea at voluptate,
          voluptatibus provident vero ipsa saepe! Quas beatae placeat nobis ab
          iste similique inventore impedit dicta.
        </section>
        <section id="contact">
          Aspernatur ad maxime placeat porro ipsam beatae. Provident
          voluptatibus veniam ad, dignissimos alias fuga ducimus tenetur illum
          hic sequi doloremque sint eius esse reiciendis ullam? Amet accusamus
          illo sequi totam molestiae debitis facere aliquid excepturi odit
          dicta! Voluptatem voluptates quos, non voluptatibus tenetur animi unde
          vero maiores nam consectetur numquam dolorem, repellat, debitis culpa
          optio. Alias dignissimos quaerat architecto aliquam amet deserunt
          suscipit. Voluptatem dicta voluptatum quas ea at voluptate,
          voluptatibus provident vero ipsa saepe! Quas beatae placeat nobis ab
          iste similique inventore impedit dicta.
        </section>
        <section id="contact">
          Aspernatur ad maxime placeat porro ipsam beatae. Provident
          voluptatibus veniam ad, dignissimos alias fuga ducimus tenetur illum
          hic sequi doloremque sint eius esse reiciendis ullam? Amet accusamus
          illo sequi totam molestiae debitis facere aliquid excepturi odit
          dicta! Voluptatem voluptates quos, non voluptatibus tenetur animi unde
          vero maiores nam consectetur numquam dolorem, repellat, debitis culpa
          optio. Alias dignissimos quaerat architecto aliquam amet deserunt
          suscipit. Voluptatem dicta voluptatum quas ea at voluptate,
          voluptatibus provident vero ipsa saepe! Quas beatae placeat nobis ab
          iste similique inventore impedit dicta.
        </section>
        <section id="contact">
          Aspernatur ad maxime placeat porro ipsam beatae. Provident
          voluptatibus veniam ad, dignissimos alias fuga ducimus tenetur illum
          hic sequi doloremque sint eius esse reiciendis ullam? Amet accusamus
          illo sequi totam molestiae debitis facere aliquid excepturi odit
          dicta! Voluptatem voluptates quos, non voluptatibus tenetur animi unde
          vero maiores nam consectetur numquam dolorem, repellat, debitis culpa
          optio. Alias dignissimos quaerat architecto aliquam amet deserunt
          suscipit. Voluptatem dicta voluptatum quas ea at voluptate,
          voluptatibus provident vero ipsa saepe! Quas beatae placeat nobis ab
          iste similique inventore impedit dicta.
        </section>
        <section id="contact">
          Aspernatur ad maxime placeat porro ipsam beatae. Provident
          voluptatibus veniam ad, dignissimos alias fuga ducimus tenetur illum
          hic sequi doloremque sint eius esse reiciendis ullam? Amet accusamus
          illo sequi totam molestiae debitis facere aliquid excepturi odit
          dicta! Voluptatem voluptates quos, non voluptatibus tenetur animi unde
          vero maiores nam consectetur numquam dolorem, repellat, debitis culpa
          optio. Alias dignissimos quaerat architecto aliquam amet deserunt
          suscipit. Voluptatem dicta voluptatum quas ea at voluptate,
          voluptatibus provident vero ipsa saepe! Quas beatae placeat nobis ab
          iste similique inventore impedit dicta.
        </section>
        <section id="contact">
          Aspernatur ad maxime placeat porro ipsam beatae. Provident
          voluptatibus veniam ad, dignissimos alias fuga ducimus tenetur illum
          hic sequi doloremque sint eius esse reiciendis ullam? Amet accusamus
          illo sequi totam molestiae debitis facere aliquid excepturi odit
          dicta! Voluptatem voluptates quos, non voluptatibus tenetur animi unde
          vero maiores nam consectetur numquam dolorem, repellat, debitis culpa
          optio. Alias dignissimos quaerat architecto aliquam amet deserunt
          suscipit. Voluptatem dicta voluptatum quas ea at voluptate,
          voluptatibus provident vero ipsa saepe! Quas beatae placeat nobis ab
          iste similique inventore impedit dicta.
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
