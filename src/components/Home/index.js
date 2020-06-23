import { Header } from "./Header";
import { ProductDisplay } from "./ProductDisplay";
import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
  static propTypes = {
    addToCart: PropTypes.func,
    deleteProduct: PropTypes.func,
    products: PropTypes.array,
    loggedIn: PropTypes.bool,
  };

  render() {
    return (
      <div className="home">
        {Header()}
        <ProductDisplay
          products={this.props.products}
          deleteProduct={this.props.deleteProduct}
          addToCart={this.props.addToCart}
          loggedIn={this.props.loggedIn}
        />
      </div>
    );
  }
}
