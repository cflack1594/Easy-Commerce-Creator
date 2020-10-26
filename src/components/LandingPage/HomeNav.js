import React from "react";
import "bulma/css/bulma.css";
import { Link } from "react-router-dom";
import logo from "images/easyCommerceLogo.png";

export class HomeNav extends React.Component {
  createNavBar = () => (
    <nav id="nav" className="level-item">
      <Link to="/" className="link is-info has-text-link-light">
        <li>Home</li>
      </Link>
      <Link to="" className="link is-info has-text-link-light">
        <li>Register</li>
      </Link>
      <Link to="" className="link is-info has-text-link-light">
        <li>Sample Site</li>
      </Link>
    </nav>
  );

  render() {
    return (
      <section id="navSection" className="section">
        <div className="container level">
          <img src={logo} alt="logo"></img>
          {this.createNavBar()}
        </div>
      </section>
    );
  }
}
