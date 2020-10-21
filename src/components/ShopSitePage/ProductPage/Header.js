import React from "react";
import "bulma/css/bulma.css";

export const Header = (heading = "Welcome!") => {
  return (
    <h1 className="container title is-1  has-text-primary-light">{heading}</h1>
  );
};