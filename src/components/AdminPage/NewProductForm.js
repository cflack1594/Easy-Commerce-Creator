import React from "react";
import PropTypes from "prop-types";
import { FormInput } from "./FormInput";
export class NewProductForm extends React.Component {
  static propTypes = {
    createProduct: PropTypes.func,
  };

  handleClick = (target) => {
    const inputs = document
      .getElementById("NewProductForm")
      .querySelectorAll("input");

    const newProduct = Array.from(inputs).reduce(
      (acc, input) =>
        (acc = { ...acc, ...{ [input.name.toLowerCase()]: input.value } }),
      {}
    );

    this.props.createProduct(newProduct);
  };

  inputKeys = [
    { name: "Name", type: "string" },
    { name: "Price", type: "number" },
    { name: "Stock", type: "number" },
    { name: "Description", type: "string" },
    { name: "Image", type: "file" },
  ];

  formInputs = this.inputKeys.map((input, index) => (
    <FormInput key={index} type={input.type} name={input.name} />
  ));

  render() {
    return (
      <form id="NewProductForm" className="box">
        <label className="label">Create New Product</label>
        {this.formInputs}
        <button
          className="button is-rounded"
          type="submit"
          name="submit"
          onClick={(e) => {
            e.preventDefault();
            this.handleClick();
          }}
        >
          Submit Product
        </button>
      </form>
    );
  }
}
