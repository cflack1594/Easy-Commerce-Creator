import React from "react";
import PropTypes from "prop-types";
import { FulfillOrderTable } from "./FulfillOrderTable";
import { NewProductForm } from "./NewProductForm";
import { SalesTable } from "./SalesTable";
export class AdminPage extends React.Component {
  //Add product form
  //other DB manipulation tools
  //order fulfillment
  //sales tracking
  static propTypes = {
    createProduct: PropTypes.func,
    updateSale: PropTypes.func,
    addOrder: PropTypes.func,
    sales: PropTypes.array,
  };

  render() {
    return (
      <div id="AdminPage" className="">
        <NewProductForm createProduct={this.props.createProduct} />
        <FulfillOrderTable
          sales={this.props.sales}
          updateSale={this.props.updateSale}
        />
        <SalesTable sales={this.props.sales} />
      </div>
    );
  }
}
