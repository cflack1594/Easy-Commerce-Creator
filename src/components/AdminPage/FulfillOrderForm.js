import React from "react";
import { FormInput } from "./FormInput";
import { SubmitButton } from "./SubmitButton";

export class FulfillOrderForm extends React.Component {
  inputKeys = { orderId: 1, name: "new order", type: "object" };

  render() {
    return (
      <form>
        <FormInput inputKeys={this.inputKeys} />
        <SubmitButton />
      </form>
    );
  }
}
