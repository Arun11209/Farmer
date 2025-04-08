import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white p-4 shadow-md rounded-xl ${className}`}>
      {children}
    </div>
  );
};

export default Card;