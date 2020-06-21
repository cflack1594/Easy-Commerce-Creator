import React from "react";
import PropTypes from "prop-types";
import { ProductImage } from "./ProductImg";
import { ProductInfo } from "./ProductInfo";
import { QuantityController } from "./QuantityController";
import styles from "./ProductCard.css";
export class ProductCard extends React.Component {
  static propTypes = {
    addToCart: PropTypes.func,
    product: PropTypes.object,
  };

  state = {
    quantity: 0,
  };

  order = {
    orderId: 0,
    value: "boop",
  };

  handleClick = () => {
    this.props.addToCart();
  };

  quantityChanger = (newVal) => {
    this.setState({ quantity: Number.parseInt(newVal) });
  };

  createProductCard = (product) => {
    return (
      <div id="ProductCard" className={styles}>
        {/* {ProductImage(product.image)} */}
        {ProductInfo(product)}
        <QuantityController
          quantity={this.state.quantity}
          quantChange={this.quantityChanger}
        />
        <button name="addToCart" id="addToCart" onClick={this.handleClick}>
          Add To Cart
        </button>
      </div>
    );
  };

  render() {
    return this.createProductCard(this.props.product);
  }
}

//need add to cart context
