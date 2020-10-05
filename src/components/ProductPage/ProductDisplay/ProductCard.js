import React from "react";
import PropTypes from "prop-types";
import { ProductImage } from "./ProductImg";
import { ProductInfo } from "./ProductInfo";
import { QuantityController } from "./QuantityController";
import "bulma/css/bulma.css";
export class ProductCard extends React.Component {
  static propTypes = {
    addToCart: PropTypes.func,
    deleteProduct: PropTypes.func,
    product: PropTypes.object,
    index: PropTypes.number,
    loggedIn: PropTypes.bool,
  };

  state = {
    quantity: 0,
  };

  handleClick = (target) => {
    this[target.id]();
  };

  addItem = () => {
    const order = {
      name: this.props.product.name,
      price: this.props.product.price,
      quantity: this.state.quantity,
    };

    if (this.state.quantity) {
      this.props.addToCart(order);
      this.setState({ quantity: 0 });
    }
  };

  deleteItem = () => {
    this.props.deleteProduct(this.props.product);
  };

  quantityChanger = (newVal) => {
    this.setState({ quantity: Number.parseInt(newVal) });
  };

  deleteButton = () => {
    if (this.props.loggedIn)
      return (
        <button
          className="button is-rounded is-danger"
          name="deleteItem"
          id="deleteItem"
          onClick={(e) => this.handleClick(e.target)}
        >
          Delete Item
        </button>
      );
  };
  createProductCard = (product) => {
    return (
      <div id="ProductCard" className="column is-one-fifth box">
        {ProductImage(product.image, product.name)}
        <div id="productInfo" className="section content">
          {ProductInfo(product)}
        </div>
        <QuantityController
          quantity={this.state.quantity}
          quantityChange={this.quantityChanger}
        />
        <button
          className="button is-rounded is-success is-active"
          name="addItem"
          id="addItem"
          onClick={(e) => this.handleClick(e.target)}
        >
          Add To Cart
        </button>
        {this.deleteButton()}
      </div>
    );
  };

  render() {
    return this.createProductCard(this.props.product);
  }
}

//need add to cart context
