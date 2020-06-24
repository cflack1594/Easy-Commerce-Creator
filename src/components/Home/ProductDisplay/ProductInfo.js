import React from "react";
import "bulma/css/bulma.css";

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
            ${Number.parseFloat(product[dataKey]).toFixed(2)}
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
