import React from "react";
import PropTypes from "prop-types";
import styles from "./FulfillTable.module.css";
export class FulfillOrderTable extends React.Component {
  static propTypes = {
    sales: PropTypes.array,
    addOrder: PropTypes.func,
  };

  handleClick = () => {};

  createOrderDisplayTable = (orders) => {
    return orders.length ? (
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Price</th>
            <th>Value</th>
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
    return orders.map((order) => (
      <tr key={order.orderId}>
        <td name="orderID">{order.orderId}</td>
        <td name="price">{order.price.toFixed(2)}</td>
        <td name="value">{this.createItemList(order.value)}</td>
        <td>
          <button
            id="fulfillOrder"
            name="fulfillOrder"
            onClick={(e) => {
              e.preventDefault();
              this.handleClick();
            }}
          >
            Fulfill Order
          </button>
        </td>
      </tr>
    ));
  };

  createItemList = (orderItems) => (
    <ul>
      {orderItems.map((item, index) => (
        <li key={index}>
          {item.quantity} x {item.name}
        </li>
      ))}
    </ul>
  );

  render() {
    return this.createOrderDisplayTable(
      this.props.sales.filter(({ completed }) => !completed)
    );
  }
}
