import React from "react";

//create img folder in backend to store src links
//use multer for sanitization because browser security will give fake paths

export const ProductImage = (image) => (
  <figure>
    <p>Product Image Here</p>
    <img src={image} alt=""></img>
  </figure>
);