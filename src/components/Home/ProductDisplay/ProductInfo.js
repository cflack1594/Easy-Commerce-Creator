import React from "react";

export const ProductInfo = (product) => {
  const validKeys = ["name", "price"];

  return Object.keys(product)
    .filter((active) => validKeys.includes(active))
    .map((dataKey, index) => {
      if (dataKey === "price")
        return (
          <p key={index} id={dataKey}>
            ${product[dataKey]}
          </p>
        );
      return (
        <p key={index} id={dataKey}>
          {product[dataKey]}
        </p>
      );
    });
};
