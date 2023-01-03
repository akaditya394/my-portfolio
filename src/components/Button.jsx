import React from "react";

const Button = ({ children, type, styles, onClick }) => {
  return (
    <button onClick={onClick} type={type} className={`${styles}`}>
      {children}
    </button>
  );
};

export default Button;
