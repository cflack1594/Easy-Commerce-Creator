import React from "react";
import "bulma/css/bulma.css";

export const Header = () => {
  return (
    <div className="container box has-background-dark">
      <div id="header" className="section">
        <h1 className="container title is-1  has-text-primary-light">
          {" "}
          This is the home page to register and display sites created with this
          app
        </h1>
      </div>
    </div>
  );
};
