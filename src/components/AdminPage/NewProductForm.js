import React from "react";
import PropTypes from "prop-types";
import { FormInput } from "./FormInput";
import { SubmitButton } from "./SubmitButton";

export class NewProductForm extends React.Component {
  static propTypes = {
    addProduct: PropTypes.func,
  };

  createProduct = (inputs) => {
    return Array.from(inputs).reduce(
      (acc, input) => (acc = { ...acc, ...{ [input.name]: input.value } }),
      {}
    );
  };

  handleClick = () => {
    const newProduct = this.createProduct(document.querySelectorAll("input"));
    this.props.addProduct(newProduct);
  };

  inputKeys = [
    { name: "Name", type: "string" },
    { name: "Price", type: "number" },
    { name: "Stock", type: "number" },
    { name: "Description", type: "string" },
    { name: "Image", type: "image" },
  ];

  formInputs = this.inputKeys.map((input, index) => (
    <FormInput key={index} inputKeys={input} />
  ));

  render() {
    return (
      <form>
        {this.formInputs}
        <button
          type="submit"
          name="submit"
          onClick={(e) => {
            e.preventDefault();
            this.handleClick();
          }}
        >
          Submit
        </button>
        {/* <SubmitButton /> */}
      </form>
    );
  }
}
