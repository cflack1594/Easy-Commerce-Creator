import React from "react";
import PropTypes from "prop-types";
import "bulma/css/bulma.css";
export class FormInput extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
  };

  render() {
    return (
      <div>
        <input
          className="input field is-primary is-small is-rounded"
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.name}
        ></input>
      </div>
    );
  }
}
