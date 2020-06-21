import React from "react";
import PropTypes from "prop-types";
export class Cart extends React.Component {
  static propTypes = {
    addOrder: PropTypes.func,
    cart: PropTypes.array,
    sales: PropTypes.array,
  };

  orderID = this.props.sales.length;

  handleClick = () => {
    this.props.addOrder(this.props.cart);
  };

  createCartItem = (cartItem, index) => {
    return (
      <div key={index}>
        {Object.keys(cartItem).map((target, index) => (
          <p key={index}>
            {target} : {cartItem[target]}
          </p>
        ))}
      </div>
    );
  };

  render() {
    return this.props.cart.length ? (
      <div>
        {this.props.cart.map((cartItem, index) =>
          this.createCartItem(cartItem, index)
        )}
        <button type="button" name="checkout" onClick={this.handleClick}>
          Checkout
        </button>
      </div>
    ) : (
      <p>Nothing In Cart</p>
    );
  }
}
