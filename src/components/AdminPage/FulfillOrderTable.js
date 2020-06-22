import React from "react";
import PropTypes from "prop-types";
import styles from "./FulfillTable.css";
export class FulfillOrderTable extends React.Component {
  static propTypes = {
    orders: PropTypes.array,
    addOrder: PropTypes.func,
    updateOrders: PropTypes.func,
  };

  handleClick = (order, orders, orderId) => {
    this.props.updateOrders(orderId, orders);
  };

  createOrderDisplayTable = (orders) => {
    return orders.length ? (
      <table className={styles}>
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
    return orders.map((order, index) => (
      <tr key={index}>
        <td name="orderID">{index}</td>
        <td name="price">{order.price}</td>
        <td name="value">{this.showItems(order.value)}</td>
        <td>
          <button
            id="fulfillOrder"
            name="fulfillOrder"
            onClick={(e) => {
              e.preventDefault();
              this.handleClick(order, orders, index);
            }}
          >
            Fulfill Order
          </button>
        </td>
      </tr>
    ));
  };

  showItems = (orderItems) => (
    <ul>
      {orderItems.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );

  render() {
    return this.createOrderDisplayTable(this.props.orders);
  }
}
