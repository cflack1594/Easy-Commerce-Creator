import React from "react";
import styles from "./Nav.css";
export class Nav extends React.Component {
  links = ["Home", "About", "Login", "Cart"];

  createNavBar = () =>
    this.links.map((link, index) => (
      <li key={index}>
        <a href={link}>{link}</a>
      </li>
    ));

  render() {
    return (
      <ul id="#nav" className={styles}>
        {this.createNavBar()}
      </ul>
    );
  }
}
