import React from "react";
import PropTypes from "prop-types";
import { FulfillOrderTable } from "./FulfillOrderTable";
import { NewProductForm } from "./NewProductForm";
import { SalesTable } from "./SalesTable";
import styles from "./AdminPage.css";
export class AdminPage extends React.Component {
  //Add product form
  //other DB manipulation tools
  //order fulfillment
  //sales tracking
  static propTypes = {
    addProduct: PropTypes.func,
    addOrder: PropTypes.func,
    updateOrders: PropTypes.func,
    sales: PropTypes.array,
    orders: PropTypes.array,
  };

  render() {
    return (
      <div id="AdminPage" className={styles}>
        <NewProductForm addProduct={this.props.addProduct} />
        <FulfillOrderTable
          orders={this.props.orders}
          updateOrders={this.props.updateOrders}
        />
        <SalesTable sales={this.props.sales} />
      </div>
    );
  }
}
