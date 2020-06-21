import { Header } from "./Header";
import { ProductDisplay } from "./ProductDisplay";
import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
  static propTypes = {
    addToCart: PropTypes.func,
    products: PropTypes.array,
  };

  render() {
    return (
      <div className="home">
        {Header()}
        <ProductDisplay
          products={this.props.products}
          addToCart={this.props.addToCart}
        />
      </div>
    );
  }
}
