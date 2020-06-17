import React, { Fragment } from "react";
import PropTypes from "prop-types";

export class QuantityController extends React.Component {
  static propTypes = {
    addToCart: PropTypes.func,
    quantChange: PropTypes.func,
    quantity: PropTypes.number,
  };

  handleClick = () => {
    //this.props.addToCart();
    //needs context add to Cart
  };

  handleChange = (value) => {
    if (value < 0) Number.parseInt((value = 0));
    this.props.quantChange(Number.parseInt(value));
  };

  render() {
    return (
      <Fragment>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          value={this.props.quantity}
          id="quantity"
          onChange={(e) => this.handleChange(e.target.value)}
        ></input>
        <button
          name="addToCart"
          id="addToCart"
          onClick={() => this.handleClick()}
        >
          Add To Cart
        </button>
      </Fragment>
    );
  }
}
