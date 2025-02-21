import React from "react";

// Button component that accepts 'variant' and 'text' as props
const Button = ({ variant, text }) => (
  <button className={`btn btn-${variant} m-2`}>{text}</button>
);

export default Button;
