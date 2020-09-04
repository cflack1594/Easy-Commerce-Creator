import React from "react";
import PropTypes from "prop-types";
import "bulma/css/bulma.css";
export class QuantityController extends React.Component {
  static propTypes = {
    quantityChange: PropTypes.func,
    quantity: PropTypes.number,
  };

  handleChange = (value) => {
    this.props.quantityChange(Number.parseInt(value));
  };

  render() {
    return (
      <div id="quantity" className="section">
        <label htmlFor="quantity" className="label">
          Quantity:
        </label>
        <input
          className="input field is-primary is-small is-rounded"
          type="number"
          name="quantity"
          value={this.props.quantity}
          min="0"
          step="1"
          id="quantity"
          onChange={(e) => this.handleChange(e.target.value)}
        ></input>
      </div>
    );
  }
}
