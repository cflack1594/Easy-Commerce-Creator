import React, { Fragment } from "react";
import PropTypes from "prop-types";
export class Cart extends React.Component {
  static propTypes = {
    addOrder: PropTypes.func,
  };

  state = {
    cartItems: [{ orderId: "0", value: "boooop" }],
    showCart: true,
  };

  handleClick = () => {
    this.props.addOrder(this.state.cartItems);
    this.setState({ cartItems: [] });
  };

  createCartItem = (cartItem) => {
    return (
      <div>
        {Object.keys(cartItem).map((target, index) => (
          <p key={index}>
            {target} : {cartItem[target]}
          </p>
        ))}
      </div>
    );
  };

  render() {
    return this.state.showCart
      ? this.state.cartItems.map((cartItem, index) => (
          <div key={index}>
            {this.createCartItem(cartItem)}
            <button type="button" name="checkout" onClick={this.handleClick}>
              Checkout
            </button>
          </div>
        ))
      : null;
  }
}
