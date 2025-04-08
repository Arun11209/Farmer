import React from "react";

const Button = ({ children, onClick, variant = "default", className = "" }) => {
  const baseStyles = "px-4 py-2 rounded-xl font-semibold transition";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer",
    destructive: "bg-red-600 text-white hover:bg-red-700 cursor-pointer",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;