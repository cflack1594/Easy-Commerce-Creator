import React, { Fragment } from "react";
import { FulfillOrderForm } from "./FulfillOrderForm";
import { NewProductForm } from "./NewProductForm";
export class AdminPage extends React.Component {
  //Add product form
  //other DB manipulation tools
  //order fulfillment
  //sales tracking

  render() {
    return (
      <Fragment>
        <NewProductForm />
        <p>BEEP BOOP I AM A ROBOT</p>
        <FulfillOrderForm />
      </Fragment>
    );
  }
}
