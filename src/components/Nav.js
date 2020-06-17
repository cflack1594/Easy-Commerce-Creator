import React from "react";

export class Nav extends React.Component {
  links = ["Home", "About", "Login", "Cart"];

  createNavBar = () =>
    this.links.map((link, index) => (
      <li key={index}>
        <a href={link}>{link}</a>
      </li>
    ));

  render() {
    return <ul>{this.createNavBar()}</ul>;
  }
}
