import React from "react";

const Card = ({ images }) => {
  return <>{images.map((image) => console.log(image))}</>;
};

export default Card;
