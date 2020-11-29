import PropTypes from "prop-types";
import React from "react";
import { ProductCard } from "./ProductCard";
import "bulma/css/bulma.css";

export class ProductPage extends React.Component {
  static propTypes = {
    addToCart: PropTypes.func,
    deleteProduct: PropTypes.func,
    products: PropTypes.array,
    loggedIn: PropTypes.bool,
    setActiveLink: PropTypes.func,
  };

  componentDidMount() {
    this.props.setActiveLink(window.location.href);
  }

  createProductCards = (products) =>
    products.map((product, index) => (
      <ProductCard
        key={index}
        index={index}
        product={product}
        addToCart={this.props.addToCart}
        loggedIn={this.props.loggedIn}
        deleteProduct={this.props.deleteProduct}
      />
    ));

  render() {
    return (
      <div className="container box has-background-dark">
        <div id="header" className="section">
          <h1 className="container title is-1  has-text-primary-light">
            Welcome!
          </h1>
        </div>

        <div
          id="ProductList"
          className="container columns is-multiline is-centered is-4"
        >
          {this.createProductCards(this.props.products)}
        </div>
      </div>
    );
  }
}
