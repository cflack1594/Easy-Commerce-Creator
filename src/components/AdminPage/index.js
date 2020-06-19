import React from "react";
import PropTypes from "prop-types";
import { FulfillOrderTable } from "./FulfillOrderTable";
import { NewProductForm } from "./NewProductForm";
import styles from "./AdminPage.css";
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
      <div id="AdminPage" className={styles}>
        <NewProductForm addProduct={this.props.addProduct} />
        <FulfillOrderTable />
      </div>
    );
  }
}
