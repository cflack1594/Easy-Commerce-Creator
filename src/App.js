import React from "react";
import "./App.css";
import * as components from "components";
import * as api from "api";

//add state proxy for components to work with
export class App extends React.Component {
  state = {
    products: [],
    sales: [],
  };

  async componentDidMount() {
    const products = this.state.products.concat(await this.getProducts());
    const sales = this.state.sales.concat(await this.getSales());
    this.setState({ products: products, sales: sales });
  }

  getSales = async () => {
    try {
      const resp = await api.getSales();
      return resp;
    } catch (e) {
      throw new Error(e);
    }
  };

  getProducts = async () => {
    try {
      const resp = await api.getProducts();
      return resp;
    } catch (e) {
      throw new Error(e);
    }
  };

  addProduct = (newProduct) => {
    const products = this.state.products.concat(newProduct);
    this.setState({ products: products });
  };

  render() {
    return (
      <div className="App">
        {components.Header()}
        <components.Nav />
        <components.Cart />
        <components.ProductDisplay products={this.state.products} />
        <components.AdminPage addProduct={this.addProduct} />
        <components.Nav />
      </div>
    );
  }
}
