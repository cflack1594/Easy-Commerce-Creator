import React, { Fragment } from "react";
import PropTypes from "prop-types";

export class QuantityController extends React.Component {
  static propTypes = {
    quantChange: PropTypes.func,
    quantity: PropTypes.number,
  };

  handleChange = (value) => {
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
          min="0"
          step="1"
          id="quantity"
          onChange={(e) => this.handleChange(e.target.value)}
        ></input>
      </Fragment>
    );
  }
}
