import * as React from 'react';
import IntroCol from "./IntroCol";

class Intro extends React.Component {
  render() {
    return (
      <section id="intro">
        <div className="intro-overlay" />
        <div className="intro-content">
          <div className="row">
            <IntroCol />
          </div>
        </div>{" "}
        {}
        <ul className="intro-social">
          <li>
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-behance" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-dribbble" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram" />
            </a>
          </li>
        </ul>{" "}
        {}
      </section>
    );
  }
}

export default Intro;
