import React, { Fragment } from "react";
import PropTypes from "prop-types";

export class Login extends React.Component {
  static propTypes = {
    loggedIn: PropTypes.bool,
    login: PropTypes.func,
    auth: PropTypes.array,
  };

  handleClick = () => {
    const loginStatus = this.props.loggedIn ? false : this.checkLogin();
    this.props.login(loginStatus);
  };

  checkLogin = () => {
    const uName = document.getElementById("username").value;
    const pWord = document.getElementById("password").value;

    return this.props.auth.find(
      (authKey) => authKey.username === uName && authKey.password === pWord
    )
      ? true
      : false;
  };

  createLogin = () => {
    return this.props.loggedIn ? (
      <button type="button" name="logout" onClick={this.handleClick}>
        Logout
      </button>
    ) : (
      <Fragment>
        <input
          type="string"
          id="username"
          name="username"
          placeholder="username"
        ></input>
        <input
          type="string"
          id="password"
          name="password"
          placeholder="password"
        ></input>
        <button type="button" name="login" onClick={this.handleClick}>
          Login
        </button>
      </Fragment>
    );
  };

  render() {
    return <form id="login">{this.createLogin()}</form>;
  }
}
