import PropTypes from "prop-types";
import React from "react";

import { ProductCard } from "./ProductCard";

export class ProductDisplay extends React.Component {
  state = {
    products: [{ number: 0 }, { number: 1 }],
  };

  createProductCards = (products) =>
    products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ));

  render() {
    return this.createProductCards(this.state.products);
  }
}
