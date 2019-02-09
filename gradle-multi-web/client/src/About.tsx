import * as React from 'react';
import AboutCol from "./AboutCol";
import AboutContent from "./AboutContent";
import AboutSkill from "./AboutSkill";

class About extends React.Component {
  render() {
    return (
      <section id="about">
        <div className="row section-intro">
          <AboutCol />
        </div>{" "}
        {}
        <div className="row about-content">
          <AboutContent />
          <AboutSkill />
        </div>
        <div className="row button-section">
          <div className="col-twelve">
            <a
              href="#contact"
              title="Hire Me"
              className="button stroke smoothscroll"
            >
              Hire Me
            </a>
            <a href="#" title="Download CV" className="button button-primary">
              Download CV
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
