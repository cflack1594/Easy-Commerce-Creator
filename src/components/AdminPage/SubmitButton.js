import React from "react";
import PropTypes from "prop-types";
export class SubmitButton extends React.Component {
  static propTypes = {
    addProduct: PropTypes.func,
  };

  handleClick = (newProduct) => {
    console.log(newProduct);
    //this.props.addProduct(newProduct);
  };

  render() {
    return (
      <button
        type="submit"
        name="submit"
        onClick={(e) => this.handleClick(e.target)}
      >
        Submit
      </button>
    );
  }
}
