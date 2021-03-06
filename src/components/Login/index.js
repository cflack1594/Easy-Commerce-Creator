import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Logout } from "./Logout";

import React from "react";
import PropTypes from "prop-types";

export class Login extends React.Component {
  static propTypes = {
    auth: PropTypes.array,
    createUser: PropTypes.func,
    login: PropTypes.func,
    loggedIn: PropTypes.bool,
  };

  checkLogin = () => {
    return this.props.loggedIn ? (
      <Logout login={this.props.login} loggedIn={this.props.loggedIn} />
    ) : (
      <div id="login" className="container box has-background-info-light">
        {/* <SignUp createUser={this.props.createUser} /> */}
        <SignIn
          auth={this.props.auth}
          login={this.props.login}
          loggedIn={this.props.loggedIn}
        />
      </div>
    );
  };

  render() {
    return (
      <div className="section columns is-centered is-vcentered">
        <div>{this.checkLogin()}</div>
      </div>
    );
  }
}
