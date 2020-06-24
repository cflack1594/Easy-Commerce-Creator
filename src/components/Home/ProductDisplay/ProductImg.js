import React from "react";

//create img folder in backend to store src links
//use multer for sanitization because browser security will give fake paths

export const ProductImage = (image, name) => (
  <figure>
    <img
      src={`https://source.unsplash.com/250x250/?${name},${name}`}
      alt=""
    ></img>
  </figure>
);
