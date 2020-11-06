import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "bulma/css/bulma.css";
import logo from "images/easyCommerceLogo.png";

export class ShopNav extends React.Component {
  static propTypes = {
    loggedIn: PropTypes.bool,
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

  createNavBar = () => (
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
