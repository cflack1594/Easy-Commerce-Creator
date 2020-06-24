import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "bulma/css/bulma.css";
export class SignIn extends React.Component {
  static propTypes = {
    loggedIn: PropTypes.bool,
    login: PropTypes.func,
    auth: PropTypes.array,
  };

  handleClick = () => {
    const loginStatus = this.checkLogin();
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
    return (
      <Fragment>
        <label className="label">Login</label>
        <input
          className="input field is-primary is-small is-rounded"
          type="string"
          id="username"
          name="username"
          placeholder="username"
        ></input>
        <input
          className="input field is-primary is-small is-rounded"
          type="string"
          id="password"
          name="password"
          placeholder="password"
        ></input>
        <button
          className="button is-rounded is-active"
          type="button"
          name="login"
          onClick={this.handleClick}
        >
          Login
        </button>
      </Fragment>
    );
  };

  render() {
    return (
      <form className="container has-background-info-light">
        {this.createLogin()}
      </form>
    );
  }
}
