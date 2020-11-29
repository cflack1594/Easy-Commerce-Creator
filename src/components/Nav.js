import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "bulma/css/bulma.css";
import logo from "images/easyCommerceLogo.png";

export class Nav extends React.Component {
  static propTypes = {
    loggedIn: PropTypes.bool,
    activeLink: PropTypes.string,
  };

  checkLogin = () => {
    return this.props.loggedIn ? (
      <Link to="/admin" className="link is-info has-text-link-light">
        <li>Manage</li>
      </Link>
    ) : (
      <Link to="/login" className="link is-info has-text-link-light">
        <li>Login</li>
      </Link>
    );
  };

  createNavMarkup = () => {
    if (
      this.props.activeLink === "http://localhost:3000/" ||
      this.props.activeLink.includes("register")
    )
      return (
        <nav id="nav" className="level-item">
          <Link to="/" className="link is-info has-text-link-light">
            <li>Home</li>
          </Link>
          <Link
            to="/register-new-site"
            className="link is-info has-text-link-light"
          >
            <li>Register</li>
          </Link>
          <Link to="/shop" className="link is-info has-text-link-light">
            <li>Sample Website</li>
          </Link>
        </nav>
      );

    return (
      <nav id="nav" className="level-item">
        <Link to="/" className="link is-info has-text-link-light">
          <li>Home</li>
        </Link>
        <Link to="/shop" className="link is-info has-text-link-light">
          <li>Shop</li>
        </Link>
        <Link to="/cart" className="link is-info has-text-link-light">
          <li>Cart</li>
        </Link>

        {this.checkLogin()}
      </nav>
    );
  };

  render() {
    return (
      <section id="navSection" className="section">
        <div className="container level">
          <img src={logo} alt="logo"></img>
          {this.createNavMarkup()}
        </div>
      </section>
    );
  }
}
