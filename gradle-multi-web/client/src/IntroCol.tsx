import * as React from 'react';

class IntroCol extends React.Component {
  render() {
    return (
      <div className="col-twelve">
        <h5>Hello, World.</h5>
        <h1>I'm Juan Dela Cruz.</h1>
        <p className="intro-position">
          <span>Front-end Developer</span>
          <span>UI/UX Designer</span>
        </p>
        <a className="button stroke smoothscroll" href="#about" title={""}>
          More About Me
        </a>
      </div>
    );
  }
}

export default IntroCol;
