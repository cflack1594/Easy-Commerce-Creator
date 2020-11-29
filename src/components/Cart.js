import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "bulma/css/bulma.css";
import { formatter } from "utils";
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
              <td className="has-text-primary-dark" key={index}>
                ${(cartItem.quantity * cartItem.price).toFixed(2)}
              </td>
            );
          else if (target === "Price")
            return <td>{formatter.format(cartItem.price)}</td>;
          else if (target === "Name")
            return (
              <Fragment>
                <td key={index}>
                  <img
                    src={`https://source.unsplash.com/100x100/?${
                      cartItem[target.toLowerCase()]
                    }`}
                    alt=""
                  ></img>
                </td>
                <td key={index}>
                  <p className="content has-text-info">
                    {cartItem[target.toLowerCase()]}
                  </p>
                </td>
              </Fragment>
            );
          return <td key={index}>{cartItem[target.toLowerCase()]}</td>;
        })}
      </Fragment>
    );
  };

  render() {
    return this.props.cart.length ? (
      <div className=" columns is-centered is-vcentered">
        <div id="cart" className="column section">
          <table
            id="cart"
            className="box table is-striped is-full-width has-background-info-light"
          >
            <thead>
              <tr>
                {this.headers.map((header, index) => {
                  if (header === "Name")
                    return (
                      <th id="cartProductName" key={index} colSpan="2">
                        {header}
                      </th>
                    );
                  return <th key={index}>{header}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map((cartItem, index) => (
                <tr key={index}>{this.createCartItem(cartItem)}</tr>
              ))}
              <tr id="checkout">
                <td>
                  <strong>Grand Total:</strong>
                </td>
                <td>
                  <strong className="has-text-primary-dark">
                    {formatter.format(
                      this.props.cart.reduce(
                        (acc, item) => (acc += item.price * item.quantity),
                        0
                      )
                    )}
                  </strong>
                </td>
                <td>
                  <button
                    className="button is-rounded has-background-success-light has-text-black-bis"
                    type="button"
                    name="checkout"
                    onClick={this.handleClick}
                  >
                    Checkout
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ) : (
      <div className=" columns is-centered is-vcentered">
        <div id="cart" className="column section">
          <table id="emptyCart" className="box table has-background-info-light">
            <tbody>
              <tr>
                <td id="emptyCart">
                  <strong>Nothing in Cart</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
