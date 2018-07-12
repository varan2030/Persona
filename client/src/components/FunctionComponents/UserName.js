import React from "react";
import "./FunctionComponents.css"

export const UserName = props => (
  <div className='username'>
    <h4>User: {props.userName}</h4>
  </div>
);

