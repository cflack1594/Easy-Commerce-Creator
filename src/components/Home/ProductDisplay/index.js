import PropTypes from "prop-types";
import React from "react";
import { ProductCard } from "./ProductCard";
import styles from "./ProductList.css";

export class ProductDisplay extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  };

  createProductCards = (products) =>
    products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ));

  render() {
    return (
      <div id="ProductList" className={styles}>
        {this.createProductCards(this.props.products)}
      </div>
    );
  }
}