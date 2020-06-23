import React from "react";
import styles from "./Nav.module.css";
import PropTypes from "prop-types";

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
        <a href="/{link}" id={link} onClick={(e) => this.handleClick(e)}>
          {link}
        </a>
      </li>
    ));

  render() {
    return (
      <ul id="nav" className={styles.nav}>
        {this.createNavBar()}
      </ul>
    );
  }
}
