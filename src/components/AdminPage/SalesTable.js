import React from "react";
import PropTypes from "prop-types";

export class SalesTable extends React.Component {
  static propTypes = {
    sales: PropTypes.array,
  };

  getMoney = () =>
    this.props.sales.reduce((acc, order) => (acc += order.price), 0);

  render() {
    return (
      <table>
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
