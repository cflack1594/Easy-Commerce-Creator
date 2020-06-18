import React, { Fragment } from "react";

export class Cart extends React.Component {
  state = {
    cartItems: [{ item: "ROBOTMAN" }],
    showCart: false,
  };

  createCartItem = (cartItem) => {
    return (
      <Fragment>
        <p>{cartItem.item}</p>
        <p>Item</p>
        <p>Quantity</p>
      </Fragment>
    );
  };

  render() {
    return this.state.showCart
      ? this.state.cartItems.map((cartItem, index) => (
          <div key={index}>{this.createCartItem(cartItem)}</div>
        ))
      : null;
  }
}
