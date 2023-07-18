import "./index.css";

export default function Hero(): JSX.Element {
  return (
    <div className="hero">
      <div className="hero-layout">
        <h2 className="hero-title">
          I am{" "}
          <div className="hero-title-highlight">
            <span>{"<span>"}</span>Frank<span>{"</span>"}</span>
          </div>
          , <br />a Web Developer.
        </h2>
        <div className="hero-content">
          <h3>About Me</h3>
          <div>
            <div className="hero-content-column">
              <p>
                A self taught web developer and programmer with a bachelor in
                Business Administration, exploring both frontend and full-stack
                development.
              </p>

              <p>
                Coding is my passion and I aim to learn new things on a daily
                basis.
              </p>
            </div>
            <div className="hero-content-column">
              <p>
                Years of experience designing, developing and updating a
                Wordpress site for a local newspaper.
              </p>

              <p>
                Check out my projects, skills, GitHub, GitLab, or drop me a
                line. I am available for freelance opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
