import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "bulma/css/bulma.css";
export class FulfillOrderTable extends React.Component {
  static propTypes = {
    updateSale: PropTypes.func,
    sales: PropTypes.array,
    addOrder: PropTypes.func,
  };

  state = {
    orders: this.props.sales.filter((sale) => !sale.completed),
  };

  handleClick = (order) => {
    this.props.updateSale(order);
    this.setState({
      orders: this.state.orders.filter((item) => item._id !== order._id),
    });
  };

  createOrderDisplayTable = (orders) => {
    return orders.length ? (
      <Fragment>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Price</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>{this.makeOrderMarkup(orders)}</tbody>
      </Fragment>
    ) : (
      <thead>
        <tr>
          <th>No Orders to complete</th>
        </tr>
      </thead>
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
            className="button is-rounded is-small has-background-primary-light has-text-black-bis"
            id="fulfillOrder"
            name="fulfillOrder"
            onClick={(e) => {
              e.preventDefault();
              this.handleClick(order);
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
    return (
      <table className="table box is-striped is-bordered">
        <label className="label title is-5">Incoming Orders</label>
        {this.createOrderDisplayTable(this.state.orders)}
      </table>
    );
  }
}
