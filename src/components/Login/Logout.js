import React from "react";
import PropTypes from "prop-types";
import "bulma/css/bulma.css";
export class Logout extends React.Component {
  static propTypes = {
    loggedIn: PropTypes.bool,
    login: PropTypes.func,
  };

  handleClick = () => {
    this.props.login(!this.props.loggedIn);
  };

  render() {
    return (
      <button
        className="button is-rounded is-active"
        type="button"
        name="logout"
        onClick={this.handleClick}
      >
        Logout
      </button>
    );
  }
}
