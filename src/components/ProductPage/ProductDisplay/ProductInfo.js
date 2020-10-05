import React from "react";
import "bulma/css/bulma.css";
import { formatter } from "utils";

export const ProductInfo = (product) => {
  const validKeys = ["name", "price"];

  return Object.keys(product)
    .filter((active) => validKeys.includes(active))
    .map((dataKey, index) => {
      if (dataKey === "price")
        return (
          <p
            className="content title is-5  has-text-primary-dark"
            key={index}
            id={dataKey}
          >
            {formatter.format(product[dataKey])}
          </p>
        );
      return (
        <p
          className="content title is-4 has-text-info-dark"
          key={index}
          id={dataKey}
        >
          {product[dataKey]}
        </p>
      );
    });
};
