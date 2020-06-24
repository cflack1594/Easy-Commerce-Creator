import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "bulma/css/bulma.css";
export class Cart extends React.Component {
  static propTypes = {
    addOrder: PropTypes.func,
    cart: PropTypes.array,
    sales: PropTypes.array,
  };

  headers = ["Name", "Price", "Quantity", "Total"];

  handleClick = () => {
    this.props.addOrder(this.props.cart);
  };

  createCartItem = (cartItem) => {
    return (
      <Fragment>
        {this.headers.map((target, index) => {
          if (target === "Total")
            return (
              <td key={index}>
                ${(cartItem.quantity * cartItem.price).toFixed(2)}
              </td>
            );
          return <td key={index}>{cartItem[target.toLowerCase()]}</td>;
        })}
      </Fragment>
    );
  };

  render() {
    return this.props.cart.length ? (
      <table className="column box table is-striped is-bordered has-background-info-light is-one-quarter">
        <thead>
          <tr>
            {this.headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem, index) => (
            <tr key={index}>{this.createCartItem(cartItem)}</tr>
          ))}
          <tr>
            <td>
              {" "}
              Grand Total: $
              {this.props.cart
                .reduce((acc, item) => (acc += item.price * item.quantity), 0)
                .toFixed(2)}
            </td>
            <td>
              <button type="button" name="checkout" onClick={this.handleClick}>
                Checkout
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    ) : (
      <table className="column box table has-background-info-light is-one-quarter">
        <tbody>
          <tr>
            <td>Nothing in Cart</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
