import * as React from 'react';
import AboutSkillBars from "./AboutSkillBars";

class AboutSkill extends React.Component {
  render() {
    return (
      <div className="col-six tab-full">
        <h3>Skills</h3>
        <p>
          Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in
          magna sint minim officia consectetur nisi commodo ea magna pariatur
          nisi cillum.
        </p>
        <ul className="skill-bars">
          <AboutSkillBars />
          {}
        </ul>{" "}
        {}
      </div>
    );
  }
}

export default AboutSkill;
