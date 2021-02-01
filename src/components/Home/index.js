import React from "react";
import PropTypes from "prop-types";
import "bulma/css/bulma.css";
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
    return (
      <ul className="has-text-primary-light">
        <li>
          - Site Register tab is a placeholder and is not functional at the
          moment, pages made with this app will eventually be listed here
        </li>
        <li>- Plan to add inventory control system for web page admins</li>
        <li>
          - This application is a project created for learning and testing
          purposes and should not be treated as a site to conduct legitimate
          business
        </li>
      </ul>
    );
  };

  render() {
    return (
      <div className="container box has-background-dark">
        <div id="header" className="section">
          <h1 className="container title is-1  has-text-primary-light">
            {this.heading}
          </h1>
          {this.createSiteList()}
        </div>
      </div>
    );
  }
}
