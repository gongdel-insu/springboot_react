import * as React from 'react';

class AboutCol extends React.Component {
  render() {
    return (
      <div className="col-twelve">
        <h5>About</h5>
        <h1>Let me introduce myself.</h1>
        <div className="intro-info">
          <img src="images/profile-pic.jpg" alt="Profile Picture" />
          <p className="lead">
            Lorem ipsum Exercitation culpa qui dolor consequat exercitation
            fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure
            sunt id pariatur Duis laboris amet exercitation veniam labore
            consectetur ea id quis eiusmod.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutCol;
