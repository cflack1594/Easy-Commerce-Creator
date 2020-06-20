import React from "react";
import "./App.css";
import * as components from "components";
import * as api from "api";

//add state proxy for components to work with
export class App extends React.Component {
  state = {
    auth: [],
    products: [],
    orders: [],
    sales: [],
    loggedIn: false,
  };

  async componentDidMount() {
    this.setState({
      products: await this.getData(
        "http://localhost:3001/api/products/products"
      ),
      sales: await this.getData("http://localhost:3001/api/sales/sales"),
      auth: await this.getData("http://localhost:3001/api/auth/auth"),
    });
  }

  getData = async (url) => {
    try {
      const resp = await api.getData(url);
      return resp;
    } catch (e) {
      throw Error(e);
    }
  };

  // getSales = async () => {
  //   try {
  //     const resp = await api.getSales();
  //     return resp;
  //   } catch (e) {
  //     throw new Error(e);
  //   }
  // };

  // getProducts = async () => {
  //   try {
  //     const resp = await api.getProducts();
  //     return resp;
  //   } catch (e) {
  //     throw new Error(e);
  //   }
  // };

  addProduct = (newProduct) => {
    this.setState({ products: [...this.state.products, newProduct] });
  };

  addOrder = (newOrder) => {
    this.setState({ orders: [...this.state.orders, ...newOrder] });
  };

  //uses the orderID key to find and remove the fulfilled order within the state array

  updateOrders = (orderID, orders) => {
    const updatedOrders = orders.filter((order) => order.orderID !== orderID);
    this.setState({ orders: updatedOrders });
  };

  updateSales = (order) => {
    this.setState({ sales: [...this.state.sales, order] });
  };

  login = (status) => {
    this.setState({ loggedIn: status });
  };

  checkLoginStatus = () =>
    this.state.loggedIn ? (
      <components.AdminPage
        addProduct={this.addProduct}
        addOrder={this.addOrder}
        updateOrders={this.updateOrders}
        updateSales={this.updateSales}
        sales={this.state.sales}
        orders={this.state.orders}
      />
    ) : null;

  render() {
    return (
      <div className="App">
        {components.Header()}
        <components.Login
          auth={this.state.auth}
          login={this.login}
          loggedIn={this.state.loggedIn}
        />
        <components.Nav />
        <components.Cart addOrder={this.addOrder} />
        <components.ProductDisplay products={this.state.products} />
        {this.checkLoginStatus()}
        <components.Nav />
      </div>
    );
  }
}
