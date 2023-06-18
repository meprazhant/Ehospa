import React from "react";

const Card = ({ name, image, post }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{post}</p>
    </div>
  );
};

export default Card;
