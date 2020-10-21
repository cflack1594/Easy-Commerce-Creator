import { Header } from "./Header.js";
import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
  render() {
    return (
      <div className="container box has-background-dark">
        <div id="header" className="section">
          {Header()}
        </div>
        <h1>
          This is the home page to register and display sites created with this
          app
        </h1>
      </div>
    );
  }
}
