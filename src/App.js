import React from "react";
import "./App.css";
import * as components from "components";
import * as api from "api";

//add state proxy for components to work with
export class App extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    const products = this.state.products.concat(this.getProducts());
    this.setState({ products: products });
  }
  getProducts = async () => {
    try {
      const resp = await api.getProducts();
      console.log(resp);
      return;
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
