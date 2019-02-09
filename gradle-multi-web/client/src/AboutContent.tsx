import * as React from 'react';

class AboutContent extends React.Component {
  render() {
    return (
      <div className="col-six tab-full">
        <h3>Profile</h3>
        <p>
          Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in
          magna sint minim officia consectetur nisi commodo ea magna pariatur
          nisi cillum.
        </p>
        <ul className="info-list">
          <li>
            <strong>Fullname:</strong>
            <span>Juan Dela Cruz</span>
          </li>
          <li>
            <strong>Birth Date:</strong>
            <span>September 28, 1987</span>
          </li>
          <li>
            <strong>Job:</strong>
            <span>Freelancer, Frontend Developer</span>
          </li>
          <li>
            <strong>Website:</strong>
            <span>www.kardswebsite.com</span>
          </li>
          <li>
            <strong>Email:</strong>
            <span>me@kardswebsite.com</span>
          </li>
        </ul>{" "}
        {}
      </div>
    );
  }
}

export default AboutContent;
