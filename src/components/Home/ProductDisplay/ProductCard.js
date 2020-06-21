import React from "react";
import PropTypes from "prop-types";
import { ProductImage } from "./ProductImg";
import { ProductInfo } from "./ProductInfo";
import { QuantityController } from "./QuantityController";
import styles from "./ProductCard.css";
import { processFormData } from "utils";
export class ProductCard extends React.Component {
  static propTypes = {
    addToCart: PropTypes.func,
    product: PropTypes.object,
    index: PropTypes.number,
  };

  state = {
    quantity: 0,
  };

  handleClick = () => {
    const order = {
      name: this.props.product.name,
      price: this.props.product.price,
      quantity: this.state.quantity,
    };

    if (this.state.quantity) this.props.addToCart(order);
  };

  quantityChanger = (newVal) => {
    this.setState({ quantity: Number.parseInt(newVal) });
  };

  createProductCard = (product) => {
    return (
      <div id="ProductCard">
        <div id={this.props.index} className={styles}>
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
      </div>
    );
  };

  render() {
    return this.createProductCard(this.props.product);
  }
}

//need add to cart context
