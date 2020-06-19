import React from "react";
import PropTypes from "prop-types";
import { FormInput } from "./FormInput";
import styles from "./Form.css";
export class NewProductForm extends React.Component {
  static propTypes = {
    addProduct: PropTypes.func,
  };

  handleClick = (target) => {
    this.createProduct(
      document.getElementById("NewProductForm").querySelectorAll("input")
    );
  };
  createProduct = (inputs) => {
    const newProduct = Array.from(inputs).reduce(
      (acc, input) => (acc = { ...acc, ...{ [input.name]: input.value } }),
      {}
    );

    this.props.addProduct(newProduct);
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
      <form id="NewProductForm" className={styles}>
        <p>Creat New Product</p>
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
      </form>
    );
  }
}
