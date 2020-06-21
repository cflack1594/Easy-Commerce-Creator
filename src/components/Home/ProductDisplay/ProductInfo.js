import React from "react";

export const ProductInfo = (product) => {
  const validKeys = ["name", "description", "stock", "price"];

  return Object.keys(product)
    .filter((active) => validKeys.includes(active))
    .map((dataKey, index) => (
      <p key={index}>
        {dataKey} : {product[dataKey]}
      </p>
    ));
};
