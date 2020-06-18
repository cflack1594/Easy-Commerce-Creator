import PropTypes from "prop-types";
import React from "react";

import { ProductCard } from "./ProductCard";

export class ProductDisplay extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  };

  createProductCards = (products) =>
    products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ));

  render() {
    return this.createProductCards(this.props.products);
  }
}
