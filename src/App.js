import React from "react";
import "./App.css";
import * as components from "components";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        {components.Header()}
        <components.Nav />
        <components.Cart />
        <components.ProductDisplay />
        <components.AdminPage />
        <components.Nav />
      </div>
    );
  }
}
