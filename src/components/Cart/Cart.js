import React from "react";
import PropTypes from "prop-types";
export class Cart extends React.Component {
  static propTypes = {
    addOrder: PropTypes.func,
    cart: PropTypes.array,
  };

  handleClick = () => {
    this.props.addOrder(this.props.cart);
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
    return this.state.cart.length ? (
      this.props.cart.map((cartItem, index) => (
        <div key={index}>
          {this.createCartItem(cartItem)}
          <button type="button" name="checkout" onClick={this.handleClick}>
            Checkout
          </button>
        </div>
      ))
    ) : (
      <p>Nothing In Cart</p>
    );
  }
}
