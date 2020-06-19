import React from "react";
import PropTypes from "prop-types";
import styles from "./FulfillTable.css";
export class FulfillOrderTable extends React.Component {
  state = {
    orders: [],

    sales: [],
  };

  handleClick = (order, orders) => {
    this.updateOrders(order.orderID, orders);
    this.updatedSales(order);
  };

  //uses the orderID key to find the order within the state array
  updateOrders = (orderID, orders) => {
    const updatedOrders = orders.filter((order) => order.orderID !== orderID);
    this.setState({ orders: updatedOrders });
  };

  updatedSales = (order) => {
    const updatedSales = this.state.sales.concat(order);
    this.setState({ sales: updatedSales });
  };

  createOrderForms = (orders) => {
    return orders.length ? (
      <table className={styles}>
        <thead>
          <tr>
            <th>Orders To Complete</th>
          </tr>
        </thead>
        <tbody>{this.makeOrderMarkup(orders)}</tbody>
      </table>
    ) : (
      <table>
        <thead>
          <tr>
            <th>No Orders to complete</th>
          </tr>
        </thead>
      </table>
    );
  };

  makeOrderMarkup = (orders) => {
    return orders.map((order, index) => (
      <tr key={index}>
        <td>{order.orderID}</td>
        <td>{order.value}</td>
        <td>
          <button
            id="fulfillOrder"
            name="fulfillOrder"
            onClick={(e) => {
              e.preventDefault();
              this.handleClick(order, orders);
            }}
          >
            Fulfill Order
          </button>
        </td>
      </tr>
    ));
  };

  render() {
    return this.createOrderForms(this.state.orders);
  }
}
