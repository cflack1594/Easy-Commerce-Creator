import React from "react";
import PropTypes from "prop-types";

export class FormInput extends React.Component {
  static propTypes = {
    inputKeys: PropTypes.object,
  };

  render() {
    return (
      <div>
        <label>{this.props.inputKeys.name}</label>
        <input
          type={this.props.inputKeys.type}
          name={this.props.inputKeys.name}
        ></input>
      </div>
    );
  }
}
