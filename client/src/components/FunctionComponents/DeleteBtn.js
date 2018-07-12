import React from "react";
import "./FunctionComponents.css";

// The ...props means, spread all of the passed props onto this element. That way we don't have to define them all individually
export const DeleteBtn = props => (
  <span className="delete-btn" {...props}>
    ✗
  </span>
);

