import React from "react";
import { FormInput } from "./FormInput";
import { SubmitButton } from "./SubmitButton";

export class NewProductForm extends React.Component {
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
        <SubmitButton />
      </form>
    );
  }
}
