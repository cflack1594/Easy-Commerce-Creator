import React from "react";
import PropTypes from "prop-types";
import "bulma/css/bulma.css";
import logo from "images/easyCommerceLogo.png";
export class Nav extends React.Component {
  static propTypes = {
    goToPage: PropTypes.func,
  };

  links = ["Home", "Login", "Cart"];

  handleClick = (event) => {
    event.preventDefault();
    this.props.goToPage(event.target.id);
  };

  createNavBar = () =>
    this.links.map((link, index) => (
      <li key={index}>
        <a
          className="link is-info has-text-link-light"
          href="/{link}"
          id={link}
          onClick={(e) => this.handleClick(e)}
        >
          {link}
        </a>
      </li>
    ));

  render() {
    return (
      <section id="navSection" className="section">
        <div className="container level">
          <img src={logo} alt="logo"></img>
          <nav id="nav" className="level-item">
            {this.createNavBar()}
          </nav>
        </div>
      </section>
    );
  }
}
