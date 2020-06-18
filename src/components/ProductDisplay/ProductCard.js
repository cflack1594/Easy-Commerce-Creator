import React from "react";
import PropTypes from "prop-types";
import { ProductImage } from "./ProductImg";
import { ProductInfo } from "./ProductInfo";
import { QuantityController } from "./QuantityController";
import styles from "./ProductCard.css";
export class ProductCard extends React.Component {
  static propTypes = {
    product: PropTypes.object,
  };

  state = {
    quantity: 0,
  };

  quantityChanger = (newVal) => {
    this.setState({ quantity: Number.parseInt(newVal) });
  };

  createProductCard = (product) => {
    return (
      <div className={styles} id="ProductCard">
        <ProductImage />
        {ProductInfo(product)}
        <QuantityController
          quantity={this.state.quantity}
          quantChange={this.quantityChanger}
        />
      </div>
    );
  };

  render() {
    return this.createProductCard(this.state.product);
  }
}

//need add to cart context
