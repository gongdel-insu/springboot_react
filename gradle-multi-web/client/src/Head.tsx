import * as React from 'react';
import './css/base.css';
import './css/main.css';
import './css/vendor.css';
import './favicon.png';
class Head extends React.Component {
  render() {
    return (
      <div>
        {}
        <meta charSet="utf-8" />
        <title>Kards</title>
        <meta name="description" content={""} />
        <meta name="author" content={""} />
        {}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      {/*  {}
        <link rel="stylesheet" href="css/base.css" />
        <link rel="stylesheet" href="css/main.css" />
        <link rel="stylesheet" href="css/vendor.css" />
        {}
        {}
        <link rel="icon" type="image/png" href="favicon.png" />*/}
      </div>
    );
  }
}

export default Head;
