import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FulfillOrderForm } from "./FulfillOrderForm";
import { NewProductForm } from "./NewProductForm";
export class AdminPage extends React.Component {
  //Add product form
  //other DB manipulation tools
  //order fulfillment
  //sales tracking
  static propTypes = {
    addProduct: PropTypes.func,
  };

  render() {
    return (
      <Fragment>
        <NewProductForm addProduct={this.props.addProduct} />
        <FulfillOrderForm />
      </Fragment>
    );
  }
}
