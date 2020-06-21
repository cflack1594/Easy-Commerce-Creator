import { Cart } from "../Cart";
import { Header } from "./Header";
import { Nav } from "../Nav";
import { ProductDisplay } from "./ProductDisplay";
import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  };

  render() {
    return (
      <div className="home">
        {Header()}
        <ProductDisplay products={this.props.products} />
      </div>
    );
  }
}