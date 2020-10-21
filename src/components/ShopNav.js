import React from "react";
import "bulma/css/bulma.css";
import { Link } from "react-router-dom";
import logo from "images/easyCommerceLogo.png";

export class ShopNav extends React.Component {
  createNavBar = () => (
    <nav id="nav" className="level-item">
      <Link to="/shop" className="link is-info has-text-link-light">
        <li>Shop</li>
      </Link>
      <Link to="/login" className="link is-info has-text-link-light">
        <li>Login</li>
      </Link>
      <Link to="/cart" className="link is-info has-text-link-light">
        <li>Cart</li>
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
