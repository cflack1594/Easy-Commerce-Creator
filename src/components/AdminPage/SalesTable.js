import React from "react";
import PropTypes from "prop-types";
import "bulma/css/bulma.css";
import { formatter } from "utils";
export class SalesTable extends React.Component {
  static propTypes = {
    sales: PropTypes.array,
  };

  getMoney = () =>
    formatter.format(
      this.props.sales.reduce((acc, order) => (acc += order.price), 0)
    );

  render() {
    return (
      <table className="box table">
        <thead>
          <tr>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.getMoney()}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
