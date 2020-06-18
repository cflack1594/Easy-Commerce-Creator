import React from "react";
import PropTypes from "prop-types";
import { FulfillOrderForm } from "./FulfillOrderForm";
import { NewProductForm } from "./NewProductForm";
import styles from "./Form.css";
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
      <div className={styles}>
        <NewProductForm addProduct={this.props.addProduct} />
        <FulfillOrderForm />
      </div>
    );
  }
}
