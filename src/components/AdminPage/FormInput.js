import React from "react";
import PropTypes from "prop-types";

export class FormInput extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
  };

  render() {
    return (
      <div>
        <label>{this.props.name}</label>
        <input
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.name}
        ></input>
      </div>
    );
  }
}
