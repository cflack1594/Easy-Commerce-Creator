import React from "react";
import "./App.css";
import * as components from "components";

//add state proxy for components to work with
export class App extends React.Component {
  state = {
    products: [],
  };

  addProduct = (newProduct) => {
    const products = this.state.products.concat(newProduct);
    this.setState({ products: products });
  };

  render() {
    console.log(this.state.products);
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
