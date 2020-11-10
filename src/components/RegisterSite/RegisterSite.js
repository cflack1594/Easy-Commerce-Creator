import React from "react";
import PropTypes from "prop-types";
import "bulma/css/bulma.css";

export class RegisterSite extends React.Component {
  static propTypes = {};

  handleClick = () => {
    ///create a new database collection with website name
    //uname and password will be auth key
  };

  render() {
    return (
      <div className="section columns is-centered is-vcentered">
        <div className="box has-background-dark">
          <div className="section columns is-vcentered">
            <div
              id="register"
              className="container box has-background-info-light"
            >
              <form className="container has-background-info-light">
                <label className="label">Register For A New Site</label>
                <input
                  className="input field is-primary is-small is-rounded"
                  type="string"
                  id="siteName"
                  name="siteName"
                  placeholder="Website Name"
                ></input>
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
                  name="register"
                  onClick={this.handleClick}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
