import React from "react";

export class Home extends React.Component {
  heading = "Welcome!";

  render() {
    return (
      <div className="container box has-background-dark">
        <div id="header" className="section">
          <h1 className="container title is-1  has-text-primary-light">
            {this.heading}
          </h1>
        </div>
      </div>
    );
  }
}
