import React from "react";
export class FulfillOrderForm extends React.Component {
  state = {
    orders: [
      {
        orderID: 1,
        value: "BEEP",
        saleData: {},
      },
      {
        orderID: 2,
        value: "BOOP",
        saleData: {},
      },
    ],

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
      orders.map((order, index) => (
        <form id={order.orderID} key={index}>
          <input
            type="string"
            id="newOrder"
            name="newOrder"
            value={order.value}
            readOnly
          ></input>
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
        </form>
      ))
    ) : (
      <p>No Orders to complete</p>
    );
  };

  render() {
    return this.createOrderForms(this.state.orders);
  }
}
