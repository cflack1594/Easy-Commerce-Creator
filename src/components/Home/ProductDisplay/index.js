import PropTypes from "prop-types";
import React from "react";
import { ProductCard } from "./ProductCard";
import "bulma/css/bulma.css";

export class ProductDisplay extends React.Component {
  static propTypes = {
    addToCart: PropTypes.func,
    deleteProduct: PropTypes.func,
    products: PropTypes.array,
    loggedIn: PropTypes.bool,
  };

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
      <div id="ProductList" className="columns is-multiline is-4">
        {this.createProductCards(this.props.products)}
      </div>
    );
  }
}
