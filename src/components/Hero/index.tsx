import { motion, useReducedMotion } from "framer-motion";
import "./index.css";

export default function Hero(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const scale = shouldReduceMotion ? 1 : 2;
  return (
    <div className="hero">
      <div className="hero-layout">
        <h2 className="hero-title">
          I am{" "}
          <motion.div
            className="hero-title-highlight"
            initial={{ scale: scale }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span>{"<span>"}</span>Frank<span>{"</span>"}</span>
          </motion.div>
          , <br />a Web Developer.
        </h2>
        <div className="hero-content">
          <h3 className="decorated-header">About Me</h3>
          <div>
            <div className="hero-content-column">
              <p>
                Self taught web developer and programmer with a bachelor in
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
