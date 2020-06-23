import React, { Fragment } from "react";
import PropTypes from "prop-types";

export class SignUp extends React.Component {
  static propTypes = {
    createUser: PropTypes.func,
  };

  handleClick = () => {
    document.getElementById("#signUp").querySelectorAll("input").reduce();
    this.props.createUser();
  };

  render() {
    return (
      <Fragment>
        <p>Sign Up</p>
        <input
          type="string"
          id="newUser"
          name="newUer"
          placeholder="username"
        ></input>
        <input
          type="string"
          id="newPassword"
          name="newPassword"
          placeholder="password"
        ></input>
        <input
          type="string"
          id="checkPassword"
          name="checkPassword"
          placeholder="password"
        ></input>
        <button type="button" name="signUp" onClick={this.handleClick}>
          Sign Up
        </button>
      </Fragment>
    );
  }
}
