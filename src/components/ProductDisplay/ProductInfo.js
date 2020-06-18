import React from "react";

export const ProductInfo = (product) =>
  Object.keys(product).map((activeKey, index) => (
    <p key={index}>
      {activeKey} : {product.activeKey}
    </p>
  ));
