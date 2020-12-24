import React from "react";
import PropTypes from "prop-types";
export class Home extends React.Component {
  heading = "Welcome!";

  static propTypes = {
    setActiveLink: PropTypes.func,
    //createdSiteDbList
  };

  componentDidMount() {
    this.props.setActiveLink(window.location.href);
  }

  createSiteList = () => {
    return <li>Site created with Easy Commerce Creator</li>;
  };

  render() {
    return (
      <div className="container box has-background-dark">
        <div id="header" className="section">
          <h1 className="container title is-1  has-text-primary-light">
            {this.heading}
          </h1>
          <ul>{this.createSiteList()}</ul>
        </div>
      </div>
    );
  }
}
