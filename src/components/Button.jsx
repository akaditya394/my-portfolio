import React from "react";

const Button = ({ children, type, styles }) => {
  return (
    <button type={type} className={`${styles}`}>
      {children}
    </button>
  );
};

export default Button;
